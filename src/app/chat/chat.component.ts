import { Component, OnInit } from "@angular/core";
import { DataService } from "../data.service";
import { DrawerHelper } from "../utils/drawer-helper";
@Component({
  selector: "app-chat",
  templateUrl: "./chat.component.html",
  styleUrls: ["./chat.component.scss"]
})
export class ChatComponent implements OnInit {
  nativeChatConfig: any;
  constructor() {}

  ngOnInit() {
    this.nativeChatConfig = {
      botId: "5aec90c92f0cb34333a804a7",
      channelId: "7a530423-7e17-4b37-8c46-03a910241065",
      channelToken: "0597259e-ad2c-4563-a92d-1c4d9a6cd33c"
    };
  }
  onDrawerButtonTap(): void {
    DrawerHelper.show();
  }
}
