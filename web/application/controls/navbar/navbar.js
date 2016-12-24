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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2YmFyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibmF2YmFyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxzQ0FBZ0Q7QUFDaEQsaURBQXFEO0FBVXJEO0lBSUksdUJBQW9CLGFBQTRCO1FBQTVCLGtCQUFhLEdBQWIsYUFBYSxDQUFlO0lBRWhELENBQUM7SUFFRCxnQ0FBUSxHQUFSO1FBQUEsaUJBRUM7UUFERyxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sRUFBRSxDQUFDLFNBQVMsQ0FBQyxVQUFBLFFBQVEsSUFBSSxPQUFBLEtBQUksQ0FBQyxVQUFVLEdBQUcsUUFBUSxFQUExQixDQUEwQixDQUFDLENBQUM7SUFDbEYsQ0FBQztJQUNMLG9CQUFDO0FBQUQsQ0FBQyxBQVhELElBV0M7QUFYRDtJQU5DLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7UUFDbkIsUUFBUSxFQUFFLFFBQVE7UUFDbEIsSUFBSSxFQUFDLEVBQUMsS0FBSyxFQUFDLHlDQUF5QyxFQUFDO1FBQ3RELFdBQVcsRUFBRSxhQUFhO0tBQzdCLENBQUM7cUNBS3FDLHNCQUFhO2lCQU9uRDtBQVhZLHdCQUFBLGFBQWEsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXR9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7TmF2YmFyU2VydmljZX0gZnJvbSBcIi4uLy4uL3Byb3ZpZGVycy9uYXZiYXJcIjtcclxuaW1wb3J0IHtOYXZiYXJJdGVtfSBmcm9tIFwiLi4vLi4vZW50aXRpZXMvbmF2YmFySXRlbVwiO1xyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHNlbGVjdG9yOiAnbmF2YmFyJyxcclxuICAgIGhvc3Q6e2NsYXNzOiduYXZiYXIgbmF2YmFyLWRlZmF1bHQgbmF2YmFyLXN0YXRpYy10b3AnfSxcclxuICAgIHRlbXBsYXRlVXJsOiAnbmF2YmFyLmh0bWwnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOYXZiYXJDb250cm9sIGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgICBuYXZiYXJMaXN0OiBOYXZiYXJJdGVtW107XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBuYXZiYXJTZXJ2aWNlOiBOYXZiYXJTZXJ2aWNlKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMubmF2YmFyU2VydmljZS5uYXZiYXIoKS5zdWJzY3JpYmUocmVzcG9uc2UgPT4gdGhpcy5uYXZiYXJMaXN0ID0gcmVzcG9uc2UpO1xyXG4gICAgfVxyXG59Il19