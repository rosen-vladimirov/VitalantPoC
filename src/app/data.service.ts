import { Injectable } from "@angular/core";
import { Observable, BehaviorSubject } from "rxjs";
import { User, Kinvey } from "kinvey-nativescript-sdk";

@Injectable()
export class DataService {
  isLoggedIn: any;
  user: any;
  constructor() {
    Kinvey.init({
      appKey: "kid_SJ1onE9IQ",
      appSecret: "c91c2b6a68ff4540bf485f2e54beff0e"
    });
    this.isLoggedIn = new BehaviorSubject<boolean>(
      Kinvey.User.getActiveUser() != null
    );
    this.user = new BehaviorSubject<User>(Kinvey.User.getActiveUser());
  }

  login(name, password): Promise<User> {
    console.log("loggin in");
    if (Kinvey.User.getActiveUser()) {
      console.log("already logged in");
      return Promise.resolve(Kinvey.User.getActiveUser());
    } else {
      console.log("not yet");
      return Kinvey.User.login(name, password).then(user => {
        console.log("we back");
        this.isLoggedIn.next(true);
        console.log(user);
        this.user.next(user);
        return Promise.resolve(Kinvey.User.getActiveUser());
      });
    }
  }

  loginWithMIC(): Promise<User> {
    if (Kinvey.User.getActiveUser()) {
      return Promise.resolve(Kinvey.User.getActiveUser());
    } else {
      return Kinvey.User.loginWithMIC(
        "http://localhost:4200",
        Kinvey.AuthorizationGrant.AuthorizationCodeLoginPage,
        { version: "v2" } as any
      );
    }
  }
  logout(): Promise<void> {
    return Kinvey.User.logout().then(() => {
      this.isLoggedIn.next(false);
      this.user.next(Kinvey.User.getActiveUser());
    });
  }
}
