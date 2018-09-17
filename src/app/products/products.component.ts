import { Component, OnInit } from "@angular/core";
import { DataService } from "../data.service";
import { DrawerHelper } from "../utils/drawer-helper";
import { Observable } from "rxjs";

@Component({
  selector: "app-products",
  templateUrl: "./products.component.html",
  styleUrls: ["./products.component.scss"]
})
export class ProductsComponent implements OnInit {
  items: Observable<any>;
  constructor(private service: DataService) {}

  ngOnInit() {
    this.items = this.service.getProducts();
  }
  onDrawerButtonTap(): void {
    DrawerHelper.show();
  }
}
