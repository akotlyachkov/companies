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
var companies_1 = require("../providers/companies");
var CompaniesPage = (function () {
    function CompaniesPage(companieService) {
        this.companieService = companieService;
        this.filter = { query: '' };
    }
    CompaniesPage.prototype.ngOnInit = function () {
        var _this = this;
        this.companieService.count().subscribe(function (response) { return _this.count = response; });
        this.companieService.search(this.filter).subscribe(function (response) { return _this.companies = response; });
    };
    return CompaniesPage;
}());
CompaniesPage = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'companies',
        providers: [companies_1.CompaniesService],
        template: "\n<router-outlet></router-outlet>\n<selector></selector>\n<companies-list [companies]=\"companies\"></companies-list>\n"
    }),
    __metadata("design:paramtypes", [companies_1.CompaniesService])
], CompaniesPage);
exports.CompaniesPage = CompaniesPage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcGFuaWVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY29tcGFuaWVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxzQ0FBZ0Q7QUFDaEQsb0RBQXdEO0FBY3hEO0lBS0ksdUJBQW9CLGVBQWlDO1FBQWpDLG9CQUFlLEdBQWYsZUFBZSxDQUFrQjtRQUlyRCxXQUFNLEdBQWlCLEVBQUMsS0FBSyxFQUFFLEVBQUUsRUFBQyxDQUFDO0lBRm5DLENBQUM7SUFJRCxnQ0FBUSxHQUFSO1FBQUEsaUJBSUM7UUFGRyxJQUFJLENBQUMsZUFBZSxDQUFDLEtBQUssRUFBRSxDQUFDLFNBQVMsQ0FBQyxVQUFBLFFBQVEsSUFBSSxPQUFBLEtBQUksQ0FBQyxLQUFLLEdBQUcsUUFBUSxFQUFyQixDQUFxQixDQUFDLENBQUM7UUFDMUUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFBLFFBQVEsSUFBSSxPQUFBLEtBQUksQ0FBQyxTQUFTLEdBQUcsUUFBUSxFQUF6QixDQUF5QixDQUFDLENBQUM7SUFDOUYsQ0FBQztJQUNMLG9CQUFDO0FBQUQsQ0FBQyxBQWhCRCxJQWdCQztBQWhCRDtJQVZDLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7UUFDbkIsUUFBUSxFQUFFLFdBQVc7UUFDckIsU0FBUyxFQUFFLENBQUMsNEJBQWdCLENBQUM7UUFDN0IsUUFBUSxFQUFFLHlIQUliO0tBQ0EsQ0FBQztxQ0FNdUMsNEJBQWdCO2lCQVd4RDtBQWhCWSx3QkFBQSxhQUFhLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0fSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQge0NvbXBhbmllc1NlcnZpY2V9IGZyb20gXCIuLi9wcm92aWRlcnMvY29tcGFuaWVzXCI7XHJcbmltcG9ydCB7Q29tcGFuaWV9IGZyb20gXCIuLi9lbnRpdGllcy9Db21wYW5pZVwiO1xyXG5pbXBvcnQge1NlYXJjaEZpbHRlcn0gZnJvbSBcIi4uL2VudGl0aWVzL1NlYXJjaEZpbHRlclwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgc2VsZWN0b3I6ICdjb21wYW5pZXMnLFxyXG4gICAgcHJvdmlkZXJzOiBbQ29tcGFuaWVzU2VydmljZV0sXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG48cm91dGVyLW91dGxldD48L3JvdXRlci1vdXRsZXQ+XHJcbjxzZWxlY3Rvcj48L3NlbGVjdG9yPlxyXG48Y29tcGFuaWVzLWxpc3QgW2NvbXBhbmllc109XCJjb21wYW5pZXNcIj48L2NvbXBhbmllcy1saXN0PlxyXG5gXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDb21wYW5pZXNQYWdlIGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgICBjb21wYW5pZXM6IENvbXBhbmllW107XHJcbiAgICBjb3VudDogbnVtYmVyO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgY29tcGFuaWVTZXJ2aWNlOiBDb21wYW5pZXNTZXJ2aWNlKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGZpbHRlcjogU2VhcmNoRmlsdGVyID0ge3F1ZXJ5OiAnJ307XHJcblxyXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XHJcblxyXG4gICAgICAgIHRoaXMuY29tcGFuaWVTZXJ2aWNlLmNvdW50KCkuc3Vic2NyaWJlKHJlc3BvbnNlID0+IHRoaXMuY291bnQgPSByZXNwb25zZSk7XHJcbiAgICAgICAgdGhpcy5jb21wYW5pZVNlcnZpY2Uuc2VhcmNoKHRoaXMuZmlsdGVyKS5zdWJzY3JpYmUocmVzcG9uc2UgPT4gdGhpcy5jb21wYW5pZXMgPSByZXNwb25zZSk7XHJcbiAgICB9XHJcbn0iXX0=