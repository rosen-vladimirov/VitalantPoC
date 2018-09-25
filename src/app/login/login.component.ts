import { Component, OnInit } from "@angular/core";
import { DataService } from "../data.service";
import { Router } from "../utils";

@Component({
  selector: "Login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  username = "ignacio";
  password = "ignacio";
  processing: boolean;
  constructor(private dataService: DataService, private router: Router) {
    // Use the component constructor to inject providers.
  }

  ngOnInit(): void {
    // Init your component properties here.
  }

  async login() {
    try {
      this.processing = true;
      await this.dataService.login(this.username, this.password);
      this.router.navigate([""], <any>{ clearHistory: true });
    } catch {
      alert("Invalid credentials");
    } finally {
      this.processing = false;
    }
  }
  async loginWithMIC() {
    try {
      this.processing = true;
      await this.dataService.loginWithMIC();
      this.router.navigate([""]);
    } catch {
      alert("Invalid credentials");
    } finally {
      this.processing = false;
    }
  }
}
