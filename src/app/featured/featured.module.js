"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("nativescript-angular/common");
var featured_routing_module_1 = require("~/featured/featured-routing.module");
var featured_component_1 = require("~/featured/featured.component");
var FeaturedModule = /** @class */ (function () {
    function FeaturedModule() {
    }
    FeaturedModule = __decorate([
        core_1.NgModule({
            imports: [common_1.NativeScriptCommonModule, featured_routing_module_1.FeaturedRoutingModule],
            declarations: [featured_component_1.FeaturedComponent],
            schemas: [core_1.NO_ERRORS_SCHEMA]
        })
    ], FeaturedModule);
    return FeaturedModule;
}());
exports.FeaturedModule = FeaturedModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmVhdHVyZWQubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZmVhdHVyZWQubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJEO0FBQzNELHNEQUF1RTtBQUV2RSw4RUFBMkU7QUFDM0Usb0VBQWtFO0FBT2xFO0lBQUE7SUFBNkIsQ0FBQztJQUFqQixjQUFjO1FBTDFCLGVBQVEsQ0FBQztZQUNSLE9BQU8sRUFBRSxDQUFDLGlDQUF3QixFQUFFLCtDQUFxQixDQUFDO1lBQzFELFlBQVksRUFBRSxDQUFDLHNDQUFpQixDQUFDO1lBQ2pDLE9BQU8sRUFBRSxDQUFDLHVCQUFnQixDQUFDO1NBQzVCLENBQUM7T0FDVyxjQUFjLENBQUc7SUFBRCxxQkFBQztDQUFBLEFBQTlCLElBQThCO0FBQWpCLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Q29tbW9uTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2NvbW1vblwiO1xuXG5pbXBvcnQgeyBGZWF0dXJlZFJvdXRpbmdNb2R1bGUgfSBmcm9tIFwifi9mZWF0dXJlZC9mZWF0dXJlZC1yb3V0aW5nLm1vZHVsZVwiO1xuaW1wb3J0IHsgRmVhdHVyZWRDb21wb25lbnQgfSBmcm9tIFwifi9mZWF0dXJlZC9mZWF0dXJlZC5jb21wb25lbnRcIjtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW05hdGl2ZVNjcmlwdENvbW1vbk1vZHVsZSwgRmVhdHVyZWRSb3V0aW5nTW9kdWxlXSxcbiAgZGVjbGFyYXRpb25zOiBbRmVhdHVyZWRDb21wb25lbnRdLFxuICBzY2hlbWFzOiBbTk9fRVJST1JTX1NDSEVNQV1cbn0pXG5leHBvcnQgY2xhc3MgRmVhdHVyZWRNb2R1bGUge31cbiJdfQ==