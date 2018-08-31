import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";

import { MapRoutingModule } from "./map-routing.module";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { COMPONENT_DECLARATIONS } from "./map.common";

@NgModule({
  imports: [MapRoutingModule, NativeScriptCommonModule],
  declarations: COMPONENT_DECLARATIONS,
  schemas: [NO_ERRORS_SCHEMA]
})
export class MapModule {}
