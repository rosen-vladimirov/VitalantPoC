import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ProductsRoutingModule } from "./products-routing.module";
import {
  PROVIDERS_DECLARATIONS,
  COMPONENT_DECLARATIONS,
  ROUTES
} from "./products.common";

@NgModule({
  imports: [CommonModule, ProductsRoutingModule],
  declarations: [COMPONENT_DECLARATIONS]
})
export class ProductsModule {}
