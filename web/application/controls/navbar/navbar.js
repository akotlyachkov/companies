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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2YmFyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibmF2YmFyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxzQ0FBZ0Q7QUFDaEQsaURBQXFEO0FBU3JEO0lBSUksdUJBQW9CLGFBQTRCO1FBQTVCLGtCQUFhLEdBQWIsYUFBYSxDQUFlO0lBRWhELENBQUM7SUFFRCxnQ0FBUSxHQUFSO1FBQUEsaUJBRUM7UUFERyxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sRUFBRSxDQUFDLFNBQVMsQ0FBQyxVQUFBLFFBQVEsSUFBSSxPQUFBLEtBQUksQ0FBQyxVQUFVLEdBQUcsUUFBUSxFQUExQixDQUEwQixDQUFDLENBQUM7SUFDbEYsQ0FBQztJQUNMLG9CQUFDO0FBQUQsQ0FBQyxBQVhELElBV0M7QUFYRDtJQUxDLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7UUFDbkIsUUFBUSxFQUFFLFFBQVE7UUFDbEIsV0FBVyxFQUFFLGFBQWE7S0FDN0IsQ0FBQztxQ0FLcUMsc0JBQWE7aUJBT25EO0FBWFksd0JBQUEsYUFBYSxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHtOYXZiYXJTZXJ2aWNlfSBmcm9tIFwiLi4vLi4vcHJvdmlkZXJzL25hdmJhclwiO1xyXG5pbXBvcnQge05hdmJhckl0ZW19IGZyb20gXCIuLi8uLi9lbnRpdGllcy9OYXZiYXJJdGVtXCI7XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgc2VsZWN0b3I6ICduYXZiYXInLFxyXG4gICAgdGVtcGxhdGVVcmw6ICduYXZiYXIuaHRtbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIE5hdmJhckNvbnRyb2wgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICAgIG5hdmJhckxpc3Q6IE5hdmJhckl0ZW1bXTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIG5hdmJhclNlcnZpY2U6IE5hdmJhclNlcnZpY2UpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5uYXZiYXJTZXJ2aWNlLm5hdmJhcigpLnN1YnNjcmliZShyZXNwb25zZSA9PiB0aGlzLm5hdmJhckxpc3QgPSByZXNwb25zZSk7XHJcbiAgICB9XHJcbn0iXX0=