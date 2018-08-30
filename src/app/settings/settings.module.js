"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("nativescript-angular/common");
var settings_routing_module_1 = require("~/settings/settings-routing.module");
var settings_component_1 = require("~/settings/settings.component");
var SettingsModule = /** @class */ (function () {
    function SettingsModule() {
    }
    SettingsModule = __decorate([
        core_1.NgModule({
            imports: [common_1.NativeScriptCommonModule, settings_routing_module_1.SettingsRoutingModule],
            declarations: [settings_component_1.SettingsComponent],
            schemas: [core_1.NO_ERRORS_SCHEMA]
        })
    ], SettingsModule);
    return SettingsModule;
}());
exports.SettingsModule = SettingsModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0dGluZ3MubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic2V0dGluZ3MubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJEO0FBQzNELHNEQUF1RTtBQUV2RSw4RUFBMkU7QUFDM0Usb0VBQWtFO0FBT2xFO0lBQUE7SUFBNkIsQ0FBQztJQUFqQixjQUFjO1FBTDFCLGVBQVEsQ0FBQztZQUNSLE9BQU8sRUFBRSxDQUFDLGlDQUF3QixFQUFFLCtDQUFxQixDQUFDO1lBQzFELFlBQVksRUFBRSxDQUFDLHNDQUFpQixDQUFDO1lBQ2pDLE9BQU8sRUFBRSxDQUFDLHVCQUFnQixDQUFDO1NBQzVCLENBQUM7T0FDVyxjQUFjLENBQUc7SUFBRCxxQkFBQztDQUFBLEFBQTlCLElBQThCO0FBQWpCLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Q29tbW9uTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2NvbW1vblwiO1xuXG5pbXBvcnQgeyBTZXR0aW5nc1JvdXRpbmdNb2R1bGUgfSBmcm9tIFwifi9zZXR0aW5ncy9zZXR0aW5ncy1yb3V0aW5nLm1vZHVsZVwiO1xuaW1wb3J0IHsgU2V0dGluZ3NDb21wb25lbnQgfSBmcm9tIFwifi9zZXR0aW5ncy9zZXR0aW5ncy5jb21wb25lbnRcIjtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW05hdGl2ZVNjcmlwdENvbW1vbk1vZHVsZSwgU2V0dGluZ3NSb3V0aW5nTW9kdWxlXSxcbiAgZGVjbGFyYXRpb25zOiBbU2V0dGluZ3NDb21wb25lbnRdLFxuICBzY2hlbWFzOiBbTk9fRVJST1JTX1NDSEVNQV1cbn0pXG5leHBvcnQgY2xhc3MgU2V0dGluZ3NNb2R1bGUge31cbiJdfQ==