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
var page2_1 = require("./pages/page2/page2");
var login_1 = require("./pages/login/login");
var controlsModule_1 = require("./controls/controlsModule");
var notfound_1 = require("./pages/notfound/notfound");
var error_1 = require("./pages/error/error");
var companies_1 = require("./pages/companies");
var ichp_1 = require("./pages/ichp");
var businessmen_1 = require("./pages/businessmen");
var providersModule_1 = require("./providers/providersModule");
var history_1 = require("./modals/history/history");
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
            page2_1.Page2,
            history_1.PersonQueryHistoryModal
        ],
        imports: [platform_browser_1.BrowserModule, routes_1.RoutingModule, controlsModule_1.ControlsModule, providersModule_1.DataModule, ng2_bootstrap_1.PaginationModule, ng2_bootstrap_1.ModalModule, common_1.CommonModule],
        bootstrap: [master_1.MasterLayout]
    }),
    __metadata("design:paramtypes", [])
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwTW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwTW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxzQ0FBdUM7QUFDdkMsOERBQXdEO0FBQ3hELDZEQUEwRTtBQUMxRSwwQ0FBNkM7QUFFN0MsMkNBQThDO0FBQzlDLHVDQUEwQztBQUMxQyx5Q0FBNkM7QUFDN0MsNkNBQTBDO0FBQzFDLDZDQUE4QztBQUM5Qyw0REFBeUQ7QUFDekQsc0RBQXVEO0FBQ3ZELDZDQUE4QztBQUM5QywrQ0FBZ0Q7QUFDaEQscUNBQXNDO0FBQ3RDLG1EQUFvRDtBQUNwRCwrREFBdUQ7QUFDdkQsb0RBQWlFO0FBb0JqRTtJQUFBO0lBRUEsQ0FBQztJQUFELGdCQUFDO0FBQUQsQ0FBQyxBQUZELElBRUM7QUFGRDtJQWpCQyxlQUFRLENBQUM7UUFDTixZQUFZLEVBQUU7WUFDVixxQkFBWTtZQUNaLGlCQUFVO1lBQ1YsZUFBUTtZQUNSLHlCQUFhO1lBQ2IsNkJBQWU7WUFDZixpQkFBUztZQUNULHVCQUFZO1lBQ1osaUJBQVM7WUFDVCxhQUFLO1lBQ0wsaUNBQXVCO1NBRTFCO1FBQ0QsT0FBTyxFQUFFLENBQUMsZ0NBQWEsRUFBRSxzQkFBYSxFQUFFLCtCQUFjLEVBQUUsNEJBQVUsRUFBRSxnQ0FBZ0IsRUFBRSwyQkFBVyxFQUFFLHFCQUFZLENBQUM7UUFDaEgsU0FBUyxFQUFFLENBQUMscUJBQVksQ0FBQztLQUM1QixDQUFDOzthQUdEO0FBRlksb0JBQUEsU0FBUyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtOZ01vZHVsZX0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHtCcm93c2VyTW9kdWxlfSBmcm9tIFwiQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3NlclwiO1xyXG5pbXBvcnQge1BhZ2luYXRpb25Nb2R1bGUsIE1vZGFsTW9kdWxlfSBmcm9tIFwibmcyLWJvb3RzdHJhcC9uZzItYm9vdHN0cmFwXCI7XHJcbmltcG9ydCB7Q29tbW9uTW9kdWxlfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XHJcblxyXG5pbXBvcnQge01hc3RlckxheW91dH0gZnJvbSBcIi4vbGF5b3V0cy9tYXN0ZXJcIjtcclxuaW1wb3J0IHtNYWluTGF5b3V0fSBmcm9tIFwiLi9sYXlvdXRzL21haW5cIjtcclxuaW1wb3J0IHtSb3V0aW5nTW9kdWxlfSBmcm9tIFwiLi9wYWdlcy9yb3V0ZXNcIjtcclxuaW1wb3J0IHtQYWdlMn0gZnJvbSBcIi4vcGFnZXMvcGFnZTIvcGFnZTJcIjtcclxuaW1wb3J0IHtMb2dpblBhZ2V9IGZyb20gXCIuL3BhZ2VzL2xvZ2luL2xvZ2luXCI7XHJcbmltcG9ydCB7Q29udHJvbHNNb2R1bGV9IGZyb20gXCIuL2NvbnRyb2xzL2NvbnRyb2xzTW9kdWxlXCI7XHJcbmltcG9ydCB7Tm90Rm91bmRQYWdlfSBmcm9tIFwiLi9wYWdlcy9ub3Rmb3VuZC9ub3Rmb3VuZFwiO1xyXG5pbXBvcnQge0Vycm9yUGFnZX0gZnJvbSBcIi4vcGFnZXMvZXJyb3IvZXJyb3JcIjtcclxuaW1wb3J0IHtDb21wYW5pZXNQYWdlfSBmcm9tIFwiLi9wYWdlcy9jb21wYW5pZXNcIjtcclxuaW1wb3J0IHtJY2hwUGFnZX0gZnJvbSBcIi4vcGFnZXMvaWNocFwiO1xyXG5pbXBvcnQge0J1c2luZXNzbWVuUGFnZX0gZnJvbSBcIi4vcGFnZXMvYnVzaW5lc3NtZW5cIjtcclxuaW1wb3J0IHtEYXRhTW9kdWxlfSBmcm9tIFwiLi9wcm92aWRlcnMvcHJvdmlkZXJzTW9kdWxlXCI7XHJcbmltcG9ydCB7UGVyc29uUXVlcnlIaXN0b3J5TW9kYWx9IGZyb20gXCIuL21vZGFscy9oaXN0b3J5L2hpc3RvcnlcIjtcclxuXHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gICAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICAgICAgTWFzdGVyTGF5b3V0LFxyXG4gICAgICAgIE1haW5MYXlvdXQsXHJcbiAgICAgICAgSWNocFBhZ2UsXHJcbiAgICAgICAgQ29tcGFuaWVzUGFnZSxcclxuICAgICAgICBCdXNpbmVzc21lblBhZ2UsXHJcbiAgICAgICAgRXJyb3JQYWdlLFxyXG4gICAgICAgIE5vdEZvdW5kUGFnZSxcclxuICAgICAgICBMb2dpblBhZ2UsXHJcbiAgICAgICAgUGFnZTIsXHJcbiAgICAgICAgUGVyc29uUXVlcnlIaXN0b3J5TW9kYWxcclxuXHJcbiAgICBdLFxyXG4gICAgaW1wb3J0czogW0Jyb3dzZXJNb2R1bGUsIFJvdXRpbmdNb2R1bGUsIENvbnRyb2xzTW9kdWxlLCBEYXRhTW9kdWxlLCBQYWdpbmF0aW9uTW9kdWxlLCBNb2RhbE1vZHVsZSwgQ29tbW9uTW9kdWxlXSxcclxuICAgIGJvb3RzdHJhcDogW01hc3RlckxheW91dF1cclxufSlcclxuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7XHJcblxyXG59Il19