import { Component, OnInit } from "@angular/core";
import { DataService } from "../data.service";
import { DrawerHelper } from "../utils/drawer-helper";

@Component({
  selector: "app-ar",
  templateUrl: "./ar.component.html",
  styleUrls: ["./ar.component.scss"]
})
export class ArComponent implements OnInit {
  planeMaterial = {
    diffuse: "white",
    transparency: 0.2
  };
  constructor() {}

  ngOnInit() {}
  onDrawerButtonTap(): void {
    DrawerHelper.show();
  }
  planeTapped(args) {
    args.object
      .addModel({
        name: "Models.scnassets/Generator-final.dae",
        position: {
          x: args.position.x,
          y: args.position.y,
          z: args.position.z
        },
        scale: 0.5,
        mass: 20,
        onTap: node => console.log("model tapped: " + node.id)
      })
      .then(node => console.log("model added: " + node.id));
  }
}
