import { Component, OnInit } from "@angular/core";
import { DataService } from "../data.service";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application/application";

@Component({
  selector: "app-offline",
  templateUrl: "./offline.component.html",
  styleUrls: ["./offline.component.scss"]
})
export class OfflineComponent implements OnInit {
  items;
  constructor(private service: DataService) {}

  async ngOnInit() {
    await this.service.pullAccountData();
    this.items = this.service.getAccounts();
  }
  onDrawerButtonTap(): void {
    const sideDrawer = <RadSideDrawer>app.getRootView();
    sideDrawer.showDrawer();
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
    await this.service.addAccounts(myaccounts);
    this.items = this.service.getAccounts();
    alert("all done");
  }

  async syncMe() {
    console.log("syncng");
    await this.service.pushAccountData();
    this.items = this.service.getAccounts();
    alert("all sync done");
  }
}
