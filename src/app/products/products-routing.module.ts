import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import {
  PROVIDERS_DECLARATIONS,
  COMPONENT_DECLARATIONS,
  ROUTES
} from "./products.common";

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule]
})
export class ProductsRoutingModule {}
