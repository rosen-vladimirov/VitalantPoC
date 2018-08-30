"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("nativescript-angular/common");
var home_routing_module_1 = require("~/home/home-routing.module");
var home_component_1 = require("~/home/home.component");
var HomeModule = /** @class */ (function () {
    function HomeModule() {
    }
    HomeModule = __decorate([
        core_1.NgModule({
            imports: [common_1.NativeScriptCommonModule, home_routing_module_1.HomeRoutingModule],
            declarations: [home_component_1.HomeComponent],
            schemas: [core_1.NO_ERRORS_SCHEMA]
        })
    ], HomeModule);
    return HomeModule;
}());
exports.HomeModule = HomeModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyRDtBQUMzRCxzREFBdUU7QUFFdkUsa0VBQStEO0FBQy9ELHdEQUFzRDtBQU90RDtJQUFBO0lBQXlCLENBQUM7SUFBYixVQUFVO1FBTHRCLGVBQVEsQ0FBQztZQUNSLE9BQU8sRUFBRSxDQUFDLGlDQUF3QixFQUFFLHVDQUFpQixDQUFDO1lBQ3RELFlBQVksRUFBRSxDQUFDLDhCQUFhLENBQUM7WUFDN0IsT0FBTyxFQUFFLENBQUMsdUJBQWdCLENBQUM7U0FDNUIsQ0FBQztPQUNXLFVBQVUsQ0FBRztJQUFELGlCQUFDO0NBQUEsQUFBMUIsSUFBMEI7QUFBYixnQ0FBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdENvbW1vbk1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9jb21tb25cIjtcblxuaW1wb3J0IHsgSG9tZVJvdXRpbmdNb2R1bGUgfSBmcm9tIFwifi9ob21lL2hvbWUtcm91dGluZy5tb2R1bGVcIjtcbmltcG9ydCB7IEhvbWVDb21wb25lbnQgfSBmcm9tIFwifi9ob21lL2hvbWUuY29tcG9uZW50XCI7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtOYXRpdmVTY3JpcHRDb21tb25Nb2R1bGUsIEhvbWVSb3V0aW5nTW9kdWxlXSxcbiAgZGVjbGFyYXRpb25zOiBbSG9tZUNvbXBvbmVudF0sXG4gIHNjaGVtYXM6IFtOT19FUlJPUlNfU0NIRU1BXVxufSlcbmV4cG9ydCBjbGFzcyBIb21lTW9kdWxlIHt9XG4iXX0=