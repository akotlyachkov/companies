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
var Subject_1 = require("rxjs/Subject");
var FilterService = (function () {
    function FilterService() {
        this.filterObserver = new Subject_1.Subject();
        this.filterObservable = this.filterObserver.asObservable();
    }
    FilterService.prototype.provideFilter = function (filter) {
        this.filterObserver.next(filter);
    };
    return FilterService;
}());
FilterService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], FilterService);
exports.FilterService = FilterService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2VhcmNoUGFuZWxTZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiU2VhcmNoUGFuZWxTZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxzQ0FBeUM7QUFFekMsd0NBQXFDO0FBR3JDO0lBREE7UUFFWSxtQkFBYyxHQUFHLElBQUksaUJBQU8sRUFBVSxDQUFDO1FBRXhDLHFCQUFnQixHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsWUFBWSxFQUFFLENBQUM7SUFLakUsQ0FBQztJQUhVLHFDQUFhLEdBQXBCLFVBQXFCLE1BQWM7UUFDL0IsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDckMsQ0FBQztJQUNMLG9CQUFDO0FBQUQsQ0FBQyxBQVJELElBUUM7QUFSRDtJQURDLGlCQUFVLEVBQUU7O2lCQVNaO0FBUlksd0JBQUEsYUFBYSxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQge0ZpbHRlcn0gZnJvbSBcIi4uLy4uL2VudGl0aWVzL0ZpbHRlclwiO1xyXG5pbXBvcnQge1N1YmplY3R9IGZyb20gXCJyeGpzL1N1YmplY3RcIjtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEZpbHRlclNlcnZpY2V7XHJcbiAgICBwcml2YXRlIGZpbHRlck9ic2VydmVyID0gbmV3IFN1YmplY3Q8RmlsdGVyPigpO1xyXG5cclxuICAgIHB1YmxpYyBmaWx0ZXJPYnNlcnZhYmxlID0gdGhpcy5maWx0ZXJPYnNlcnZlci5hc09ic2VydmFibGUoKTtcclxuXHJcbiAgICBwdWJsaWMgcHJvdmlkZUZpbHRlcihmaWx0ZXI6IEZpbHRlcikge1xyXG4gICAgICAgIHRoaXMuZmlsdGVyT2JzZXJ2ZXIubmV4dChmaWx0ZXIpO1xyXG4gICAgfVxyXG59Il19