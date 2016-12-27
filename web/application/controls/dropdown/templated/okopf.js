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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2tvcGYuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJva29wZi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsc0NBQXdDO0FBT3hDLElBQWEsb0JBQW9CO0lBTGpDO1FBTVcsYUFBUSxHQUFZLEtBQUssQ0FBQztRQUMxQixXQUFNLEdBQXNCLEVBQUMsTUFBTSxFQUFFLEtBQUssRUFBQyxDQUFDO1FBQzVDLFVBQUssR0FBYSxDQUFDLEtBQUs7WUFDM0IsdUdBQXVHO1lBQ3ZHLHdDQUF3QztZQUN4Qyw2Q0FBNkM7WUFDN0MsMEVBQTBFO1lBQzFFLG9DQUFvQztZQUNwQyxrQ0FBa0M7WUFDbEMsd0RBQXdEO1lBQ3hELDBEQUEwRDtZQUMxRCxzREFBc0QsQ0FBQyxDQUFDO1FBQ3JELGlCQUFZLEdBQVcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztJQWtCaEQsQ0FBQztJQWhCVSxzQ0FBTyxHQUFkLFVBQWUsSUFBYTtRQUN4QixPQUFPLENBQUMsR0FBRyxDQUFDLG1CQUFtQixFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzNDLENBQUM7SUFFTSw2Q0FBYyxHQUFyQixVQUFzQixNQUFrQjtRQUNwQyxNQUFNLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDeEIsTUFBTSxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUM7SUFDN0MsQ0FBQztJQUVNLDZDQUFjLEdBQXJCLFVBQXNCLElBQVc7UUFDN0IsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7UUFDekIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQUdMLDJCQUFDO0FBQUQsQ0FBQyxBQS9CRCxJQStCQztBQS9CWSxvQkFBb0I7SUFMaEMsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtRQUNuQixRQUFRLEVBQUUsY0FBYztRQUN4QixXQUFXLEVBQUUsZ0JBQWdCO0tBQ2hDLENBQUM7O0dBQ1csb0JBQW9CLENBK0JoQztBQS9CWSxvREFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHNlbGVjdG9yOiAnc2VsZWN0LW9rb3BmJyxcclxuICAgIHRlbXBsYXRlVXJsOiAndGVtcGxhdGVkLmh0bWwnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBPa29wZkRyb3B3b3duQ29udHJvbCB7XHJcbiAgICBwdWJsaWMgZGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHB1YmxpYyBzdGF0dXM6IHtpc29wZW46IGJvb2xlYW59ID0ge2lzb3BlbjogZmFsc2V9O1xyXG4gICAgcHVibGljIGl0ZW1zOiBzdHJpbmdbXSA9IFsn0JLRgdC1JyxcclxuICAgICAgICAn0J7QoNCT0JDQndCY0JfQkNCm0JjQntCd0J3Qni3Qn9Cg0JDQktCe0JLQq9CVINCk0J7QoNCc0Ksg0K7QoNCY0JTQmNCn0JXQodCa0JjQpSDQm9CY0KYsINCv0JLQm9Cv0K7QqdCY0KXQodCvINCa0J7QnNCc0JXQoNCn0JXQodCa0JjQnNCYINCa0J7QoNCf0J7QoNCQ0KLQmNCS0J3Qq9Cc0JggINCe0KDQk9CQ0J3QmNCX0JDQptCY0K/QnNCYJyxcclxuICAgICAgICAnJm5ic3A7Jm5ic3A70KXQvtC30Y/QudGB0YLQstC10L3QvdGL0LUg0YLQvtCy0LDRgNC40YnQtdGB0YLQstCwJyxcclxuICAgICAgICAnJm5ic3A7Jm5ic3A7Jm5ic3A7Jm5ic3A70J/QvtC70L3Ri9C1INGC0L7QstCw0YDQuNGJ0LXRgdGC0LLQsCcsXHJcbiAgICAgICAgJyZuYnNwOyZuYnNwOyZuYnNwOyZuYnNwO9Ci0L7QstCw0YDQuNGJ0LXRgdGC0LLQsCDQvdCwINCy0LXRgNC1ICjQutC+0LzQvNCw0L3QtNC40YLQvdGL0LUg0YLQvtCy0LDRgNC40YnQtdGB0YLQstCwKScsXHJcbiAgICAgICAgJyZuYnNwOyZuYnNwO9Cl0L7Qt9GP0LnRgdGC0LLQtdC90L3Ri9C1INC+0LHRidC10YHRgtCy0LAnLFxyXG4gICAgICAgICcmbmJzcDsmbmJzcDvQkNC60YbQuNC+0L3QtdGA0L3Ri9C1INC+0LHRidC10YHRgtCy0LAnLFxyXG4gICAgICAgICcmbmJzcDsmbmJzcDsmbmJzcDsmbmJzcDvQn9GD0LHQu9C40YfQvdGL0LUg0LDQutGG0LjQvtC90LXRgNC90YvQtSDQvtCx0YnQtdGB0YLQstCwJyxcclxuICAgICAgICAnJm5ic3A7Jm5ic3A7Jm5ic3A7Jm5ic3A70J3QtdC/0YPQsdC70LjRh9C90YvQtSDQsNC60YbQuNC+0L3QtdGA0L3Ri9C1INC+0LHRidC10YHRgtCy0LAnLFxyXG4gICAgICAgICcmbmJzcDsmbmJzcDvQntCx0YnQtdGB0YLQstCwINGBINC+0LPRgNCw0L3QuNGH0LXQvdC90L7QuSDQvtGC0LLQtdGC0YHRgtCy0LXQvdC90L7RgdGC0YzRjiddO1xyXG4gICAgcHVibGljIHNlbGVjdGVkSXRlbTogc3RyaW5nID0gdGhpcy5pdGVtc1swXTtcclxuXHJcbiAgICBwdWJsaWMgdG9nZ2xlZChvcGVuOiBib29sZWFuKTogdm9pZCB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ0Ryb3Bkb3duIGlzIG5vdzogJywgb3Blbik7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHRvZ2dsZURyb3Bkb3duKCRldmVudDogTW91c2VFdmVudCk6IHZvaWQge1xyXG4gICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICB0aGlzLnN0YXR1cy5pc29wZW4gPSAhdGhpcy5zdGF0dXMuaXNvcGVuO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZWxlY3RNZW51SXRlbShpdGVtOnN0cmluZyk6IHZvaWR7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZEl0ZW0gPSBpdGVtO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdTZWxlY3RlZDogJywgaXRlbSk7XHJcbiAgICB9XHJcblxyXG5cclxufVxyXG4iXX0=