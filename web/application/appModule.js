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
var master_1 = require("./layouts/master");
var main_1 = require("./layouts/main");
var routes_1 = require("./pages/routes");
var page2_1 = require("./pages/page2/page2");
var login_1 = require("./pages/login/login");
var controlsModule_1 = require("./controls/controlsModule");
var notfound_1 = require("./pages/notfound/notfound");
var error_1 = require("./pages/error/error");
var companies_1 = require("./pages/companies");
var ichp_1 = require("./pages/ichp");
var businessmen_1 = require("./pages/businessmen");
var DataModule_1 = require("./data/DataModule");
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
            page2_1.Page2
        ],
        imports: [platform_browser_1.BrowserModule, routes_1.RoutingModule, controlsModule_1.ControlsModule, DataModule_1.DataModule],
        bootstrap: [master_1.MasterLayout]
    }),
    __metadata("design:paramtypes", [])
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwTW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwTW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxzQ0FBdUM7QUFDdkMsOERBQXdEO0FBQ3hELDJDQUE4QztBQUM5Qyx1Q0FBMEM7QUFDMUMseUNBQTZDO0FBQzdDLDZDQUEwQztBQUMxQyw2Q0FBOEM7QUFDOUMsNERBQXlEO0FBQ3pELHNEQUF1RDtBQUN2RCw2Q0FBOEM7QUFDOUMsK0NBQWdEO0FBQ2hELHFDQUFzQztBQUN0QyxtREFBb0Q7QUFDcEQsZ0RBQTZDO0FBbUI3QztJQUFBO0lBRUEsQ0FBQztJQUFELGdCQUFDO0FBQUQsQ0FBQyxBQUZELElBRUM7QUFGRDtJQWpCQyxlQUFRLENBQUM7UUFDTixZQUFZLEVBQUU7WUFDVixxQkFBWTtZQUNaLGlCQUFVO1lBQ1YsZUFBUTtZQUNSLHlCQUFhO1lBQ2IsNkJBQWU7WUFDZixpQkFBUztZQUNULHVCQUFZO1lBQ1osaUJBQVM7WUFDVCxhQUFLO1NBR1I7UUFDRCxPQUFPLEVBQUUsQ0FBQyxnQ0FBYSxFQUFFLHNCQUFhLEVBQUUsK0JBQWMsRUFBRSx1QkFBVSxDQUFDO1FBQ25FLFNBQVMsRUFBRSxDQUFDLHFCQUFZLENBQUM7S0FDNUIsQ0FBQzs7YUFHRDtBQUZZLG9CQUFBLFNBQVMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TmdNb2R1bGV9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7QnJvd3Nlck1vZHVsZX0gZnJvbSBcIkBhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXJcIjtcclxuaW1wb3J0IHtNYXN0ZXJMYXlvdXR9IGZyb20gXCIuL2xheW91dHMvbWFzdGVyXCI7XHJcbmltcG9ydCB7TWFpbkxheW91dH0gZnJvbSBcIi4vbGF5b3V0cy9tYWluXCI7XHJcbmltcG9ydCB7Um91dGluZ01vZHVsZX0gZnJvbSBcIi4vcGFnZXMvcm91dGVzXCI7XHJcbmltcG9ydCB7UGFnZTJ9IGZyb20gXCIuL3BhZ2VzL3BhZ2UyL3BhZ2UyXCI7XHJcbmltcG9ydCB7TG9naW5QYWdlfSBmcm9tIFwiLi9wYWdlcy9sb2dpbi9sb2dpblwiO1xyXG5pbXBvcnQge0NvbnRyb2xzTW9kdWxlfSBmcm9tIFwiLi9jb250cm9scy9jb250cm9sc01vZHVsZVwiO1xyXG5pbXBvcnQge05vdEZvdW5kUGFnZX0gZnJvbSBcIi4vcGFnZXMvbm90Zm91bmQvbm90Zm91bmRcIjtcclxuaW1wb3J0IHtFcnJvclBhZ2V9IGZyb20gXCIuL3BhZ2VzL2Vycm9yL2Vycm9yXCI7XHJcbmltcG9ydCB7Q29tcGFuaWVzUGFnZX0gZnJvbSBcIi4vcGFnZXMvY29tcGFuaWVzXCI7XHJcbmltcG9ydCB7SWNocFBhZ2V9IGZyb20gXCIuL3BhZ2VzL2ljaHBcIjtcclxuaW1wb3J0IHtCdXNpbmVzc21lblBhZ2V9IGZyb20gXCIuL3BhZ2VzL2J1c2luZXNzbWVuXCI7XHJcbmltcG9ydCB7RGF0YU1vZHVsZX0gZnJvbSBcIi4vZGF0YS9EYXRhTW9kdWxlXCI7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gICAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICAgICAgTWFzdGVyTGF5b3V0LFxyXG4gICAgICAgIE1haW5MYXlvdXQsXHJcbiAgICAgICAgSWNocFBhZ2UsXHJcbiAgICAgICAgQ29tcGFuaWVzUGFnZSxcclxuICAgICAgICBCdXNpbmVzc21lblBhZ2UsXHJcbiAgICAgICAgRXJyb3JQYWdlLFxyXG4gICAgICAgIE5vdEZvdW5kUGFnZSxcclxuICAgICAgICBMb2dpblBhZ2UsXHJcbiAgICAgICAgUGFnZTJcclxuXHJcblxyXG4gICAgXSxcclxuICAgIGltcG9ydHM6IFtCcm93c2VyTW9kdWxlLCBSb3V0aW5nTW9kdWxlLCBDb250cm9sc01vZHVsZSwgRGF0YU1vZHVsZV0sXHJcbiAgICBib290c3RyYXA6IFtNYXN0ZXJMYXlvdXRdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBcHBNb2R1bGUge1xyXG5cclxufSJdfQ==