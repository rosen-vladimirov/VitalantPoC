import { Component, OnInit } from "@angular/core";
import * as app from "tns-core-modules/application/application";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";

@Component({
  selector: "app-augmented-reality",
  templateUrl: "./augmented-reality.component.html",
  styleUrls: ["./augmented-reality.component.scss"]
})
export class AugmentedRealityComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
  onDrawerButtonTap(): void {
    const sideDrawer = <RadSideDrawer>app.getRootView();
    sideDrawer.showDrawer();
  }
}
