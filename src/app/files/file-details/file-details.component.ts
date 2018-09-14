import { Component, OnInit } from "@angular/core";
import { DataService } from "../../data.service";

@Component({
  selector: "app-file-details",
  templateUrl: "./file-details.component.html",
  styleUrls: ["./file-details.component.scss"]
})
export class FileDetailsComponent implements OnInit {
  item;

  constructor(private service: DataService) {
    this.item = this.service.selectedFile;
  }

  ngOnInit() {}
}
