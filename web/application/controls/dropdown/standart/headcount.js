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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVhZGNvdW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaGVhZGNvdW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxzQ0FBd0M7QUFPeEMsSUFBYSx3QkFBd0I7SUFMckM7UUFNVyxhQUFRLEdBQVksS0FBSyxDQUFDO1FBQzFCLFdBQU0sR0FBc0IsRUFBQyxNQUFNLEVBQUUsS0FBSyxFQUFDLENBQUM7UUFDNUMsVUFBSyxHQUFhLENBQUMsV0FBVztZQUNqQyxPQUFPO1lBQ1AsUUFBUTtZQUNSLFNBQVM7WUFDVCxVQUFVO1lBQ1YsV0FBVztZQUNYLFdBQVcsQ0FBQyxDQUFDO1FBQ1YsaUJBQVksR0FBVyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBa0JoRCxDQUFDO0lBaEJVLDBDQUFPLEdBQWQsVUFBZSxJQUFhO1FBQ3hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUJBQW1CLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDM0MsQ0FBQztJQUVNLGlEQUFjLEdBQXJCLFVBQXNCLE1BQWtCO1FBQ3BDLE1BQU0sQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN4QixNQUFNLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDekIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQztJQUM3QyxDQUFDO0lBRU0saURBQWMsR0FBckIsVUFBc0IsSUFBVztRQUM3QixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztRQUN6QixPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBR0wsK0JBQUM7QUFBRCxDQUFDLEFBNUJELElBNEJDO0FBNUJZLHdCQUF3QjtJQUxwQyxnQkFBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1FBQ25CLFFBQVEsRUFBRSxrQkFBa0I7UUFDNUIsV0FBVyxFQUFFLGVBQWU7S0FDL0IsQ0FBQzs7R0FDVyx3QkFBd0IsQ0E0QnBDO0FBNUJZLDREQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgc2VsZWN0b3I6ICdzZWxlY3QtaGVhZGNvdW50JyxcclxuICAgIHRlbXBsYXRlVXJsOiAnc3RhbmRhcnQuaHRtbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIEhlYWRjb3VudERyb3B3b3duQ29udHJvbCB7XHJcbiAgICBwdWJsaWMgZGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHB1YmxpYyBzdGF0dXM6IHtpc29wZW46IGJvb2xlYW59ID0ge2lzb3BlbjogZmFsc2V9O1xyXG4gICAgcHVibGljIGl0ZW1zOiBzdHJpbmdbXSA9IFsn0J3QtSDQt9Cw0LTQsNC90LAnLFxyXG4gICAgICAgICcxIC0gNScsXHJcbiAgICAgICAgJzUgLSAyMCcsXHJcbiAgICAgICAgJzIwIC0gNTAnLFxyXG4gICAgICAgICc1MCAtIDEwMCcsXHJcbiAgICAgICAgJzEwMCAtIDIwMCcsXHJcbiAgICAgICAgJzIwMCAtIDUwMCddO1xyXG4gICAgcHVibGljIHNlbGVjdGVkSXRlbTogc3RyaW5nID0gdGhpcy5pdGVtc1swXTtcclxuXHJcbiAgICBwdWJsaWMgdG9nZ2xlZChvcGVuOiBib29sZWFuKTogdm9pZCB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ0Ryb3Bkb3duIGlzIG5vdzogJywgb3Blbik7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHRvZ2dsZURyb3Bkb3duKCRldmVudDogTW91c2VFdmVudCk6IHZvaWQge1xyXG4gICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICB0aGlzLnN0YXR1cy5pc29wZW4gPSAhdGhpcy5zdGF0dXMuaXNvcGVuO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZWxlY3RNZW51SXRlbShpdGVtOnN0cmluZyk6IHZvaWR7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZEl0ZW0gPSBpdGVtO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdTZWxlY3RlZDogJywgaXRlbSk7XHJcbiAgICB9XHJcblxyXG5cclxufVxyXG4iXX0=