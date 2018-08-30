import { Component, OnInit } from "@angular/core";
import * as app from "tns-core-modules/application/application";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import { RouterExtensions } from "nativescript-angular/router";
import { DataService } from "../data.service";

@Component({
  selector: "Login",
  moduleId: module.id,
  templateUrl: "./login.component.html"
})
export class LoginComponent implements OnInit {
  constructor(
    private dataService: DataService,
    private router: RouterExtensions
  ) {
    // Use the component constructor to inject providers.
  }

  ngOnInit(): void {
    // Init your component properties here.
  }

  login() {
    console.log("huh");
    this.dataService.login("ignacio", "ignacio").then(data => {
      this.router.navigate([""], { clearHistory: true });
    });
  }
}
