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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGlzdG9yeS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImhpc3RvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHNDQUEwRDtBQUMxRCw2REFBMkQ7QUFRM0Q7SUFMQTtRQU9JLFlBQU8sR0FBRyxDQUFDLEVBQUMsY0FBYyxFQUFFLEVBQUUsRUFBQyxDQUFDLENBQUM7SUFjckMsQ0FBQztJQVJVLGdEQUFjLEdBQXJCO1FBQ0ksSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUM3QixDQUFDO0lBR00sZ0RBQWMsR0FBckI7UUFDSSxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQzdCLENBQUM7SUFDTCw4QkFBQztBQUFELENBQUMsQUFoQkQsSUFnQkM7QUFYRztJQURDLGdCQUFTLENBQUMsY0FBYyxDQUFDOzhCQUNMLDhCQUFjOzZEQUFDO0FBTHhDO0lBTEMsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtRQUNuQixRQUFRLEVBQUUscUJBQXFCO1FBQy9CLFdBQVcsRUFBRSxjQUFjO0tBQzlCLENBQUM7OzJCQWlCRDtBQWhCWSxrQ0FBQSx1QkFBdUIsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBWaWV3Q2hpbGQsIElucHV0fSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQge01vZGFsRGlyZWN0aXZlfSBmcm9tIFwibmcyLWJvb3RzdHJhcC9uZzItYm9vdHN0cmFwXCI7XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgc2VsZWN0b3I6ICdxdWVyeS1oaXN0b3J5LW1vZGFsJyxcclxuICAgIHRlbXBsYXRlVXJsOiAnaGlzdG9yeS5odG1sJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgUGVyc29uUXVlcnlIaXN0b3J5TW9kYWwge1xyXG5cclxuICAgIHF1ZXJpZXMgPSBbe3RleHRXaXRoTWFya3VwOiAnJ31dO1xyXG5cclxuICAgIEBWaWV3Q2hpbGQoJ2hpc3RvcnlNb2RhbCcpXHJcbiAgICBwdWJsaWMgaGlzdG9yeU1vZGFsOiBNb2RhbERpcmVjdGl2ZTtcclxuXHJcblxyXG4gICAgcHVibGljIHNob3dDaGlsZE1vZGFsKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuaGlzdG9yeU1vZGFsLnNob3coKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHVibGljIGhpZGVDaGlsZE1vZGFsKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuaGlzdG9yeU1vZGFsLmhpZGUoKTtcclxuICAgIH1cclxufSJdfQ==