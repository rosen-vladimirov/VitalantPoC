import { Component, OnInit, NgZone } from "@angular/core";
import { DataService } from "../data.service";

import { RouterExtensions } from "nativescript-angular/router";

@Component({
    selector: "app-donation",
    templateUrl: "./donation.component.html"
  })
  export class DonationComponent implements OnInit {
      constructor(private service: DataService, private router: RouterExtensions) {
          console.log("Inside donationComponent constructor");
      }

      ngOnInit() {
          console.log("Inside donation component");
      }

      back() {
        (<any>this.router).back();
      }

      onGetStartedButtonTap(): void {
          console.log("Inside onGetStartedButtonTap");
        this.router.navigate(["/donation-eligibility/quiz"],
            {
                animated: true,
                transition: {
                    name: "slide",
                    duration: 200,
                    curve: "ease"
                }
            });
    }
  }