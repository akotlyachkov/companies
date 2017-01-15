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
var serverConfig_1 = require("./providers/serverConfig");
var serverConfigResolver_1 = require("./providers/serverConfigResolver");
var global_1 = require("./providers/global");
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
        providers: [SearchPanelService_1.FilterService, businessmen_2.BusinessmenProvider, serverConfig_1.ServerConfigProvider, serverConfigResolver_1.ServerConfigResolver, global_1.SharedService]
    }),
    __metadata("design:paramtypes", [])
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwTW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwTW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxzQ0FBdUM7QUFDdkMsOERBQXdEO0FBQ3hELDZEQUE2RDtBQUM3RCwwQ0FBNkM7QUFDN0Msd0NBQTZDO0FBRTdDLDJDQUE4QztBQUM5Qyx1Q0FBMEM7QUFDMUMseUNBQTZDO0FBQzdDLDZDQUE4QztBQUM5Qyw0REFBeUQ7QUFDekQsc0RBQXVEO0FBQ3ZELDZDQUE4QztBQUM5QywrQ0FBZ0Q7QUFDaEQscUNBQXNDO0FBQ3RDLHlFQUEwRTtBQUMxRSwrREFBdUQ7QUFDdkQsc0RBQW1EO0FBQ25ELGlHQUF5RjtBQUN6Riw2RUFBa0Y7QUFDbEYseURBQThEO0FBQzlELHlFQUFzRTtBQUN0RSw2Q0FBaUQ7QUFpQmpEO0lBQUE7SUFFQSxDQUFDO0lBQUQsZ0JBQUM7QUFBRCxDQUFDLEFBRkQsSUFFQztBQUZEO0lBZkMsZUFBUSxDQUFDO1FBQ04sWUFBWSxFQUFFO1lBQ1YscUJBQVk7WUFDWixpQkFBVTtZQUNWLGVBQVE7WUFDUix5QkFBYTtZQUNiLDZCQUFlO1lBQ2YsaUJBQVM7WUFDVCx1QkFBWTtZQUNaLGlCQUFTO1NBQ1o7UUFDRCxPQUFPLEVBQUUsQ0FBQyxnQ0FBYSxFQUFFLHNCQUFhLEVBQUUsK0JBQWMsRUFBRSw0QkFBVSxFQUFFLGdDQUFnQixFQUFFLDJCQUFZLEVBQUUscUJBQVksRUFBRSxtQkFBVyxDQUFDO1FBQzlILFNBQVMsRUFBRSxDQUFDLHFCQUFZLENBQUM7UUFDekIsU0FBUyxFQUFDLENBQUMsa0NBQWEsRUFBQyxpQ0FBbUIsRUFBQyxtQ0FBb0IsRUFBQywyQ0FBb0IsRUFBQyxzQkFBYSxDQUFDO0tBQ3hHLENBQUM7O2FBR0Q7QUFGWSxvQkFBQSxTQUFTLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge05nTW9kdWxlfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQge0Jyb3dzZXJNb2R1bGV9IGZyb20gXCJAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyXCI7XHJcbmltcG9ydCB7UGFnaW5hdGlvbk1vZHVsZX0gZnJvbSBcIm5nMi1ib290c3RyYXAvbmcyLWJvb3RzdHJhcFwiO1xyXG5pbXBvcnQge0NvbW1vbk1vZHVsZX0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xyXG5pbXBvcnQge0Zvcm1zTW9kdWxlfSAgIGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuXHJcbmltcG9ydCB7TWFzdGVyTGF5b3V0fSBmcm9tIFwiLi9sYXlvdXRzL21hc3RlclwiO1xyXG5pbXBvcnQge01haW5MYXlvdXR9IGZyb20gXCIuL2xheW91dHMvbWFpblwiO1xyXG5pbXBvcnQge1JvdXRpbmdNb2R1bGV9IGZyb20gXCIuL3BhZ2VzL3JvdXRlc1wiO1xyXG5pbXBvcnQge0xvZ2luUGFnZX0gZnJvbSBcIi4vcGFnZXMvbG9naW4vbG9naW5cIjtcclxuaW1wb3J0IHtDb250cm9sc01vZHVsZX0gZnJvbSBcIi4vY29udHJvbHMvY29udHJvbHNNb2R1bGVcIjtcclxuaW1wb3J0IHtOb3RGb3VuZFBhZ2V9IGZyb20gXCIuL3BhZ2VzL25vdGZvdW5kL25vdGZvdW5kXCI7XHJcbmltcG9ydCB7RXJyb3JQYWdlfSBmcm9tIFwiLi9wYWdlcy9lcnJvci9lcnJvclwiO1xyXG5pbXBvcnQge0NvbXBhbmllc1BhZ2V9IGZyb20gXCIuL3BhZ2VzL2NvbXBhbmllc1wiO1xyXG5pbXBvcnQge0ljaHBQYWdlfSBmcm9tIFwiLi9wYWdlcy9pY2hwXCI7XHJcbmltcG9ydCB7QnVzaW5lc3NtZW5QYWdlfSBmcm9tIFwiLi9mZWF0dXJlcy9idXNzaW5lc3NtZW4vcGFnZXMvYnVzaW5lc3NtZW5cIjtcclxuaW1wb3J0IHtEYXRhTW9kdWxlfSBmcm9tIFwiLi9wcm92aWRlcnMvcHJvdmlkZXJzTW9kdWxlXCI7XHJcbmltcG9ydCB7TW9kYWxzTW9kdWxlfSBmcm9tIFwiLi9tb2RhbHMvbW9kYWxzTW9kdWxlXCI7XHJcbmltcG9ydCB7RmlsdGVyU2VydmljZX0gZnJvbSBcIi4vZmVhdHVyZXMvYnVzc2luZXNzbWVuL2NvbnRyb2xzL3NlYXJjaC9TZWFyY2hQYW5lbFNlcnZpY2VcIjtcclxuaW1wb3J0IHtCdXNpbmVzc21lblByb3ZpZGVyfSBmcm9tIFwiLi9mZWF0dXJlcy9idXNzaW5lc3NtZW4vcHJvdmlkZXJzL2J1c2luZXNzbWVuXCI7XHJcbmltcG9ydCB7U2VydmVyQ29uZmlnUHJvdmlkZXJ9IGZyb20gXCIuL3Byb3ZpZGVycy9zZXJ2ZXJDb25maWdcIjtcclxuaW1wb3J0IHtTZXJ2ZXJDb25maWdSZXNvbHZlcn0gZnJvbSBcIi4vcHJvdmlkZXJzL3NlcnZlckNvbmZpZ1Jlc29sdmVyXCI7XHJcbmltcG9ydCB7U2hhcmVkU2VydmljZX0gZnJvbSBcIi4vcHJvdmlkZXJzL2dsb2JhbFwiO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICAgIGRlY2xhcmF0aW9uczogW1xyXG4gICAgICAgIE1hc3RlckxheW91dCxcclxuICAgICAgICBNYWluTGF5b3V0LFxyXG4gICAgICAgIEljaHBQYWdlLFxyXG4gICAgICAgIENvbXBhbmllc1BhZ2UsXHJcbiAgICAgICAgQnVzaW5lc3NtZW5QYWdlLFxyXG4gICAgICAgIEVycm9yUGFnZSxcclxuICAgICAgICBOb3RGb3VuZFBhZ2UsXHJcbiAgICAgICAgTG9naW5QYWdlLFxyXG4gICAgXSxcclxuICAgIGltcG9ydHM6IFtCcm93c2VyTW9kdWxlLCBSb3V0aW5nTW9kdWxlLCBDb250cm9sc01vZHVsZSwgRGF0YU1vZHVsZSwgUGFnaW5hdGlvbk1vZHVsZSwgTW9kYWxzTW9kdWxlLCBDb21tb25Nb2R1bGUsIEZvcm1zTW9kdWxlXSxcclxuICAgIGJvb3RzdHJhcDogW01hc3RlckxheW91dF0sXHJcbiAgICBwcm92aWRlcnM6W0ZpbHRlclNlcnZpY2UsQnVzaW5lc3NtZW5Qcm92aWRlcixTZXJ2ZXJDb25maWdQcm92aWRlcixTZXJ2ZXJDb25maWdSZXNvbHZlcixTaGFyZWRTZXJ2aWNlXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQXBwTW9kdWxlIHtcclxuXHJcbn0iXX0=