import { Component, OnInit } from "@angular/core";
import { DataService } from "../../data.service";

@Component({
  selector: "app-files-details",
  templateUrl: "./files-details.component.html",
  styleUrls: ["./files-details.component.scss"]
})
export class FilesDetailsComponent implements OnInit {
  item;

  constructor(private service: DataService) {
    this.item = this.service.selectedFile;
  }

  ngOnInit() {}
}
