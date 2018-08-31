import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ArRoutingModule } from "./ar-routing.module";
import { COMPONENT_DECLARATIONS } from "./ar.common";

@NgModule({
  imports: [CommonModule, ArRoutingModule],
  declarations: COMPONENT_DECLARATIONS
})
export class ArModule {}
