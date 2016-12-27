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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGVyaW9kcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInBlcmlvZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHNDQUF3QztBQU94QyxJQUFhLHNCQUFzQjtJQUxuQztRQU1XLGFBQVEsR0FBWSxLQUFLLENBQUM7UUFDMUIsV0FBTSxHQUFzQixFQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUMsQ0FBQztRQUM1QyxVQUFLLEdBQWEsQ0FBQyxVQUFVLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxVQUFVLENBQUMsQ0FBQztRQUNuRSxpQkFBWSxHQUFXLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFrQmhELENBQUM7SUFoQlUsd0NBQU8sR0FBZCxVQUFlLElBQWE7UUFDeEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUMzQyxDQUFDO0lBRU0sK0NBQWMsR0FBckIsVUFBc0IsTUFBa0I7UUFDcEMsTUFBTSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3hCLE1BQU0sQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUN6QixJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDO0lBQzdDLENBQUM7SUFFTSwrQ0FBYyxHQUFyQixVQUFzQixJQUFXO1FBQzdCLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO1FBQ3pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFHTCw2QkFBQztBQUFELENBQUMsQUF0QkQsSUFzQkM7QUF0Qlksc0JBQXNCO0lBTGxDLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7UUFDbkIsUUFBUSxFQUFFLGdCQUFnQjtRQUMxQixXQUFXLEVBQUUsZUFBZTtLQUMvQixDQUFDOztHQUNXLHNCQUFzQixDQXNCbEM7QUF0Qlksd0RBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICBzZWxlY3RvcjogJ3NlbGVjdC1wZXJpb2RzJyxcclxuICAgIHRlbXBsYXRlVXJsOiAnc3RhbmRhcnQuaHRtbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIFBlcmlvZHNEcm9wd293bkNvbnRyb2wge1xyXG4gICAgcHVibGljIGRpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBwdWJsaWMgc3RhdHVzOiB7aXNvcGVuOiBib29sZWFufSA9IHtpc29wZW46IGZhbHNlfTtcclxuICAgIHB1YmxpYyBpdGVtczogc3RyaW5nW10gPSBbJzIwMTUg0LPQvtC0JywgJzIwMTQg0LPQvtC0JywgJzIwMTMg0LPQvtC0JywgJzIwMTIg0LPQvtC0J107XHJcbiAgICBwdWJsaWMgc2VsZWN0ZWRJdGVtOiBzdHJpbmcgPSB0aGlzLml0ZW1zWzBdO1xyXG5cclxuICAgIHB1YmxpYyB0b2dnbGVkKG9wZW46IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnRHJvcGRvd24gaXMgbm93OiAnLCBvcGVuKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdG9nZ2xlRHJvcGRvd24oJGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZCB7XHJcbiAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgIHRoaXMuc3RhdHVzLmlzb3BlbiA9ICF0aGlzLnN0YXR1cy5pc29wZW47XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNlbGVjdE1lbnVJdGVtKGl0ZW06c3RyaW5nKTogdm9pZHtcclxuICAgICAgICB0aGlzLnNlbGVjdGVkSXRlbSA9IGl0ZW07XHJcbiAgICAgICAgY29uc29sZS5sb2coJ1NlbGVjdGVkOiAnLCBpdGVtKTtcclxuICAgIH1cclxuXHJcblxyXG59XHJcbiJdfQ==