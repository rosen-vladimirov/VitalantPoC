import { Routes } from "@angular/router";

import { LoggedInAuthGuard, AnonAuthGuard } from "./auth-guard";

export const routes: Routes = [
  {
    path: "",
    canActivate: [LoggedInAuthGuard],
    children: [
      { path: "", loadChildren: "./home/home.module#HomeModule" },
      //{ path: "", redirectTo: "products", pathMatch: "full" },
      {
        path: "products",
        loadChildren: "./products/products.module#ProductsModule"
      },

      {
        path: "settings",
        loadChildren: "./settings/settings.module#SettingsModule"
      }
    ]
  },
  {
    path: "login",
    loadChildren: "./login/login.module#LoginModule",
    canActivate: [AnonAuthGuard]
  }
];
