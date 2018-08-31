import { Routes } from "@angular/router";
import { AugmentedRealityComponent } from "../ar/augmented-reality/augmented-reality.component";

export const COMPONENT_DECLARATIONS: any[] = [AugmentedRealityComponent];

export const PROVIDERS_DECLARATIONS: any[] = [];

export const ROUTES: Routes = [
  { path: "", component: AugmentedRealityComponent }
];
