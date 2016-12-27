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
//import {UIRouterModule} from "ui-router-ng2";
var router_1 = require("@angular/router");
var companies_1 = require("./companies");
var core_1 = require("@angular/core");
var login_1 = require("./login/login");
var error_1 = require("./error/error");
var notfound_1 = require("./notfound/notfound");
//import {BusinessmenPage} from "./businessmen/businessmen";
var controlsModule_1 = require("../controls/controlsModule");
var main_1 = require("../layouts/main");
var simple_1 = require("../controls/search/companies/simple/simple");
var finance_1 = require("../controls/search/companies/finance/finance");
var identification_1 = require("../controls/search/companies/identification/identification");
var founders_1 = require("../controls/search/companies/founders/founders");
var ichp_1 = require("./ichp");
var identification_2 = require("../controls/search/ichp/identification/identification");
var businessmen_1 = require("./businessmen");
var simple_2 = require("../controls/search/ichp/simple/simple");
var simple_3 = require("../controls/search/businessmen/simple/simple");
var identification_3 = require("../controls/search/businessmen/identification/identification");
var appRoutes = [
    { path: '', redirectTo: '/companies', pathMatch: 'full' },
    {
        path: '', component: main_1.MainLayout, children: [
            {
                path: 'companies', component: companies_1.CompaniesPage, children: [
                    { path: '', component: simple_1.SearchCompaniesSimpleControl },
                    { path: 'finance', component: finance_1.SearchCompaniesFinanceControl },
                    { path: 'identification', component: identification_1.SearchCompaniesIdentificationControl },
                    { path: 'founders', component: founders_1.SearchCompaniesFoundersControl },
                ]
            },
            {
                path: 'ichp', component: ichp_1.IchpPage, children: [
                    { path: '', component: simple_2.SearchIchpSimpleControl },
                    { path: 'identification', component: identification_2.SearchIchpIdentificationControl },
                ]
            },
            {
                path: 'businessmen', component: businessmen_1.BusinessmenPage, children: [
                    { path: '', component: simple_3.SearchBusinessmenSimpleControl },
                    { path: 'identification', component: identification_3.SearchBusinessmenIdentificationControl },
                    { path: 'person', component: identification_2.SearchIchpIdentificationControl },
                ]
            }
        ]
    },
    { path: 'login', component: login_1.LoginPage },
    { path: 'error', component: error_1.ErrorPage },
    { path: 'notfound', component: notfound_1.NotFoundPage },
    { path: '**', component: notfound_1.NotFoundPage },
];
var RoutingModule = (function () {
    function RoutingModule() {
    }
    return RoutingModule;
}());
RoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forRoot(appRoutes), controlsModule_1.ControlsModule],
        exports: [router_1.RouterModule]
    }),
    __metadata("design:paramtypes", [])
], RoutingModule);
exports.RoutingModule = RoutingModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicm91dGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSwrQ0FBK0M7QUFDL0MsMENBQWlFO0FBQ2pFLHlDQUEwQztBQUMxQyxzQ0FBdUM7QUFDdkMsdUNBQXdDO0FBQ3hDLHVDQUF3QztBQUN4QyxnREFBaUQ7QUFDakQsNERBQTREO0FBQzVELDZEQUEwRDtBQUMxRCx3Q0FBMkM7QUFDM0MscUVBQXdGO0FBQ3hGLHdFQUEyRjtBQUMzRiw2RkFBZ0g7QUFDaEgsMkVBQThGO0FBQzlGLCtCQUFnQztBQUNoQyx3RkFBc0c7QUFDdEcsNkNBQThDO0FBQzlDLGdFQUE4RTtBQUM5RSx1RUFBNEY7QUFDNUYsK0ZBQW9IO0FBR3BILElBQU0sU0FBUyxHQUFXO0lBQ3RCLEVBQUMsSUFBSSxFQUFDLEVBQUUsRUFBQyxVQUFVLEVBQUMsWUFBWSxFQUFDLFNBQVMsRUFBQyxNQUFNLEVBQUM7SUFDbEQ7UUFDSSxJQUFJLEVBQUMsRUFBRSxFQUFFLFNBQVMsRUFBRSxpQkFBVSxFQUFHLFFBQVEsRUFBRTtZQUMzQztnQkFDSSxJQUFJLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSx5QkFBYSxFQUFFLFFBQVEsRUFBRTtvQkFDdkQsRUFBQyxJQUFJLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSxxQ0FBNEIsRUFBRTtvQkFDcEQsRUFBQyxJQUFJLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSx1Q0FBNkIsRUFBQztvQkFDM0QsRUFBQyxJQUFJLEVBQUUsZ0JBQWdCLEVBQUUsU0FBUyxFQUFFLHFEQUFvQyxFQUFDO29CQUN6RSxFQUFDLElBQUksRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLHlDQUE4QixFQUFDO2lCQUNoRTthQUNBO1lBQ0Q7Z0JBQ0ksSUFBSSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsZUFBUSxFQUFFLFFBQVEsRUFBRTtvQkFDN0MsRUFBQyxJQUFJLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSxnQ0FBdUIsRUFBQztvQkFDOUMsRUFBQyxJQUFJLEVBQUUsZ0JBQWdCLEVBQUUsU0FBUyxFQUFFLGdEQUErQixFQUFDO2lCQUN2RTthQUNBO1lBQ0Q7Z0JBQ0ksSUFBSSxFQUFFLGFBQWEsRUFBRSxTQUFTLEVBQUUsNkJBQWUsRUFBRSxRQUFRLEVBQUU7b0JBQzNELEVBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUUsdUNBQThCLEVBQUM7b0JBQ3JELEVBQUMsSUFBSSxFQUFFLGdCQUFnQixFQUFFLFNBQVMsRUFBRSx1REFBc0MsRUFBQztvQkFDM0UsRUFBQyxJQUFJLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxnREFBK0IsRUFBQztpQkFDL0Q7YUFDQTtTQUNKO0tBQ0E7SUFFRCxFQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLGlCQUFTLEVBQUM7SUFDckMsRUFBQyxJQUFJLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxpQkFBUyxFQUFDO0lBQ3JDLEVBQUMsSUFBSSxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsdUJBQVksRUFBQztJQUMzQyxFQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLHVCQUFZLEVBQUM7Q0FDeEMsQ0FBQztBQVFGLElBQWEsYUFBYTtJQUExQjtJQUdBLENBQUM7SUFBRCxvQkFBQztBQUFELENBQUMsQUFIRCxJQUdDO0FBSFksYUFBYTtJQU56QixlQUFRLENBQUM7UUFFTixPQUFPLEVBQUUsQ0FBQyxxQkFBWSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsRUFBRSwrQkFBYyxDQUFDO1FBQzFELE9BQU8sRUFBRSxDQUFDLHFCQUFZLENBQUM7S0FDMUIsQ0FBQzs7R0FFVyxhQUFhLENBR3pCO0FBSFksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyIvL2ltcG9ydCB7VUlSb3V0ZXJNb2R1bGV9IGZyb20gXCJ1aS1yb3V0ZXItbmcyXCI7XHJcbmltcG9ydCB7Um91dGVyTW9kdWxlLCBSb3V0ZXMsIFJvdXRlckxpbmt9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHtDb21wYW5pZXNQYWdlfSBmcm9tIFwiLi9jb21wYW5pZXNcIjtcclxuaW1wb3J0IHtOZ01vZHVsZX0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHtMb2dpblBhZ2V9IGZyb20gXCIuL2xvZ2luL2xvZ2luXCI7XHJcbmltcG9ydCB7RXJyb3JQYWdlfSBmcm9tIFwiLi9lcnJvci9lcnJvclwiO1xyXG5pbXBvcnQge05vdEZvdW5kUGFnZX0gZnJvbSBcIi4vbm90Zm91bmQvbm90Zm91bmRcIjtcclxuLy9pbXBvcnQge0J1c2luZXNzbWVuUGFnZX0gZnJvbSBcIi4vYnVzaW5lc3NtZW4vYnVzaW5lc3NtZW5cIjtcclxuaW1wb3J0IHtDb250cm9sc01vZHVsZX0gZnJvbSBcIi4uL2NvbnRyb2xzL2NvbnRyb2xzTW9kdWxlXCI7XHJcbmltcG9ydCB7TWFpbkxheW91dH0gZnJvbSBcIi4uL2xheW91dHMvbWFpblwiO1xyXG5pbXBvcnQge1NlYXJjaENvbXBhbmllc1NpbXBsZUNvbnRyb2x9IGZyb20gXCIuLi9jb250cm9scy9zZWFyY2gvY29tcGFuaWVzL3NpbXBsZS9zaW1wbGVcIjtcclxuaW1wb3J0IHtTZWFyY2hDb21wYW5pZXNGaW5hbmNlQ29udHJvbH0gZnJvbSBcIi4uL2NvbnRyb2xzL3NlYXJjaC9jb21wYW5pZXMvZmluYW5jZS9maW5hbmNlXCI7XHJcbmltcG9ydCB7U2VhcmNoQ29tcGFuaWVzSWRlbnRpZmljYXRpb25Db250cm9sfSBmcm9tIFwiLi4vY29udHJvbHMvc2VhcmNoL2NvbXBhbmllcy9pZGVudGlmaWNhdGlvbi9pZGVudGlmaWNhdGlvblwiO1xyXG5pbXBvcnQge1NlYXJjaENvbXBhbmllc0ZvdW5kZXJzQ29udHJvbH0gZnJvbSBcIi4uL2NvbnRyb2xzL3NlYXJjaC9jb21wYW5pZXMvZm91bmRlcnMvZm91bmRlcnNcIjtcclxuaW1wb3J0IHtJY2hwUGFnZX0gZnJvbSBcIi4vaWNocFwiO1xyXG5pbXBvcnQge1NlYXJjaEljaHBJZGVudGlmaWNhdGlvbkNvbnRyb2x9IGZyb20gXCIuLi9jb250cm9scy9zZWFyY2gvaWNocC9pZGVudGlmaWNhdGlvbi9pZGVudGlmaWNhdGlvblwiO1xyXG5pbXBvcnQge0J1c2luZXNzbWVuUGFnZX0gZnJvbSBcIi4vYnVzaW5lc3NtZW5cIjtcclxuaW1wb3J0IHtTZWFyY2hJY2hwU2ltcGxlQ29udHJvbH0gZnJvbSBcIi4uL2NvbnRyb2xzL3NlYXJjaC9pY2hwL3NpbXBsZS9zaW1wbGVcIjtcclxuaW1wb3J0IHtTZWFyY2hCdXNpbmVzc21lblNpbXBsZUNvbnRyb2x9IGZyb20gXCIuLi9jb250cm9scy9zZWFyY2gvYnVzaW5lc3NtZW4vc2ltcGxlL3NpbXBsZVwiO1xyXG5pbXBvcnQge1NlYXJjaEJ1c2luZXNzbWVuSWRlbnRpZmljYXRpb25Db250cm9sfSBmcm9tIFwiLi4vY29udHJvbHMvc2VhcmNoL2J1c2luZXNzbWVuL2lkZW50aWZpY2F0aW9uL2lkZW50aWZpY2F0aW9uXCI7XHJcblxyXG5cclxuY29uc3QgYXBwUm91dGVzOiBSb3V0ZXMgPSBbXHJcbiAgICB7cGF0aDonJyxyZWRpcmVjdFRvOicvY29tcGFuaWVzJyxwYXRoTWF0Y2g6J2Z1bGwnfSxcclxuICAgIHtcclxuICAgICAgICBwYXRoOicnLCBjb21wb25lbnQ6IE1haW5MYXlvdXQsICBjaGlsZHJlbjogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcGF0aDogJ2NvbXBhbmllcycsIGNvbXBvbmVudDogQ29tcGFuaWVzUGFnZSwgY2hpbGRyZW46IFtcclxuICAgICAgICAgICAge3BhdGg6ICcnLCBjb21wb25lbnQ6IFNlYXJjaENvbXBhbmllc1NpbXBsZUNvbnRyb2wgfSxcclxuICAgICAgICAgICAge3BhdGg6ICdmaW5hbmNlJywgY29tcG9uZW50OiBTZWFyY2hDb21wYW5pZXNGaW5hbmNlQ29udHJvbH0sXHJcbiAgICAgICAgICAgIHtwYXRoOiAnaWRlbnRpZmljYXRpb24nLCBjb21wb25lbnQ6IFNlYXJjaENvbXBhbmllc0lkZW50aWZpY2F0aW9uQ29udHJvbH0sXHJcbiAgICAgICAgICAgIHtwYXRoOiAnZm91bmRlcnMnLCBjb21wb25lbnQ6IFNlYXJjaENvbXBhbmllc0ZvdW5kZXJzQ29udHJvbH0sXHJcbiAgICAgICAgXVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBwYXRoOiAnaWNocCcsIGNvbXBvbmVudDogSWNocFBhZ2UsIGNoaWxkcmVuOiBbXHJcbiAgICAgICAgICAgIHtwYXRoOiAnJywgY29tcG9uZW50OiBTZWFyY2hJY2hwU2ltcGxlQ29udHJvbH0sXHJcbiAgICAgICAgICAgIHtwYXRoOiAnaWRlbnRpZmljYXRpb24nLCBjb21wb25lbnQ6IFNlYXJjaEljaHBJZGVudGlmaWNhdGlvbkNvbnRyb2x9LFxyXG4gICAgICAgIF1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcGF0aDogJ2J1c2luZXNzbWVuJywgY29tcG9uZW50OiBCdXNpbmVzc21lblBhZ2UsIGNoaWxkcmVuOiBbXHJcbiAgICAgICAgICAgIHtwYXRoOiAnJywgY29tcG9uZW50OiBTZWFyY2hCdXNpbmVzc21lblNpbXBsZUNvbnRyb2x9LFxyXG4gICAgICAgICAgICB7cGF0aDogJ2lkZW50aWZpY2F0aW9uJywgY29tcG9uZW50OiBTZWFyY2hCdXNpbmVzc21lbklkZW50aWZpY2F0aW9uQ29udHJvbH0sXHJcbiAgICAgICAgICAgIHtwYXRoOiAncGVyc29uJywgY29tcG9uZW50OiBTZWFyY2hJY2hwSWRlbnRpZmljYXRpb25Db250cm9sfSxcclxuICAgICAgICBdXHJcbiAgICAgICAgfVxyXG4gICAgXVxyXG4gICAgfSxcclxuXHJcbiAgICB7cGF0aDogJ2xvZ2luJywgY29tcG9uZW50OiBMb2dpblBhZ2V9LFxyXG4gICAge3BhdGg6ICdlcnJvcicsIGNvbXBvbmVudDogRXJyb3JQYWdlfSxcclxuICAgIHtwYXRoOiAnbm90Zm91bmQnLCBjb21wb25lbnQ6IE5vdEZvdW5kUGFnZX0sXHJcbiAgICB7cGF0aDogJyoqJywgY29tcG9uZW50OiBOb3RGb3VuZFBhZ2V9LFxyXG5dO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuXHJcbiAgICBpbXBvcnRzOiBbUm91dGVyTW9kdWxlLmZvclJvb3QoYXBwUm91dGVzKSwgQ29udHJvbHNNb2R1bGVdLFxyXG4gICAgZXhwb3J0czogW1JvdXRlck1vZHVsZV1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBSb3V0aW5nTW9kdWxlIHtcclxuXHJcblxyXG59Il19