import { Component, OnInit } from "@angular/core";
import { DataService } from "../../data.service";

import { Router } from "../../utils";
import { Config } from "../../config";

@Component({
  selector: "app-add-task",
  templateUrl: "./add-task.component.html",
  styleUrls: ["./add-task.component.scss"]
})
export class AddTaskComponent implements OnInit {
  action;
  duedate;
  title: string;

  constructor(private service: DataService, private router: Router) {}

  ngOnInit() {
    this.title = Config.addTaskPageTitle;
  }

  async save() {
    console.log("here");
    console.log(this.action);
    console.log(this.duedate.toLocaleDateString());
    await this.service.saveTask({
      action: this.action,
      duedate: this.duedate.toLocaleDateString()
    });
    this.router.navigate(["tasks"]);
  }
  back() {
    (<any>this.router).back();
  }
}
