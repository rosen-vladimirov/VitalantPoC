import {
    Component,
    OnInit,
    ChangeDetectorRef,
    AfterViewInit
  } from "@angular/core";
  import { ActivatedRoute } from "@angular/router";
  import { DataService } from "../../data.service";
  import { Router } from "../../utils/router";
  import { Switch } from "tns-core-modules/ui/switch"; 

  @Component({
    selector: "app-task-details",
    templateUrl: "./task-details.component.html"
  })

  export class TaskDetailsComponent implements OnInit {
    sub: any;
    id: any;
    task: any = { };
    notes: string;
  
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
        this.service.getTaskDetail(this.id).subscribe(task => {
          //account.SubTotal = account.ItemPrice*account.ItemQuantity;
          console.log(task);
          this.task = task;
          this.cd.detectChanges();
        });
  
        // In a real app: dispatch action to load the details here.
      });
    }

    onChecked(args) {
      let firstSwitch = <Switch>args.object;
      console.log("Event: " + JSON.stringify(firstSwitch.checked));
      if (firstSwitch.checked) {
        this.task.completed = true;
      }
      else {
        this.task.completed = false;
      }
    }

    initiateChat() {
      this.router.navigate(["chat"]);
    }

    async completeTask() {
      this.task.notes = this.notes;
      await this.service.completeTask(this.task);
      this.router.navigate(["tasks"]);
    }
  }