import { Injectable } from "@angular/core";
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from "@angular/router";
import { Observable } from "rxjs";
import { DataService } from "./data.service";
import { Router } from "./utils/router";

@Injectable({
  providedIn: "root"
})
export class AnonGuard implements CanActivate {
  constructor(private service: DataService, private router: Router) {}

  canActivate() {
    if (this.service.isLoggedIn.value) {
      this.router.navigate([""]);
      return false;
    }
    return true;
  }
}
