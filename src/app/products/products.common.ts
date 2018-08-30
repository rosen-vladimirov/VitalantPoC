import { Routes } from "@angular/router";
import { ProductsComponent } from "../products/products.component";

export const COMPONENT_DECLARATIONS: any[] = [ProductsComponent];

export const PROVIDERS_DECLARATIONS: any[] = [];

export const ROUTES: Routes = [{ path: "", component: ProductsComponent }];
