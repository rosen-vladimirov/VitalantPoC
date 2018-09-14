import { Component, OnInit } from "@angular/core";
import { DataService } from "../data.service";
import { DrawerHelper } from "../utils/drawer-helper";
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
