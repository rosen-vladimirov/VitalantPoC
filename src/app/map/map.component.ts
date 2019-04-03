import { Component, OnInit, NgZone } from "@angular/core";
import { DataService } from "../data.service";
import { DrawerHelper } from "../utils/drawer-helper";
import { Config } from "../config";

import { MapView, Marker, Position } from 'nativescript-google-maps-sdk';
import { SearchBar } from "tns-core-modules/ui/search-bar";

import * as app from "tns-core-modules/application";

import {registerElement} from "nativescript-angular/element-registry";

import { isEnabled, enableLocationRequest, getCurrentLocation, watchLocation, distance, clearWatch } from "nativescript-geolocation";

registerElement("MapView", () => require("nativescript-google-maps-sdk").MapView);

@Component({
  selector: "app-map",
  templateUrl: "./map.component.html",
  styleUrls: ["./map.component.scss"]
})
export class MapComponent implements OnInit {
  title;
  mapView: MapView;
  latitude: number;
  longitude: number;
  items: any;

  constructor(private service: DataService, private zone: NgZone) {
    console.log("Inside map component constructor");
  }

  async ngOnInit() {
    console.log("Inside ngOnInit in map component");
    this.title = Config.mapPageTitle;

    try {
      const location = await getCurrentLocation(
          {
              desiredAccuracy: 3,
              updateDistance: 10,
              maximumAge: 20000,
              timeout: 20000
          }
      );
      this.latitude = location.latitude;
      this.longitude = location.longitude;
    }
    catch (err) {
      console.log("Error: " + err);
    }
  }

  onMapReady(event): void {

    this.mapView = event.object;

    /*
    var marker = new Marker();
    marker.position = Position.positionFromLatLng(parseFloat(this._address.location.lat), 
        parseFloat(this._address.location.lon));
    marker.title = this._address.pradId;
    marker.snippet = this._address.address;
    marker.userData = {index: 1};
    this.mapView.addMarker(marker);
    */
  }

  onDrawerButtonTap(): void {
    DrawerHelper.show();
  }

  setMarkers() {
   for (let i=0; i<this.items.results.length; i++) {
     let marker = new Marker();
     marker.position = Position.positionFromLatLng(
       parseFloat(this.items.results[i].geometry.location.lat),
       parseFloat(this.items.results[i].geometry.location.lng)
      );
      marker.title = this.items.results[i].name;
      marker.snippet = this.items.results[i].formatted_address;
      this.mapView.addMarker(marker);
   }
  }

  async onSubmit(args) {
    let searchBar = <SearchBar>args.object;
    console.log("Search bar text: " + searchBar.text);
    try {
      let response: any;
      response = await this.service.getBloodCenters(searchBar.text);
      this.items = response;
      console.dir("Items: " + JSON.stringify(this.items.results));
      this.mapView.latitude = this.items.placeLat;
      this.mapView.longitude = this.items.placeLong;
      this.setMarkers();
    }
    catch (err) {
      console.log("Err: " + err);
    }
  }
}
