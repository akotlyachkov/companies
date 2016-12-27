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
    function PersonQueryHistoryModal(componentsHelper, vcr) {
        this.componentsHelper = componentsHelper;
        this.vcr = vcr;
        this.queries = [{ textWithMarkup: '' }];
        componentsHelper.setRootViewContainerRef(vcr);
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
    __metadata("design:paramtypes", [ng2_bootstrap_1.ComponentsHelper, core_1.ViewContainerRef])
], PersonQueryHistoryModal);
exports.PersonQueryHistoryModal = PersonQueryHistoryModal;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGlzdG9yeS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImhpc3RvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHNDQUE0RTtBQUM1RSw2REFBNkU7QUFRN0UsSUFBYSx1QkFBdUI7SUFFaEMsaUNBQW9CLGdCQUFrQyxFQUFVLEdBQXFCO1FBQWpFLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFBVSxRQUFHLEdBQUgsR0FBRyxDQUFrQjtRQUdyRixZQUFPLEdBQUcsQ0FBQyxFQUFDLGNBQWMsRUFBRSxFQUFFLEVBQUMsQ0FBQyxDQUFDO1FBRjdCLGdCQUFnQixDQUFDLHVCQUF1QixDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ2xELENBQUM7SUFPTSxnREFBYyxHQUFyQjtRQUNJLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDN0IsQ0FBQztJQUdNLGdEQUFjLEdBQXJCO1FBQ0ksSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUM3QixDQUFDO0lBQ0wsOEJBQUM7QUFBRCxDQUFDLEFBbkJELElBbUJDO0FBWEc7SUFEQyxnQkFBUyxDQUFDLGNBQWMsQ0FBQzs4QkFDTCw4QkFBYzs2REFBQztBQVIzQix1QkFBdUI7SUFMbkMsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtRQUNuQixRQUFRLEVBQUUscUJBQXFCO1FBQy9CLFdBQVcsRUFBRSxjQUFjO0tBQzlCLENBQUM7cUNBR3dDLGdDQUFnQixFQUFlLHVCQUFnQjtHQUY1RSx1QkFBdUIsQ0FtQm5DO0FBbkJZLDBEQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBWaWV3Q2hpbGQsIElucHV0LCBWaWV3Q29udGFpbmVyUmVmfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQge01vZGFsRGlyZWN0aXZlLCBDb21wb25lbnRzSGVscGVyfSBmcm9tIFwibmcyLWJvb3RzdHJhcC9uZzItYm9vdHN0cmFwXCI7XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgc2VsZWN0b3I6ICdxdWVyeS1oaXN0b3J5LW1vZGFsJyxcclxuICAgIHRlbXBsYXRlVXJsOiAnaGlzdG9yeS5odG1sJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgUGVyc29uUXVlcnlIaXN0b3J5TW9kYWwge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgY29tcG9uZW50c0hlbHBlcjogQ29tcG9uZW50c0hlbHBlciwgcHJpdmF0ZSB2Y3I6IFZpZXdDb250YWluZXJSZWYpIHtcclxuICAgICAgICBjb21wb25lbnRzSGVscGVyLnNldFJvb3RWaWV3Q29udGFpbmVyUmVmKHZjcik7XHJcbiAgICB9XHJcbiAgICBxdWVyaWVzID0gW3t0ZXh0V2l0aE1hcmt1cDogJyd9XTtcclxuXHJcbiAgICBAVmlld0NoaWxkKCdoaXN0b3J5TW9kYWwnKVxyXG4gICAgcHVibGljIGhpc3RvcnlNb2RhbDogTW9kYWxEaXJlY3RpdmU7XHJcblxyXG5cclxuICAgIHB1YmxpYyBzaG93Q2hpbGRNb2RhbCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmhpc3RvcnlNb2RhbC5zaG93KCk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHB1YmxpYyBoaWRlQ2hpbGRNb2RhbCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmhpc3RvcnlNb2RhbC5oaWRlKCk7XHJcbiAgICB9XHJcbn0iXX0=