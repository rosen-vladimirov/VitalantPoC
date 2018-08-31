import { Component, OnInit } from "@angular/core";
import { NativeChatConfig } from "@progress-nativechat/nativescript-nativechat";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application/application";

@Component({
  selector: "app-chat",
  templateUrl: "./chat.component.html",
  styleUrls: ["./chat.component.scss"]
})
export class ChatComponent implements OnInit {
  nativeChatConfig: NativeChatConfig;
  constructor() {}

  ngOnInit() {
    this.nativeChatConfig = {
      botId: "5aec90c92f0cb34333a804a7",
      channelId: "7a530423-7e17-4b37-8c46-03a910241065",
      channelToken: "0597259e-ad2c-4563-a92d-1c4d9a6cd33c"
    };
  }
  onDrawerButtonTap(): void {
    const sideDrawer = <RadSideDrawer>app.getRootView();
    sideDrawer.showDrawer();
  }
}
