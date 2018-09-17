import { Component, OnInit } from "@angular/core";
import { DataService } from "../data.service";
import { Router } from "../utils";

@Component({
  selector: "app-layout",
  templateUrl: "./layout.component.html",
  styleUrls: ["./layout.component.scss"]
})
export class LayoutComponent implements OnInit {
  constructor(private service: DataService, private router: Router) {}

  ngOnInit() {}
  async logout() {
    await this.service.logout();
    this.router.navigate(["login"]);
  }
}
