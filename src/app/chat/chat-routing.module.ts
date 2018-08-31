import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { ROUTES } from "./chat.common";

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule]
})
export class ChatRoutingModule {}
