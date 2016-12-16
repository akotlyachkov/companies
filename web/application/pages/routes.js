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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicm91dGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSwrQ0FBK0M7QUFDL0MsMENBQWlFO0FBQ2pFLHlDQUEwQztBQUMxQyxzQ0FBdUM7QUFDdkMsdUNBQXdDO0FBQ3hDLHVDQUF3QztBQUN4QyxnREFBaUQ7QUFDakQsNERBQTREO0FBQzVELDZEQUEwRDtBQUMxRCx3Q0FBMkM7QUFDM0MscUVBQXdGO0FBQ3hGLHdFQUEyRjtBQUMzRiw2RkFBZ0g7QUFDaEgsMkVBQThGO0FBQzlGLCtCQUFnQztBQUNoQyx3RkFBc0c7QUFDdEcsNkNBQThDO0FBQzlDLGdFQUE4RTtBQUM5RSx1RUFBNEY7QUFDNUYsK0ZBQW9IO0FBR3BILElBQU0sU0FBUyxHQUFXO0lBQ3RCLEVBQUMsSUFBSSxFQUFDLEVBQUUsRUFBQyxVQUFVLEVBQUMsWUFBWSxFQUFDLFNBQVMsRUFBQyxNQUFNLEVBQUM7SUFDbEQ7UUFDSSxJQUFJLEVBQUMsRUFBRSxFQUFFLFNBQVMsRUFBRSxpQkFBVSxFQUFHLFFBQVEsRUFBRTtZQUMzQztnQkFDSSxJQUFJLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSx5QkFBYSxFQUFFLFFBQVEsRUFBRTtvQkFDdkQsRUFBQyxJQUFJLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSxxQ0FBNEIsRUFBRTtvQkFDcEQsRUFBQyxJQUFJLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSx1Q0FBNkIsRUFBQztvQkFDM0QsRUFBQyxJQUFJLEVBQUUsZ0JBQWdCLEVBQUUsU0FBUyxFQUFFLHFEQUFvQyxFQUFDO29CQUN6RSxFQUFDLElBQUksRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLHlDQUE4QixFQUFDO2lCQUNoRTthQUNBO1lBQ0Q7Z0JBQ0ksSUFBSSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsZUFBUSxFQUFFLFFBQVEsRUFBRTtvQkFDN0MsRUFBQyxJQUFJLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSxnQ0FBdUIsRUFBQztvQkFDOUMsRUFBQyxJQUFJLEVBQUUsZ0JBQWdCLEVBQUUsU0FBUyxFQUFFLGdEQUErQixFQUFDO2lCQUN2RTthQUNBO1lBQ0Q7Z0JBQ0ksSUFBSSxFQUFFLGFBQWEsRUFBRSxTQUFTLEVBQUUsNkJBQWUsRUFBRSxRQUFRLEVBQUU7b0JBQzNELEVBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUUsdUNBQThCLEVBQUM7b0JBQ3JELEVBQUMsSUFBSSxFQUFFLGdCQUFnQixFQUFFLFNBQVMsRUFBRSx1REFBc0MsRUFBQztvQkFDM0UsRUFBQyxJQUFJLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxnREFBK0IsRUFBQztpQkFDL0Q7YUFDQTtTQUNKO0tBQ0E7SUFFRCxFQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLGlCQUFTLEVBQUM7SUFDckMsRUFBQyxJQUFJLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxpQkFBUyxFQUFDO0lBQ3JDLEVBQUMsSUFBSSxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsdUJBQVksRUFBQztJQUMzQyxFQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLHVCQUFZLEVBQUM7Q0FDeEMsQ0FBQztBQVFGO0lBQUE7SUFHQSxDQUFDO0lBQUQsb0JBQUM7QUFBRCxDQUFDLEFBSEQsSUFHQztBQUhEO0lBTkMsZUFBUSxDQUFDO1FBRU4sT0FBTyxFQUFFLENBQUMscUJBQVksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEVBQUUsK0JBQWMsQ0FBQztRQUMxRCxPQUFPLEVBQUUsQ0FBQyxxQkFBWSxDQUFDO0tBQzFCLENBQUM7O2lCQUtEO0FBSFksd0JBQUEsYUFBYSxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLy9pbXBvcnQge1VJUm91dGVyTW9kdWxlfSBmcm9tIFwidWktcm91dGVyLW5nMlwiO1xyXG5pbXBvcnQge1JvdXRlck1vZHVsZSwgUm91dGVzLCBSb3V0ZXJMaW5rfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7Q29tcGFuaWVzUGFnZX0gZnJvbSBcIi4vY29tcGFuaWVzXCI7XHJcbmltcG9ydCB7TmdNb2R1bGV9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7TG9naW5QYWdlfSBmcm9tIFwiLi9sb2dpbi9sb2dpblwiO1xyXG5pbXBvcnQge0Vycm9yUGFnZX0gZnJvbSBcIi4vZXJyb3IvZXJyb3JcIjtcclxuaW1wb3J0IHtOb3RGb3VuZFBhZ2V9IGZyb20gXCIuL25vdGZvdW5kL25vdGZvdW5kXCI7XHJcbi8vaW1wb3J0IHtCdXNpbmVzc21lblBhZ2V9IGZyb20gXCIuL2J1c2luZXNzbWVuL2J1c2luZXNzbWVuXCI7XHJcbmltcG9ydCB7Q29udHJvbHNNb2R1bGV9IGZyb20gXCIuLi9jb250cm9scy9jb250cm9sc01vZHVsZVwiO1xyXG5pbXBvcnQge01haW5MYXlvdXR9IGZyb20gXCIuLi9sYXlvdXRzL21haW5cIjtcclxuaW1wb3J0IHtTZWFyY2hDb21wYW5pZXNTaW1wbGVDb250cm9sfSBmcm9tIFwiLi4vY29udHJvbHMvc2VhcmNoL2NvbXBhbmllcy9zaW1wbGUvc2ltcGxlXCI7XHJcbmltcG9ydCB7U2VhcmNoQ29tcGFuaWVzRmluYW5jZUNvbnRyb2x9IGZyb20gXCIuLi9jb250cm9scy9zZWFyY2gvY29tcGFuaWVzL2ZpbmFuY2UvZmluYW5jZVwiO1xyXG5pbXBvcnQge1NlYXJjaENvbXBhbmllc0lkZW50aWZpY2F0aW9uQ29udHJvbH0gZnJvbSBcIi4uL2NvbnRyb2xzL3NlYXJjaC9jb21wYW5pZXMvaWRlbnRpZmljYXRpb24vaWRlbnRpZmljYXRpb25cIjtcclxuaW1wb3J0IHtTZWFyY2hDb21wYW5pZXNGb3VuZGVyc0NvbnRyb2x9IGZyb20gXCIuLi9jb250cm9scy9zZWFyY2gvY29tcGFuaWVzL2ZvdW5kZXJzL2ZvdW5kZXJzXCI7XHJcbmltcG9ydCB7SWNocFBhZ2V9IGZyb20gXCIuL2ljaHBcIjtcclxuaW1wb3J0IHtTZWFyY2hJY2hwSWRlbnRpZmljYXRpb25Db250cm9sfSBmcm9tIFwiLi4vY29udHJvbHMvc2VhcmNoL2ljaHAvaWRlbnRpZmljYXRpb24vaWRlbnRpZmljYXRpb25cIjtcclxuaW1wb3J0IHtCdXNpbmVzc21lblBhZ2V9IGZyb20gXCIuL2J1c2luZXNzbWVuXCI7XHJcbmltcG9ydCB7U2VhcmNoSWNocFNpbXBsZUNvbnRyb2x9IGZyb20gXCIuLi9jb250cm9scy9zZWFyY2gvaWNocC9zaW1wbGUvc2ltcGxlXCI7XHJcbmltcG9ydCB7U2VhcmNoQnVzaW5lc3NtZW5TaW1wbGVDb250cm9sfSBmcm9tIFwiLi4vY29udHJvbHMvc2VhcmNoL2J1c2luZXNzbWVuL3NpbXBsZS9zaW1wbGVcIjtcclxuaW1wb3J0IHtTZWFyY2hCdXNpbmVzc21lbklkZW50aWZpY2F0aW9uQ29udHJvbH0gZnJvbSBcIi4uL2NvbnRyb2xzL3NlYXJjaC9idXNpbmVzc21lbi9pZGVudGlmaWNhdGlvbi9pZGVudGlmaWNhdGlvblwiO1xyXG5cclxuXHJcbmNvbnN0IGFwcFJvdXRlczogUm91dGVzID0gW1xyXG4gICAge3BhdGg6JycscmVkaXJlY3RUbzonL2NvbXBhbmllcycscGF0aE1hdGNoOidmdWxsJ30sXHJcbiAgICB7XHJcbiAgICAgICAgcGF0aDonJywgY29tcG9uZW50OiBNYWluTGF5b3V0LCAgY2hpbGRyZW46IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHBhdGg6ICdjb21wYW5pZXMnLCBjb21wb25lbnQ6IENvbXBhbmllc1BhZ2UsIGNoaWxkcmVuOiBbXHJcbiAgICAgICAgICAgIHtwYXRoOiAnJywgY29tcG9uZW50OiBTZWFyY2hDb21wYW5pZXNTaW1wbGVDb250cm9sIH0sXHJcbiAgICAgICAgICAgIHtwYXRoOiAnZmluYW5jZScsIGNvbXBvbmVudDogU2VhcmNoQ29tcGFuaWVzRmluYW5jZUNvbnRyb2x9LFxyXG4gICAgICAgICAgICB7cGF0aDogJ2lkZW50aWZpY2F0aW9uJywgY29tcG9uZW50OiBTZWFyY2hDb21wYW5pZXNJZGVudGlmaWNhdGlvbkNvbnRyb2x9LFxyXG4gICAgICAgICAgICB7cGF0aDogJ2ZvdW5kZXJzJywgY29tcG9uZW50OiBTZWFyY2hDb21wYW5pZXNGb3VuZGVyc0NvbnRyb2x9LFxyXG4gICAgICAgIF1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcGF0aDogJ2ljaHAnLCBjb21wb25lbnQ6IEljaHBQYWdlLCBjaGlsZHJlbjogW1xyXG4gICAgICAgICAgICB7cGF0aDogJycsIGNvbXBvbmVudDogU2VhcmNoSWNocFNpbXBsZUNvbnRyb2x9LFxyXG4gICAgICAgICAgICB7cGF0aDogJ2lkZW50aWZpY2F0aW9uJywgY29tcG9uZW50OiBTZWFyY2hJY2hwSWRlbnRpZmljYXRpb25Db250cm9sfSxcclxuICAgICAgICBdXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHBhdGg6ICdidXNpbmVzc21lbicsIGNvbXBvbmVudDogQnVzaW5lc3NtZW5QYWdlLCBjaGlsZHJlbjogW1xyXG4gICAgICAgICAgICB7cGF0aDogJycsIGNvbXBvbmVudDogU2VhcmNoQnVzaW5lc3NtZW5TaW1wbGVDb250cm9sfSxcclxuICAgICAgICAgICAge3BhdGg6ICdpZGVudGlmaWNhdGlvbicsIGNvbXBvbmVudDogU2VhcmNoQnVzaW5lc3NtZW5JZGVudGlmaWNhdGlvbkNvbnRyb2x9LFxyXG4gICAgICAgICAgICB7cGF0aDogJ3BlcnNvbicsIGNvbXBvbmVudDogU2VhcmNoSWNocElkZW50aWZpY2F0aW9uQ29udHJvbH0sXHJcbiAgICAgICAgXVxyXG4gICAgICAgIH1cclxuICAgIF1cclxuICAgIH0sXHJcblxyXG4gICAge3BhdGg6ICdsb2dpbicsIGNvbXBvbmVudDogTG9naW5QYWdlfSxcclxuICAgIHtwYXRoOiAnZXJyb3InLCBjb21wb25lbnQ6IEVycm9yUGFnZX0sXHJcbiAgICB7cGF0aDogJ25vdGZvdW5kJywgY29tcG9uZW50OiBOb3RGb3VuZFBhZ2V9LFxyXG4gICAge3BhdGg6ICcqKicsIGNvbXBvbmVudDogTm90Rm91bmRQYWdlfSxcclxuXTtcclxuXHJcbkBOZ01vZHVsZSh7XHJcblxyXG4gICAgaW1wb3J0czogW1JvdXRlck1vZHVsZS5mb3JSb290KGFwcFJvdXRlcyksIENvbnRyb2xzTW9kdWxlXSxcclxuICAgIGV4cG9ydHM6IFtSb3V0ZXJNb2R1bGVdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgUm91dGluZ01vZHVsZSB7XHJcblxyXG5cclxufSJdfQ==