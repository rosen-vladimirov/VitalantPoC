import { Component, OnInit, NgZone } from "@angular/core";
import { DataService } from "../data.service";
import { DrawerHelper } from "../utils/drawer-helper";
import { Config } from "../config";
@Component({
  selector: "app-offline",
  templateUrl: "./offline.component.html",
  styleUrls: ["./offline.component.scss"]
})
export class OfflineComponent implements OnInit {
  items;
  title: any;
  constructor(private service: DataService, private zone: NgZone) {}

  async ngOnInit() {
    this.title = Config.offlinePageTitle;
    await this.service.pullAccountData();
    this.service.getSyncAccounts().subscribe(data => {
      this.zone.run(() => {
        this.items = data;
      });
    });
  }
  onDrawerButtonTap(): void {
    DrawerHelper.show();
  }

  async addMe() {
    var myaccounts = [];
    for (var i = 0; i < 10; i++) {
      const thisaccount = {
        accountname: "Account #" + i,
        autogen: true,
        accountcompany: "Company #" + i
      };
      myaccounts.push(thisaccount);
    }
    await this.service.addSyncAccounts(myaccounts);
    this.service.getSyncAccounts().subscribe(data => {
      this.zone.run(() => {
        this.items = data;
        alert("all done");
      });
    });
  }

  async syncMe() {
    console.log("syncng");
    await this.service.pushSyncAccountData();
    this.service.getSyncAccounts().subscribe(data => {
      this.zone.run(() => {
        this.items = data;
        alert("all sync done");
      });
    });
  }
}
