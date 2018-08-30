import { Component, OnInit, ViewChild } from "@angular/core";
import { NavigationEnd, Router } from "@angular/router";
import * as app from "tns-core-modules/application/application";
import { RouterExtensions } from "nativescript-angular/router";
import {
  DrawerTransitionBase,
  RadSideDrawer,
  SlideInOnTopTransition
} from "nativescript-ui-sidedrawer";
import { filter } from "rxjs/operators";
import { DataService } from "./data.service";
//import { DataService } from "~/data.service";

@Component({
  selector: "app-root",
  templateUrl: "app.component.html"
})
export class AppComponent implements OnInit {
  private _activatedUrl: string;
  private _sideDrawerTransition: DrawerTransitionBase;
  gesturesEnabled;
  user;

  constructor(
    private service: DataService,
    private router: Router,
    private routerExtensions: RouterExtensions
  ) {
    // Use the component constructor to inject services.
  }

  ngOnInit(): void {
    this.user = this.service.user;

    //this.gesturesEnabled = this.service.isLoggedIn;
    this._activatedUrl = "/";
    this._sideDrawerTransition = new SlideInOnTopTransition();

    this.router.events
      .pipe(filter((event: any) => event instanceof NavigationEnd))
      .subscribe(
        (event: NavigationEnd) => (this._activatedUrl = event.urlAfterRedirects)
      );
  }

  goToSettings() {
    this.routerExtensions.navigate(["settings"]);
    const sideDrawer = <RadSideDrawer>app.getRootView();
    sideDrawer.closeDrawer();
  }

  get sideDrawerTransition(): DrawerTransitionBase {
    return this._sideDrawerTransition;
  }

  isComponentSelected(url: string): boolean {
    return this._activatedUrl === url;
  }

  onNavItemTap(navItemRoute: string): void {
    this.routerExtensions.navigate([navItemRoute], {
      transition: {
        name: "fade"
      }
    });

    const sideDrawer = <RadSideDrawer>app.getRootView();
    sideDrawer.closeDrawer();
  }
}
