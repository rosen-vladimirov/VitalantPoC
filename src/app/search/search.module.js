"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("nativescript-angular/common");
var search_routing_module_1 = require("~/search/search-routing.module");
var search_component_1 = require("~/search/search.component");
var SearchModule = /** @class */ (function () {
    function SearchModule() {
    }
    SearchModule = __decorate([
        core_1.NgModule({
            imports: [common_1.NativeScriptCommonModule, search_routing_module_1.SearchRoutingModule],
            declarations: [search_component_1.SearchComponent],
            schemas: [core_1.NO_ERRORS_SCHEMA]
        })
    ], SearchModule);
    return SearchModule;
}());
exports.SearchModule = SearchModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNlYXJjaC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkQ7QUFDM0Qsc0RBQXVFO0FBRXZFLHdFQUFxRTtBQUNyRSw4REFBNEQ7QUFPNUQ7SUFBQTtJQUEyQixDQUFDO0lBQWYsWUFBWTtRQUx4QixlQUFRLENBQUM7WUFDUixPQUFPLEVBQUUsQ0FBQyxpQ0FBd0IsRUFBRSwyQ0FBbUIsQ0FBQztZQUN4RCxZQUFZLEVBQUUsQ0FBQyxrQ0FBZSxDQUFDO1lBQy9CLE9BQU8sRUFBRSxDQUFDLHVCQUFnQixDQUFDO1NBQzVCLENBQUM7T0FDVyxZQUFZLENBQUc7SUFBRCxtQkFBQztDQUFBLEFBQTVCLElBQTRCO0FBQWYsb0NBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRDb21tb25Nb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvY29tbW9uXCI7XG5cbmltcG9ydCB7IFNlYXJjaFJvdXRpbmdNb2R1bGUgfSBmcm9tIFwifi9zZWFyY2gvc2VhcmNoLXJvdXRpbmcubW9kdWxlXCI7XG5pbXBvcnQgeyBTZWFyY2hDb21wb25lbnQgfSBmcm9tIFwifi9zZWFyY2gvc2VhcmNoLmNvbXBvbmVudFwiO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbTmF0aXZlU2NyaXB0Q29tbW9uTW9kdWxlLCBTZWFyY2hSb3V0aW5nTW9kdWxlXSxcbiAgZGVjbGFyYXRpb25zOiBbU2VhcmNoQ29tcG9uZW50XSxcbiAgc2NoZW1hczogW05PX0VSUk9SU19TQ0hFTUFdXG59KVxuZXhwb3J0IGNsYXNzIFNlYXJjaE1vZHVsZSB7fVxuIl19