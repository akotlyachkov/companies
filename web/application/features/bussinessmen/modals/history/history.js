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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGlzdG9yeS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImhpc3RvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHNDQUE0RTtBQUM1RSw2REFBNkU7QUFRN0U7SUFFSSxpQ0FBb0IsZ0JBQWtDLEVBQVUsR0FBcUI7UUFBakUscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUFVLFFBQUcsR0FBSCxHQUFHLENBQWtCO1FBR3JGLFlBQU8sR0FBRyxDQUFDLEVBQUMsY0FBYyxFQUFFLEVBQUUsRUFBQyxDQUFDLENBQUM7UUFGN0IsZ0JBQWdCLENBQUMsdUJBQXVCLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDbEQsQ0FBQztJQU9NLGdEQUFjLEdBQXJCO1FBQ0ksSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUM3QixDQUFDO0lBR00sZ0RBQWMsR0FBckI7UUFDSSxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQzdCLENBQUM7SUFDTCw4QkFBQztBQUFELENBQUMsQUFuQkQsSUFtQkM7QUFYRztJQURDLGdCQUFTLENBQUMsY0FBYyxDQUFDOzhCQUNMLDhCQUFjOzZEQUFDO0FBUnhDO0lBTEMsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtRQUNuQixRQUFRLEVBQUUscUJBQXFCO1FBQy9CLFdBQVcsRUFBRSxjQUFjO0tBQzlCLENBQUM7cUNBR3dDLGdDQUFnQixFQUFlLHVCQUFnQjsyQkFpQnhGO0FBbkJZLGtDQUFBLHVCQUF1QixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIFZpZXdDaGlsZCwgSW5wdXQsIFZpZXdDb250YWluZXJSZWZ9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7TW9kYWxEaXJlY3RpdmUsIENvbXBvbmVudHNIZWxwZXJ9IGZyb20gXCJuZzItYm9vdHN0cmFwL25nMi1ib290c3RyYXBcIjtcclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICBzZWxlY3RvcjogJ3F1ZXJ5LWhpc3RvcnktbW9kYWwnLFxyXG4gICAgdGVtcGxhdGVVcmw6ICdoaXN0b3J5Lmh0bWwnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQZXJzb25RdWVyeUhpc3RvcnlNb2RhbCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBjb21wb25lbnRzSGVscGVyOiBDb21wb25lbnRzSGVscGVyLCBwcml2YXRlIHZjcjogVmlld0NvbnRhaW5lclJlZikge1xyXG4gICAgICAgIGNvbXBvbmVudHNIZWxwZXIuc2V0Um9vdFZpZXdDb250YWluZXJSZWYodmNyKTtcclxuICAgIH1cclxuICAgIHF1ZXJpZXMgPSBbe3RleHRXaXRoTWFya3VwOiAnJ31dO1xyXG5cclxuICAgIEBWaWV3Q2hpbGQoJ2hpc3RvcnlNb2RhbCcpXHJcbiAgICBwdWJsaWMgaGlzdG9yeU1vZGFsOiBNb2RhbERpcmVjdGl2ZTtcclxuXHJcblxyXG4gICAgcHVibGljIHNob3dDaGlsZE1vZGFsKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuaGlzdG9yeU1vZGFsLnNob3coKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHVibGljIGhpZGVDaGlsZE1vZGFsKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuaGlzdG9yeU1vZGFsLmhpZGUoKTtcclxuICAgIH1cclxufSJdfQ==