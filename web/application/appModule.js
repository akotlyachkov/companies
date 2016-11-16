"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var master_1 = require("./pages/master/master");
var platform_browser_1 = require("@angular/platform-browser");
var routes_1 = require("./pages/routes");
var page2_1 = require("./pages/page2/page2");
var page1_1 = require("./pages/page1/page1");
var login_1 = require("./pages/login/login");
var controlsModule_1 = require("./controls/controlsModule");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                login_1.LoginPage,
                master_1.MasterLayout,
                page1_1.Page1,
                page2_1.Page2
            ],
            imports: [platform_browser_1.BrowserModule, routes_1.RoutingModule, controlsModule_1.ControlsModule],
            bootstrap: [master_1.MasterLayout]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwTW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwTW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBdUIsZUFBZSxDQUFDLENBQUE7QUFDdkMsdUJBQTJCLHVCQUF1QixDQUFDLENBQUE7QUFDbkQsaUNBQTRCLDJCQUEyQixDQUFDLENBQUE7QUFDeEQsdUJBQTRCLGdCQUFnQixDQUFDLENBQUE7QUFDN0Msc0JBQW9CLHFCQUFxQixDQUFDLENBQUE7QUFDMUMsc0JBQW9CLHFCQUFxQixDQUFDLENBQUE7QUFDMUMsc0JBQXdCLHFCQUFxQixDQUFDLENBQUE7QUFDOUMsK0JBQTZCLDJCQUEyQixDQUFDLENBQUE7QUFZekQ7SUFBQTtJQUVBLENBQUM7SUFaRDtRQUFDLGVBQVEsQ0FBQztZQUNOLFlBQVksRUFBRTtnQkFDVixpQkFBUztnQkFDVCxxQkFBWTtnQkFDWixhQUFLO2dCQUNMLGFBQUs7YUFDUjtZQUNELE9BQU8sRUFBRSxDQUFDLGdDQUFhLEVBQUUsc0JBQWEsRUFBQywrQkFBYyxDQUFDO1lBQ3RELFNBQVMsRUFBRSxDQUFDLHFCQUFZLENBQUM7U0FDNUIsQ0FBQzs7aUJBQUE7SUFHRixnQkFBQztBQUFELENBQUMsQUFGRCxJQUVDO0FBRlksaUJBQVMsWUFFckIsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TmdNb2R1bGV9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7TWFzdGVyTGF5b3V0fSBmcm9tIFwiLi9wYWdlcy9tYXN0ZXIvbWFzdGVyXCI7XHJcbmltcG9ydCB7QnJvd3Nlck1vZHVsZX0gZnJvbSBcIkBhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXJcIjtcclxuaW1wb3J0IHtSb3V0aW5nTW9kdWxlfSBmcm9tIFwiLi9wYWdlcy9yb3V0ZXNcIjtcclxuaW1wb3J0IHtQYWdlMn0gZnJvbSBcIi4vcGFnZXMvcGFnZTIvcGFnZTJcIjtcclxuaW1wb3J0IHtQYWdlMX0gZnJvbSBcIi4vcGFnZXMvcGFnZTEvcGFnZTFcIjtcclxuaW1wb3J0IHtMb2dpblBhZ2V9IGZyb20gXCIuL3BhZ2VzL2xvZ2luL2xvZ2luXCI7XHJcbmltcG9ydCB7Q29udHJvbHNNb2R1bGV9IGZyb20gXCIuL2NvbnRyb2xzL2NvbnRyb2xzTW9kdWxlXCI7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gICAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICAgICAgTG9naW5QYWdlLFxyXG4gICAgICAgIE1hc3RlckxheW91dCxcclxuICAgICAgICBQYWdlMSxcclxuICAgICAgICBQYWdlMlxyXG4gICAgXSxcclxuICAgIGltcG9ydHM6IFtCcm93c2VyTW9kdWxlLCBSb3V0aW5nTW9kdWxlLENvbnRyb2xzTW9kdWxlXSxcclxuICAgIGJvb3RzdHJhcDogW01hc3RlckxheW91dF1cclxufSlcclxuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7XHJcblxyXG59Il19