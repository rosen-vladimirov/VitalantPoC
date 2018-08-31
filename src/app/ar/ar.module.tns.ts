import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";

import { ArRoutingModule } from "./ar-routing.module";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { COMPONENT_DECLARATIONS } from "./ar.common";

@NgModule({
  imports: [ArRoutingModule, NativeScriptCommonModule],
  declarations: COMPONENT_DECLARATIONS,
  schemas: [NO_ERRORS_SCHEMA]
})
export class ArModule {}
