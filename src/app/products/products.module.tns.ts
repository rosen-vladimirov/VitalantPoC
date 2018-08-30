import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";

import { ProductsRoutingModule } from "./products-routing.module";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import {
  PROVIDERS_DECLARATIONS,
  COMPONENT_DECLARATIONS,
  ROUTES
} from "./products.common";

@NgModule({
  imports: [ProductsRoutingModule, NativeScriptCommonModule],
  declarations: [COMPONENT_DECLARATIONS],
  schemas: [NO_ERRORS_SCHEMA]
})
export class ProductsModule {}
