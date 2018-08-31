import { Routes } from "@angular/router";
import { ChatComponent } from "../chat/chat.component";

export const COMPONENT_DECLARATIONS: any[] = [ChatComponent];

export const PROVIDERS_DECLARATIONS: any[] = [];

export const ROUTES: Routes = [{ path: "", component: ChatComponent }];
