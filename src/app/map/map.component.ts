import { Component, OnInit } from "@angular/core";
import { DataService } from "../data.service";
import { DrawerHelper } from "../utils/drawer-helper";
import { Config } from "../config";
@Component({
  selector: "app-map",
  templateUrl: "./map.component.html",
  styleUrls: ["./map.component.scss"]
})
export class MapComponent implements OnInit {
  title;
  constructor() {}

  ngOnInit() {
    this.title = Config.mapPageTitle;
  }
  onDrawerButtonTap(): void {
    DrawerHelper.show();
  }
}
