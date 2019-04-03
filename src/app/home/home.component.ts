import { Component, OnInit, NgZone } from "@angular/core";
import { DrawerHelper } from "../utils/drawer-helper";
import { Config } from "../config";

import { Kinvey } from "../utils";

import { Push } from 'kinvey-nativescript-sdk/push';

import { Router } from "../utils";

@Component({
  selector: "Home",
  templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {
  logo: string;
  title: string;
  heading: string;

  constructor(
    private router: Router,
    private zone: NgZone
  ) {}

  ngOnInit(): void {
    this.logo = Config.logo;
    this.title = Config.homePageTitle;
    this.heading = Config.homePageHeading;
    // Init your component properties here.

    const activeUser = Kinvey.User.getActiveUser();
    activeUser.registerForLiveService()
      .then(() => {
        console.log("Registered for LiveService");
      })
      .catch(err => {
        console.log("Error: " + err);
      });     
  }

  onDrawerButtonTap(): void {
    DrawerHelper.show();
  }
}
