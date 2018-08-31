import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";

import { ChatRoutingModule } from "./chat-routing.module";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { COMPONENT_DECLARATIONS } from "./chat.common";

@NgModule({
  imports: [ChatRoutingModule, NativeScriptCommonModule],
  declarations: COMPONENT_DECLARATIONS,
  schemas: [NO_ERRORS_SCHEMA]
})
export class ChatModule {}
