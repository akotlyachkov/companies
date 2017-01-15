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
var http_1 = require("@angular/http");
var BusinessmenProvider = (function () {
    function BusinessmenProvider(http) {
        this.http = http;
    }
    BusinessmenProvider.prototype.searchFounders = function (filter) {
        return this.http
            .post('api/persons/search', filter)
            .map(function (res) {
            return res.json();
        });
    };
    BusinessmenProvider.prototype.searchChiefs = function (filter) {
        return this.http
            .post('api/companies/search', filter)
            .map(function (res) {
            return res.json();
        });
    };
    BusinessmenProvider.prototype.searchIchp = function (filter) {
        return this.http
            .post('api/companies/search', filter)
            .map(function (res) {
            return res.json();
        });
    };
    BusinessmenProvider.prototype.searchCount = function (filter) {
        return this.http
            .post('api/persons/search/count/', filter)
            .map(function (res) {
            return res.json();
        });
    };
    BusinessmenProvider.prototype.switch = function (text) {
        return this.http
            .post('api/text/switch/', text)
            .map(function (res) {
            return res.json();
        });
    };
    return BusinessmenProvider;
}());
BusinessmenProvider = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], BusinessmenProvider);
exports.BusinessmenProvider = BusinessmenProvider;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVzaW5lc3NtZW4uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJidXNpbmVzc21lbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsc0NBQXlDO0FBQ3pDLHNDQUE2QztBQVc3QztJQUNJLDZCQUFvQixJQUFVO1FBQVYsU0FBSSxHQUFKLElBQUksQ0FBTTtJQUM5QixDQUFDO0lBRUQsNENBQWMsR0FBZCxVQUFlLE1BQW9CO1FBQy9CLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSTthQUNYLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxNQUFNLENBQUM7YUFDbEMsR0FBRyxDQUFDLFVBQUMsR0FBYTtZQUNmLE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFzQixDQUFBO1FBQ3pDLENBQUMsQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQUNELDBDQUFZLEdBQVosVUFBYSxNQUFvQjtRQUM3QixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUk7YUFDWCxJQUFJLENBQUMsc0JBQXNCLEVBQUUsTUFBTSxDQUFDO2FBQ3BDLEdBQUcsQ0FBQyxVQUFDLEdBQWE7WUFDZixNQUFNLENBQUMsR0FBRyxDQUFDLElBQUksRUFBb0IsQ0FBQTtRQUN2QyxDQUFDLENBQUMsQ0FBQztJQUNYLENBQUM7SUFDRCx3Q0FBVSxHQUFWLFVBQVcsTUFBb0I7UUFDM0IsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJO2FBQ1gsSUFBSSxDQUFDLHNCQUFzQixFQUFFLE1BQU0sQ0FBQzthQUNwQyxHQUFHLENBQUMsVUFBQyxHQUFhO1lBQ2YsTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQWtCLENBQUE7UUFDckMsQ0FBQyxDQUFDLENBQUM7SUFDWCxDQUFDO0lBQ0QseUNBQVcsR0FBWCxVQUFZLE1BQWM7UUFDdEIsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJO2FBQ1gsSUFBSSxDQUFDLDJCQUEyQixFQUFFLE1BQU0sQ0FBQzthQUN6QyxHQUFHLENBQUMsVUFBQyxHQUFhO1lBQ2YsTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQVcsQ0FBQTtRQUM5QixDQUFDLENBQUMsQ0FBQztJQUNYLENBQUM7SUFFRCxvQ0FBTSxHQUFOLFVBQU8sSUFBWTtRQUNmLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSTthQUNYLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxJQUFJLENBQUM7YUFDOUIsR0FBRyxDQUFDLFVBQUMsR0FBYTtZQUNmLE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFjLENBQUE7UUFDakMsQ0FBQyxDQUFDLENBQUM7SUFDWCxDQUFDO0lBR0wsMEJBQUM7QUFBRCxDQUFDLEFBMUNELElBMENDO0FBMUNEO0lBREMsaUJBQVUsRUFBRTtxQ0FFaUIsV0FBSTt1QkF5Q2pDO0FBMUNZLDhCQUFBLG1CQUFtQixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQge0h0dHAsIFJlc3BvbnNlfSBmcm9tIFwiQGFuZ3VsYXIvaHR0cFwiO1xyXG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gXCJyeGpzXCI7XHJcbmltcG9ydCB7UmVzdWx0Rm91bmRlcnN9IGZyb20gXCIuLi9lbnRpdGllcy9SZXN1bHRGb3VuZGVyc1wiO1xyXG5pbXBvcnQge1Jlc3VsdENoaWVmc30gZnJvbSBcIi4uL2VudGl0aWVzL1Jlc3VsdENoaWVmc1wiO1xyXG5pbXBvcnQge1Jlc3VsdEljaHB9IGZyb20gXCIuLi9lbnRpdGllcy9SZXN1bHRJY2hwXCI7XHJcbmltcG9ydCB7RmlsdGVyfSBmcm9tIFwiLi4vZW50aXRpZXMvRmlsdGVyXCI7XHJcbmltcG9ydCB7RmlsdGVyU2VhcmNofSBmcm9tIFwiLi4vZW50aXRpZXMvRmlsdGVyU2VhcmNoXCI7XHJcbmltcG9ydCB7VGFifSBmcm9tIFwiLi4vZW50aXRpZXMvVGFiXCI7XHJcbmltcG9ydCB7U3dpdGNoZXJ9IGZyb20gXCIuLi9lbnRpdGllcy9Td2l0Y2hlclwiO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgQnVzaW5lc3NtZW5Qcm92aWRlcntcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cCkge1xyXG4gICAgfVxyXG5cclxuICAgIHNlYXJjaEZvdW5kZXJzKGZpbHRlcjogRmlsdGVyU2VhcmNoKTogT2JzZXJ2YWJsZTxSZXN1bHRGb3VuZGVyc1tdPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cFxyXG4gICAgICAgICAgICAucG9zdCgnYXBpL3BlcnNvbnMvc2VhcmNoJywgZmlsdGVyKVxyXG4gICAgICAgICAgICAubWFwKChyZXM6IFJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzLmpzb24oKSBhcyBSZXN1bHRGb3VuZGVyc1tdXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgc2VhcmNoQ2hpZWZzKGZpbHRlcjogRmlsdGVyU2VhcmNoKTogT2JzZXJ2YWJsZTxSZXN1bHRDaGllZnNbXT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHBcclxuICAgICAgICAgICAgLnBvc3QoJ2FwaS9jb21wYW5pZXMvc2VhcmNoJywgZmlsdGVyKVxyXG4gICAgICAgICAgICAubWFwKChyZXM6IFJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzLmpzb24oKSBhcyBSZXN1bHRDaGllZnNbXVxyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIHNlYXJjaEljaHAoZmlsdGVyOiBGaWx0ZXJTZWFyY2gpOiBPYnNlcnZhYmxlPFJlc3VsdEljaHBbXT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHBcclxuICAgICAgICAgICAgLnBvc3QoJ2FwaS9jb21wYW5pZXMvc2VhcmNoJywgZmlsdGVyKVxyXG4gICAgICAgICAgICAubWFwKChyZXM6IFJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzLmpzb24oKSBhcyBSZXN1bHRJY2hwW11cclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBzZWFyY2hDb3VudChmaWx0ZXI6IEZpbHRlcik6IE9ic2VydmFibGU8VGFiW10+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwXHJcbiAgICAgICAgICAgIC5wb3N0KCdhcGkvcGVyc29ucy9zZWFyY2gvY291bnQvJywgZmlsdGVyKVxyXG4gICAgICAgICAgICAubWFwKChyZXM6IFJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzLmpzb24oKSBhcyBUYWJbXVxyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBzd2l0Y2godGV4dDogc3RyaW5nKTogT2JzZXJ2YWJsZTxTd2l0Y2hlcj4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHBcclxuICAgICAgICAgICAgLnBvc3QoJ2FwaS90ZXh0L3N3aXRjaC8nLCB0ZXh0KVxyXG4gICAgICAgICAgICAubWFwKChyZXM6IFJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzLmpzb24oKSBhcyBTd2l0Y2hlclxyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcblxyXG59Il19