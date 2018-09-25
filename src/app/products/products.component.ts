import { Component, OnInit } from "@angular/core";
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
  items: Observable<any>;
  title: string;
  constructor(private service: DataService) {}

  ngOnInit() {
    this.items = this.service.getItems();
    this.title =
      Config.collectionName.charAt(0).toUpperCase() +
      Config.collectionName.slice(1);
  }
  onDrawerButtonTap(): void {
    DrawerHelper.show();
  }
}
