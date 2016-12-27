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
var AssetsDropwownControl = (function () {
    function AssetsDropwownControl() {
        this.disabled = false;
        this.status = { isopen: false };
        this.items = ['АКТИВЫ всего', 'Валовая прибыль', 'ВНЕОБОРОТНЫЕ АКТИВЫ', 'Выручка'];
        this.selectedItem = this.items[0];
    }
    AssetsDropwownControl.prototype.toggled = function (open) {
        console.log('Dropdown is now: ', open);
    };
    AssetsDropwownControl.prototype.toggleDropdown = function ($event) {
        $event.preventDefault();
        $event.stopPropagation();
        this.status.isopen = !this.status.isopen;
    };
    AssetsDropwownControl.prototype.selectMenuItem = function (item) {
        this.selectedItem = item;
        console.log('Selected: ', item);
    };
    return AssetsDropwownControl;
}());
AssetsDropwownControl = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'select-assets',
        templateUrl: 'standart.html'
    }),
    __metadata("design:paramtypes", [])
], AssetsDropwownControl);
exports.AssetsDropwownControl = AssetsDropwownControl;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNzZXRzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXNzZXRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxzQ0FBd0M7QUFPeEMsSUFBYSxxQkFBcUI7SUFMbEM7UUFNVyxhQUFRLEdBQVksS0FBSyxDQUFDO1FBQzFCLFdBQU0sR0FBc0IsRUFBQyxNQUFNLEVBQUUsS0FBSyxFQUFDLENBQUM7UUFDNUMsVUFBSyxHQUFhLENBQUMsY0FBYyxFQUFFLGlCQUFpQixFQUFFLHFCQUFxQixFQUFFLFNBQVMsQ0FBQyxDQUFDO1FBQ3hGLGlCQUFZLEdBQVcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztJQWtCaEQsQ0FBQztJQWhCVSx1Q0FBTyxHQUFkLFVBQWUsSUFBYTtRQUN4QixPQUFPLENBQUMsR0FBRyxDQUFDLG1CQUFtQixFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzNDLENBQUM7SUFFTSw4Q0FBYyxHQUFyQixVQUFzQixNQUFrQjtRQUNwQyxNQUFNLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDeEIsTUFBTSxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUM7SUFDN0MsQ0FBQztJQUVNLDhDQUFjLEdBQXJCLFVBQXNCLElBQVc7UUFDN0IsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7UUFDekIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQUdMLDRCQUFDO0FBQUQsQ0FBQyxBQXRCRCxJQXNCQztBQXRCWSxxQkFBcUI7SUFMakMsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtRQUNuQixRQUFRLEVBQUUsZUFBZTtRQUN6QixXQUFXLEVBQUUsZUFBZTtLQUMvQixDQUFDOztHQUNXLHFCQUFxQixDQXNCakM7QUF0Qlksc0RBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICBzZWxlY3RvcjogJ3NlbGVjdC1hc3NldHMnLFxyXG4gICAgdGVtcGxhdGVVcmw6ICdzdGFuZGFydC5odG1sJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgQXNzZXRzRHJvcHdvd25Db250cm9sIHtcclxuICAgIHB1YmxpYyBkaXNhYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHVibGljIHN0YXR1czoge2lzb3BlbjogYm9vbGVhbn0gPSB7aXNvcGVuOiBmYWxzZX07XHJcbiAgICBwdWJsaWMgaXRlbXM6IHN0cmluZ1tdID0gWyfQkNCa0KLQmNCS0Ksg0LLRgdC10LPQvicsICfQktCw0LvQvtCy0LDRjyDQv9GA0LjQsdGL0LvRjCcsICfQktCd0JXQntCR0J7QoNCe0KLQndCr0JUg0JDQmtCi0JjQktCrJywgJ9CS0YvRgNGD0YfQutCwJ107XHJcbiAgICBwdWJsaWMgc2VsZWN0ZWRJdGVtOiBzdHJpbmcgPSB0aGlzLml0ZW1zWzBdO1xyXG5cclxuICAgIHB1YmxpYyB0b2dnbGVkKG9wZW46IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnRHJvcGRvd24gaXMgbm93OiAnLCBvcGVuKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdG9nZ2xlRHJvcGRvd24oJGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZCB7XHJcbiAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgIHRoaXMuc3RhdHVzLmlzb3BlbiA9ICF0aGlzLnN0YXR1cy5pc29wZW47XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNlbGVjdE1lbnVJdGVtKGl0ZW06c3RyaW5nKTogdm9pZHtcclxuICAgICAgICB0aGlzLnNlbGVjdGVkSXRlbSA9IGl0ZW07XHJcbiAgICAgICAgY29uc29sZS5sb2coJ1NlbGVjdGVkOiAnLCBpdGVtKTtcclxuICAgIH1cclxuXHJcblxyXG59XHJcbiJdfQ==