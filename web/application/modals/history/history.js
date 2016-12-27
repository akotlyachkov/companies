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
var ng2_bootstrap_1 = require("ng2-bootstrap/ng2-bootstrap");
var PersonQueryHistoryModal = (function () {
    function PersonQueryHistoryModal() {
        this.queries = [{ textWithMarkup: '' }];
    }
    PersonQueryHistoryModal.prototype.showChildModal = function () {
        this.historyModal.show();
    };
    PersonQueryHistoryModal.prototype.hideChildModal = function () {
        this.historyModal.hide();
    };
    return PersonQueryHistoryModal;
}());
__decorate([
    core_1.ViewChild('historyModal'),
    __metadata("design:type", ng2_bootstrap_1.ModalDirective)
], PersonQueryHistoryModal.prototype, "historyModal", void 0);
PersonQueryHistoryModal = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'query-history-modal',
        templateUrl: 'history.html'
    }),
    __metadata("design:paramtypes", [])
], PersonQueryHistoryModal);
exports.PersonQueryHistoryModal = PersonQueryHistoryModal;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGlzdG9yeS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImhpc3RvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHNDQUEwRDtBQUMxRCw2REFBMkQ7QUFRM0QsSUFBYSx1QkFBdUI7SUFMcEM7UUFPSSxZQUFPLEdBQUcsQ0FBQyxFQUFDLGNBQWMsRUFBRSxFQUFFLEVBQUMsQ0FBQyxDQUFDO0lBY3JDLENBQUM7SUFSVSxnREFBYyxHQUFyQjtRQUNJLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDN0IsQ0FBQztJQUdNLGdEQUFjLEdBQXJCO1FBQ0ksSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUM3QixDQUFDO0lBQ0wsOEJBQUM7QUFBRCxDQUFDLEFBaEJELElBZ0JDO0FBWEc7SUFEQyxnQkFBUyxDQUFDLGNBQWMsQ0FBQzs4QkFDTCw4QkFBYzs2REFBQztBQUwzQix1QkFBdUI7SUFMbkMsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtRQUNuQixRQUFRLEVBQUUscUJBQXFCO1FBQy9CLFdBQVcsRUFBRSxjQUFjO0tBQzlCLENBQUM7O0dBQ1csdUJBQXVCLENBZ0JuQztBQWhCWSwwREFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgVmlld0NoaWxkLCBJbnB1dH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHtNb2RhbERpcmVjdGl2ZX0gZnJvbSBcIm5nMi1ib290c3RyYXAvbmcyLWJvb3RzdHJhcFwiO1xyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHNlbGVjdG9yOiAncXVlcnktaGlzdG9yeS1tb2RhbCcsXHJcbiAgICB0ZW1wbGF0ZVVybDogJ2hpc3RvcnkuaHRtbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIFBlcnNvblF1ZXJ5SGlzdG9yeU1vZGFsIHtcclxuXHJcbiAgICBxdWVyaWVzID0gW3t0ZXh0V2l0aE1hcmt1cDogJyd9XTtcclxuXHJcbiAgICBAVmlld0NoaWxkKCdoaXN0b3J5TW9kYWwnKVxyXG4gICAgcHVibGljIGhpc3RvcnlNb2RhbDogTW9kYWxEaXJlY3RpdmU7XHJcblxyXG5cclxuICAgIHB1YmxpYyBzaG93Q2hpbGRNb2RhbCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmhpc3RvcnlNb2RhbC5zaG93KCk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHB1YmxpYyBoaWRlQ2hpbGRNb2RhbCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmhpc3RvcnlNb2RhbC5oaWRlKCk7XHJcbiAgICB9XHJcbn0iXX0=