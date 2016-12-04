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
var OperatorsDropwownControl = (function () {
    function OperatorsDropwownControl() {
        this.disabled = false;
        this.status = { isopen: false };
        this.items = ['>', '<', '>=', '<='];
        this.selectedItem = this.items[0];
    }
    OperatorsDropwownControl.prototype.toggled = function (open) {
        console.log('Dropdown is now: ', open);
    };
    OperatorsDropwownControl.prototype.toggleDropdown = function ($event) {
        $event.preventDefault();
        $event.stopPropagation();
        this.status.isopen = !this.status.isopen;
    };
    OperatorsDropwownControl.prototype.selectMenuItem = function (item) {
        this.selectedItem = item;
        console.log('Selected: ', item);
    };
    return OperatorsDropwownControl;
}());
OperatorsDropwownControl = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'operators-dropdown',
        templateUrl: 'operators.html'
    }),
    __metadata("design:paramtypes", [])
], OperatorsDropwownControl);
exports.OperatorsDropwownControl = OperatorsDropwownControl;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3BlcmF0b3JzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsib3BlcmF0b3JzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxzQ0FBd0M7QUFPeEM7SUFMQTtRQU1XLGFBQVEsR0FBWSxLQUFLLENBQUM7UUFDMUIsV0FBTSxHQUFzQixFQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUMsQ0FBQztRQUM1QyxVQUFLLEdBQWEsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztRQUN6QyxpQkFBWSxHQUFXLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFrQmhELENBQUM7SUFoQlUsMENBQU8sR0FBZCxVQUFlLElBQWE7UUFDeEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUMzQyxDQUFDO0lBRU0saURBQWMsR0FBckIsVUFBc0IsTUFBa0I7UUFDcEMsTUFBTSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3hCLE1BQU0sQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUN6QixJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDO0lBQzdDLENBQUM7SUFFTSxpREFBYyxHQUFyQixVQUFzQixJQUFXO1FBQzdCLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO1FBQ3pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFHTCwrQkFBQztBQUFELENBQUMsQUF0QkQsSUFzQkM7QUF0QkQ7SUFMQyxnQkFBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1FBQ25CLFFBQVEsRUFBRSxvQkFBb0I7UUFDOUIsV0FBVyxFQUFFLGdCQUFnQjtLQUNoQyxDQUFDOzs0QkF1QkQ7QUF0QlksbUNBQUEsd0JBQXdCLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHNlbGVjdG9yOiAnb3BlcmF0b3JzLWRyb3Bkb3duJyxcclxuICAgIHRlbXBsYXRlVXJsOiAnb3BlcmF0b3JzLmh0bWwnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBPcGVyYXRvcnNEcm9wd293bkNvbnRyb2wge1xyXG4gICAgcHVibGljIGRpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBwdWJsaWMgc3RhdHVzOiB7aXNvcGVuOiBib29sZWFufSA9IHtpc29wZW46IGZhbHNlfTtcclxuICAgIHB1YmxpYyBpdGVtczogc3RyaW5nW10gPSBbJz4nLCAnPCcsICc+PScsICc8PSddO1xyXG4gICAgcHVibGljIHNlbGVjdGVkSXRlbTogc3RyaW5nID0gdGhpcy5pdGVtc1swXTtcclxuXHJcbiAgICBwdWJsaWMgdG9nZ2xlZChvcGVuOiBib29sZWFuKTogdm9pZCB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ0Ryb3Bkb3duIGlzIG5vdzogJywgb3Blbik7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHRvZ2dsZURyb3Bkb3duKCRldmVudDogTW91c2VFdmVudCk6IHZvaWQge1xyXG4gICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICB0aGlzLnN0YXR1cy5pc29wZW4gPSAhdGhpcy5zdGF0dXMuaXNvcGVuO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZWxlY3RNZW51SXRlbShpdGVtOnN0cmluZyk6IHZvaWR7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZEl0ZW0gPSBpdGVtO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdTZWxlY3RlZDogJywgaXRlbSk7XHJcbiAgICB9XHJcblxyXG5cclxufVxyXG4iXX0=