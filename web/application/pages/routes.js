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
var businessmen_1 = require("../features/bussinessmen/pages/businessmen");
var simple_2 = require("../controls/search/ichp/simple/simple");
var simple_3 = require("../features/bussinessmen/controls/search/simple/simple");
var identification_3 = require("../features/bussinessmen/controls/search/identification/identification");
var serverConfigResolver_1 = require("../providers/serverConfigResolver");
var appRoutes = [
    { path: '', redirectTo: '/companies', pathMatch: 'full' },
    {
        path: '', component: main_1.MainLayout, resolve: { serverConfig: serverConfigResolver_1.ServerConfigResolver }, children: [
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicm91dGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSwrQ0FBK0M7QUFDL0MsMENBQXFEO0FBQ3JELHlDQUEwQztBQUMxQyxzQ0FBdUM7QUFDdkMsdUNBQXdDO0FBQ3hDLHVDQUF3QztBQUN4QyxnREFBaUQ7QUFDakQsNERBQTREO0FBQzVELDZEQUEwRDtBQUMxRCx3Q0FBMkM7QUFDM0MscUVBQXdGO0FBQ3hGLHdFQUEyRjtBQUMzRiw2RkFBZ0g7QUFDaEgsMkVBQThGO0FBQzlGLCtCQUFnQztBQUNoQyx3RkFBc0c7QUFDdEcsMEVBQTJFO0FBQzNFLGdFQUE4RTtBQUM5RSxpRkFBc0c7QUFDdEcseUdBQThIO0FBQzlILDBFQUF1RTtBQUd2RSxJQUFNLFNBQVMsR0FBVztJQUN0QixFQUFDLElBQUksRUFBRSxFQUFFLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFDO0lBQ3ZEO1FBQ0ksSUFBSSxFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUUsaUJBQVUsRUFBRSxPQUFPLEVBQUUsRUFBQyxZQUFZLEVBQUUsMkNBQW9CLEVBQUMsRUFBRSxRQUFRLEVBQUU7WUFDMUY7Z0JBQ0ksSUFBSSxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUseUJBQWEsRUFBRSxRQUFRLEVBQUU7b0JBQ3ZELEVBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUUscUNBQTRCLEVBQUM7b0JBQ25ELEVBQUMsSUFBSSxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsdUNBQTZCLEVBQUM7b0JBQzNELEVBQUMsSUFBSSxFQUFFLGdCQUFnQixFQUFFLFNBQVMsRUFBRSxxREFBb0MsRUFBQztvQkFDekUsRUFBQyxJQUFJLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSx5Q0FBOEIsRUFBQztpQkFDaEU7YUFDQTtZQUNEO2dCQUNJLElBQUksRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLGVBQVEsRUFBRSxRQUFRLEVBQUU7b0JBQzdDLEVBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUUsZ0NBQXVCLEVBQUM7b0JBQzlDLEVBQUMsSUFBSSxFQUFFLGdCQUFnQixFQUFFLFNBQVMsRUFBRSxnREFBK0IsRUFBQztpQkFDdkU7YUFDQTtZQUNEO2dCQUNJLElBQUksRUFBRSxhQUFhLEVBQUUsU0FBUyxFQUFFLDZCQUFlLEVBQUUsUUFBUSxFQUFFO29CQUMzRCxFQUFDLElBQUksRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFFLHVDQUE4QixFQUFDO29CQUNyRCxFQUFDLElBQUksRUFBRSxnQkFBZ0IsRUFBRSxTQUFTLEVBQUUsdURBQXNDLEVBQUM7b0JBQzNFLEVBQUMsSUFBSSxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsZ0RBQStCLEVBQUM7aUJBQy9EO2FBQ0E7U0FDSjtLQUNBO0lBRUQsRUFBQyxJQUFJLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxpQkFBUyxFQUFDO0lBQ3JDLEVBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsaUJBQVMsRUFBQztJQUNyQyxFQUFDLElBQUksRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLHVCQUFZLEVBQUM7SUFDM0MsRUFBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSx1QkFBWSxFQUFDO0NBQ3hDLENBQUM7QUFRRjtJQUFBO0lBR0EsQ0FBQztJQUFELG9CQUFDO0FBQUQsQ0FBQyxBQUhELElBR0M7QUFIRDtJQU5DLGVBQVEsQ0FBQztRQUVOLE9BQU8sRUFBRSxDQUFDLHFCQUFZLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxFQUFFLCtCQUFjLENBQUM7UUFDMUQsT0FBTyxFQUFFLENBQUMscUJBQVksQ0FBQztLQUMxQixDQUFDOztpQkFLRDtBQUhZLHdCQUFBLGFBQWEsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIi8vaW1wb3J0IHtVSVJvdXRlck1vZHVsZX0gZnJvbSBcInVpLXJvdXRlci1uZzJcIjtcclxuaW1wb3J0IHtSb3V0ZXJNb2R1bGUsIFJvdXRlc30gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQge0NvbXBhbmllc1BhZ2V9IGZyb20gXCIuL2NvbXBhbmllc1wiO1xyXG5pbXBvcnQge05nTW9kdWxlfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQge0xvZ2luUGFnZX0gZnJvbSBcIi4vbG9naW4vbG9naW5cIjtcclxuaW1wb3J0IHtFcnJvclBhZ2V9IGZyb20gXCIuL2Vycm9yL2Vycm9yXCI7XHJcbmltcG9ydCB7Tm90Rm91bmRQYWdlfSBmcm9tIFwiLi9ub3Rmb3VuZC9ub3Rmb3VuZFwiO1xyXG4vL2ltcG9ydCB7QnVzaW5lc3NtZW5QYWdlfSBmcm9tIFwiLi9idXNpbmVzc21lbi9idXNpbmVzc21lblwiO1xyXG5pbXBvcnQge0NvbnRyb2xzTW9kdWxlfSBmcm9tIFwiLi4vY29udHJvbHMvY29udHJvbHNNb2R1bGVcIjtcclxuaW1wb3J0IHtNYWluTGF5b3V0fSBmcm9tIFwiLi4vbGF5b3V0cy9tYWluXCI7XHJcbmltcG9ydCB7U2VhcmNoQ29tcGFuaWVzU2ltcGxlQ29udHJvbH0gZnJvbSBcIi4uL2NvbnRyb2xzL3NlYXJjaC9jb21wYW5pZXMvc2ltcGxlL3NpbXBsZVwiO1xyXG5pbXBvcnQge1NlYXJjaENvbXBhbmllc0ZpbmFuY2VDb250cm9sfSBmcm9tIFwiLi4vY29udHJvbHMvc2VhcmNoL2NvbXBhbmllcy9maW5hbmNlL2ZpbmFuY2VcIjtcclxuaW1wb3J0IHtTZWFyY2hDb21wYW5pZXNJZGVudGlmaWNhdGlvbkNvbnRyb2x9IGZyb20gXCIuLi9jb250cm9scy9zZWFyY2gvY29tcGFuaWVzL2lkZW50aWZpY2F0aW9uL2lkZW50aWZpY2F0aW9uXCI7XHJcbmltcG9ydCB7U2VhcmNoQ29tcGFuaWVzRm91bmRlcnNDb250cm9sfSBmcm9tIFwiLi4vY29udHJvbHMvc2VhcmNoL2NvbXBhbmllcy9mb3VuZGVycy9mb3VuZGVyc1wiO1xyXG5pbXBvcnQge0ljaHBQYWdlfSBmcm9tIFwiLi9pY2hwXCI7XHJcbmltcG9ydCB7U2VhcmNoSWNocElkZW50aWZpY2F0aW9uQ29udHJvbH0gZnJvbSBcIi4uL2NvbnRyb2xzL3NlYXJjaC9pY2hwL2lkZW50aWZpY2F0aW9uL2lkZW50aWZpY2F0aW9uXCI7XHJcbmltcG9ydCB7QnVzaW5lc3NtZW5QYWdlfSBmcm9tIFwiLi4vZmVhdHVyZXMvYnVzc2luZXNzbWVuL3BhZ2VzL2J1c2luZXNzbWVuXCI7XHJcbmltcG9ydCB7U2VhcmNoSWNocFNpbXBsZUNvbnRyb2x9IGZyb20gXCIuLi9jb250cm9scy9zZWFyY2gvaWNocC9zaW1wbGUvc2ltcGxlXCI7XHJcbmltcG9ydCB7U2VhcmNoQnVzaW5lc3NtZW5TaW1wbGVDb250cm9sfSBmcm9tIFwiLi4vZmVhdHVyZXMvYnVzc2luZXNzbWVuL2NvbnRyb2xzL3NlYXJjaC9zaW1wbGUvc2ltcGxlXCI7XHJcbmltcG9ydCB7U2VhcmNoQnVzaW5lc3NtZW5JZGVudGlmaWNhdGlvbkNvbnRyb2x9IGZyb20gXCIuLi9mZWF0dXJlcy9idXNzaW5lc3NtZW4vY29udHJvbHMvc2VhcmNoL2lkZW50aWZpY2F0aW9uL2lkZW50aWZpY2F0aW9uXCI7XHJcbmltcG9ydCB7U2VydmVyQ29uZmlnUmVzb2x2ZXJ9IGZyb20gXCIuLi9wcm92aWRlcnMvc2VydmVyQ29uZmlnUmVzb2x2ZXJcIjtcclxuXHJcblxyXG5jb25zdCBhcHBSb3V0ZXM6IFJvdXRlcyA9IFtcclxuICAgIHtwYXRoOiAnJywgcmVkaXJlY3RUbzogJy9jb21wYW5pZXMnLCBwYXRoTWF0Y2g6ICdmdWxsJ30sXHJcbiAgICB7XHJcbiAgICAgICAgcGF0aDogJycsIGNvbXBvbmVudDogTWFpbkxheW91dCwgcmVzb2x2ZToge3NlcnZlckNvbmZpZzogU2VydmVyQ29uZmlnUmVzb2x2ZXJ9LCBjaGlsZHJlbjogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcGF0aDogJ2NvbXBhbmllcycsIGNvbXBvbmVudDogQ29tcGFuaWVzUGFnZSwgY2hpbGRyZW46IFtcclxuICAgICAgICAgICAge3BhdGg6ICcnLCBjb21wb25lbnQ6IFNlYXJjaENvbXBhbmllc1NpbXBsZUNvbnRyb2x9LFxyXG4gICAgICAgICAgICB7cGF0aDogJ2ZpbmFuY2UnLCBjb21wb25lbnQ6IFNlYXJjaENvbXBhbmllc0ZpbmFuY2VDb250cm9sfSxcclxuICAgICAgICAgICAge3BhdGg6ICdpZGVudGlmaWNhdGlvbicsIGNvbXBvbmVudDogU2VhcmNoQ29tcGFuaWVzSWRlbnRpZmljYXRpb25Db250cm9sfSxcclxuICAgICAgICAgICAge3BhdGg6ICdmb3VuZGVycycsIGNvbXBvbmVudDogU2VhcmNoQ29tcGFuaWVzRm91bmRlcnNDb250cm9sfSxcclxuICAgICAgICBdXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHBhdGg6ICdpY2hwJywgY29tcG9uZW50OiBJY2hwUGFnZSwgY2hpbGRyZW46IFtcclxuICAgICAgICAgICAge3BhdGg6ICcnLCBjb21wb25lbnQ6IFNlYXJjaEljaHBTaW1wbGVDb250cm9sfSxcclxuICAgICAgICAgICAge3BhdGg6ICdpZGVudGlmaWNhdGlvbicsIGNvbXBvbmVudDogU2VhcmNoSWNocElkZW50aWZpY2F0aW9uQ29udHJvbH0sXHJcbiAgICAgICAgXVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBwYXRoOiAnYnVzaW5lc3NtZW4nLCBjb21wb25lbnQ6IEJ1c2luZXNzbWVuUGFnZSwgY2hpbGRyZW46IFtcclxuICAgICAgICAgICAge3BhdGg6ICcnLCBjb21wb25lbnQ6IFNlYXJjaEJ1c2luZXNzbWVuU2ltcGxlQ29udHJvbH0sXHJcbiAgICAgICAgICAgIHtwYXRoOiAnaWRlbnRpZmljYXRpb24nLCBjb21wb25lbnQ6IFNlYXJjaEJ1c2luZXNzbWVuSWRlbnRpZmljYXRpb25Db250cm9sfSxcclxuICAgICAgICAgICAge3BhdGg6ICdwZXJzb24nLCBjb21wb25lbnQ6IFNlYXJjaEljaHBJZGVudGlmaWNhdGlvbkNvbnRyb2x9LFxyXG4gICAgICAgIF1cclxuICAgICAgICB9XHJcbiAgICBdXHJcbiAgICB9LFxyXG5cclxuICAgIHtwYXRoOiAnbG9naW4nLCBjb21wb25lbnQ6IExvZ2luUGFnZX0sXHJcbiAgICB7cGF0aDogJ2Vycm9yJywgY29tcG9uZW50OiBFcnJvclBhZ2V9LFxyXG4gICAge3BhdGg6ICdub3Rmb3VuZCcsIGNvbXBvbmVudDogTm90Rm91bmRQYWdlfSxcclxuICAgIHtwYXRoOiAnKionLCBjb21wb25lbnQ6IE5vdEZvdW5kUGFnZX0sXHJcbl07XHJcblxyXG5ATmdNb2R1bGUoe1xyXG5cclxuICAgIGltcG9ydHM6IFtSb3V0ZXJNb2R1bGUuZm9yUm9vdChhcHBSb3V0ZXMpLCBDb250cm9sc01vZHVsZV0sXHJcbiAgICBleHBvcnRzOiBbUm91dGVyTW9kdWxlXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFJvdXRpbmdNb2R1bGUge1xyXG5cclxuXHJcbn0iXX0=