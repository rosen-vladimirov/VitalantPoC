import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { FilesRoutingModule } from "./files-routing.module";
import { FilesComponent } from "./files.component";
import {
  ROUTES,
  COMPONENT_DECLARATIONS,
  PROVIDERS_DECLARATIONS
} from "./files.common";
@NgModule({
  imports: [CommonModule, FilesRoutingModule],
  declarations: COMPONENT_DECLARATIONS
})
export class FilesModule {}
