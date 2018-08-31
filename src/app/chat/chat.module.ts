import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ChatRoutingModule } from "./chat-routing.module";
import { COMPONENT_DECLARATIONS } from "./chat.common";

@NgModule({
  imports: [CommonModule, ChatRoutingModule],
  declarations: COMPONENT_DECLARATIONS
})
export class ChatModule {}
