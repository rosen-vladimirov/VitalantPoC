import { Component, OnInit, NgZone } from "@angular/core";
import { DataService } from "../../data.service";

import { ActivatedRoute, Router } from "@angular/router";
import { Page } from "tns-core-modules/ui/page/page";

import * as moment from "moment";

@Component({
    selector: "app-appt",
    styleUrls: ["appointment.component.scss"],
    templateUrl: "appointment.component.html"
})
export class AppointmentComponent implements OnInit {

    placeName: string;
    placeAddress: string;

    startDay: any;
    startTime: any;
    appointmentId: string;

    constructor(private service: DataService, private page: Page, 
        private route: ActivatedRoute, private router: Router) {
        this.route.queryParams.subscribe(params => {
            this.startDay = moment(params["startDate"]).format("dddd, MMMM, DD, YYYY");
            this.startTime = moment(params["endDate"]).format("hh:mm A");
            this.appointmentId = params["id"];
        })
    }

    ngOnInit() {
        this.placeName = this.service.placeName;
        this.placeAddress = this.service.placeAddress;
    }

    bookAppointmentTap() {
        this.service.username.subscribe(async user => {
            await this.service.bookAppointment(this.appointmentId, user);
            this.router.navigate(["home"]);
        });
    }

    back() {
        (<any>this.router).back();
      }
}