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
var NavbarService = (function () {
    function NavbarService(http) {
        this.http = http;
    }
    NavbarService.prototype.navbar = function () {
        return this.http
            .post('api/navbar', {})
            .map(function (res) {
            return res.json();
        });
    };
    NavbarService.prototype.features = function () {
        return this.http
            .post('api/features', {})
            .map(function (res) {
            return res.json();
        });
    };
    return NavbarService;
}());
NavbarService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], NavbarService);
exports.NavbarService = NavbarService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2YmFyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibmF2YmFyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxzQ0FBNkM7QUFDN0Msc0NBQXlDO0FBTXpDLElBQWEsYUFBYTtJQUV0Qix1QkFBb0IsSUFBVTtRQUFWLFNBQUksR0FBSixJQUFJLENBQU07SUFDOUIsQ0FBQztJQUVELDhCQUFNLEdBQU47UUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUk7YUFDWCxJQUFJLENBQUMsWUFBWSxFQUFFLEVBQUUsQ0FBQzthQUN0QixHQUFHLENBQUMsVUFBQyxHQUFhO1lBQ2YsTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQWtCLENBQUE7UUFDckMsQ0FBQyxDQUFDLENBQUM7SUFDWCxDQUFDO0lBQ0QsZ0NBQVEsR0FBUjtRQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSTthQUNYLElBQUksQ0FBQyxjQUFjLEVBQUUsRUFBRSxDQUFDO2FBQ3hCLEdBQUcsQ0FBQyxVQUFDLEdBQWE7WUFDZixNQUFNLENBQUMsR0FBRyxDQUFDLElBQUksRUFBa0IsQ0FBQTtRQUNyQyxDQUFDLENBQUMsQ0FBQztJQUNYLENBQUM7SUFDTCxvQkFBQztBQUFELENBQUMsQUFuQkQsSUFtQkM7QUFuQlksYUFBYTtJQUR6QixpQkFBVSxFQUFFO3FDQUdpQixXQUFJO0dBRnJCLGFBQWEsQ0FtQnpCO0FBbkJZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtIdHRwLCBSZXNwb25zZX0gZnJvbSBcIkBhbmd1bGFyL2h0dHBcIjtcclxuaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gXCJyeGpzXCI7XHJcbmltcG9ydCB7TmF2YmFySXRlbX0gZnJvbSBcIi4uL2VudGl0aWVzL25hdmJhckl0ZW1cIjtcclxuXHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBOYXZiYXJTZXJ2aWNlIHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHApIHtcclxuICAgIH1cclxuXHJcbiAgICBuYXZiYXIoKTogT2JzZXJ2YWJsZTxOYXZiYXJJdGVtW10+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwXHJcbiAgICAgICAgICAgIC5wb3N0KCdhcGkvbmF2YmFyJywge30pXHJcbiAgICAgICAgICAgIC5tYXAoKHJlczogUmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiByZXMuanNvbigpIGFzIE5hdmJhckl0ZW1bXVxyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGZlYXR1cmVzKCk6T2JzZXJ2YWJsZTxOYXZiYXJJdGVtW10+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwXHJcbiAgICAgICAgICAgIC5wb3N0KCdhcGkvZmVhdHVyZXMnLCB7fSlcclxuICAgICAgICAgICAgLm1hcCgocmVzOiBSZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5qc29uKCkgYXMgTmF2YmFySXRlbVtdXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG59Il19