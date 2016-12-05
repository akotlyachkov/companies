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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2YmFyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibmF2YmFyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxzQ0FBNkM7QUFDN0Msc0NBQXlDO0FBTXpDO0lBRUksdUJBQW9CLElBQVU7UUFBVixTQUFJLEdBQUosSUFBSSxDQUFNO0lBQzlCLENBQUM7SUFFRCw4QkFBTSxHQUFOO1FBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJO2FBQ1gsSUFBSSxDQUFDLFlBQVksRUFBRSxFQUFFLENBQUM7YUFDdEIsR0FBRyxDQUFDLFVBQUMsR0FBYTtZQUNmLE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFrQixDQUFBO1FBQ3JDLENBQUMsQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQUNELGdDQUFRLEdBQVI7UUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUk7YUFDWCxJQUFJLENBQUMsY0FBYyxFQUFFLEVBQUUsQ0FBQzthQUN4QixHQUFHLENBQUMsVUFBQyxHQUFhO1lBQ2YsTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQWtCLENBQUE7UUFDckMsQ0FBQyxDQUFDLENBQUM7SUFDWCxDQUFDO0lBQ0wsb0JBQUM7QUFBRCxDQUFDLEFBbkJELElBbUJDO0FBbkJEO0lBREMsaUJBQVUsRUFBRTtxQ0FHaUIsV0FBSTtpQkFpQmpDO0FBbkJZLHdCQUFBLGFBQWEsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SHR0cCwgUmVzcG9uc2V9IGZyb20gXCJAYW5ndWxhci9odHRwXCI7XHJcbmltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tIFwicnhqc1wiO1xyXG5pbXBvcnQge05hdmJhckl0ZW19IGZyb20gXCIuLi9lbnRpdGllcy9uYXZiYXJJdGVtXCI7XHJcblxyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgTmF2YmFyU2VydmljZSB7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwKSB7XHJcbiAgICB9XHJcblxyXG4gICAgbmF2YmFyKCk6IE9ic2VydmFibGU8TmF2YmFySXRlbVtdPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cFxyXG4gICAgICAgICAgICAucG9zdCgnYXBpL25hdmJhcicsIHt9KVxyXG4gICAgICAgICAgICAubWFwKChyZXM6IFJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzLmpzb24oKSBhcyBOYXZiYXJJdGVtW11cclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBmZWF0dXJlcygpOk9ic2VydmFibGU8TmF2YmFySXRlbVtdPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cFxyXG4gICAgICAgICAgICAucG9zdCgnYXBpL2ZlYXR1cmVzJywge30pXHJcbiAgICAgICAgICAgIC5tYXAoKHJlczogUmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiByZXMuanNvbigpIGFzIE5hdmJhckl0ZW1bXVxyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxufSJdfQ==