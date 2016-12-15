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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNzZXRzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXNzZXRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxzQ0FBd0M7QUFPeEM7SUFMQTtRQU1XLGFBQVEsR0FBWSxLQUFLLENBQUM7UUFDMUIsV0FBTSxHQUFzQixFQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUMsQ0FBQztRQUM1QyxVQUFLLEdBQWEsQ0FBQyxjQUFjLEVBQUUsaUJBQWlCLEVBQUUscUJBQXFCLEVBQUUsU0FBUyxDQUFDLENBQUM7UUFDeEYsaUJBQVksR0FBVyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBa0JoRCxDQUFDO0lBaEJVLHVDQUFPLEdBQWQsVUFBZSxJQUFhO1FBQ3hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUJBQW1CLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDM0MsQ0FBQztJQUVNLDhDQUFjLEdBQXJCLFVBQXNCLE1BQWtCO1FBQ3BDLE1BQU0sQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN4QixNQUFNLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDekIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQztJQUM3QyxDQUFDO0lBRU0sOENBQWMsR0FBckIsVUFBc0IsSUFBVztRQUM3QixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztRQUN6QixPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBR0wsNEJBQUM7QUFBRCxDQUFDLEFBdEJELElBc0JDO0FBdEJEO0lBTEMsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtRQUNuQixRQUFRLEVBQUUsZUFBZTtRQUN6QixXQUFXLEVBQUUsZUFBZTtLQUMvQixDQUFDOzt5QkF1QkQ7QUF0QlksZ0NBQUEscUJBQXFCLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHNlbGVjdG9yOiAnc2VsZWN0LWFzc2V0cycsXHJcbiAgICB0ZW1wbGF0ZVVybDogJ3N0YW5kYXJ0Lmh0bWwnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBc3NldHNEcm9wd293bkNvbnRyb2wge1xyXG4gICAgcHVibGljIGRpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBwdWJsaWMgc3RhdHVzOiB7aXNvcGVuOiBib29sZWFufSA9IHtpc29wZW46IGZhbHNlfTtcclxuICAgIHB1YmxpYyBpdGVtczogc3RyaW5nW10gPSBbJ9CQ0JrQotCY0JLQqyDQstGB0LXQs9C+JywgJ9CS0LDQu9C+0LLQsNGPINC/0YDQuNCx0YvQu9GMJywgJ9CS0J3QldCe0JHQntCg0J7QotCd0KvQlSDQkNCa0KLQmNCS0KsnLCAn0JLRi9GA0YPRh9C60LAnXTtcclxuICAgIHB1YmxpYyBzZWxlY3RlZEl0ZW06IHN0cmluZyA9IHRoaXMuaXRlbXNbMF07XHJcblxyXG4gICAgcHVibGljIHRvZ2dsZWQob3BlbjogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdEcm9wZG93biBpcyBub3c6ICcsIG9wZW4pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB0b2dnbGVEcm9wZG93bigkZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkIHtcclxuICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgdGhpcy5zdGF0dXMuaXNvcGVuID0gIXRoaXMuc3RhdHVzLmlzb3BlbjtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2VsZWN0TWVudUl0ZW0oaXRlbTpzdHJpbmcpOiB2b2lke1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRJdGVtID0gaXRlbTtcclxuICAgICAgICBjb25zb2xlLmxvZygnU2VsZWN0ZWQ6ICcsIGl0ZW0pO1xyXG4gICAgfVxyXG5cclxuXHJcbn1cclxuIl19