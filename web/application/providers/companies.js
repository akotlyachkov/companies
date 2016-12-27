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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcGFuaWVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY29tcGFuaWVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxzQ0FBNkM7QUFDN0Msc0NBQXlDO0FBT3pDLElBQWEsZ0JBQWdCO0lBRXpCLDBCQUFvQixJQUFVO1FBQVYsU0FBSSxHQUFKLElBQUksQ0FBTTtJQUM5QixDQUFDO0lBRUQsaUNBQU0sR0FBTixVQUFPLE1BQW9CO1FBQ3ZCLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSTthQUNYLElBQUksQ0FBQyxzQkFBc0IsRUFBRSxNQUFNLENBQUM7YUFDcEMsR0FBRyxDQUFDLFVBQUMsR0FBYTtZQUNmLE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFnQixDQUFBO1FBQ25DLENBQUMsQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQUVELGdDQUFLLEdBQUw7UUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUk7YUFDWCxJQUFJLENBQUMscUJBQXFCLEVBQUUsRUFBRSxDQUFDO2FBQy9CLEdBQUcsQ0FBQyxVQUFDLEdBQWE7WUFDZixNQUFNLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDLEtBQWUsQ0FBQTtRQUNyQyxDQUFDLENBQUMsQ0FBQztJQUNYLENBQUM7SUFDTCx1QkFBQztBQUFELENBQUMsQUFwQkQsSUFvQkM7QUFwQlksZ0JBQWdCO0lBRDVCLGlCQUFVLEVBQUU7cUNBR2lCLFdBQUk7R0FGckIsZ0JBQWdCLENBb0I1QjtBQXBCWSw0Q0FBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0h0dHAsIFJlc3BvbnNlfSBmcm9tIFwiQGFuZ3VsYXIvaHR0cFwiO1xyXG5pbXBvcnQge0luamVjdGFibGV9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSBcInJ4anNcIjtcclxuaW1wb3J0IHtDb21wYW5pZX0gZnJvbSBcIi4uL2VudGl0aWVzL2NvbXBhbmllXCI7XHJcbmltcG9ydCB7U2VhcmNoRmlsdGVyfSBmcm9tIFwiLi4vZW50aXRpZXMvc2VhcmNoRmlsdGVyXCI7XHJcblxyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgQ29tcGFuaWVzU2VydmljZSB7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwKSB7XHJcbiAgICB9XHJcblxyXG4gICAgc2VhcmNoKGZpbHRlcjogU2VhcmNoRmlsdGVyKTogT2JzZXJ2YWJsZTxDb21wYW5pZVtdPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cFxyXG4gICAgICAgICAgICAucG9zdCgnYXBpL2NvbXBhbmllcy9zZWFyY2gnLCBmaWx0ZXIpXHJcbiAgICAgICAgICAgIC5tYXAoKHJlczogUmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiByZXMuanNvbigpIGFzIENvbXBhbmllW11cclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgY291bnQoKTogT2JzZXJ2YWJsZTxudW1iZXI+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwXHJcbiAgICAgICAgICAgIC5wb3N0KCdhcGkvY29tcGFuaWVzL2NvdW50Jywge30pXHJcbiAgICAgICAgICAgIC5tYXAoKHJlczogUmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiByZXMuanNvbigpLmNvdW50IGFzIG51bWJlclxyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxufSJdfQ==