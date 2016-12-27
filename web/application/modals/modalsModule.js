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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWxzTW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibW9kYWxzTW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxzQ0FBdUM7QUFDdkMsNkRBQXdEO0FBQ3hELDZDQUEwRDtBQVExRCxJQUFhLFlBQVk7SUFBekI7SUFFQSxDQUFDO0lBQUQsbUJBQUM7QUFBRCxDQUFDLEFBRkQsSUFFQztBQUZZLFlBQVk7SUFMeEIsZUFBUSxDQUFDO1FBQ04sT0FBTyxFQUFDLENBQUMsMkJBQVcsQ0FBQztRQUNyQixZQUFZLEVBQUMsQ0FBQyxpQ0FBdUIsQ0FBQztRQUN0QyxPQUFPLEVBQUMsQ0FBQyxpQ0FBdUIsQ0FBQztLQUNwQyxDQUFDOztHQUNXLFlBQVksQ0FFeEI7QUFGWSxvQ0FBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TmdNb2R1bGV9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7TW9kYWxNb2R1bGV9IGZyb20gXCJuZzItYm9vdHN0cmFwL25nMi1ib290c3RyYXBcIjtcclxuaW1wb3J0IHtQZXJzb25RdWVyeUhpc3RvcnlNb2RhbH0gZnJvbSBcIi4vaGlzdG9yeS9oaXN0b3J5XCI7XHJcblxyXG5cclxuQE5nTW9kdWxlKHtcclxuICAgIGltcG9ydHM6W01vZGFsTW9kdWxlXSxcclxuICAgIGRlY2xhcmF0aW9uczpbUGVyc29uUXVlcnlIaXN0b3J5TW9kYWxdLFxyXG4gICAgZXhwb3J0czpbUGVyc29uUXVlcnlIaXN0b3J5TW9kYWxdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNb2RhbHNNb2R1bGV7XHJcblxyXG59Il19