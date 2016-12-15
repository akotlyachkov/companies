"use strict";
var BaseDropwownControl = (function () {
    function BaseDropwownControl() {
        this.disabled = false;
        this.status = { isopen: false };
    }
    BaseDropwownControl.prototype.toggled = function (open) {
        console.log('Dropdown is now: ', open);
    };
    BaseDropwownControl.prototype.toggleDropdown = function ($event) {
        $event.preventDefault();
        $event.stopPropagation();
        this.status.isopen = !this.status.isopen;
    };
    BaseDropwownControl.prototype.selectMenuItem = function (item) {
        this.selectedItem = item;
        console.log('Selected: ', item);
    };
    return BaseDropwownControl;
}());
exports.BaseDropwownControl = BaseDropwownControl;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImJhc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0lBQUE7UUFDVyxhQUFRLEdBQVksS0FBSyxDQUFDO1FBRzFCLFdBQU0sR0FBc0IsRUFBQyxNQUFNLEVBQUUsS0FBSyxFQUFDLENBQUM7SUFnQnZELENBQUM7SUFkVSxxQ0FBTyxHQUFkLFVBQWUsSUFBYTtRQUN4QixPQUFPLENBQUMsR0FBRyxDQUFDLG1CQUFtQixFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzNDLENBQUM7SUFFTSw0Q0FBYyxHQUFyQixVQUFzQixNQUFrQjtRQUNwQyxNQUFNLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDeEIsTUFBTSxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUM7SUFDN0MsQ0FBQztJQUVNLDRDQUFjLEdBQXJCLFVBQXNCLElBQVk7UUFDOUIsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7UUFDekIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQUNMLDBCQUFDO0FBQUQsQ0FBQyxBQXBCRCxJQW9CQztBQXBCRCxrREFvQkMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgQmFzZURyb3B3b3duQ29udHJvbCB7XHJcbiAgICBwdWJsaWMgZGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHB1YmxpYyBzZWxlY3RlZEl0ZW06IHN0cmluZztcclxuICAgIHB1YmxpYyBpdGVtczogc3RyaW5nW107XHJcbiAgICBwdWJsaWMgc3RhdHVzOiB7aXNvcGVuOiBib29sZWFufSA9IHtpc29wZW46IGZhbHNlfTtcclxuXHJcbiAgICBwdWJsaWMgdG9nZ2xlZChvcGVuOiBib29sZWFuKTogdm9pZCB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ0Ryb3Bkb3duIGlzIG5vdzogJywgb3Blbik7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHRvZ2dsZURyb3Bkb3duKCRldmVudDogTW91c2VFdmVudCk6IHZvaWQge1xyXG4gICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICB0aGlzLnN0YXR1cy5pc29wZW4gPSAhdGhpcy5zdGF0dXMuaXNvcGVuO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZWxlY3RNZW51SXRlbShpdGVtOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnNlbGVjdGVkSXRlbSA9IGl0ZW07XHJcbiAgICAgICAgY29uc29sZS5sb2coJ1NlbGVjdGVkOiAnLCBpdGVtKTtcclxuICAgIH1cclxufSJdfQ==