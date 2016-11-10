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
var router_1 = require("@angular/router");
var page2_1 = require("./page2/page2");
var page1_1 = require("./page1/page1");
var core_1 = require("@angular/core");
var routes = [
    { path: '', redirectTo: '/page1', pathMatch: 'full' },
    { path: 'page1', component: page1_1.Page1 },
    { path: 'page2', component: page2_1.Page2 }
];
var RoutingModule = (function () {
    function RoutingModule() {
    }
    RoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        }), 
        __metadata('design:paramtypes', [])
    ], RoutingModule);
    return RoutingModule;
}());
exports.RoutingModule = RoutingModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicm91dGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSx1QkFBbUMsaUJBQWlCLENBQUMsQ0FBQTtBQUNyRCxzQkFBb0IsZUFBZSxDQUFDLENBQUE7QUFDcEMsc0JBQW9CLGVBQWUsQ0FBQyxDQUFBO0FBQ3BDLHFCQUF1QixlQUFlLENBQUMsQ0FBQTtBQUV2QyxJQUFNLE1BQU0sR0FBVztJQUNuQixFQUFDLElBQUksRUFBRSxFQUFFLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUMsTUFBTSxFQUFDO0lBQ2xELEVBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsYUFBSyxFQUFDO0lBQ2pDLEVBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsYUFBSyxFQUFDO0NBQ3BDLENBQUM7QUFPRjtJQUFBO0lBQ0EsQ0FBQztJQU5EO1FBQUMsZUFBUSxDQUFDO1lBQ04sT0FBTyxFQUFFLENBQUMscUJBQVksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDdkMsT0FBTyxFQUFFLENBQUMscUJBQVksQ0FBQztTQUMxQixDQUFDOztxQkFBQTtJQUdGLG9CQUFDO0FBQUQsQ0FBQyxBQURELElBQ0M7QUFEWSxxQkFBYSxnQkFDekIsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Um91dGVzLCBSb3V0ZXJNb2R1bGV9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHtQYWdlMn0gZnJvbSBcIi4vcGFnZTIvcGFnZTJcIjtcclxuaW1wb3J0IHtQYWdlMX0gZnJvbSBcIi4vcGFnZTEvcGFnZTFcIjtcclxuaW1wb3J0IHtOZ01vZHVsZX0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuXHJcbmNvbnN0IHJvdXRlczogUm91dGVzID0gW1xyXG4gICAge3BhdGg6ICcnLCByZWRpcmVjdFRvOiAnL3BhZ2UxJywgcGF0aE1hdGNoOidmdWxsJ30sXHJcbiAgICB7cGF0aDogJ3BhZ2UxJywgY29tcG9uZW50OiBQYWdlMX0sXHJcbiAgICB7cGF0aDogJ3BhZ2UyJywgY29tcG9uZW50OiBQYWdlMn1cclxuXTtcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgICBpbXBvcnRzOiBbUm91dGVyTW9kdWxlLmZvclJvb3Qocm91dGVzKV0sXHJcbiAgICBleHBvcnRzOiBbUm91dGVyTW9kdWxlXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFJvdXRpbmdNb2R1bGUge1xyXG59Il19