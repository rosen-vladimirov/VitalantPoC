import { Component, OnInit } from "@angular/core";
import { DataService } from "../data.service";
import { Router } from "../utils";
import { Config } from "../config";
import { Page } from "ui/page";
import { RouterExtensions } from "nativescript-angular/router";


@Component({
  selector: "Login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  logo: string;
  title: string;

  firstName: string;
  lastName: string;
  username: string;
  email: string;
  password: string;
  processing: boolean;

  showLogin: boolean = false;
  showRegister: boolean = false;

  constructor(
    private dataService: DataService,
    private router: RouterExtensions,
    private page: Page
  ) {
    this.page.actionBarHidden = true;
    // Use the component constructor to inject providers.
  }

  ngOnInit(): void {
    // Init your component properties here.
    this.logo = Config.appLogo;
    this.title = Config.appTitle;
  }

  async login() {
    if (this.showLogin === false) {
      this.showLogin = true;
      this.showRegister = false;
    }
    else {
      try {
        this.processing = true;
        await this.dataService.login(this.username, this.password);
        console.log("LOG IN SUCsCESSFUL");
        this.router.navigate(["home"], { clearHistory: true });
      } catch {
        alert("Invalid credentials");
      } finally {
        this.processing = false;
      }
    }
  }

  async signUp() {
    if (this.showRegister === false) {
      console.log("Gets here");
      this.showRegister = true;
      this.showLogin = false;
    }
    else {
      try {
        this.processing = true;
        await this.dataService.signup(this.username, this.password, this.email);
        console.log("registration successful");
        this.router.navigate(["home"], { clearHistory: true });
      } catch {
        alert("Invalid request");
      } finally {
        this.processing = false;
      }
    }
  }
  async loginWithMIC() {
    try {
      this.processing = true;
      await this.dataService.loginWithMIC('sde://');
      this.router.navigate([""]);
    } catch {
      alert("Invalid credentials");
    } finally {
      this.processing = false;
    }
  }
}
