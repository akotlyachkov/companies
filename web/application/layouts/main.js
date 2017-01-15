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
var global_1 = require("../providers/global");
var router_1 = require("@angular/router");
var MainLayout = (function () {
    function MainLayout(shared, route) {
        this.route = route;
        shared.configServer = this.route.snapshot.data['serverConfig'];
    }
    return MainLayout;
}());
MainLayout = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'main',
        template: "\n<navbar></navbar>\n<features></features>\n<tabs></tabs>\n<router-outlet></router-outlet>\n"
    }),
    __metadata("design:paramtypes", [global_1.SharedService, router_1.ActivatedRoute])
], MainLayout);
exports.MainLayout = MainLayout;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHNDQUF3QztBQUN4Qyw4Q0FBa0Q7QUFDbEQsMENBQStDO0FBYS9DO0lBQ0Esb0JBQVksTUFBcUIsRUFBUyxLQUFxQjtRQUFyQixVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUMzRCxNQUFNLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUNuRSxDQUFDO0lBQ0QsaUJBQUM7QUFBRCxDQUFDLEFBSkQsSUFJQztBQUpEO0lBVkMsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtRQUNuQixRQUFRLEVBQUUsTUFBTTtRQUNoQixRQUFRLEVBQUUsOEZBS2I7S0FDQSxDQUFDO3FDQUVrQixzQkFBYSxFQUFnQix1QkFBYztjQUc5RDtBQUpZLHFCQUFBLFVBQVUsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQge1NoYXJlZFNlcnZpY2V9IGZyb20gXCIuLi9wcm92aWRlcnMvZ2xvYmFsXCI7XHJcbmltcG9ydCB7QWN0aXZhdGVkUm91dGV9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICBzZWxlY3RvcjogJ21haW4nLFxyXG4gICAgdGVtcGxhdGU6IGBcclxuPG5hdmJhcj48L25hdmJhcj5cclxuPGZlYXR1cmVzPjwvZmVhdHVyZXM+XHJcbjx0YWJzPjwvdGFicz5cclxuPHJvdXRlci1vdXRsZXQ+PC9yb3V0ZXItb3V0bGV0PlxyXG5gXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNYWluTGF5b3V0IHtcclxuY29uc3RydWN0b3Ioc2hhcmVkOiBTaGFyZWRTZXJ2aWNlLHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlKXtcclxuICAgIHNoYXJlZC5jb25maWdTZXJ2ZXIgPSB0aGlzLnJvdXRlLnNuYXBzaG90LmRhdGFbJ3NlcnZlckNvbmZpZyddO1xyXG59XHJcbn0iXX0=