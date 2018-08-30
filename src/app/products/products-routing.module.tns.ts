import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { ProductsComponent } from "../products/products.component";
import {
  PROVIDERS_DECLARATIONS,
  COMPONENT_DECLARATIONS,
  ROUTES
} from "./products.common";

@NgModule({
  imports: [NativeScriptRouterModule.forChild(ROUTES)],
  exports: [NativeScriptRouterModule]
})
export class ProductsRoutingModule {}
