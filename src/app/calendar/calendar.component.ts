import { Component, OnInit, NgZone } from "@angular/core";
import { DataService } from "../data.service";
import { Page, getViewById } from 'tns-core-modules/ui/page';
import { DrawerHelper } from "../utils/drawer-helper";
import { ActivatedRoute, NavigationExtras, Router } from "@angular/router";

import { CalendarEvent } from 'nativescript-ui-calendar';
import { RadCalendar } from 'nativescript-ui-calendar';

import { Color } from "tns-core-modules/color";
import { addCategories } from "tns-core-modules/trace/trace";

@Component({
    selector: "app-map",
    templateUrl: "./calendar.component.html"
  })
  export class CalendarComponent implements OnInit {

    placeId: any;
    viewMode: string = "Month";
    eventsViewMode: string = "Inline";
    selectionMode: string = "single";
    events: Array<CalendarEvent> = new Array<CalendarEvent>();

    calendarLayout: RadCalendar;
    placeName: string;
    placeAddress: string;

    titleText: string;

    constructor(private service: DataService, private zone: NgZone,
        private page: Page, private route: ActivatedRoute,
        private router: Router) {
    }

    async ngOnInit() {
        this.viewMode = "Month";
        this.titleText = "Available Days";

        this.calendarLayout = <RadCalendar>getViewById(this.page, "calendarId");

        this.route.params.subscribe(async params => {
            this.placeId = params["id"];
            this.placeName = this.service.placeName;
            this.placeAddress = this.service.placeAddress;

            this.service.getAvailableAppointments(this.placeId)
                .subscribe(appointments => {
                    for (let i = 0; i < appointments.length; i++) {
                        let appointment: any = appointments[i];
                        let event = new CalendarEvent(appointment._id,
                            new Date(appointment.StartDateTime),
                            new Date(appointment.EndDateTime),
                            false, new Color("#FF0000"));
                        this.events.push(event);
                    }
                })
        })
    }

    onDrawerButtonTap(): void {
        DrawerHelper.show();
    }

    onInlineEventSelectedEvent(args: any) {
        console.log("Event Data: " + args.eventData.title);
    }

    onDateSelected(args: any) {
        console.log("Date Selected: " + args.date);
        this.viewMode = "Day";
        this.titleText = "Available Times";
        this.calendarLayout.displayedDate = args.date;
    }

    onDayViewEventSelectedEvent(args: any) {
        console.log("Event Data: " + args.eventData.startDate);
        let navigationExtras: NavigationExtras = {
            queryParams: {
                "startDate":args.eventData.startDate,
                "endDate":args.eventData.endDate,
                "id":args.eventData.title
            }
        };

        this.router.navigate(["appointment"], navigationExtras);
    }

    back() {
        (<any>this.router).back();
      }
}