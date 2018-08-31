import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { OfflineRoutingModule } from "./offline-routing.module";
import { COMPONENT_DECLARATIONS } from "./offline.common";

@NgModule({
  imports: [CommonModule, OfflineRoutingModule],
  declarations: COMPONENT_DECLARATIONS
})
export class OfflineModule {}
