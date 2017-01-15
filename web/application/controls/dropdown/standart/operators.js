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
        selector: 'select-operators',
        templateUrl: 'standart.html'
    }),
    __metadata("design:paramtypes", [])
], OperatorsDropwownControl);
exports.OperatorsDropwownControl = OperatorsDropwownControl;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3BlcmF0b3JzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsib3BlcmF0b3JzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxzQ0FBd0M7QUFPeEM7SUFMQTtRQU1XLGFBQVEsR0FBWSxLQUFLLENBQUM7UUFDMUIsV0FBTSxHQUFzQixFQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUMsQ0FBQztRQUM1QyxVQUFLLEdBQWEsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztRQUN6QyxpQkFBWSxHQUFXLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFrQmhELENBQUM7SUFoQlUsMENBQU8sR0FBZCxVQUFlLElBQWE7UUFDeEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUMzQyxDQUFDO0lBRU0saURBQWMsR0FBckIsVUFBc0IsTUFBa0I7UUFDcEMsTUFBTSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3hCLE1BQU0sQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUN6QixJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDO0lBQzdDLENBQUM7SUFFTSxpREFBYyxHQUFyQixVQUFzQixJQUFXO1FBQzdCLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO1FBQ3pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFHTCwrQkFBQztBQUFELENBQUMsQUF0QkQsSUFzQkM7QUF0QkQ7SUFMQyxnQkFBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1FBQ25CLFFBQVEsRUFBRSxrQkFBa0I7UUFDNUIsV0FBVyxFQUFFLGVBQWU7S0FDL0IsQ0FBQzs7NEJBdUJEO0FBdEJZLG1DQUFBLHdCQUF3QixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICBzZWxlY3RvcjogJ3NlbGVjdC1vcGVyYXRvcnMnLFxyXG4gICAgdGVtcGxhdGVVcmw6ICdzdGFuZGFydC5odG1sJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgT3BlcmF0b3JzRHJvcHdvd25Db250cm9sIHtcclxuICAgIHB1YmxpYyBkaXNhYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHVibGljIHN0YXR1czoge2lzb3BlbjogYm9vbGVhbn0gPSB7aXNvcGVuOiBmYWxzZX07XHJcbiAgICBwdWJsaWMgaXRlbXM6IHN0cmluZ1tdID0gWyc+JywgJzwnLCAnPj0nLCAnPD0nXTtcclxuICAgIHB1YmxpYyBzZWxlY3RlZEl0ZW06IHN0cmluZyA9IHRoaXMuaXRlbXNbMF07XHJcblxyXG4gICAgcHVibGljIHRvZ2dsZWQob3BlbjogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdEcm9wZG93biBpcyBub3c6ICcsIG9wZW4pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB0b2dnbGVEcm9wZG93bigkZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkIHtcclxuICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgdGhpcy5zdGF0dXMuaXNvcGVuID0gIXRoaXMuc3RhdHVzLmlzb3BlbjtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2VsZWN0TWVudUl0ZW0oaXRlbTpzdHJpbmcpOiB2b2lke1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRJdGVtID0gaXRlbTtcclxuICAgICAgICBjb25zb2xlLmxvZygnU2VsZWN0ZWQ6ICcsIGl0ZW0pO1xyXG4gICAgfVxyXG5cclxuXHJcbn1cclxuIl19