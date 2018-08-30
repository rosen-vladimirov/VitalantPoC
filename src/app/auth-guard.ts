import { Injectable } from "@angular/core";
import {
  CanActivate,
  CanActivateChild,
  ActivatedRouteSnapshot,
  CanLoad,
  RouterStateSnapshot,
  Route,
  Router
} from "@angular/router";
import { RouterExtensions } from "nativescript-angular/router";
import { DataService } from "./data.service";

@Injectable()
export class AnonAuthGuard implements CanActivate {
  constructor(private service: DataService, private router: RouterExtensions) {}

  canActivate() {
    if (this.service.isLoggedIn.value) {
      this.router.navigate([""], { clearHistory: true });
      return false;
    }
    return true;
  }
}

@Injectable()
export class LoggedInAuthGuard implements CanActivate {
  constructor(private service: DataService, private router: RouterExtensions) {}

  canActivate() {
    console.log("checking access");
    if (!this.service.isLoggedIn.value) {
      this.router.navigate(["login"], { clearHistory: true });
      return false;
    }
    return true;
  }
}
