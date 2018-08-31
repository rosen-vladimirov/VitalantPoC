import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";

import { FilesRoutingModule } from "./files-routing.module";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import {
  ROUTES,
  COMPONENT_DECLARATIONS,
  PROVIDERS_DECLARATIONS
} from "./files.common";

@NgModule({
  imports: [FilesRoutingModule, NativeScriptCommonModule],
  declarations: COMPONENT_DECLARATIONS,
  schemas: [NO_ERRORS_SCHEMA]
})
export class FilesModule {}
