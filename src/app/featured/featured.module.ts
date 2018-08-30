import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { FeaturedRoutingModule } from "../featured/featured-routing.module";
import { FeaturedComponent } from "../featured/featured.component";

@NgModule({
  imports: [NativeScriptCommonModule, FeaturedRoutingModule],
  declarations: [FeaturedComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class FeaturedModule {}
