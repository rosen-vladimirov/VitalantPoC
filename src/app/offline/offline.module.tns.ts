import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";

import { OfflineRoutingModule } from "./offline-routing.module";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { COMPONENT_DECLARATIONS } from "./offline.common";

@NgModule({
  imports: [OfflineRoutingModule, NativeScriptCommonModule],
  declarations: COMPONENT_DECLARATIONS,
  schemas: [NO_ERRORS_SCHEMA]
})
export class OfflineModule {}
