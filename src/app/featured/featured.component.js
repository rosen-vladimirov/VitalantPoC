"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var app = require("tns-core-modules/application/application");
var FeaturedComponent = /** @class */ (function () {
    function FeaturedComponent() {
        // Use the component constructor to inject providers.
    }
    FeaturedComponent.prototype.ngOnInit = function () {
        // Init your component properties here.
    };
    FeaturedComponent.prototype.onDrawerButtonTap = function () {
        var sideDrawer = app.getRootView();
        sideDrawer.showDrawer();
    };
    FeaturedComponent = __decorate([
        core_1.Component({
            selector: "Featured",
            moduleId: module.id,
            templateUrl: "./featured.component.html"
        }),
        __metadata("design:paramtypes", [])
    ], FeaturedComponent);
    return FeaturedComponent;
}());
exports.FeaturedComponent = FeaturedComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmVhdHVyZWQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZmVhdHVyZWQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELDhEQUFnRTtBQVFoRTtJQUNFO1FBQ0UscURBQXFEO0lBQ3ZELENBQUM7SUFFRCxvQ0FBUSxHQUFSO1FBQ0UsdUNBQXVDO0lBQ3pDLENBQUM7SUFFRCw2Q0FBaUIsR0FBakI7UUFDRSxJQUFNLFVBQVUsR0FBa0IsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3BELFVBQVUsQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUMxQixDQUFDO0lBWlUsaUJBQWlCO1FBTDdCLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsVUFBVTtZQUNwQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLDJCQUEyQjtTQUN6QyxDQUFDOztPQUNXLGlCQUFpQixDQWE3QjtJQUFELHdCQUFDO0NBQUEsQUFiRCxJQWFDO0FBYlksOENBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0ICogYXMgYXBwIGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uL2FwcGxpY2F0aW9uXCI7XG5pbXBvcnQgeyBSYWRTaWRlRHJhd2VyIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1zaWRlZHJhd2VyXCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJGZWF0dXJlZFwiLFxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICB0ZW1wbGF0ZVVybDogXCIuL2ZlYXR1cmVkLmNvbXBvbmVudC5odG1sXCJcbn0pXG5leHBvcnQgY2xhc3MgRmVhdHVyZWRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICAvLyBVc2UgdGhlIGNvbXBvbmVudCBjb25zdHJ1Y3RvciB0byBpbmplY3QgcHJvdmlkZXJzLlxuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgLy8gSW5pdCB5b3VyIGNvbXBvbmVudCBwcm9wZXJ0aWVzIGhlcmUuXG4gIH1cblxuICBvbkRyYXdlckJ1dHRvblRhcCgpOiB2b2lkIHtcbiAgICBjb25zdCBzaWRlRHJhd2VyID0gPFJhZFNpZGVEcmF3ZXI+YXBwLmdldFJvb3RWaWV3KCk7XG4gICAgc2lkZURyYXdlci5zaG93RHJhd2VyKCk7XG4gIH1cbn1cbiJdfQ==