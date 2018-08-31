import { Routes } from "@angular/router";
import { FilesComponent } from "../files/files.component";
import { FilesDetailsComponent } from "./files-details/files-details.component";

export const COMPONENT_DECLARATIONS: any[] = [
  FilesComponent,
  FilesDetailsComponent
];

export const PROVIDERS_DECLARATIONS: any[] = [];

export const ROUTES: Routes = [
  { path: "", component: FilesComponent },
  { path: "details", component: FilesDetailsComponent }
];
