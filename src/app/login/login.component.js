"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var data_service_1 = require("~/data.service");
var router_1 = require("nativescript-angular/router");
var LoginComponent = /** @class */ (function () {
    function LoginComponent(dataService, router, service) {
        this.dataService = dataService;
        this.router = router;
        this.service = service;
        // Use the component constructor to inject providers.
    }
    LoginComponent.prototype.ngOnInit = function () {
        // Init your component properties here.
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        console.log("huh");
        this.dataService.login("ignacio", "ignacio").then(function (data) {
            _this.router.navigate([""], { clearHistory: true });
        });
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: "Login",
            moduleId: module.id,
            templateUrl: "./login.component.html"
        }),
        __metadata("design:paramtypes", [data_service_1.DataService,
            router_1.RouterExtensions,
            data_service_1.DataService])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBR2xELCtDQUE2QztBQUM3QyxzREFBK0Q7QUFPL0Q7SUFDRSx3QkFDVSxXQUF3QixFQUN4QixNQUF3QixFQUN4QixPQUFvQjtRQUZwQixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4QixXQUFNLEdBQU4sTUFBTSxDQUFrQjtRQUN4QixZQUFPLEdBQVAsT0FBTyxDQUFhO1FBRTVCLHFEQUFxRDtJQUN2RCxDQUFDO0lBRUQsaUNBQVEsR0FBUjtRQUNFLHVDQUF1QztJQUN6QyxDQUFDO0lBRUQsOEJBQUssR0FBTDtRQUFBLGlCQUtDO1FBSkMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNuQixJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxTQUFTLEVBQUUsU0FBUyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUEsSUFBSTtZQUNwRCxLQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7UUFDckQsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBbEJVLGNBQWM7UUFMMUIsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxPQUFPO1lBQ2pCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsd0JBQXdCO1NBQ3RDLENBQUM7eUNBR3VCLDBCQUFXO1lBQ2hCLHlCQUFnQjtZQUNmLDBCQUFXO09BSm5CLGNBQWMsQ0FtQjFCO0lBQUQscUJBQUM7Q0FBQSxBQW5CRCxJQW1CQztBQW5CWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCAqIGFzIGFwcCBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvbi9hcHBsaWNhdGlvblwiO1xuaW1wb3J0IHsgUmFkU2lkZURyYXdlciB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdWktc2lkZWRyYXdlclwiO1xuaW1wb3J0IHsgRGF0YVNlcnZpY2UgfSBmcm9tIFwifi9kYXRhLnNlcnZpY2VcIjtcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJMb2dpblwiLFxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICB0ZW1wbGF0ZVVybDogXCIuL2xvZ2luLmNvbXBvbmVudC5odG1sXCJcbn0pXG5leHBvcnQgY2xhc3MgTG9naW5Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGRhdGFTZXJ2aWNlOiBEYXRhU2VydmljZSxcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyRXh0ZW5zaW9ucyxcbiAgICBwcml2YXRlIHNlcnZpY2U6IERhdGFTZXJ2aWNlXG4gICkge1xuICAgIC8vIFVzZSB0aGUgY29tcG9uZW50IGNvbnN0cnVjdG9yIHRvIGluamVjdCBwcm92aWRlcnMuXG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAvLyBJbml0IHlvdXIgY29tcG9uZW50IHByb3BlcnRpZXMgaGVyZS5cbiAgfVxuXG4gIGxvZ2luKCkge1xuICAgIGNvbnNvbGUubG9nKFwiaHVoXCIpO1xuICAgIHRoaXMuZGF0YVNlcnZpY2UubG9naW4oXCJpZ25hY2lvXCIsIFwiaWduYWNpb1wiKS50aGVuKGRhdGEgPT4ge1xuICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiXCJdLCB7IGNsZWFySGlzdG9yeTogdHJ1ZSB9KTtcbiAgICB9KTtcbiAgfVxufVxuIl19