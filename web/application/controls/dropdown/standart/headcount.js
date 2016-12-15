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
var HeadcountDropwownControl = (function () {
    function HeadcountDropwownControl() {
        this.disabled = false;
        this.status = { isopen: false };
        this.items = ['Не задана',
            '1 - 5',
            '5 - 20',
            '20 - 50',
            '50 - 100',
            '100 - 200',
            '200 - 500'];
        this.selectedItem = this.items[0];
    }
    HeadcountDropwownControl.prototype.toggled = function (open) {
        console.log('Dropdown is now: ', open);
    };
    HeadcountDropwownControl.prototype.toggleDropdown = function ($event) {
        $event.preventDefault();
        $event.stopPropagation();
        this.status.isopen = !this.status.isopen;
    };
    HeadcountDropwownControl.prototype.selectMenuItem = function (item) {
        this.selectedItem = item;
        console.log('Selected: ', item);
    };
    return HeadcountDropwownControl;
}());
HeadcountDropwownControl = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'select-headcount',
        templateUrl: 'standart.html'
    }),
    __metadata("design:paramtypes", [])
], HeadcountDropwownControl);
exports.HeadcountDropwownControl = HeadcountDropwownControl;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVhZGNvdW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaGVhZGNvdW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxzQ0FBd0M7QUFPeEM7SUFMQTtRQU1XLGFBQVEsR0FBWSxLQUFLLENBQUM7UUFDMUIsV0FBTSxHQUFzQixFQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUMsQ0FBQztRQUM1QyxVQUFLLEdBQWEsQ0FBQyxXQUFXO1lBQ2pDLE9BQU87WUFDUCxRQUFRO1lBQ1IsU0FBUztZQUNULFVBQVU7WUFDVixXQUFXO1lBQ1gsV0FBVyxDQUFDLENBQUM7UUFDVixpQkFBWSxHQUFXLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFrQmhELENBQUM7SUFoQlUsMENBQU8sR0FBZCxVQUFlLElBQWE7UUFDeEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUMzQyxDQUFDO0lBRU0saURBQWMsR0FBckIsVUFBc0IsTUFBa0I7UUFDcEMsTUFBTSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3hCLE1BQU0sQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUN6QixJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDO0lBQzdDLENBQUM7SUFFTSxpREFBYyxHQUFyQixVQUFzQixJQUFXO1FBQzdCLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO1FBQ3pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFHTCwrQkFBQztBQUFELENBQUMsQUE1QkQsSUE0QkM7QUE1QkQ7SUFMQyxnQkFBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1FBQ25CLFFBQVEsRUFBRSxrQkFBa0I7UUFDNUIsV0FBVyxFQUFFLGVBQWU7S0FDL0IsQ0FBQzs7NEJBNkJEO0FBNUJZLG1DQUFBLHdCQUF3QixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICBzZWxlY3RvcjogJ3NlbGVjdC1oZWFkY291bnQnLFxyXG4gICAgdGVtcGxhdGVVcmw6ICdzdGFuZGFydC5odG1sJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgSGVhZGNvdW50RHJvcHdvd25Db250cm9sIHtcclxuICAgIHB1YmxpYyBkaXNhYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHVibGljIHN0YXR1czoge2lzb3BlbjogYm9vbGVhbn0gPSB7aXNvcGVuOiBmYWxzZX07XHJcbiAgICBwdWJsaWMgaXRlbXM6IHN0cmluZ1tdID0gWyfQndC1INC30LDQtNCw0L3QsCcsXHJcbiAgICAgICAgJzEgLSA1JyxcclxuICAgICAgICAnNSAtIDIwJyxcclxuICAgICAgICAnMjAgLSA1MCcsXHJcbiAgICAgICAgJzUwIC0gMTAwJyxcclxuICAgICAgICAnMTAwIC0gMjAwJyxcclxuICAgICAgICAnMjAwIC0gNTAwJ107XHJcbiAgICBwdWJsaWMgc2VsZWN0ZWRJdGVtOiBzdHJpbmcgPSB0aGlzLml0ZW1zWzBdO1xyXG5cclxuICAgIHB1YmxpYyB0b2dnbGVkKG9wZW46IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnRHJvcGRvd24gaXMgbm93OiAnLCBvcGVuKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdG9nZ2xlRHJvcGRvd24oJGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZCB7XHJcbiAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgIHRoaXMuc3RhdHVzLmlzb3BlbiA9ICF0aGlzLnN0YXR1cy5pc29wZW47XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNlbGVjdE1lbnVJdGVtKGl0ZW06c3RyaW5nKTogdm9pZHtcclxuICAgICAgICB0aGlzLnNlbGVjdGVkSXRlbSA9IGl0ZW07XHJcbiAgICAgICAgY29uc29sZS5sb2coJ1NlbGVjdGVkOiAnLCBpdGVtKTtcclxuICAgIH1cclxuXHJcblxyXG59XHJcbiJdfQ==