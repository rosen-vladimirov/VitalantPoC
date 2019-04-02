import {
  Component,
  OnInit,
  ChangeDetectorRef,
  AfterViewInit
} from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { DataService } from "../../data.service";
import { Router } from "../../utils/router";

import { SelectedIndexChangedEventData, TabView } from "tns-core-modules/ui/tab-view";

@Component({
  selector: "app-account-details",
  templateUrl: "./account-details.component.html",
  styleUrls: ["./account-details.component.scss"]
})
export class AccountDetailsComponent implements OnInit {
  sub: any;
  id: any;
  account: any = { invoice: [] };

  constructor(
    private service: DataService,
    private route: ActivatedRoute,
    private router: Router,
    private cd: ChangeDetectorRef
  ) {}
  back() {
    (<any>this.router).back();
  }

  ngOnInit() {
    console.log("init details");
    this.sub = this.route.params.subscribe(params => {
      this.id = params["id"]; // (+) converts string 'id' to a number
      console.log(this.id);
      this.service.getAccounts(this.id).subscribe(account => {
        //account.SubTotal = account.ItemPrice*account.ItemQuantity;
        console.log(account);
        this.account = account;
        this.cd.detectChanges();
      });

      // In a real app: dispatch action to load the details here.
    });
  }

  onIndexChanged(args: SelectedIndexChangedEventData) {
    const tabView = <TabView>args.object;
    const selectedTabViewItem = tabView.items[args.newIndex];
  }
}
