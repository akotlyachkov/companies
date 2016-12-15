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
var PeriodsDropwownControl = (function () {
    function PeriodsDropwownControl() {
        this.disabled = false;
        this.status = { isopen: false };
        this.items = ['2015 год', '2014 год', '2013 год', '2012 год'];
        this.selectedItem = this.items[0];
    }
    PeriodsDropwownControl.prototype.toggled = function (open) {
        console.log('Dropdown is now: ', open);
    };
    PeriodsDropwownControl.prototype.toggleDropdown = function ($event) {
        $event.preventDefault();
        $event.stopPropagation();
        this.status.isopen = !this.status.isopen;
    };
    PeriodsDropwownControl.prototype.selectMenuItem = function (item) {
        this.selectedItem = item;
        console.log('Selected: ', item);
    };
    return PeriodsDropwownControl;
}());
PeriodsDropwownControl = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'select-periods',
        templateUrl: 'standart.html'
    }),
    __metadata("design:paramtypes", [])
], PeriodsDropwownControl);
exports.PeriodsDropwownControl = PeriodsDropwownControl;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGVyaW9kcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInBlcmlvZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHNDQUF3QztBQU94QztJQUxBO1FBTVcsYUFBUSxHQUFZLEtBQUssQ0FBQztRQUMxQixXQUFNLEdBQXNCLEVBQUMsTUFBTSxFQUFFLEtBQUssRUFBQyxDQUFDO1FBQzVDLFVBQUssR0FBYSxDQUFDLFVBQVUsRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFFLFVBQVUsQ0FBQyxDQUFDO1FBQ25FLGlCQUFZLEdBQVcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztJQWtCaEQsQ0FBQztJQWhCVSx3Q0FBTyxHQUFkLFVBQWUsSUFBYTtRQUN4QixPQUFPLENBQUMsR0FBRyxDQUFDLG1CQUFtQixFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzNDLENBQUM7SUFFTSwrQ0FBYyxHQUFyQixVQUFzQixNQUFrQjtRQUNwQyxNQUFNLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDeEIsTUFBTSxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUM7SUFDN0MsQ0FBQztJQUVNLCtDQUFjLEdBQXJCLFVBQXNCLElBQVc7UUFDN0IsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7UUFDekIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQUdMLDZCQUFDO0FBQUQsQ0FBQyxBQXRCRCxJQXNCQztBQXRCRDtJQUxDLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7UUFDbkIsUUFBUSxFQUFFLGdCQUFnQjtRQUMxQixXQUFXLEVBQUUsZUFBZTtLQUMvQixDQUFDOzswQkF1QkQ7QUF0QlksaUNBQUEsc0JBQXNCLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHNlbGVjdG9yOiAnc2VsZWN0LXBlcmlvZHMnLFxyXG4gICAgdGVtcGxhdGVVcmw6ICdzdGFuZGFydC5odG1sJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgUGVyaW9kc0Ryb3B3b3duQ29udHJvbCB7XHJcbiAgICBwdWJsaWMgZGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHB1YmxpYyBzdGF0dXM6IHtpc29wZW46IGJvb2xlYW59ID0ge2lzb3BlbjogZmFsc2V9O1xyXG4gICAgcHVibGljIGl0ZW1zOiBzdHJpbmdbXSA9IFsnMjAxNSDQs9C+0LQnLCAnMjAxNCDQs9C+0LQnLCAnMjAxMyDQs9C+0LQnLCAnMjAxMiDQs9C+0LQnXTtcclxuICAgIHB1YmxpYyBzZWxlY3RlZEl0ZW06IHN0cmluZyA9IHRoaXMuaXRlbXNbMF07XHJcblxyXG4gICAgcHVibGljIHRvZ2dsZWQob3BlbjogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdEcm9wZG93biBpcyBub3c6ICcsIG9wZW4pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB0b2dnbGVEcm9wZG93bigkZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkIHtcclxuICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgdGhpcy5zdGF0dXMuaXNvcGVuID0gIXRoaXMuc3RhdHVzLmlzb3BlbjtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2VsZWN0TWVudUl0ZW0oaXRlbTpzdHJpbmcpOiB2b2lke1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRJdGVtID0gaXRlbTtcclxuICAgICAgICBjb25zb2xlLmxvZygnU2VsZWN0ZWQ6ICcsIGl0ZW0pO1xyXG4gICAgfVxyXG5cclxuXHJcbn1cclxuIl19