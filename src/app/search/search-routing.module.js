"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var search_component_1 = require("~/search/search.component");
var routes = [{ path: "", component: search_component_1.SearchComponent }];
var SearchRoutingModule = /** @class */ (function () {
    function SearchRoutingModule() {
    }
    SearchRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.NativeScriptRouterModule.forChild(routes)],
            exports: [router_1.NativeScriptRouterModule]
        })
    ], SearchRoutingModule);
    return SearchRoutingModule;
}());
exports.SearchRoutingModule = SearchRoutingModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLXJvdXRpbmcubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic2VhcmNoLXJvdXRpbmcubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlDO0FBRXpDLHNEQUF1RTtBQUV2RSw4REFBNEQ7QUFFNUQsSUFBTSxNQUFNLEdBQVcsQ0FBQyxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFFLGtDQUFlLEVBQUUsQ0FBQyxDQUFDO0FBTWxFO0lBQUE7SUFBa0MsQ0FBQztJQUF0QixtQkFBbUI7UUFKL0IsZUFBUSxDQUFDO1lBQ1IsT0FBTyxFQUFFLENBQUMsaUNBQXdCLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3BELE9BQU8sRUFBRSxDQUFDLGlDQUF3QixDQUFDO1NBQ3BDLENBQUM7T0FDVyxtQkFBbUIsQ0FBRztJQUFELDBCQUFDO0NBQUEsQUFBbkMsSUFBbUM7QUFBdEIsa0RBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUm91dGVzIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuXG5pbXBvcnQgeyBTZWFyY2hDb21wb25lbnQgfSBmcm9tIFwifi9zZWFyY2gvc2VhcmNoLmNvbXBvbmVudFwiO1xuXG5jb25zdCByb3V0ZXM6IFJvdXRlcyA9IFt7IHBhdGg6IFwiXCIsIGNvbXBvbmVudDogU2VhcmNoQ29tcG9uZW50IH1dO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLmZvckNoaWxkKHJvdXRlcyldLFxuICBleHBvcnRzOiBbTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlXVxufSlcbmV4cG9ydCBjbGFzcyBTZWFyY2hSb3V0aW5nTW9kdWxlIHt9XG4iXX0=