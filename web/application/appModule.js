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
            page2_1.Page2
        ],
        imports: [platform_browser_1.BrowserModule, routes_1.RoutingModule, controlsModule_1.ControlsModule, providersModule_1.DataModule, ng2_bootstrap_1.PaginationModule, modalsModule_1.ModalsModule, common_1.CommonModule],
        bootstrap: [master_1.MasterLayout]
    }),
    __metadata("design:paramtypes", [])
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwTW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwTW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxzQ0FBdUM7QUFDdkMsOERBQXdEO0FBQ3hELDZEQUE2RDtBQUM3RCwwQ0FBNkM7QUFFN0MsMkNBQThDO0FBQzlDLHVDQUEwQztBQUMxQyx5Q0FBNkM7QUFDN0MsNkNBQTBDO0FBQzFDLDZDQUE4QztBQUM5Qyw0REFBeUQ7QUFDekQsc0RBQXVEO0FBQ3ZELDZDQUE4QztBQUM5QywrQ0FBZ0Q7QUFDaEQscUNBQXNDO0FBQ3RDLG1EQUFvRDtBQUNwRCwrREFBdUQ7QUFDdkQsc0RBQW1EO0FBb0JuRCxJQUFhLFNBQVM7SUFBdEI7SUFFQSxDQUFDO0lBQUQsZ0JBQUM7QUFBRCxDQUFDLEFBRkQsSUFFQztBQUZZLFNBQVM7SUFqQnJCLGVBQVEsQ0FBQztRQUNOLFlBQVksRUFBRTtZQUNWLHFCQUFZO1lBQ1osaUJBQVU7WUFDVixlQUFRO1lBQ1IseUJBQWE7WUFDYiw2QkFBZTtZQUNmLGlCQUFTO1lBQ1QsdUJBQVk7WUFDWixpQkFBUztZQUNULGFBQUs7U0FHUjtRQUNELE9BQU8sRUFBRSxDQUFDLGdDQUFhLEVBQUUsc0JBQWEsRUFBRSwrQkFBYyxFQUFFLDRCQUFVLEVBQUUsZ0NBQWdCLEVBQUUsMkJBQVksRUFBRSxxQkFBWSxDQUFDO1FBQ2pILFNBQVMsRUFBRSxDQUFDLHFCQUFZLENBQUM7S0FDNUIsQ0FBQzs7R0FDVyxTQUFTLENBRXJCO0FBRlksOEJBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge05nTW9kdWxlfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQge0Jyb3dzZXJNb2R1bGV9IGZyb20gXCJAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyXCI7XHJcbmltcG9ydCB7UGFnaW5hdGlvbk1vZHVsZX0gZnJvbSBcIm5nMi1ib290c3RyYXAvbmcyLWJvb3RzdHJhcFwiO1xyXG5pbXBvcnQge0NvbW1vbk1vZHVsZX0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xyXG5cclxuaW1wb3J0IHtNYXN0ZXJMYXlvdXR9IGZyb20gXCIuL2xheW91dHMvbWFzdGVyXCI7XHJcbmltcG9ydCB7TWFpbkxheW91dH0gZnJvbSBcIi4vbGF5b3V0cy9tYWluXCI7XHJcbmltcG9ydCB7Um91dGluZ01vZHVsZX0gZnJvbSBcIi4vcGFnZXMvcm91dGVzXCI7XHJcbmltcG9ydCB7UGFnZTJ9IGZyb20gXCIuL3BhZ2VzL3BhZ2UyL3BhZ2UyXCI7XHJcbmltcG9ydCB7TG9naW5QYWdlfSBmcm9tIFwiLi9wYWdlcy9sb2dpbi9sb2dpblwiO1xyXG5pbXBvcnQge0NvbnRyb2xzTW9kdWxlfSBmcm9tIFwiLi9jb250cm9scy9jb250cm9sc01vZHVsZVwiO1xyXG5pbXBvcnQge05vdEZvdW5kUGFnZX0gZnJvbSBcIi4vcGFnZXMvbm90Zm91bmQvbm90Zm91bmRcIjtcclxuaW1wb3J0IHtFcnJvclBhZ2V9IGZyb20gXCIuL3BhZ2VzL2Vycm9yL2Vycm9yXCI7XHJcbmltcG9ydCB7Q29tcGFuaWVzUGFnZX0gZnJvbSBcIi4vcGFnZXMvY29tcGFuaWVzXCI7XHJcbmltcG9ydCB7SWNocFBhZ2V9IGZyb20gXCIuL3BhZ2VzL2ljaHBcIjtcclxuaW1wb3J0IHtCdXNpbmVzc21lblBhZ2V9IGZyb20gXCIuL3BhZ2VzL2J1c2luZXNzbWVuXCI7XHJcbmltcG9ydCB7RGF0YU1vZHVsZX0gZnJvbSBcIi4vcHJvdmlkZXJzL3Byb3ZpZGVyc01vZHVsZVwiO1xyXG5pbXBvcnQge01vZGFsc01vZHVsZX0gZnJvbSBcIi4vbW9kYWxzL21vZGFsc01vZHVsZVwiO1xyXG5cclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgICBkZWNsYXJhdGlvbnM6IFtcclxuICAgICAgICBNYXN0ZXJMYXlvdXQsXHJcbiAgICAgICAgTWFpbkxheW91dCxcclxuICAgICAgICBJY2hwUGFnZSxcclxuICAgICAgICBDb21wYW5pZXNQYWdlLFxyXG4gICAgICAgIEJ1c2luZXNzbWVuUGFnZSxcclxuICAgICAgICBFcnJvclBhZ2UsXHJcbiAgICAgICAgTm90Rm91bmRQYWdlLFxyXG4gICAgICAgIExvZ2luUGFnZSxcclxuICAgICAgICBQYWdlMlxyXG5cclxuXHJcbiAgICBdLFxyXG4gICAgaW1wb3J0czogW0Jyb3dzZXJNb2R1bGUsIFJvdXRpbmdNb2R1bGUsIENvbnRyb2xzTW9kdWxlLCBEYXRhTW9kdWxlLCBQYWdpbmF0aW9uTW9kdWxlLCBNb2RhbHNNb2R1bGUsIENvbW1vbk1vZHVsZV0sXHJcbiAgICBib290c3RyYXA6IFtNYXN0ZXJMYXlvdXRdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBcHBNb2R1bGUge1xyXG5cclxufSJdfQ==