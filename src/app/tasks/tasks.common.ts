import { Routes } from "@angular/router";
import { TasksComponent } from "../tasks/tasks.component";
import { AddTaskComponent } from "../tasks/add-task/add-task.component";

export const COMPONENT_DECLARATIONS: any[] = [TasksComponent, AddTaskComponent];

export const PROVIDERS_DECLARATIONS: any[] = [];

export const ROUTES: Routes = [
  { path: "", component: TasksComponent },
  { path: "add-task", component: AddTaskComponent }
];
