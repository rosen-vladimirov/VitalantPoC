import { Component, OnInit } from "@angular/core";
import { DataService } from "../data.service";
import { Router } from "../utils";
import { ChatHelper } from "../utils/chat-helper";
import { Config } from "../config";
@Component({
  selector: "app-layout",
  templateUrl: "./layout.component.html",
  styleUrls: ["./layout.component.scss"]
})
export class LayoutComponent implements OnInit {
  username;
  homePageTitle: string;
  productsPageTitle: string;
  tasksPageTitle: string;
  offlinePageTitle: string;
  mapPageTitle: string;
  filesPageTitle: string;
  arPageTitle: string;
  chatPageTitle: string;
  accountsPageTitle: string;
  homePageVisible: boolean;
  accountsPageVisible: boolean;
  productsPageVisible: boolean;
  tasksPageVisible: boolean;
  filesPageVisible: boolean;
  offlinePageVisible: boolean;
  mapPageVisible: boolean;
  chatPageVisible: boolean;
  arPageVisible: boolean;
  constructor(private service: DataService, private router: Router) {
    this.username = this.service.username;
  }

  ngOnInit() {
    ChatHelper.show();
    this.homePageTitle = Config.homePageTitle;
    this.productsPageTitle = Config.productsPageTitle;
    this.accountsPageTitle = Config.accountsPageTitle;
    this.tasksPageTitle = Config.tasksPageTitle;
    this.filesPageTitle = Config.filesPageTitle;
    this.mapPageTitle = Config.mapPageTitle;
    this.offlinePageTitle = Config.offlinePageTitle;
    this.chatPageTitle = Config.chatPageTitle;
    this.arPageTitle = Config.arPageTitle;

    this.homePageVisible = Config.homePageVisible;
    this.productsPageVisible = Config.productsPageVisible;
    this.accountsPageVisible = Config.accountsPageVisible;
    this.tasksPageVisible = Config.tasksPageVisible;
    this.filesPageVisible = Config.filesPageVisible;
    this.mapPageVisible = Config.mapPageVisible;
    this.offlinePageVisible = Config.offlinePageVisible;
    this.chatPageVisible = Config.chatPageVisible;
    this.arPageVisible = Config.arPageVisible;
  }
  async logout() {
    await this.service.logout();
    this.router.navigate(["login"]);
  }
}
