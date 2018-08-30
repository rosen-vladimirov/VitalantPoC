"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("nativescript-angular/common");
var login_routing_module_1 = require("~/login/login-routing.module");
var login_component_1 = require("~/login/login.component");
var LoginModule = /** @class */ (function () {
    function LoginModule() {
    }
    LoginModule = __decorate([
        core_1.NgModule({
            imports: [common_1.NativeScriptCommonModule, login_routing_module_1.LoginRoutingModule],
            declarations: [login_component_1.LoginComponent],
            schemas: [core_1.NO_ERRORS_SCHEMA]
        })
    ], LoginModule);
    return LoginModule;
}());
exports.LoginModule = LoginModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4ubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4ubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJEO0FBQzNELHNEQUF1RTtBQUV2RSxxRUFBa0U7QUFDbEUsMkRBQXlEO0FBT3pEO0lBQUE7SUFBMEIsQ0FBQztJQUFkLFdBQVc7UUFMdkIsZUFBUSxDQUFDO1lBQ1IsT0FBTyxFQUFFLENBQUMsaUNBQXdCLEVBQUUseUNBQWtCLENBQUM7WUFDdkQsWUFBWSxFQUFFLENBQUMsZ0NBQWMsQ0FBQztZQUM5QixPQUFPLEVBQUUsQ0FBQyx1QkFBZ0IsQ0FBQztTQUM1QixDQUFDO09BQ1csV0FBVyxDQUFHO0lBQUQsa0JBQUM7Q0FBQSxBQUEzQixJQUEyQjtBQUFkLGtDQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Q29tbW9uTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2NvbW1vblwiO1xuXG5pbXBvcnQgeyBMb2dpblJvdXRpbmdNb2R1bGUgfSBmcm9tIFwifi9sb2dpbi9sb2dpbi1yb3V0aW5nLm1vZHVsZVwiO1xuaW1wb3J0IHsgTG9naW5Db21wb25lbnQgfSBmcm9tIFwifi9sb2dpbi9sb2dpbi5jb21wb25lbnRcIjtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW05hdGl2ZVNjcmlwdENvbW1vbk1vZHVsZSwgTG9naW5Sb3V0aW5nTW9kdWxlXSxcbiAgZGVjbGFyYXRpb25zOiBbTG9naW5Db21wb25lbnRdLFxuICBzY2hlbWFzOiBbTk9fRVJST1JTX1NDSEVNQV1cbn0pXG5leHBvcnQgY2xhc3MgTG9naW5Nb2R1bGUge31cbiJdfQ==