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
var FeaturesControl = (function () {
    function FeaturesControl(navbarService) {
        this.navbarService = navbarService;
    }
    FeaturesControl.prototype.ngOnInit = function () {
        var _this = this;
        this.navbarService.features().subscribe(function (response) { return _this.features = response; });
    };
    return FeaturesControl;
}());
FeaturesControl = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'features',
        templateUrl: 'features.html'
    }),
    __metadata("design:paramtypes", [navbar_1.NavbarService])
], FeaturesControl);
exports.FeaturesControl = FeaturesControl;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmVhdHVyZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJmZWF0dXJlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsc0NBQWdEO0FBQ2hELGlEQUFxRDtBQVNyRDtJQUlJLHlCQUFvQixhQUE0QjtRQUE1QixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtJQUVoRCxDQUFDO0lBRUQsa0NBQVEsR0FBUjtRQUFBLGlCQUVDO1FBREcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxTQUFTLENBQUMsVUFBQSxRQUFRLElBQUksT0FBQSxLQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsRUFBeEIsQ0FBd0IsQ0FBQyxDQUFDO0lBQ2xGLENBQUM7SUFFTCxzQkFBQztBQUFELENBQUMsQUFaRCxJQVlDO0FBWkQ7SUFMQyxnQkFBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1FBQ25CLFFBQVEsRUFBRSxVQUFVO1FBQ3BCLFdBQVcsRUFBRSxlQUFlO0tBQy9CLENBQUM7cUNBS3FDLHNCQUFhO21CQVFuRDtBQVpZLDBCQUFBLGVBQWUsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXR9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7TmF2YmFyU2VydmljZX0gZnJvbSBcIi4uLy4uL3Byb3ZpZGVycy9uYXZiYXJcIjtcclxuaW1wb3J0IHtOYXZiYXJJdGVtfSBmcm9tIFwiLi4vLi4vZW50aXRpZXMvbmF2YmFySXRlbVwiO1xyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHNlbGVjdG9yOiAnZmVhdHVyZXMnLFxyXG4gICAgdGVtcGxhdGVVcmw6ICdmZWF0dXJlcy5odG1sJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgRmVhdHVyZXNDb250cm9sIGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgICBmZWF0dXJlczogTmF2YmFySXRlbVtdO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgbmF2YmFyU2VydmljZTogTmF2YmFyU2VydmljZSkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLm5hdmJhclNlcnZpY2UuZmVhdHVyZXMoKS5zdWJzY3JpYmUocmVzcG9uc2UgPT4gdGhpcy5mZWF0dXJlcyA9IHJlc3BvbnNlKTtcclxuICAgIH1cclxuXHJcbn0iXX0=