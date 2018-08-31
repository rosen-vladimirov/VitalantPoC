import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { ROUTES } from "./tasks.common";

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule]
})
export class TasksRoutingModule {}
