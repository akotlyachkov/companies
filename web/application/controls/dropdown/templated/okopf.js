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
var OkopfDropwownControl = (function () {
    function OkopfDropwownControl() {
        this.disabled = false;
        this.status = { isopen: false };
        this.items = ['Все',
            'ОРГАНИЗАЦИОННО-ПРАВОВЫЕ ФОРМЫ ЮРИДИЧЕСКИХ ЛИЦ, ЯВЛЯЮЩИХСЯ КОММЕРЧЕСКИМИ КОРПОРАТИВНЫМИ  ОРГАНИЗАЦИЯМИ',
            '&nbsp;&nbsp;Хозяйственные товарищества',
            '&nbsp;&nbsp;&nbsp;&nbsp;Полные товарищества',
            '&nbsp;&nbsp;&nbsp;&nbsp;Товарищества на вере (коммандитные товарищества)',
            '&nbsp;&nbsp;Хозяйственные общества',
            '&nbsp;&nbsp;Акционерные общества',
            '&nbsp;&nbsp;&nbsp;&nbsp;Публичные акционерные общества',
            '&nbsp;&nbsp;&nbsp;&nbsp;Непубличные акционерные общества',
            '&nbsp;&nbsp;Общества с ограниченной ответственностью'];
        this.selectedItem = this.items[0];
    }
    OkopfDropwownControl.prototype.toggled = function (open) {
        console.log('Dropdown is now: ', open);
    };
    OkopfDropwownControl.prototype.toggleDropdown = function ($event) {
        $event.preventDefault();
        $event.stopPropagation();
        this.status.isopen = !this.status.isopen;
    };
    OkopfDropwownControl.prototype.selectMenuItem = function (item) {
        this.selectedItem = item;
        console.log('Selected: ', item);
    };
    return OkopfDropwownControl;
}());
OkopfDropwownControl = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'select-okopf',
        templateUrl: 'templated.html'
    }),
    __metadata("design:paramtypes", [])
], OkopfDropwownControl);
exports.OkopfDropwownControl = OkopfDropwownControl;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2tvcGYuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJva29wZi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsc0NBQXdDO0FBT3hDO0lBTEE7UUFNVyxhQUFRLEdBQVksS0FBSyxDQUFDO1FBQzFCLFdBQU0sR0FBc0IsRUFBQyxNQUFNLEVBQUUsS0FBSyxFQUFDLENBQUM7UUFDNUMsVUFBSyxHQUFhLENBQUMsS0FBSztZQUMzQix1R0FBdUc7WUFDdkcsd0NBQXdDO1lBQ3hDLDZDQUE2QztZQUM3QywwRUFBMEU7WUFDMUUsb0NBQW9DO1lBQ3BDLGtDQUFrQztZQUNsQyx3REFBd0Q7WUFDeEQsMERBQTBEO1lBQzFELHNEQUFzRCxDQUFDLENBQUM7UUFDckQsaUJBQVksR0FBVyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBa0JoRCxDQUFDO0lBaEJVLHNDQUFPLEdBQWQsVUFBZSxJQUFhO1FBQ3hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUJBQW1CLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDM0MsQ0FBQztJQUVNLDZDQUFjLEdBQXJCLFVBQXNCLE1BQWtCO1FBQ3BDLE1BQU0sQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN4QixNQUFNLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDekIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQztJQUM3QyxDQUFDO0lBRU0sNkNBQWMsR0FBckIsVUFBc0IsSUFBVztRQUM3QixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztRQUN6QixPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBR0wsMkJBQUM7QUFBRCxDQUFDLEFBL0JELElBK0JDO0FBL0JEO0lBTEMsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtRQUNuQixRQUFRLEVBQUUsY0FBYztRQUN4QixXQUFXLEVBQUUsZ0JBQWdCO0tBQ2hDLENBQUM7O3dCQWdDRDtBQS9CWSwrQkFBQSxvQkFBb0IsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgc2VsZWN0b3I6ICdzZWxlY3Qtb2tvcGYnLFxyXG4gICAgdGVtcGxhdGVVcmw6ICd0ZW1wbGF0ZWQuaHRtbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIE9rb3BmRHJvcHdvd25Db250cm9sIHtcclxuICAgIHB1YmxpYyBkaXNhYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHVibGljIHN0YXR1czoge2lzb3BlbjogYm9vbGVhbn0gPSB7aXNvcGVuOiBmYWxzZX07XHJcbiAgICBwdWJsaWMgaXRlbXM6IHN0cmluZ1tdID0gWyfQktGB0LUnLFxyXG4gICAgICAgICfQntCg0JPQkNCd0JjQl9CQ0KbQmNCe0J3QndCeLdCf0KDQkNCS0J7QktCr0JUg0KTQntCg0JzQqyDQrtCg0JjQlNCY0KfQldCh0JrQmNClINCb0JjQpiwg0K/QktCb0K/QrtCp0JjQpdCh0K8g0JrQntCc0JzQldCg0KfQldCh0JrQmNCc0Jgg0JrQntCg0J/QntCg0JDQotCY0JLQndCr0JzQmCAg0J7QoNCT0JDQndCY0JfQkNCm0JjQr9Cc0JgnLFxyXG4gICAgICAgICcmbmJzcDsmbmJzcDvQpdC+0LfRj9C50YHRgtCy0LXQvdC90YvQtSDRgtC+0LLQsNGA0LjRidC10YHRgtCy0LAnLFxyXG4gICAgICAgICcmbmJzcDsmbmJzcDsmbmJzcDsmbmJzcDvQn9C+0LvQvdGL0LUg0YLQvtCy0LDRgNC40YnQtdGB0YLQstCwJyxcclxuICAgICAgICAnJm5ic3A7Jm5ic3A7Jm5ic3A7Jm5ic3A70KLQvtCy0LDRgNC40YnQtdGB0YLQstCwINC90LAg0LLQtdGA0LUgKNC60L7QvNC80LDQvdC00LjRgtC90YvQtSDRgtC+0LLQsNGA0LjRidC10YHRgtCy0LApJyxcclxuICAgICAgICAnJm5ic3A7Jm5ic3A70KXQvtC30Y/QudGB0YLQstC10L3QvdGL0LUg0L7QsdGJ0LXRgdGC0LLQsCcsXHJcbiAgICAgICAgJyZuYnNwOyZuYnNwO9CQ0LrRhtC40L7QvdC10YDQvdGL0LUg0L7QsdGJ0LXRgdGC0LLQsCcsXHJcbiAgICAgICAgJyZuYnNwOyZuYnNwOyZuYnNwOyZuYnNwO9Cf0YPQsdC70LjRh9C90YvQtSDQsNC60YbQuNC+0L3QtdGA0L3Ri9C1INC+0LHRidC10YHRgtCy0LAnLFxyXG4gICAgICAgICcmbmJzcDsmbmJzcDsmbmJzcDsmbmJzcDvQndC10L/Rg9Cx0LvQuNGH0L3Ri9C1INCw0LrRhtC40L7QvdC10YDQvdGL0LUg0L7QsdGJ0LXRgdGC0LLQsCcsXHJcbiAgICAgICAgJyZuYnNwOyZuYnNwO9Ce0LHRidC10YHRgtCy0LAg0YEg0L7Qs9GA0LDQvdC40YfQtdC90L3QvtC5INC+0YLQstC10YLRgdGC0LLQtdC90L3QvtGB0YLRjNGOJ107XHJcbiAgICBwdWJsaWMgc2VsZWN0ZWRJdGVtOiBzdHJpbmcgPSB0aGlzLml0ZW1zWzBdO1xyXG5cclxuICAgIHB1YmxpYyB0b2dnbGVkKG9wZW46IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnRHJvcGRvd24gaXMgbm93OiAnLCBvcGVuKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdG9nZ2xlRHJvcGRvd24oJGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZCB7XHJcbiAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgIHRoaXMuc3RhdHVzLmlzb3BlbiA9ICF0aGlzLnN0YXR1cy5pc29wZW47XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNlbGVjdE1lbnVJdGVtKGl0ZW06c3RyaW5nKTogdm9pZHtcclxuICAgICAgICB0aGlzLnNlbGVjdGVkSXRlbSA9IGl0ZW07XHJcbiAgICAgICAgY29uc29sZS5sb2coJ1NlbGVjdGVkOiAnLCBpdGVtKTtcclxuICAgIH1cclxuXHJcblxyXG59XHJcbiJdfQ==