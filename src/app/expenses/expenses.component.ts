import { Component, OnInit, NgZone } from "@angular/core";
import { DataService } from "../data.service";
import { DrawerHelper } from "../utils/drawer-helper";
import { Router } from "../utils";
import { Config } from "../config";

@Component({
  selector: "app-expenses",
  templateUrl: "./expenses.component.html"
})
export class ExpensesComponent implements OnInit {

    items;

    constructor(
        private service: DataService,
        private router: Router,
        private zone: NgZone
    ) {}

    async ngOnInit() {
        console.log("ON INIT TASKS");
        await this.service.pullExpenses();

        this.service.getSyncExpenses().subscribe(data => {
            this.zone.run(() => {
                console.log("Expenses: " + JSON.stringify(data));
                this.items = data;
            });
          });
    }

    onDrawerButtonTap(): void {
        DrawerHelper.show();
    }

    async addMe() {
        var myexpenses = [];
        for (var i = 0; i < 10; i++) {
          const thisexpense = {
            Purpose: "Expense #" + i,
            Amount: 10.99
          };
          myexpenses.push(thisexpense);
        }
        await this.service.addSyncExpenses(myexpenses);
        this.service.getSyncExpenses().subscribe(data => {
          this.zone.run(() => {
            this.items = data;
            alert("all done");
          });
        });
    }

    async syncMe() {
        console.log("syncng");
        await this.service.pushSyncExpenseData();
        this.service.getSyncExpenses().subscribe(data => {
          this.zone.run(() => {
            this.items = data;
            alert("all sync done");
          });
        });
    }
}