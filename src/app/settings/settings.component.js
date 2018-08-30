"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var app = require("tns-core-modules/application/application");
var data_service_1 = require("~/data.service");
var router_1 = require("nativescript-angular/router");
var SettingsComponent = /** @class */ (function () {
    function SettingsComponent(dataService, router) {
        this.dataService = dataService;
        this.router = router;
    }
    SettingsComponent.prototype.ngOnInit = function () {
        // Init your component properties here.
    };
    SettingsComponent.prototype.logout = function () {
        var _this = this;
        this.dataService.logout().then(function () {
            _this.router.navigate(["login"], { clearHistory: true });
        });
    };
    SettingsComponent.prototype.onDrawerButtonTap = function () {
        var sideDrawer = app.getRootView();
        sideDrawer.showDrawer();
    };
    SettingsComponent = __decorate([
        core_1.Component({
            selector: "Settings",
            moduleId: module.id,
            templateUrl: "./settings.component.html"
        }),
        __metadata("design:paramtypes", [data_service_1.DataService,
            router_1.RouterExtensions])
    ], SettingsComponent);
    return SettingsComponent;
}());
exports.SettingsComponent = SettingsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0dGluZ3MuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic2V0dGluZ3MuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELDhEQUFnRTtBQUVoRSwrQ0FBNkM7QUFDN0Msc0RBQStEO0FBTy9EO0lBQ0UsMkJBQ1UsV0FBd0IsRUFDeEIsTUFBd0I7UUFEeEIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIsV0FBTSxHQUFOLE1BQU0sQ0FBa0I7SUFDL0IsQ0FBQztJQUVKLG9DQUFRLEdBQVI7UUFDRSx1Q0FBdUM7SUFDekMsQ0FBQztJQUNELGtDQUFNLEdBQU47UUFBQSxpQkFJQztRQUhDLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxFQUFFLENBQUMsSUFBSSxDQUFDO1lBQzdCLEtBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxDQUFDLEVBQUUsRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztRQUMxRCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCw2Q0FBaUIsR0FBakI7UUFDRSxJQUFNLFVBQVUsR0FBa0IsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3BELFVBQVUsQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUMxQixDQUFDO0lBbEJVLGlCQUFpQjtRQUw3QixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLFVBQVU7WUFDcEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSwyQkFBMkI7U0FDekMsQ0FBQzt5Q0FHdUIsMEJBQVc7WUFDaEIseUJBQWdCO09BSHZCLGlCQUFpQixDQW1CN0I7SUFBRCx3QkFBQztDQUFBLEFBbkJELElBbUJDO0FBbkJZLDhDQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCAqIGFzIGFwcCBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvbi9hcHBsaWNhdGlvblwiO1xuaW1wb3J0IHsgUmFkU2lkZURyYXdlciB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdWktc2lkZWRyYXdlclwiO1xuaW1wb3J0IHsgRGF0YVNlcnZpY2UgfSBmcm9tIFwifi9kYXRhLnNlcnZpY2VcIjtcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJTZXR0aW5nc1wiLFxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICB0ZW1wbGF0ZVVybDogXCIuL3NldHRpbmdzLmNvbXBvbmVudC5odG1sXCJcbn0pXG5leHBvcnQgY2xhc3MgU2V0dGluZ3NDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGRhdGFTZXJ2aWNlOiBEYXRhU2VydmljZSxcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyRXh0ZW5zaW9uc1xuICApIHt9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgLy8gSW5pdCB5b3VyIGNvbXBvbmVudCBwcm9wZXJ0aWVzIGhlcmUuXG4gIH1cbiAgbG9nb3V0KCkge1xuICAgIHRoaXMuZGF0YVNlcnZpY2UubG9nb3V0KCkudGhlbigoKSA9PiB7XG4gICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCJsb2dpblwiXSwgeyBjbGVhckhpc3Rvcnk6IHRydWUgfSk7XG4gICAgfSk7XG4gIH1cblxuICBvbkRyYXdlckJ1dHRvblRhcCgpOiB2b2lkIHtcbiAgICBjb25zdCBzaWRlRHJhd2VyID0gPFJhZFNpZGVEcmF3ZXI+YXBwLmdldFJvb3RWaWV3KCk7XG4gICAgc2lkZURyYXdlci5zaG93RHJhd2VyKCk7XG4gIH1cbn1cbiJdfQ==