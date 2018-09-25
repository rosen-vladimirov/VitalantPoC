import { Component, OnInit } from "@angular/core";
import { DataService } from "../data.service";
import { Router } from "../utils";
declare var nativechat: any;
@Component({
  selector: "app-layout",
  templateUrl: "./layout.component.html",
  styleUrls: ["./layout.component.scss"]
})
export class LayoutComponent implements OnInit {
  constructor(private service: DataService, private router: Router) {}

  ngOnInit() {
    var settings = {
      bot: {
        id: "5a6f258d7eef5c4ecfb128fc",
        channelId: "2d280b2e-a0d6-4231-9602-0dbb38d2fa46",
        token: "46d2e012-32d4-4e32-95c1-c7e2d889579a"
      }
    };
    //nativechat.init(settings);
  }
  async logout() {
    await this.service.logout();
    this.router.navigate(["login"]);
  }
}
