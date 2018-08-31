import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { TasksRoutingModule } from "./tasks-routing.module";
import { TasksComponent } from "./tasks.component";
import { COMPONENT_DECLARATIONS } from "./tasks.common";

@NgModule({
  imports: [CommonModule, TasksRoutingModule],
  declarations: COMPONENT_DECLARATIONS
})
export class TasksModule {}
