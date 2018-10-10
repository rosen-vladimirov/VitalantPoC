import { Component, OnInit } from "@angular/core";
import { DrawerHelper } from "../utils/drawer-helper";
import { Config } from "../config";

@Component({
  selector: "Home",
  templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {
  logo: string;
  title: string;
  constructor() {
    // Use the component constructor to inject providers.
  }

  ngOnInit(): void {
    this.logo = Config.logo;
    this.title = Config.homePageTitle;
    // Init your component properties here.
  }

  onDrawerButtonTap(): void {
    DrawerHelper.show();
  }
}
