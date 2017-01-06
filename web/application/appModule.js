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
var forms_1 = require("@angular/forms");
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
var SearchPanelService_1 = require("./features/bussinessmen/controls/search/SearchPanelService");
var businessmen_2 = require("./features/bussinessmen/providers/businessmen");
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
        imports: [platform_browser_1.BrowserModule, routes_1.RoutingModule, controlsModule_1.ControlsModule, providersModule_1.DataModule, ng2_bootstrap_1.PaginationModule, modalsModule_1.ModalsModule, common_1.CommonModule, forms_1.FormsModule],
        bootstrap: [master_1.MasterLayout],
        providers: [SearchPanelService_1.FilterService, businessmen_2.BusinessmenProvider]
    }),
    __metadata("design:paramtypes", [])
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwTW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwTW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxzQ0FBdUM7QUFDdkMsOERBQXdEO0FBQ3hELDZEQUE2RDtBQUM3RCwwQ0FBNkM7QUFDN0Msd0NBQTZDO0FBRTdDLDJDQUE4QztBQUM5Qyx1Q0FBMEM7QUFDMUMseUNBQTZDO0FBQzdDLDZDQUE4QztBQUM5Qyw0REFBeUQ7QUFDekQsc0RBQXVEO0FBQ3ZELDZDQUE4QztBQUM5QywrQ0FBZ0Q7QUFDaEQscUNBQXNDO0FBQ3RDLHlFQUEwRTtBQUMxRSwrREFBdUQ7QUFDdkQsc0RBQW1EO0FBQ25ELGlHQUF5RjtBQUN6Riw2RUFBa0Y7QUFtQmxGLElBQWEsU0FBUztJQUF0QjtJQUVBLENBQUM7SUFBRCxnQkFBQztBQUFELENBQUMsQUFGRCxJQUVDO0FBRlksU0FBUztJQWpCckIsZUFBUSxDQUFDO1FBQ04sWUFBWSxFQUFFO1lBQ1YscUJBQVk7WUFDWixpQkFBVTtZQUNWLGVBQVE7WUFDUix5QkFBYTtZQUNiLDZCQUFlO1lBQ2YsaUJBQVM7WUFDVCx1QkFBWTtZQUNaLGlCQUFTO1NBR1o7UUFDRCxPQUFPLEVBQUUsQ0FBQyxnQ0FBYSxFQUFFLHNCQUFhLEVBQUUsK0JBQWMsRUFBRSw0QkFBVSxFQUFFLGdDQUFnQixFQUFFLDJCQUFZLEVBQUUscUJBQVksRUFBRSxtQkFBVyxDQUFDO1FBQzlILFNBQVMsRUFBRSxDQUFDLHFCQUFZLENBQUM7UUFDekIsU0FBUyxFQUFDLENBQUMsa0NBQWEsRUFBQyxpQ0FBbUIsQ0FBQztLQUNoRCxDQUFDOztHQUNXLFNBQVMsQ0FFckI7QUFGWSw4QkFBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TmdNb2R1bGV9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7QnJvd3Nlck1vZHVsZX0gZnJvbSBcIkBhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXJcIjtcclxuaW1wb3J0IHtQYWdpbmF0aW9uTW9kdWxlfSBmcm9tIFwibmcyLWJvb3RzdHJhcC9uZzItYm9vdHN0cmFwXCI7XHJcbmltcG9ydCB7Q29tbW9uTW9kdWxlfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XHJcbmltcG9ydCB7Rm9ybXNNb2R1bGV9ICAgZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5cclxuaW1wb3J0IHtNYXN0ZXJMYXlvdXR9IGZyb20gXCIuL2xheW91dHMvbWFzdGVyXCI7XHJcbmltcG9ydCB7TWFpbkxheW91dH0gZnJvbSBcIi4vbGF5b3V0cy9tYWluXCI7XHJcbmltcG9ydCB7Um91dGluZ01vZHVsZX0gZnJvbSBcIi4vcGFnZXMvcm91dGVzXCI7XHJcbmltcG9ydCB7TG9naW5QYWdlfSBmcm9tIFwiLi9wYWdlcy9sb2dpbi9sb2dpblwiO1xyXG5pbXBvcnQge0NvbnRyb2xzTW9kdWxlfSBmcm9tIFwiLi9jb250cm9scy9jb250cm9sc01vZHVsZVwiO1xyXG5pbXBvcnQge05vdEZvdW5kUGFnZX0gZnJvbSBcIi4vcGFnZXMvbm90Zm91bmQvbm90Zm91bmRcIjtcclxuaW1wb3J0IHtFcnJvclBhZ2V9IGZyb20gXCIuL3BhZ2VzL2Vycm9yL2Vycm9yXCI7XHJcbmltcG9ydCB7Q29tcGFuaWVzUGFnZX0gZnJvbSBcIi4vcGFnZXMvY29tcGFuaWVzXCI7XHJcbmltcG9ydCB7SWNocFBhZ2V9IGZyb20gXCIuL3BhZ2VzL2ljaHBcIjtcclxuaW1wb3J0IHtCdXNpbmVzc21lblBhZ2V9IGZyb20gXCIuL2ZlYXR1cmVzL2J1c3NpbmVzc21lbi9wYWdlcy9idXNpbmVzc21lblwiO1xyXG5pbXBvcnQge0RhdGFNb2R1bGV9IGZyb20gXCIuL3Byb3ZpZGVycy9wcm92aWRlcnNNb2R1bGVcIjtcclxuaW1wb3J0IHtNb2RhbHNNb2R1bGV9IGZyb20gXCIuL21vZGFscy9tb2RhbHNNb2R1bGVcIjtcclxuaW1wb3J0IHtGaWx0ZXJTZXJ2aWNlfSBmcm9tIFwiLi9mZWF0dXJlcy9idXNzaW5lc3NtZW4vY29udHJvbHMvc2VhcmNoL1NlYXJjaFBhbmVsU2VydmljZVwiO1xyXG5pbXBvcnQge0J1c2luZXNzbWVuUHJvdmlkZXJ9IGZyb20gXCIuL2ZlYXR1cmVzL2J1c3NpbmVzc21lbi9wcm92aWRlcnMvYnVzaW5lc3NtZW5cIjtcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgICBkZWNsYXJhdGlvbnM6IFtcclxuICAgICAgICBNYXN0ZXJMYXlvdXQsXHJcbiAgICAgICAgTWFpbkxheW91dCxcclxuICAgICAgICBJY2hwUGFnZSxcclxuICAgICAgICBDb21wYW5pZXNQYWdlLFxyXG4gICAgICAgIEJ1c2luZXNzbWVuUGFnZSxcclxuICAgICAgICBFcnJvclBhZ2UsXHJcbiAgICAgICAgTm90Rm91bmRQYWdlLFxyXG4gICAgICAgIExvZ2luUGFnZSxcclxuXHJcblxyXG4gICAgXSxcclxuICAgIGltcG9ydHM6IFtCcm93c2VyTW9kdWxlLCBSb3V0aW5nTW9kdWxlLCBDb250cm9sc01vZHVsZSwgRGF0YU1vZHVsZSwgUGFnaW5hdGlvbk1vZHVsZSwgTW9kYWxzTW9kdWxlLCBDb21tb25Nb2R1bGUsIEZvcm1zTW9kdWxlXSxcclxuICAgIGJvb3RzdHJhcDogW01hc3RlckxheW91dF0sXHJcbiAgICBwcm92aWRlcnM6W0ZpbHRlclNlcnZpY2UsQnVzaW5lc3NtZW5Qcm92aWRlcl1cclxufSlcclxuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7XHJcblxyXG59Il19