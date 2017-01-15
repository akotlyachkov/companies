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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2tmcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm9rZnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHNDQUF3QztBQU94QztJQUxBO1FBTVcsYUFBUSxHQUFZLEtBQUssQ0FBQztRQUMxQixXQUFNLEdBQXNCLEVBQUMsTUFBTSxFQUFFLEtBQUssRUFBQyxDQUFDO1FBQzVDLFVBQUssR0FBYSxDQUFDLEtBQUs7WUFDM0IsMEJBQTBCO1lBQzFCLDJDQUEyQztZQUMzQyxtREFBbUQ7WUFDbkQsc0VBQXNFO1lBQ3RFLHlDQUF5QyxDQUFDLENBQUM7UUFDeEMsaUJBQVksR0FBVyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBa0JoRCxDQUFDO0lBaEJVLHFDQUFPLEdBQWQsVUFBZSxJQUFhO1FBQ3hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUJBQW1CLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDM0MsQ0FBQztJQUVNLDRDQUFjLEdBQXJCLFVBQXNCLE1BQWtCO1FBQ3BDLE1BQU0sQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN4QixNQUFNLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDekIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQztJQUM3QyxDQUFDO0lBRU0sNENBQWMsR0FBckIsVUFBc0IsSUFBVztRQUM3QixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztRQUN6QixPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBR0wsMEJBQUM7QUFBRCxDQUFDLEFBM0JELElBMkJDO0FBM0JEO0lBTEMsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtRQUNuQixRQUFRLEVBQUUsYUFBYTtRQUN2QixXQUFXLEVBQUUsZ0JBQWdCO0tBQ2hDLENBQUM7O3VCQTRCRDtBQTNCWSw4QkFBQSxtQkFBbUIsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgc2VsZWN0b3I6ICdzZWxlY3Qtb2tmcycsXHJcbiAgICB0ZW1wbGF0ZVVybDogJ3RlbXBsYXRlZC5odG1sJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgT2tmc0Ryb3B3b3duQ29udHJvbCB7XHJcbiAgICBwdWJsaWMgZGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHB1YmxpYyBzdGF0dXM6IHtpc29wZW46IGJvb2xlYW59ID0ge2lzb3BlbjogZmFsc2V9O1xyXG4gICAgcHVibGljIGl0ZW1zOiBzdHJpbmdbXSA9IFsn0JLRgdC1JyxcclxuICAgICAgICAn0KDQntCh0KHQmNCZ0KHQmtCQ0K8g0KHQntCR0KHQotCS0JXQndCd0J7QodCi0KwnLFxyXG4gICAgICAgICcmbmJzcDsmbmJzcDvQk9C+0YHRg9C00LDRgNGB0YLQstC10L3QvdCw0Y8g0YHQvtCx0YHRgtCy0LXQvdC90L7RgdGC0YwnLFxyXG4gICAgICAgICcmbmJzcDsmbmJzcDsmbmJzcDsmbmJzcDvQpNC10LTQtdGA0LDQu9GM0L3QsNGPINGB0L7QsdGB0YLQstC10L3QvdC+0YHRgtGMJyxcclxuICAgICAgICAnJm5ic3A7Jm5ic3A7Jm5ic3A7Jm5ic3A70KHQvtCx0YHRgtCy0LXQvdC90L7RgdGC0Ywg0YHRg9Cx0YrQtdC60YLQvtCyINCg0L7RgdGB0LjQudGB0LrQvtC5INCk0LXQtNC10YDQsNGG0LjQuCcsXHJcbiAgICAgICAgJyZuYnNwOyZuYnNwO9Cc0YPQvdC40YbQuNC/0LDQu9GM0L3QsNGPINGB0L7QsdGB0YLQstC10L3QvdC+0YHRgtGMJ107XHJcbiAgICBwdWJsaWMgc2VsZWN0ZWRJdGVtOiBzdHJpbmcgPSB0aGlzLml0ZW1zWzBdO1xyXG5cclxuICAgIHB1YmxpYyB0b2dnbGVkKG9wZW46IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnRHJvcGRvd24gaXMgbm93OiAnLCBvcGVuKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdG9nZ2xlRHJvcGRvd24oJGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZCB7XHJcbiAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgIHRoaXMuc3RhdHVzLmlzb3BlbiA9ICF0aGlzLnN0YXR1cy5pc29wZW47XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNlbGVjdE1lbnVJdGVtKGl0ZW06c3RyaW5nKTogdm9pZHtcclxuICAgICAgICB0aGlzLnNlbGVjdGVkSXRlbSA9IGl0ZW07XHJcbiAgICAgICAgY29uc29sZS5sb2coJ1NlbGVjdGVkOiAnLCBpdGVtKTtcclxuICAgIH1cclxuXHJcblxyXG59XHJcbiJdfQ==