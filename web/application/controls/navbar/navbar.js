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
var navbar_1 = require("../../providers/navbar");
var NavbarControl = (function () {
    function NavbarControl(navbarService) {
        this.navbarService = navbarService;
    }
    NavbarControl.prototype.ngOnInit = function () {
        var _this = this;
        this.navbarService.navbar().subscribe(function (response) { return _this.navbarList = response; });
    };
    return NavbarControl;
}());
NavbarControl = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'navbar',
        templateUrl: 'navbar.html'
    }),
    __metadata("design:paramtypes", [navbar_1.NavbarService])
], NavbarControl);
exports.NavbarControl = NavbarControl;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2YmFyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibmF2YmFyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxzQ0FBZ0Q7QUFDaEQsaURBQXFEO0FBU3JELElBQWEsYUFBYTtJQUl0Qix1QkFBb0IsYUFBNEI7UUFBNUIsa0JBQWEsR0FBYixhQUFhLENBQWU7SUFFaEQsQ0FBQztJQUVELGdDQUFRLEdBQVI7UUFBQSxpQkFFQztRQURHLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxFQUFFLENBQUMsU0FBUyxDQUFDLFVBQUEsUUFBUSxJQUFJLE9BQUEsS0FBSSxDQUFDLFVBQVUsR0FBRyxRQUFRLEVBQTFCLENBQTBCLENBQUMsQ0FBQztJQUNsRixDQUFDO0lBQ0wsb0JBQUM7QUFBRCxDQUFDLEFBWEQsSUFXQztBQVhZLGFBQWE7SUFMekIsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtRQUNuQixRQUFRLEVBQUUsUUFBUTtRQUNsQixXQUFXLEVBQUUsYUFBYTtLQUM3QixDQUFDO3FDQUtxQyxzQkFBYTtHQUp2QyxhQUFhLENBV3pCO0FBWFksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0fSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQge05hdmJhclNlcnZpY2V9IGZyb20gXCIuLi8uLi9wcm92aWRlcnMvbmF2YmFyXCI7XHJcbmltcG9ydCB7TmF2YmFySXRlbX0gZnJvbSBcIi4uLy4uL2VudGl0aWVzL25hdmJhckl0ZW1cIjtcclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICBzZWxlY3RvcjogJ25hdmJhcicsXHJcbiAgICB0ZW1wbGF0ZVVybDogJ25hdmJhci5odG1sJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgTmF2YmFyQ29udHJvbCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gICAgbmF2YmFyTGlzdDogTmF2YmFySXRlbVtdO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgbmF2YmFyU2VydmljZTogTmF2YmFyU2VydmljZSkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLm5hdmJhclNlcnZpY2UubmF2YmFyKCkuc3Vic2NyaWJlKHJlc3BvbnNlID0+IHRoaXMubmF2YmFyTGlzdCA9IHJlc3BvbnNlKTtcclxuICAgIH1cclxufSJdfQ==