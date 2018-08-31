import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { MapRoutingModule } from "./map-routing.module";
import { COMPONENT_DECLARATIONS } from "./map.common";

@NgModule({
  imports: [CommonModule, MapRoutingModule],
  declarations: COMPONENT_DECLARATIONS
})
export class MapModule {}
