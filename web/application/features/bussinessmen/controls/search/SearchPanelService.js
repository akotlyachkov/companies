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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2VhcmNoUGFuZWxTZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiU2VhcmNoUGFuZWxTZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxzQ0FBeUM7QUFFekMsd0NBQXFDO0FBR3JDLElBQWEsYUFBYTtJQUQxQjtRQUVZLG1CQUFjLEdBQUcsSUFBSSxpQkFBTyxFQUFVLENBQUM7UUFFeEMscUJBQWdCLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUtqRSxDQUFDO0lBSFUscUNBQWEsR0FBcEIsVUFBcUIsTUFBYztRQUMvQixJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBQ0wsb0JBQUM7QUFBRCxDQUFDLEFBUkQsSUFRQztBQVJZLGFBQWE7SUFEekIsaUJBQVUsRUFBRTs7R0FDQSxhQUFhLENBUXpCO0FBUlksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGV9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7RmlsdGVyfSBmcm9tIFwiLi4vLi4vZW50aXRpZXMvRmlsdGVyXCI7XHJcbmltcG9ydCB7U3ViamVjdH0gZnJvbSBcInJ4anMvU3ViamVjdFwiO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgRmlsdGVyU2VydmljZXtcclxuICAgIHByaXZhdGUgZmlsdGVyT2JzZXJ2ZXIgPSBuZXcgU3ViamVjdDxGaWx0ZXI+KCk7XHJcblxyXG4gICAgcHVibGljIGZpbHRlck9ic2VydmFibGUgPSB0aGlzLmZpbHRlck9ic2VydmVyLmFzT2JzZXJ2YWJsZSgpO1xyXG5cclxuICAgIHB1YmxpYyBwcm92aWRlRmlsdGVyKGZpbHRlcjogRmlsdGVyKSB7XHJcbiAgICAgICAgdGhpcy5maWx0ZXJPYnNlcnZlci5uZXh0KGZpbHRlcik7XHJcbiAgICB9XHJcbn0iXX0=