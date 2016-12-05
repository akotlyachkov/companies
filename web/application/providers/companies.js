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
var CompaniesService = (function () {
    function CompaniesService(http) {
        this.http = http;
    }
    CompaniesService.prototype.search = function (filter) {
        return this.http
            .post('api/companies/search', filter)
            .map(function (res) {
            return res.json();
        });
    };
    CompaniesService.prototype.count = function () {
        return this.http
            .post('api/companies/count', {})
            .map(function (res) {
            return res.json().count;
        });
    };
    return CompaniesService;
}());
CompaniesService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], CompaniesService);
exports.CompaniesService = CompaniesService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcGFuaWVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY29tcGFuaWVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxzQ0FBNkM7QUFDN0Msc0NBQXlDO0FBT3pDO0lBRUksMEJBQW9CLElBQVU7UUFBVixTQUFJLEdBQUosSUFBSSxDQUFNO0lBQzlCLENBQUM7SUFFRCxpQ0FBTSxHQUFOLFVBQU8sTUFBb0I7UUFDdkIsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJO2FBQ1gsSUFBSSxDQUFDLHNCQUFzQixFQUFFLE1BQU0sQ0FBQzthQUNwQyxHQUFHLENBQUMsVUFBQyxHQUFhO1lBQ2YsTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQWdCLENBQUE7UUFDbkMsQ0FBQyxDQUFDLENBQUM7SUFDWCxDQUFDO0lBRUQsZ0NBQUssR0FBTDtRQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSTthQUNYLElBQUksQ0FBQyxxQkFBcUIsRUFBRSxFQUFFLENBQUM7YUFDL0IsR0FBRyxDQUFDLFVBQUMsR0FBYTtZQUNmLE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUMsS0FBZSxDQUFBO1FBQ3JDLENBQUMsQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQUNMLHVCQUFDO0FBQUQsQ0FBQyxBQXBCRCxJQW9CQztBQXBCRDtJQURDLGlCQUFVLEVBQUU7cUNBR2lCLFdBQUk7b0JBa0JqQztBQXBCWSwyQkFBQSxnQkFBZ0IsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SHR0cCwgUmVzcG9uc2V9IGZyb20gXCJAYW5ndWxhci9odHRwXCI7XHJcbmltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tIFwicnhqc1wiO1xyXG5pbXBvcnQge0NvbXBhbmllfSBmcm9tIFwiLi4vZW50aXRpZXMvY29tcGFuaWVcIjtcclxuaW1wb3J0IHtTZWFyY2hGaWx0ZXJ9IGZyb20gXCIuLi9lbnRpdGllcy9zZWFyY2hGaWx0ZXJcIjtcclxuXHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBDb21wYW5pZXNTZXJ2aWNlIHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHApIHtcclxuICAgIH1cclxuXHJcbiAgICBzZWFyY2goZmlsdGVyOiBTZWFyY2hGaWx0ZXIpOiBPYnNlcnZhYmxlPENvbXBhbmllW10+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwXHJcbiAgICAgICAgICAgIC5wb3N0KCdhcGkvY29tcGFuaWVzL3NlYXJjaCcsIGZpbHRlcilcclxuICAgICAgICAgICAgLm1hcCgocmVzOiBSZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5qc29uKCkgYXMgQ29tcGFuaWVbXVxyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBjb3VudCgpOiBPYnNlcnZhYmxlPG51bWJlcj4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHBcclxuICAgICAgICAgICAgLnBvc3QoJ2FwaS9jb21wYW5pZXMvY291bnQnLCB7fSlcclxuICAgICAgICAgICAgLm1hcCgocmVzOiBSZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5qc29uKCkuY291bnQgYXMgbnVtYmVyXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG59Il19