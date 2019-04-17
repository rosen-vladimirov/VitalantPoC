import { Component, OnInit, NgZone } from "@angular/core";
import { DataService } from "../data.service";

import { ActivatedRoute, Router } from "@angular/router";
import { Page } from "tns-core-modules/ui/page/page";

@Component({
    selector: "app-notes",
    templateUrl: "notes.component.html"
})
export class NotesComponent implements OnInit {

    contructor(private service: DataService) {

    }

    ngOnInit() {

    }
}

