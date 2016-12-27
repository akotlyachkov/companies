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
var http_1 = require("@angular/http");
var core_1 = require("@angular/core");
//import {CompaniesService} from "./companies";
var DataModule = (function () {
    function DataModule() {
    }
    return DataModule;
}());
DataModule = __decorate([
    core_1.NgModule({
        imports: [
            http_1.HttpModule
        ] /*,
        declarations: [
            CompaniesService
        ],
        exports: [
            CompaniesService
        ]*/
    }),
    __metadata("design:paramtypes", [])
], DataModule);
exports.DataModule = DataModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvdmlkZXJzTW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicHJvdmlkZXJzTW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxzQ0FBeUM7QUFDekMsc0NBQXVDO0FBQ3ZDLCtDQUErQztBQWUvQyxJQUFhLFVBQVU7SUFBdkI7SUFDQSxDQUFDO0lBQUQsaUJBQUM7QUFBRCxDQUFDLEFBREQsSUFDQztBQURZLFVBQVU7SUFadEIsZUFBUSxDQUFDO1FBQ04sT0FBTyxFQUFFO1lBQ0wsaUJBQVU7U0FDYixDQUFBOzs7Ozs7V0FNRTtLQUVOLENBQUM7O0dBQ1csVUFBVSxDQUN0QjtBQURZLGdDQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtIdHRwTW9kdWxlfSBmcm9tIFwiQGFuZ3VsYXIvaHR0cFwiO1xyXG5pbXBvcnQge05nTW9kdWxlfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG4vL2ltcG9ydCB7Q29tcGFuaWVzU2VydmljZX0gZnJvbSBcIi4vY29tcGFuaWVzXCI7XHJcblxyXG5cclxuQE5nTW9kdWxlKHtcclxuICAgIGltcG9ydHM6IFtcclxuICAgICAgICBIdHRwTW9kdWxlXHJcbiAgICBdLyosXHJcbiAgICBkZWNsYXJhdGlvbnM6IFtcclxuICAgICAgICBDb21wYW5pZXNTZXJ2aWNlXHJcbiAgICBdLFxyXG4gICAgZXhwb3J0czogW1xyXG4gICAgICAgIENvbXBhbmllc1NlcnZpY2VcclxuICAgIF0qL1xyXG5cclxufSlcclxuZXhwb3J0IGNsYXNzIERhdGFNb2R1bGUge1xyXG59Il19