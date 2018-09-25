import { Component, OnInit } from "@angular/core";
import { DataService } from "../data.service";
import { Router } from "../utils";
import { ChatHelper } from "../utils/chat-helper";
declare var nativechat: any;
@Component({
  selector: "app-layout",
  templateUrl: "./layout.component.html",
  styleUrls: ["./layout.component.scss"]
})
export class LayoutComponent implements OnInit {
  username;
  constructor(private service: DataService, private router: Router) {
    this.username = this.service.username;
  }

  ngOnInit() {
    ChatHelper.show();
  }
  async logout() {
    await this.service.logout();
    this.router.navigate(["login"]);
  }
}
