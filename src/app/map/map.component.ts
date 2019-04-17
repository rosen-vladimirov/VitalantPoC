import { Component, OnInit, NgZone } from "@angular/core";
import { DataService } from "../data.service";
import { DrawerHelper } from "../utils/drawer-helper";
import { Config } from "../config";

import { MapView, Marker, Position } from 'nativescript-google-maps-sdk';
import { SearchBar } from "tns-core-modules/ui/search-bar";

import * as app from "tns-core-modules/application";

import {registerElement} from "nativescript-angular/element-registry";

import { isEnabled, enableLocationRequest, getCurrentLocation, watchLocation, distance, clearWatch } from "nativescript-geolocation";

import { Page } from 'tns-core-modules/ui/page';

import { getViewById } from "tns-core-modules/ui/core/view";

import { GridLayout } from "tns-core-modules/ui/layouts/grid-layout";
import { Image } from "tns-core-modules/ui/image/image";
import { Folder, path, knownFolders } from "tns-core-modules/file-system/file-system";

import {ImageSource, fromFile, fromResource, fromBase64} from "tns-core-modules/image-source";
import { Router } from "../utils";

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
  placeDetail: any;
  public showListView: boolean = false;
  public showDetailView: boolean = false;
  mapGridLayout: GridLayout;
  pinImage: Image;
  resultListLayout: GridLayout;
  markerSelected: boolean = false;
  markerList: Array<Marker> = [];

  constructor(private service: DataService, private zone: NgZone,
    private page: Page, private router: Router) {
  }

  async ngOnInit() {
    this.title = Config.mapPageTitle;

    this.mapGridLayout = <GridLayout>getViewById(this.page, "mapGridLayout");
    this.mapGridLayout.rowSpan = 4;

    this.resultListLayout = <GridLayout>getViewById(this.page, "resultsListLayout");

    const folder: Folder = <Folder> knownFolders.currentApp();
    const folderPath: string = path.join(folder.path, "app/images/blood-drop.png");
    const imagSrc: ImageSource = <ImageSource> fromFile(folderPath);

    this.pinImage = new Image();
    this.pinImage.imageSource = imagSrc;

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
  }

  onDrawerButtonTap(): void {
    DrawerHelper.show();
  }

  setMarkers() {
   for (let i=0; i<this.items.length; i++) {
     let marker = new Marker();
     marker.position = Position.positionFromLatLng(
       parseFloat(this.items[i].geometry.location.lat),
       parseFloat(this.items[i].geometry.location.lng)
      );
      marker.title = this.items[i].name;
      marker.snippet = this.items[i].formatted_address;
      marker.userData = {
        id: this.items[i].place_id
      }
      marker.icon = this.pinImage;
      this.markerList.push(marker);
      this.mapView.addMarker(marker);
   }
  }

  async onMarkerSelect(args) {
    this.markerSelected = true;
    try {
      const response: any =  await this.service.getCenterDetail(args.marker.userData.id);
      this.placeDetail = response.result;
      this.showListView = false;
      this.showDetailView = true;
    }
    catch (err) {
      console.log("Error: " + err);
    }
  }

  async onCameraChanged(args) {

      try {
        const response: any = await 
          this.service.getBloodCentersWithCoordinates(args.camera);
        this.items = response.results;
  
        if (this.items.length == 0) {
          this.showListView = false;
          this.mapGridLayout.rowSpan = 4;
        }
        else {
          if (this.markerSelected) {
            this.showListView = false;
          }
          else {
            this.showDetailView = false;
            this.showListView = true;
          }
          this.mapGridLayout.rowSpan = 2;
        }
        this.setMarkers();
      }
      catch (err) {
        console.log("Err: " + err);
      }
  }

  async onSubmit(args) {
    let searchBar = <SearchBar>args.object;
    this.markerSelected = false;
    try {
      const response: any = await this.service.getBloodCenters(searchBar.text);
      this.items = response.results;
      
      this.mapView.latitude = response.placeLat;
      this.mapView.longitude = response.placeLong;
      this.setMarkers();
      if (this.items.length > 0) {
        this.showDetailView = false;
        this.showListView = true;
        this.mapGridLayout.rowSpan = 2;
      }
    }
    catch (err) {
      console.log("Err: " + err);
    }
  }

  async goToDetails(item) {
    //console.log("Item: " + JSON.stringify(item));
    let obj = this.markerList.find(marker => marker.userData.id === 'tattoo');
    //this.mapView.ios.selectedMarker = this.mapView.findMarker()
    this.markerSelected = true;
    try {
      const response: any =  await this.service.getCenterDetail(item.place_id);
      this.placeDetail = response.result;
      let markerObj: any = this.markerList.find(marker => marker.userData.id === this.placeDetail.place_id);
      this.mapView.nativeView.selectedMarker = markerObj.ios;
      this.service.placeName = this.placeDetail.name;
      this.service.placeAddress = this.placeDetail.formatted_address;
      this.showListView = false;
      this.showDetailView = true;
    }
    catch (err) {
      console.log("Error: " + err);
    }
  }

  async bookAppointment(placeDetail: any) {
    this.router.navigate(["calendar", placeDetail.place_id]);
  }
}
