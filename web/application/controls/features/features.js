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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmVhdHVyZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJmZWF0dXJlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsc0NBQWdEO0FBQ2hELGlEQUFxRDtBQVNyRCxJQUFhLGVBQWU7SUFJeEIseUJBQW9CLGFBQTRCO1FBQTVCLGtCQUFhLEdBQWIsYUFBYSxDQUFlO0lBRWhELENBQUM7SUFFRCxrQ0FBUSxHQUFSO1FBQUEsaUJBRUM7UUFERyxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsRUFBRSxDQUFDLFNBQVMsQ0FBQyxVQUFBLFFBQVEsSUFBSSxPQUFBLEtBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxFQUF4QixDQUF3QixDQUFDLENBQUM7SUFDbEYsQ0FBQztJQUVMLHNCQUFDO0FBQUQsQ0FBQyxBQVpELElBWUM7QUFaWSxlQUFlO0lBTDNCLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7UUFDbkIsUUFBUSxFQUFFLFVBQVU7UUFDcEIsV0FBVyxFQUFFLGVBQWU7S0FDL0IsQ0FBQztxQ0FLcUMsc0JBQWE7R0FKdkMsZUFBZSxDQVkzQjtBQVpZLDBDQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHtOYXZiYXJTZXJ2aWNlfSBmcm9tIFwiLi4vLi4vcHJvdmlkZXJzL25hdmJhclwiO1xyXG5pbXBvcnQge05hdmJhckl0ZW19IGZyb20gXCIuLi8uLi9lbnRpdGllcy9uYXZiYXJJdGVtXCI7XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgc2VsZWN0b3I6ICdmZWF0dXJlcycsXHJcbiAgICB0ZW1wbGF0ZVVybDogJ2ZlYXR1cmVzLmh0bWwnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBGZWF0dXJlc0NvbnRyb2wgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICAgIGZlYXR1cmVzOiBOYXZiYXJJdGVtW107XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBuYXZiYXJTZXJ2aWNlOiBOYXZiYXJTZXJ2aWNlKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMubmF2YmFyU2VydmljZS5mZWF0dXJlcygpLnN1YnNjcmliZShyZXNwb25zZSA9PiB0aGlzLmZlYXR1cmVzID0gcmVzcG9uc2UpO1xyXG4gICAgfVxyXG5cclxufSJdfQ==