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
var history_1 = require("./history/history");
var ModalsModule = (function () {
    function ModalsModule() {
    }
    return ModalsModule;
}());
ModalsModule = __decorate([
    core_1.NgModule({
        imports: [ng2_bootstrap_1.ModalModule],
        declarations: [history_1.PersonQueryHistoryModal],
        exports: [history_1.PersonQueryHistoryModal]
    }),
    __metadata("design:paramtypes", [])
], ModalsModule);
exports.ModalsModule = ModalsModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWxzTW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibW9kYWxzTW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxzQ0FBdUM7QUFDdkMsNkRBQXdEO0FBQ3hELDZDQUEwRDtBQVExRDtJQUFBO0lBRUEsQ0FBQztJQUFELG1CQUFDO0FBQUQsQ0FBQyxBQUZELElBRUM7QUFGRDtJQUxDLGVBQVEsQ0FBQztRQUNOLE9BQU8sRUFBQyxDQUFDLDJCQUFXLENBQUM7UUFDckIsWUFBWSxFQUFDLENBQUMsaUNBQXVCLENBQUM7UUFDdEMsT0FBTyxFQUFDLENBQUMsaUNBQXVCLENBQUM7S0FDcEMsQ0FBQzs7Z0JBR0Q7QUFGWSx1QkFBQSxZQUFZLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge05nTW9kdWxlfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQge01vZGFsTW9kdWxlfSBmcm9tIFwibmcyLWJvb3RzdHJhcC9uZzItYm9vdHN0cmFwXCI7XHJcbmltcG9ydCB7UGVyc29uUXVlcnlIaXN0b3J5TW9kYWx9IGZyb20gXCIuL2hpc3RvcnkvaGlzdG9yeVwiO1xyXG5cclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgICBpbXBvcnRzOltNb2RhbE1vZHVsZV0sXHJcbiAgICBkZWNsYXJhdGlvbnM6W1BlcnNvblF1ZXJ5SGlzdG9yeU1vZGFsXSxcclxuICAgIGV4cG9ydHM6W1BlcnNvblF1ZXJ5SGlzdG9yeU1vZGFsXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTW9kYWxzTW9kdWxle1xyXG5cclxufSJdfQ==