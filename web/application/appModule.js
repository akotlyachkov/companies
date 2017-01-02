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
var platform_browser_1 = require("@angular/platform-browser");
var ng2_bootstrap_1 = require("ng2-bootstrap/ng2-bootstrap");
var common_1 = require("@angular/common");
var master_1 = require("./layouts/master");
var main_1 = require("./layouts/main");
var routes_1 = require("./pages/routes");
var login_1 = require("./pages/login/login");
var controlsModule_1 = require("./controls/controlsModule");
var notfound_1 = require("./pages/notfound/notfound");
var error_1 = require("./pages/error/error");
var companies_1 = require("./pages/companies");
var ichp_1 = require("./pages/ichp");
var businessmen_1 = require("./features/bussinessmen/pages/businessmen");
var providersModule_1 = require("./providers/providersModule");
var modalsModule_1 = require("./modals/modalsModule");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        declarations: [
            master_1.MasterLayout,
            main_1.MainLayout,
            ichp_1.IchpPage,
            companies_1.CompaniesPage,
            businessmen_1.BusinessmenPage,
            error_1.ErrorPage,
            notfound_1.NotFoundPage,
            login_1.LoginPage,
        ],
        imports: [platform_browser_1.BrowserModule, routes_1.RoutingModule, controlsModule_1.ControlsModule, providersModule_1.DataModule, ng2_bootstrap_1.PaginationModule, modalsModule_1.ModalsModule, common_1.CommonModule],
        bootstrap: [master_1.MasterLayout]
    }),
    __metadata("design:paramtypes", [])
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwTW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwTW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxzQ0FBdUM7QUFDdkMsOERBQXdEO0FBQ3hELDZEQUE2RDtBQUM3RCwwQ0FBNkM7QUFFN0MsMkNBQThDO0FBQzlDLHVDQUEwQztBQUMxQyx5Q0FBNkM7QUFDN0MsNkNBQThDO0FBQzlDLDREQUF5RDtBQUN6RCxzREFBdUQ7QUFDdkQsNkNBQThDO0FBQzlDLCtDQUFnRDtBQUNoRCxxQ0FBc0M7QUFDdEMseUVBQTBFO0FBQzFFLCtEQUF1RDtBQUN2RCxzREFBbUQ7QUFrQm5ELElBQWEsU0FBUztJQUF0QjtJQUVBLENBQUM7SUFBRCxnQkFBQztBQUFELENBQUMsQUFGRCxJQUVDO0FBRlksU0FBUztJQWhCckIsZUFBUSxDQUFDO1FBQ04sWUFBWSxFQUFFO1lBQ1YscUJBQVk7WUFDWixpQkFBVTtZQUNWLGVBQVE7WUFDUix5QkFBYTtZQUNiLDZCQUFlO1lBQ2YsaUJBQVM7WUFDVCx1QkFBWTtZQUNaLGlCQUFTO1NBR1o7UUFDRCxPQUFPLEVBQUUsQ0FBQyxnQ0FBYSxFQUFFLHNCQUFhLEVBQUUsK0JBQWMsRUFBRSw0QkFBVSxFQUFFLGdDQUFnQixFQUFFLDJCQUFZLEVBQUUscUJBQVksQ0FBQztRQUNqSCxTQUFTLEVBQUUsQ0FBQyxxQkFBWSxDQUFDO0tBQzVCLENBQUM7O0dBQ1csU0FBUyxDQUVyQjtBQUZZLDhCQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtOZ01vZHVsZX0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHtCcm93c2VyTW9kdWxlfSBmcm9tIFwiQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3NlclwiO1xyXG5pbXBvcnQge1BhZ2luYXRpb25Nb2R1bGV9IGZyb20gXCJuZzItYm9vdHN0cmFwL25nMi1ib290c3RyYXBcIjtcclxuaW1wb3J0IHtDb21tb25Nb2R1bGV9IGZyb20gXCJAYW5ndWxhci9jb21tb25cIjtcclxuXHJcbmltcG9ydCB7TWFzdGVyTGF5b3V0fSBmcm9tIFwiLi9sYXlvdXRzL21hc3RlclwiO1xyXG5pbXBvcnQge01haW5MYXlvdXR9IGZyb20gXCIuL2xheW91dHMvbWFpblwiO1xyXG5pbXBvcnQge1JvdXRpbmdNb2R1bGV9IGZyb20gXCIuL3BhZ2VzL3JvdXRlc1wiO1xyXG5pbXBvcnQge0xvZ2luUGFnZX0gZnJvbSBcIi4vcGFnZXMvbG9naW4vbG9naW5cIjtcclxuaW1wb3J0IHtDb250cm9sc01vZHVsZX0gZnJvbSBcIi4vY29udHJvbHMvY29udHJvbHNNb2R1bGVcIjtcclxuaW1wb3J0IHtOb3RGb3VuZFBhZ2V9IGZyb20gXCIuL3BhZ2VzL25vdGZvdW5kL25vdGZvdW5kXCI7XHJcbmltcG9ydCB7RXJyb3JQYWdlfSBmcm9tIFwiLi9wYWdlcy9lcnJvci9lcnJvclwiO1xyXG5pbXBvcnQge0NvbXBhbmllc1BhZ2V9IGZyb20gXCIuL3BhZ2VzL2NvbXBhbmllc1wiO1xyXG5pbXBvcnQge0ljaHBQYWdlfSBmcm9tIFwiLi9wYWdlcy9pY2hwXCI7XHJcbmltcG9ydCB7QnVzaW5lc3NtZW5QYWdlfSBmcm9tIFwiLi9mZWF0dXJlcy9idXNzaW5lc3NtZW4vcGFnZXMvYnVzaW5lc3NtZW5cIjtcclxuaW1wb3J0IHtEYXRhTW9kdWxlfSBmcm9tIFwiLi9wcm92aWRlcnMvcHJvdmlkZXJzTW9kdWxlXCI7XHJcbmltcG9ydCB7TW9kYWxzTW9kdWxlfSBmcm9tIFwiLi9tb2RhbHMvbW9kYWxzTW9kdWxlXCI7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gICAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICAgICAgTWFzdGVyTGF5b3V0LFxyXG4gICAgICAgIE1haW5MYXlvdXQsXHJcbiAgICAgICAgSWNocFBhZ2UsXHJcbiAgICAgICAgQ29tcGFuaWVzUGFnZSxcclxuICAgICAgICBCdXNpbmVzc21lblBhZ2UsXHJcbiAgICAgICAgRXJyb3JQYWdlLFxyXG4gICAgICAgIE5vdEZvdW5kUGFnZSxcclxuICAgICAgICBMb2dpblBhZ2UsXHJcblxyXG5cclxuICAgIF0sXHJcbiAgICBpbXBvcnRzOiBbQnJvd3Nlck1vZHVsZSwgUm91dGluZ01vZHVsZSwgQ29udHJvbHNNb2R1bGUsIERhdGFNb2R1bGUsIFBhZ2luYXRpb25Nb2R1bGUsIE1vZGFsc01vZHVsZSwgQ29tbW9uTW9kdWxlXSxcclxuICAgIGJvb3RzdHJhcDogW01hc3RlckxheW91dF1cclxufSlcclxuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7XHJcblxyXG59Il19