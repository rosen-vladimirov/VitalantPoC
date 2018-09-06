import { Component, OnInit } from "@angular/core";
import * as app from "tns-core-modules/application/application";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import { DataService } from "../data.service";
import { RouterExtensions } from "nativescript-angular/router";

@Component({
  selector: "Settings",
  moduleId: module.id,
  templateUrl: "./settings.component.html"
})
export class SettingsComponent implements OnInit {
  constructor(
    private dataService: DataService,
    private router: RouterExtensions
  ) {}

  ngOnInit(): void {
    // Init your component properties here.
  }
  logout() {
    this.dataService.logout().then(() => {
      this.router.navigate(["login"], {
        clearHistory: true,
        animated: true,
        transition: {
          name: "slideBottom",
          duration: 350,
          curve: "ease"
        }
      });
    });
  }

  onDrawerButtonTap(): void {
    const sideDrawer = <RadSideDrawer>app.getRootView();
    sideDrawer.showDrawer();
  }
}
