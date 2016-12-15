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
var CurrencyDropwownControl = (function () {
    function CurrencyDropwownControl() {
        this.disabled = false;
        this.status = { isopen: false };
        this.items = ['Руб.', '%'];
        this.selectedItem = this.items[0];
    }
    CurrencyDropwownControl.prototype.toggled = function (open) {
        console.log('Dropdown is now: ', open);
    };
    CurrencyDropwownControl.prototype.toggleDropdown = function ($event) {
        $event.preventDefault();
        $event.stopPropagation();
        this.status.isopen = !this.status.isopen;
    };
    CurrencyDropwownControl.prototype.selectMenuItem = function (item) {
        this.selectedItem = item;
        console.log('Selected: ', item);
    };
    return CurrencyDropwownControl;
}());
CurrencyDropwownControl = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'select-currency',
        templateUrl: 'standart.html'
    }),
    __metadata("design:paramtypes", [])
], CurrencyDropwownControl);
exports.CurrencyDropwownControl = CurrencyDropwownControl;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VycmVuY3kuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjdXJyZW5jeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsc0NBQXdDO0FBT3hDO0lBTEE7UUFNVyxhQUFRLEdBQVksS0FBSyxDQUFDO1FBQzFCLFdBQU0sR0FBc0IsRUFBQyxNQUFNLEVBQUUsS0FBSyxFQUFDLENBQUM7UUFDNUMsVUFBSyxHQUFhLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ2hDLGlCQUFZLEdBQVcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztJQWtCaEQsQ0FBQztJQWhCVSx5Q0FBTyxHQUFkLFVBQWUsSUFBYTtRQUN4QixPQUFPLENBQUMsR0FBRyxDQUFDLG1CQUFtQixFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzNDLENBQUM7SUFFTSxnREFBYyxHQUFyQixVQUFzQixNQUFrQjtRQUNwQyxNQUFNLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDeEIsTUFBTSxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUM7SUFDN0MsQ0FBQztJQUVNLGdEQUFjLEdBQXJCLFVBQXNCLElBQVc7UUFDN0IsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7UUFDekIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQUdMLDhCQUFDO0FBQUQsQ0FBQyxBQXRCRCxJQXNCQztBQXRCRDtJQUxDLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7UUFDbkIsUUFBUSxFQUFFLGlCQUFpQjtRQUMzQixXQUFXLEVBQUUsZUFBZTtLQUMvQixDQUFDOzsyQkF1QkQ7QUF0Qlksa0NBQUEsdUJBQXVCLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHNlbGVjdG9yOiAnc2VsZWN0LWN1cnJlbmN5JyxcclxuICAgIHRlbXBsYXRlVXJsOiAnc3RhbmRhcnQuaHRtbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIEN1cnJlbmN5RHJvcHdvd25Db250cm9sIHtcclxuICAgIHB1YmxpYyBkaXNhYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHVibGljIHN0YXR1czoge2lzb3BlbjogYm9vbGVhbn0gPSB7aXNvcGVuOiBmYWxzZX07XHJcbiAgICBwdWJsaWMgaXRlbXM6IHN0cmluZ1tdID0gWyfQoNGD0LEuJywgJyUnXTtcclxuICAgIHB1YmxpYyBzZWxlY3RlZEl0ZW06IHN0cmluZyA9IHRoaXMuaXRlbXNbMF07XHJcblxyXG4gICAgcHVibGljIHRvZ2dsZWQob3BlbjogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdEcm9wZG93biBpcyBub3c6ICcsIG9wZW4pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB0b2dnbGVEcm9wZG93bigkZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkIHtcclxuICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgdGhpcy5zdGF0dXMuaXNvcGVuID0gIXRoaXMuc3RhdHVzLmlzb3BlbjtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2VsZWN0TWVudUl0ZW0oaXRlbTpzdHJpbmcpOiB2b2lke1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRJdGVtID0gaXRlbTtcclxuICAgICAgICBjb25zb2xlLmxvZygnU2VsZWN0ZWQ6ICcsIGl0ZW0pO1xyXG4gICAgfVxyXG5cclxuXHJcbn1cclxuIl19