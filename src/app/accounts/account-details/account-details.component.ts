import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { DataService } from "../../data.service";
import { Router } from "../../utils/router";

@Component({
  selector: "app-account-details",
  templateUrl: "./account-details.component.html",
  styleUrls: ["./account-details.component.scss"]
})
export class AccountDetailsComponent implements OnInit {
  sub: any;
  id: any;
  account: any;

  constructor(
    private service: DataService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.account = { invoice: [] };
  }
  back() {
    (<any>this.router).back();
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = params["id"]; // (+) converts string 'id' to a number
      console.log(this.id);
      this.service.getAccounts(this.id).subscribe(account => {
        console.log(account);
        this.account = account;
      });

      // In a real app: dispatch action to load the details here.
    });
  }
}
