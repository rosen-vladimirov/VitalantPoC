import { Routes } from "@angular/router";

import { LoggedInAuthGuard, AnonAuthGuard } from "./auth-guard";

export const routes: Routes = [
  {
    path: "",
    canActivate: [LoggedInAuthGuard],
    children: [
      { path: "", loadChildren: "./home/home.module#HomeModule" },
      { path: "search", loadChildren: "./search/search.module#SearchModule" },
      {
        path: "featured",
        loadChildren: "./featured/featured.module#FeaturedModule"
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
