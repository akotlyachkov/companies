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
        host: { class: 'navbar navbar-default navbar-static-top' },
        templateUrl: 'navbar.html'
    }),
    __metadata("design:paramtypes", [navbar_1.NavbarService])
], NavbarControl);
exports.NavbarControl = NavbarControl;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2YmFyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibmF2YmFyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxzQ0FBZ0Q7QUFDaEQsaURBQXFEO0FBVXJELElBQWEsYUFBYTtJQUl0Qix1QkFBb0IsYUFBNEI7UUFBNUIsa0JBQWEsR0FBYixhQUFhLENBQWU7SUFFaEQsQ0FBQztJQUVELGdDQUFRLEdBQVI7UUFBQSxpQkFFQztRQURHLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxFQUFFLENBQUMsU0FBUyxDQUFDLFVBQUEsUUFBUSxJQUFJLE9BQUEsS0FBSSxDQUFDLFVBQVUsR0FBRyxRQUFRLEVBQTFCLENBQTBCLENBQUMsQ0FBQztJQUNsRixDQUFDO0lBQ0wsb0JBQUM7QUFBRCxDQUFDLEFBWEQsSUFXQztBQVhZLGFBQWE7SUFOekIsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtRQUNuQixRQUFRLEVBQUUsUUFBUTtRQUNsQixJQUFJLEVBQUMsRUFBQyxLQUFLLEVBQUMseUNBQXlDLEVBQUM7UUFDdEQsV0FBVyxFQUFFLGFBQWE7S0FDN0IsQ0FBQztxQ0FLcUMsc0JBQWE7R0FKdkMsYUFBYSxDQVd6QjtBQVhZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHtOYXZiYXJTZXJ2aWNlfSBmcm9tIFwiLi4vLi4vcHJvdmlkZXJzL25hdmJhclwiO1xyXG5pbXBvcnQge05hdmJhckl0ZW19IGZyb20gXCIuLi8uLi9lbnRpdGllcy9uYXZiYXJJdGVtXCI7XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgc2VsZWN0b3I6ICduYXZiYXInLFxyXG4gICAgaG9zdDp7Y2xhc3M6J25hdmJhciBuYXZiYXItZGVmYXVsdCBuYXZiYXItc3RhdGljLXRvcCd9LFxyXG4gICAgdGVtcGxhdGVVcmw6ICduYXZiYXIuaHRtbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIE5hdmJhckNvbnRyb2wgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICAgIG5hdmJhckxpc3Q6IE5hdmJhckl0ZW1bXTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIG5hdmJhclNlcnZpY2U6IE5hdmJhclNlcnZpY2UpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5uYXZiYXJTZXJ2aWNlLm5hdmJhcigpLnN1YnNjcmliZShyZXNwb25zZSA9PiB0aGlzLm5hdmJhckxpc3QgPSByZXNwb25zZSk7XHJcbiAgICB9XHJcbn0iXX0=