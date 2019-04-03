import { Injectable } from "@angular/core";
import { Kinvey } from "./utils";
import { BehaviorSubject, Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Config } from "./config";
import * as dialogs from "tns-core-modules/ui/dialogs";

@Injectable({
  providedIn: "root"
})
export class DataService {
  constructor() {
    Kinvey.init({
      appKey: Config.appKey,
      appSecret: Config.appSecret
    });
    this.isLoggedIn = new BehaviorSubject<boolean>(
      Kinvey.User.getActiveUser() != null
    );
    this.user = new BehaviorSubject<Kinvey.User>(Kinvey.User.getActiveUser());
    this.username = this.user.pipe(
      map(kinveyUser => {
        if (kinveyUser) {
          if ((<any>kinveyUser.data)._socialIdentity) {
            return (<any>kinveyUser.data)._socialIdentity.kinveyAuth.id;
          } else {
            return kinveyUser.username;
          }
        } else {
          return "";
        }
      })
    );
  }

  deleteItem(): any {
    return this.tasksStore.remove();
  }
  getFilesCount(): any {
    return Kinvey.Files.count();
  }
  getPendingCount(): any {
    return this.accountsStore.pendingSyncCount();
  }
  getCount() {
    return this.accountsStore.count();
  }

  private myDataStore = Kinvey.DataStore.collection(
    Config.productsCollectionName
  );
  private tasksStore = Kinvey.DataStore.collection(Config.taskCollectionName, 
    Kinvey.DataStoreType.Network);

  private offlineAccountsStore = Kinvey.DataStore.collection(
    Config.offlineAccountsCollectionName,
    Kinvey.DataStoreType.Sync
  );
  private accountsStore = Kinvey.DataStore.collection(
    Config.accountsCollectionName
  );

  private expensesStore = Kinvey.DataStore.collection(
    "expenses",
    Kinvey.DataStoreType.Sync
  );

  public selectedFile: any;
  public isLoggedIn: BehaviorSubject<boolean>;
  private user: BehaviorSubject<Kinvey.User>;
  public username: Observable<string>;

  getTasks() {
    this.tasksStore.subscribe({
      onMessage: (m) => {
        console.log("LiveService Message: " + JSON.stringify(m));
        dialogs.alert(
          {
            title: "New Task Added!",
            message: m.action,
            okButtonText: "Im on It!"
          }
        ).then(()=> {
          console.log("Dialog closed!");
      });
      },
      onStatus: (s) => {
        console.log("Status: " + s);
      },
      onError: (e)  => {
        console.log("Error: " + e);
      }
    })
    .then(() => {
      console.log("Subscribed to tasks");
    })
    .catch(e => {
      console.log("Error: " + e);
    })
    return this.tasksStore.find();
  }

  getTaskDetail(id: string) {
    return this.tasksStore.findById(id);
  }
  async pullAccountData() {
    let num = await this.offlineAccountsStore.pendingSyncCount();
    console.log(num);
    if (<any>num === 0) {
      //THIS IS A BUG IN THE d.ts
      console.log("pulling");
      return this.offlineAccountsStore.pull();
    } else Promise.resolve();
  }
  getSyncAccounts() {
    return this.offlineAccountsStore.find();
  }
  getAccounts(id?: string): any {
    if (id) {
      return this.accountsStore.findById(id);
    } else {
      return this.accountsStore.find();
    }
  }

  getBloodCenters(query: string) {
    return Kinvey.CustomEndpoint.execute("findBloodCenters",
      {
        searchPhrase: query
      });
  }
  getSkiAccounts(): any {
    const query = new Kinvey.Query();
    query.equalTo("AccountNumber", "4561987");
    return this.accountsStore.find(query);
  }

  addSyncAccounts(accounts): any {
    return Promise.all(
      accounts.map(item => this.offlineAccountsStore.save(item))
    );
  }

  addSyncExpenses(expenses): any {
    return Promise.all(
      expenses.map(item => this.expensesStore.save(item))
    );
  }
  pushSyncAccountData(): any {
    return this.offlineAccountsStore.sync();
  }
  pushSyncExpenseData(): any {
    return this.expensesStore.sync();
  }
  toggleTaskStatus(task): any {
    task.completed = !task.completed;
    return this.tasksStore.save(task);
  }
  saveTask(task): any {
    task.completed = false;
    return this.tasksStore.save(task);
  }

  completeTask(task): any {
    console.log("Inside completeTask Service");
    return this.tasksStore.save(task);
  }

  getFiles(): Promise<any[]> {
    console.log("Inside getFiles");
    var q = new Kinvey.Query();
    q.equalTo("product", "Blizzard Brahma");
    return Kinvey.Files.find();
  }

  getItems() {
    return this.myDataStore.find();
  }

  getSyncExpenses() {
    return this.expensesStore.find();
  }

  pullExpenses() {
    return this.expensesStore.pull();
  }

  login(name, password): Promise<Kinvey.User> {
    console.log("login in");
    if (Kinvey.User.getActiveUser()) {
      console.log("already logzgesd in");
      return Promise.resolve(Kinvey.User.getActiveUser());
    } else {
      console.log("nsot yet");
      return Kinvey.User.login(name, password).then(user => {
        console.log("we bsack");
        this.isLoggedIn.next(true);
        //console.log(user);
        this.user.next(user);
        return Promise.resolve(user);
      });
    }
  }

  loginWithMIC(redirectUri: string): Promise<Kinvey.User> {
    if (Kinvey.User.getActiveUser()) {
      return Promise.resolve(Kinvey.User.getActiveUser());
    } else {
      return Kinvey.User.loginWithMIC(redirectUri).then(user => {
        console.log("we bassck");
        this.isLoggedIn.next(true);
        //console.log(user);
        this.user.next(user);
        return Promise.resolve(user);
      });
    }
  }
  logout(): Promise<void> {
    return Kinvey.User.logout().then(() => {
      this.isLoggedIn.next(false);
      this.user.next(null);
    });
  }
}
