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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVzaW5lc3NtZW4uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJidXNpbmVzc21lbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsc0NBQXlDO0FBQ3pDLHNDQUE2QztBQVc3QyxJQUFhLG1CQUFtQjtJQUM1Qiw2QkFBb0IsSUFBVTtRQUFWLFNBQUksR0FBSixJQUFJLENBQU07SUFDOUIsQ0FBQztJQUVELDRDQUFjLEdBQWQsVUFBZSxNQUFvQjtRQUMvQixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUk7YUFDWCxJQUFJLENBQUMsb0JBQW9CLEVBQUUsTUFBTSxDQUFDO2FBQ2xDLEdBQUcsQ0FBQyxVQUFDLEdBQWE7WUFDZixNQUFNLENBQUMsR0FBRyxDQUFDLElBQUksRUFBc0IsQ0FBQTtRQUN6QyxDQUFDLENBQUMsQ0FBQztJQUNYLENBQUM7SUFDRCwwQ0FBWSxHQUFaLFVBQWEsTUFBb0I7UUFDN0IsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJO2FBQ1gsSUFBSSxDQUFDLHNCQUFzQixFQUFFLE1BQU0sQ0FBQzthQUNwQyxHQUFHLENBQUMsVUFBQyxHQUFhO1lBQ2YsTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQW9CLENBQUE7UUFDdkMsQ0FBQyxDQUFDLENBQUM7SUFDWCxDQUFDO0lBQ0Qsd0NBQVUsR0FBVixVQUFXLE1BQW9CO1FBQzNCLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSTthQUNYLElBQUksQ0FBQyxzQkFBc0IsRUFBRSxNQUFNLENBQUM7YUFDcEMsR0FBRyxDQUFDLFVBQUMsR0FBYTtZQUNmLE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFrQixDQUFBO1FBQ3JDLENBQUMsQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQUNELHlDQUFXLEdBQVgsVUFBWSxNQUFjO1FBQ3RCLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSTthQUNYLElBQUksQ0FBQywyQkFBMkIsRUFBRSxNQUFNLENBQUM7YUFDekMsR0FBRyxDQUFDLFVBQUMsR0FBYTtZQUNmLE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFXLENBQUE7UUFDOUIsQ0FBQyxDQUFDLENBQUM7SUFDWCxDQUFDO0lBRUQsb0NBQU0sR0FBTixVQUFPLElBQVk7UUFDZixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUk7YUFDWCxJQUFJLENBQUMsa0JBQWtCLEVBQUUsSUFBSSxDQUFDO2FBQzlCLEdBQUcsQ0FBQyxVQUFDLEdBQWE7WUFDZixNQUFNLENBQUMsR0FBRyxDQUFDLElBQUksRUFBYyxDQUFBO1FBQ2pDLENBQUMsQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQUdMLDBCQUFDO0FBQUQsQ0FBQyxBQTFDRCxJQTBDQztBQTFDWSxtQkFBbUI7SUFEL0IsaUJBQVUsRUFBRTtxQ0FFaUIsV0FBSTtHQURyQixtQkFBbUIsQ0EwQy9CO0FBMUNZLGtEQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHtIdHRwLCBSZXNwb25zZX0gZnJvbSBcIkBhbmd1bGFyL2h0dHBcIjtcclxuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tIFwicnhqc1wiO1xyXG5pbXBvcnQge1Jlc3VsdEZvdW5kZXJzfSBmcm9tIFwiLi4vZW50aXRpZXMvUmVzdWx0Rm91bmRlcnNcIjtcclxuaW1wb3J0IHtSZXN1bHRDaGllZnN9IGZyb20gXCIuLi9lbnRpdGllcy9SZXN1bHRDaGllZnNcIjtcclxuaW1wb3J0IHtSZXN1bHRJY2hwfSBmcm9tIFwiLi4vZW50aXRpZXMvUmVzdWx0SWNocFwiO1xyXG5pbXBvcnQge0ZpbHRlcn0gZnJvbSBcIi4uL2VudGl0aWVzL0ZpbHRlclwiO1xyXG5pbXBvcnQge0ZpbHRlclNlYXJjaH0gZnJvbSBcIi4uL2VudGl0aWVzL0ZpbHRlclNlYXJjaFwiO1xyXG5pbXBvcnQge1RhYn0gZnJvbSBcIi4uL2VudGl0aWVzL1RhYlwiO1xyXG5pbXBvcnQge1N3aXRjaGVyfSBmcm9tIFwiLi4vZW50aXRpZXMvU3dpdGNoZXJcIjtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEJ1c2luZXNzbWVuUHJvdmlkZXJ7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHApIHtcclxuICAgIH1cclxuXHJcbiAgICBzZWFyY2hGb3VuZGVycyhmaWx0ZXI6IEZpbHRlclNlYXJjaCk6IE9ic2VydmFibGU8UmVzdWx0Rm91bmRlcnNbXT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHBcclxuICAgICAgICAgICAgLnBvc3QoJ2FwaS9wZXJzb25zL3NlYXJjaCcsIGZpbHRlcilcclxuICAgICAgICAgICAgLm1hcCgocmVzOiBSZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5qc29uKCkgYXMgUmVzdWx0Rm91bmRlcnNbXVxyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIHNlYXJjaENoaWVmcyhmaWx0ZXI6IEZpbHRlclNlYXJjaCk6IE9ic2VydmFibGU8UmVzdWx0Q2hpZWZzW10+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwXHJcbiAgICAgICAgICAgIC5wb3N0KCdhcGkvY29tcGFuaWVzL3NlYXJjaCcsIGZpbHRlcilcclxuICAgICAgICAgICAgLm1hcCgocmVzOiBSZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5qc29uKCkgYXMgUmVzdWx0Q2hpZWZzW11cclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBzZWFyY2hJY2hwKGZpbHRlcjogRmlsdGVyU2VhcmNoKTogT2JzZXJ2YWJsZTxSZXN1bHRJY2hwW10+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwXHJcbiAgICAgICAgICAgIC5wb3N0KCdhcGkvY29tcGFuaWVzL3NlYXJjaCcsIGZpbHRlcilcclxuICAgICAgICAgICAgLm1hcCgocmVzOiBSZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5qc29uKCkgYXMgUmVzdWx0SWNocFtdXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgc2VhcmNoQ291bnQoZmlsdGVyOiBGaWx0ZXIpOiBPYnNlcnZhYmxlPFRhYltdPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cFxyXG4gICAgICAgICAgICAucG9zdCgnYXBpL3BlcnNvbnMvc2VhcmNoL2NvdW50LycsIGZpbHRlcilcclxuICAgICAgICAgICAgLm1hcCgocmVzOiBSZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5qc29uKCkgYXMgVGFiW11cclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgc3dpdGNoKHRleHQ6IHN0cmluZyk6IE9ic2VydmFibGU8U3dpdGNoZXI+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwXHJcbiAgICAgICAgICAgIC5wb3N0KCdhcGkvdGV4dC9zd2l0Y2gvJywgdGV4dClcclxuICAgICAgICAgICAgLm1hcCgocmVzOiBSZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5qc29uKCkgYXMgU3dpdGNoZXJcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG5cclxufSJdfQ==