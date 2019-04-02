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
    
      const promise = Push.register({
        android: {
          senderID: '982992243930'
        },
        notificationCallback: (message: any) => {
          console.log("Message: " + JSON.stringify(message));
          if (message.Status === "Approved") {
            alert(message.body);
            this.zone.run(() => {
              this.router.navigate(["expenses"]);
            })
          }
          if (message.Asset === "Instruction Manual") {
            this.zone.run(() => {
              this.router.navigate(["files"]);
            })
          }
        }
      })
      .then((deviceToken: string) => {
        console.log("Device registered for push.  Access token: " + deviceToken);
      })
      .catch((error: Error) => {
        console.log("Error: " + error);
      });      
  }

  onDrawerButtonTap(): void {
    DrawerHelper.show();
  }
}
