import { Component, OnInit, NgZone } from "@angular/core";
import { DataService } from "../data.service";
import { DrawerHelper } from "../utils/drawer-helper";
import { Observable } from "rxjs";
import { Config } from "../config";

@Component({
  selector: "app-products",
  templateUrl: "./products.component.html",
  styleUrls: ["./products.component.scss"]
})
export class ProductsComponent implements OnInit {
  items;
  title: string;
  constructor(private service: DataService, private zone: NgZone) {}

  ngOnInit() {
    this.service.getItems().subscribe(data => {
      this.zone.run(() => {
        this.items = data;
      });
    });
    this.title = Config.productsPageTitle;
  }
  onDrawerButtonTap(): void {
    DrawerHelper.show();
  }
}
