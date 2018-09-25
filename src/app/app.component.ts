import { Component, OnInit } from "@angular/core";
import { Router } from "./utils";
import { DataService } from "./data.service";
import { DrawerHelper } from "./utils/drawer-helper";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  private _activatedUrl: string;
  //private _sideDrawerTransition: DrawerTransitionBase;
  gesturesEnabled;
  user;

  constructor(private service: DataService, private router: Router) {
    // Use the component constructor to inject services.
  }

  ngOnInit(): void {
    this.user = this.service.username;
    this.gesturesEnabled = this.service.isLoggedIn;
    // this._activatedUrl = "/";
    // this._sideDrawerTransition = new SlideInOnTopTransition();
    // this.router.events
    //   .pipe(filter((event: any) => event instanceof NavigationEnd))
    //   .subscribe(
    //     (event: NavigationEnd) => (this._activatedUrl = event.urlAfterRedirects)
    //   );
  }

  goToSettings() {
    this.router.navigate(["settings"]);
    // const sideDrawer = <RadSideDrawer>app.getRootView();
    //sideDrawer.closeDrawer();
    DrawerHelper.hide();
  }

  // get sideDrawerTransition(): DrawerTransitionBase {
  //   return this._sideDrawerTransition;
  // }

  isComponentSelected(url: string): boolean {
    return this._activatedUrl === url;
  }

  onNavItemTap(navItemRoute: string): void {
    this.router.navigate([navItemRoute]);
    DrawerHelper.hide();
  }
}
