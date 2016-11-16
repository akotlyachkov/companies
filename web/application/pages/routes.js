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
var master_1 = require("./master/master");
var core_1 = require("@angular/core");
var login_1 = require("./login/login");
var routes = [
    { path: '', redirectTo: '/page0', pathMatch: 'full' },
    { path: 'login', component: login_1.LoginPage },
    { path: 'page0', component: master_1.MasterLayout },
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicm91dGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSx1QkFBbUMsaUJBQWlCLENBQUMsQ0FBQTtBQUNyRCxzQkFBb0IsZUFBZSxDQUFDLENBQUE7QUFDcEMsc0JBQW9CLGVBQWUsQ0FBQyxDQUFBO0FBQ3BDLHVCQUEyQixpQkFBaUIsQ0FBQyxDQUFBO0FBQzdDLHFCQUF1QixlQUFlLENBQUMsQ0FBQTtBQUN2QyxzQkFBd0IsZUFBZSxDQUFDLENBQUE7QUFFeEMsSUFBTSxNQUFNLEdBQVc7SUFDbkIsRUFBQyxJQUFJLEVBQUUsRUFBRSxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFDLE1BQU0sRUFBQztJQUNsRCxFQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLGlCQUFTLEVBQUM7SUFDckMsRUFBQyxJQUFJLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxxQkFBWSxFQUFDO0lBQ3hDLEVBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsYUFBSyxFQUFDO0lBQ2pDLEVBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsYUFBSyxFQUFDO0NBQ3BDLENBQUM7QUFPRjtJQUFBO0lBRUEsQ0FBQztJQVBEO1FBQUMsZUFBUSxDQUFDO1lBQ04sT0FBTyxFQUFFLENBQUMscUJBQVksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDdkMsT0FBTyxFQUFFLENBQUMscUJBQVksQ0FBQztTQUMxQixDQUFDOztxQkFBQTtJQUlGLG9CQUFDO0FBQUQsQ0FBQyxBQUZELElBRUM7QUFGWSxxQkFBYSxnQkFFekIsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Um91dGVzLCBSb3V0ZXJNb2R1bGV9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHtQYWdlMn0gZnJvbSBcIi4vcGFnZTIvcGFnZTJcIjtcclxuaW1wb3J0IHtQYWdlMX0gZnJvbSBcIi4vcGFnZTEvcGFnZTFcIjtcclxuaW1wb3J0IHtNYXN0ZXJMYXlvdXR9IGZyb20gXCIuL21hc3Rlci9tYXN0ZXJcIjtcclxuaW1wb3J0IHtOZ01vZHVsZX0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHtMb2dpblBhZ2V9IGZyb20gXCIuL2xvZ2luL2xvZ2luXCI7XHJcblxyXG5jb25zdCByb3V0ZXM6IFJvdXRlcyA9IFtcclxuICAgIHtwYXRoOiAnJywgcmVkaXJlY3RUbzogJy9wYWdlMCcsIHBhdGhNYXRjaDonZnVsbCd9LFxyXG4gICAge3BhdGg6ICdsb2dpbicsIGNvbXBvbmVudDogTG9naW5QYWdlfSxcclxuICAgIHtwYXRoOiAncGFnZTAnLCBjb21wb25lbnQ6IE1hc3RlckxheW91dH0sXHJcbiAgICB7cGF0aDogJ3BhZ2UxJywgY29tcG9uZW50OiBQYWdlMX0sXHJcbiAgICB7cGF0aDogJ3BhZ2UyJywgY29tcG9uZW50OiBQYWdlMn1cclxuXTtcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgICBpbXBvcnRzOiBbUm91dGVyTW9kdWxlLmZvclJvb3Qocm91dGVzKV0sXHJcbiAgICBleHBvcnRzOiBbUm91dGVyTW9kdWxlXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFJvdXRpbmdNb2R1bGUge1xyXG5cclxufSJdfQ==