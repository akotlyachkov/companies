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
var OkfsDropwownControl = (function () {
    function OkfsDropwownControl() {
        this.disabled = false;
        this.status = { isopen: false };
        this.items = ['Все',
            'РОССИЙСКАЯ СОБСТВЕННОСТЬ',
            '&nbsp;&nbsp;Государственная собственность',
            '&nbsp;&nbsp;&nbsp;&nbsp;Федеральная собственность',
            '&nbsp;&nbsp;&nbsp;&nbsp;Собственность субъектов Российской Федерации',
            '&nbsp;&nbsp;Муниципальная собственность'];
        this.selectedItem = this.items[0];
    }
    OkfsDropwownControl.prototype.toggled = function (open) {
        console.log('Dropdown is now: ', open);
    };
    OkfsDropwownControl.prototype.toggleDropdown = function ($event) {
        $event.preventDefault();
        $event.stopPropagation();
        this.status.isopen = !this.status.isopen;
    };
    OkfsDropwownControl.prototype.selectMenuItem = function (item) {
        this.selectedItem = item;
        console.log('Selected: ', item);
    };
    return OkfsDropwownControl;
}());
OkfsDropwownControl = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'select-okfs',
        templateUrl: 'templated.html'
    }),
    __metadata("design:paramtypes", [])
], OkfsDropwownControl);
exports.OkfsDropwownControl = OkfsDropwownControl;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2tmcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm9rZnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHNDQUF3QztBQU94QyxJQUFhLG1CQUFtQjtJQUxoQztRQU1XLGFBQVEsR0FBWSxLQUFLLENBQUM7UUFDMUIsV0FBTSxHQUFzQixFQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUMsQ0FBQztRQUM1QyxVQUFLLEdBQWEsQ0FBQyxLQUFLO1lBQzNCLDBCQUEwQjtZQUMxQiwyQ0FBMkM7WUFDM0MsbURBQW1EO1lBQ25ELHNFQUFzRTtZQUN0RSx5Q0FBeUMsQ0FBQyxDQUFDO1FBQ3hDLGlCQUFZLEdBQVcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztJQWtCaEQsQ0FBQztJQWhCVSxxQ0FBTyxHQUFkLFVBQWUsSUFBYTtRQUN4QixPQUFPLENBQUMsR0FBRyxDQUFDLG1CQUFtQixFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzNDLENBQUM7SUFFTSw0Q0FBYyxHQUFyQixVQUFzQixNQUFrQjtRQUNwQyxNQUFNLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDeEIsTUFBTSxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUM7SUFDN0MsQ0FBQztJQUVNLDRDQUFjLEdBQXJCLFVBQXNCLElBQVc7UUFDN0IsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7UUFDekIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQUdMLDBCQUFDO0FBQUQsQ0FBQyxBQTNCRCxJQTJCQztBQTNCWSxtQkFBbUI7SUFML0IsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtRQUNuQixRQUFRLEVBQUUsYUFBYTtRQUN2QixXQUFXLEVBQUUsZ0JBQWdCO0tBQ2hDLENBQUM7O0dBQ1csbUJBQW1CLENBMkIvQjtBQTNCWSxrREFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHNlbGVjdG9yOiAnc2VsZWN0LW9rZnMnLFxyXG4gICAgdGVtcGxhdGVVcmw6ICd0ZW1wbGF0ZWQuaHRtbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIE9rZnNEcm9wd293bkNvbnRyb2wge1xyXG4gICAgcHVibGljIGRpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBwdWJsaWMgc3RhdHVzOiB7aXNvcGVuOiBib29sZWFufSA9IHtpc29wZW46IGZhbHNlfTtcclxuICAgIHB1YmxpYyBpdGVtczogc3RyaW5nW10gPSBbJ9CS0YHQtScsXHJcbiAgICAgICAgJ9Cg0J7QodCh0JjQmdCh0JrQkNCvINCh0J7QkdCh0KLQktCV0J3QndCe0KHQotCsJyxcclxuICAgICAgICAnJm5ic3A7Jm5ic3A70JPQvtGB0YPQtNCw0YDRgdGC0LLQtdC90L3QsNGPINGB0L7QsdGB0YLQstC10L3QvdC+0YHRgtGMJyxcclxuICAgICAgICAnJm5ic3A7Jm5ic3A7Jm5ic3A7Jm5ic3A70KTQtdC00LXRgNCw0LvRjNC90LDRjyDRgdC+0LHRgdGC0LLQtdC90L3QvtGB0YLRjCcsXHJcbiAgICAgICAgJyZuYnNwOyZuYnNwOyZuYnNwOyZuYnNwO9Ch0L7QsdGB0YLQstC10L3QvdC+0YHRgtGMINGB0YPQsdGK0LXQutGC0L7QsiDQoNC+0YHRgdC40LnRgdC60L7QuSDQpNC10LTQtdGA0LDRhtC40LgnLFxyXG4gICAgICAgICcmbmJzcDsmbmJzcDvQnNGD0L3QuNGG0LjQv9Cw0LvRjNC90LDRjyDRgdC+0LHRgdGC0LLQtdC90L3QvtGB0YLRjCddO1xyXG4gICAgcHVibGljIHNlbGVjdGVkSXRlbTogc3RyaW5nID0gdGhpcy5pdGVtc1swXTtcclxuXHJcbiAgICBwdWJsaWMgdG9nZ2xlZChvcGVuOiBib29sZWFuKTogdm9pZCB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ0Ryb3Bkb3duIGlzIG5vdzogJywgb3Blbik7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHRvZ2dsZURyb3Bkb3duKCRldmVudDogTW91c2VFdmVudCk6IHZvaWQge1xyXG4gICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICB0aGlzLnN0YXR1cy5pc29wZW4gPSAhdGhpcy5zdGF0dXMuaXNvcGVuO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZWxlY3RNZW51SXRlbShpdGVtOnN0cmluZyk6IHZvaWR7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZEl0ZW0gPSBpdGVtO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdTZWxlY3RlZDogJywgaXRlbSk7XHJcbiAgICB9XHJcblxyXG5cclxufVxyXG4iXX0=