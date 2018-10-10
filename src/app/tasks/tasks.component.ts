import { Component, OnInit } from "@angular/core";
import { DataService } from "../data.service";
import { DrawerHelper } from "../utils/drawer-helper";
import { Router } from "../utils";
import { Config } from "../config";
@Component({
  selector: "app-tasks",
  templateUrl: "./tasks.component.html",
  styleUrls: ["./tasks.component.scss"]
})
export class TasksComponent implements OnInit {
  items;
  title: string;
  constructor(private service: DataService, private router: Router) {}

  ngOnInit() {
    this.title = Config.tasksPageTitle;
    this.items = this.service.getTasks();
  }
  onDrawerButtonTap(): void {
    DrawerHelper.show();
  }
  addButtonTapped() {
    this.router.navigate(["tasks/add-task"]);
  }
  async markDone(item) {
    await this.service.toggleTaskStatus(item);
  }
}
