import { Component, OnInit } from "@angular/core";
import * as app from "tns-core-modules/application/application";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import { registerElement } from "nativescript-angular/element-registry";
registerElement("AR", () => require("nativescript-ar").AR);
import { AR, ARMaterial, ARPlaneTappedEventData } from "nativescript-ar";
import { Color } from "tns-core-modules/color/color";

@Component({
  selector: "app-augmented-reality",
  templateUrl: "./augmented-reality.component.html",
  styleUrls: ["./augmented-reality.component.scss"]
})
export class AugmentedRealityComponent implements OnInit {
  planeMaterial = <ARMaterial>{
    diffuse: new Color("white"),
    transparency: 0.2
  };
  constructor() {}

  ngOnInit() {}
  onDrawerButtonTap(): void {
    const sideDrawer = <RadSideDrawer>app.getRootView();
    sideDrawer.showDrawer();
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
