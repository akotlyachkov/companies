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
var core_1 = require('@angular/core');
var page0_1 = require('../pages/page0/page0');
var platform_browser_1 = require('@angular/platform-browser');
var routes_1 = require("../pages/routes");
var page2_1 = require("../pages/page2/page2");
var page1_1 = require("../pages/page1/page1");
var InitModule = (function () {
    function InitModule() {
    }
    InitModule = __decorate([
        core_1.NgModule({
            declarations: [page0_1.Test, page1_1.Page1, page2_1.Page2],
            imports: [platform_browser_1.BrowserModule, routes_1.RoutingModule],
            bootstrap: [page0_1.Test]
        }), 
        __metadata('design:paramtypes', [])
    ], InitModule);
    return InitModule;
}());
exports.InitModule = InitModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5pdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImluaXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUF1QixlQUFlLENBQUMsQ0FBQTtBQUN2QyxzQkFBb0Isc0JBQ3BCLENBQUMsQ0FEeUM7QUFDMUMsaUNBQTRCLDJCQUEyQixDQUFDLENBQUE7QUFDeEQsdUJBQTRCLGlCQUFpQixDQUFDLENBQUE7QUFDOUMsc0JBQW9CLHNCQUFzQixDQUFDLENBQUE7QUFDM0Msc0JBQW9CLHNCQUFzQixDQUFDLENBQUE7QUFPM0M7SUFBQTtJQUVBLENBQUM7SUFQRDtRQUFDLGVBQVEsQ0FBQztZQUNOLFlBQVksRUFBRSxDQUFDLFlBQUksRUFBQyxhQUFLLEVBQUMsYUFBSyxDQUFDO1lBQ2hDLE9BQU8sRUFBRSxDQUFDLGdDQUFhLEVBQUMsc0JBQWEsQ0FBQztZQUN0QyxTQUFTLEVBQUUsQ0FBQyxZQUFJLENBQUM7U0FDcEIsQ0FBQzs7a0JBQUE7SUFHRixpQkFBQztBQUFELENBQUMsQUFGRCxJQUVDO0FBRlksa0JBQVUsYUFFdEIsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TmdNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge1Rlc3R9IGZyb20gICcuLi9wYWdlcy9wYWdlMC9wYWdlMCdcclxuaW1wb3J0IHtCcm93c2VyTW9kdWxlfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcclxuaW1wb3J0IHtSb3V0aW5nTW9kdWxlfSBmcm9tIFwiLi4vcGFnZXMvcm91dGVzXCI7XHJcbmltcG9ydCB7UGFnZTJ9IGZyb20gXCIuLi9wYWdlcy9wYWdlMi9wYWdlMlwiO1xyXG5pbXBvcnQge1BhZ2UxfSBmcm9tIFwiLi4vcGFnZXMvcGFnZTEvcGFnZTFcIjtcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgICBkZWNsYXJhdGlvbnM6IFtUZXN0LFBhZ2UxLFBhZ2UyXSxcclxuICAgIGltcG9ydHM6IFtCcm93c2VyTW9kdWxlLFJvdXRpbmdNb2R1bGVdLFxyXG4gICAgYm9vdHN0cmFwOiBbVGVzdF1cclxufSlcclxuZXhwb3J0IGNsYXNzIEluaXRNb2R1bGUge1xyXG5cclxufSJdfQ==