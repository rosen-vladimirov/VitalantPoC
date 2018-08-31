import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";

import { TasksRoutingModule } from "./tasks-routing.module";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { COMPONENT_DECLARATIONS } from "./tasks.common";

@NgModule({
  imports: [TasksRoutingModule, NativeScriptCommonModule],
  declarations: COMPONENT_DECLARATIONS,
  schemas: [NO_ERRORS_SCHEMA]
})
export class TasksModule {}
