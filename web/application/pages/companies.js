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
        this.companieService.count().subscribe(function (response) { return _this.totalItems = response; });
        this.companieService.search(this.filter).subscribe(function (response) { return _this.companies = response; });
    };
    CompaniesPage.prototype.pageChanged = function (event) {
    };
    return CompaniesPage;
}());
CompaniesPage = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'companies',
        providers: [companies_1.CompaniesService],
        template: "\n<router-outlet></router-outlet>\n<actions-companies></actions-companies>\n<selector></selector>\n<companies-list [companies]=\"companies\"></companies-list>\n<pagination [totalItems]=\"totalItems\" [(ngModel)]=\"currentPage\" (pageChanged)=\"pageChanged($event)\"></pagination>\n"
    }),
    __metadata("design:paramtypes", [companies_1.CompaniesService])
], CompaniesPage);
exports.CompaniesPage = CompaniesPage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcGFuaWVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY29tcGFuaWVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxzQ0FBZ0Q7QUFDaEQsb0RBQXdEO0FBZ0J4RCxJQUFhLGFBQWE7SUFNdEIsdUJBQW9CLGVBQWlDO1FBQWpDLG9CQUFlLEdBQWYsZUFBZSxDQUFrQjtRQUlyRCxXQUFNLEdBQWlCLEVBQUMsS0FBSyxFQUFFLEVBQUUsRUFBQyxDQUFDO0lBRm5DLENBQUM7SUFJRCxnQ0FBUSxHQUFSO1FBQUEsaUJBSUM7UUFGRyxJQUFJLENBQUMsZUFBZSxDQUFDLEtBQUssRUFBRSxDQUFDLFNBQVMsQ0FBQyxVQUFBLFFBQVEsSUFBSSxPQUFBLEtBQUksQ0FBQyxVQUFVLEdBQUcsUUFBUSxFQUExQixDQUEwQixDQUFDLENBQUM7UUFDL0UsSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFBLFFBQVEsSUFBSSxPQUFBLEtBQUksQ0FBQyxTQUFTLEdBQUcsUUFBUSxFQUF6QixDQUF5QixDQUFDLENBQUM7SUFDOUYsQ0FBQztJQUNELG1DQUFXLEdBQVgsVUFBYSxLQUFLO0lBRWxCLENBQUM7SUFDTCxvQkFBQztBQUFELENBQUMsQUFwQkQsSUFvQkM7QUFwQlksYUFBYTtJQVp6QixnQkFBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1FBQ25CLFFBQVEsRUFBRSxXQUFXO1FBQ3JCLFNBQVMsRUFBRSxDQUFDLDRCQUFnQixDQUFDO1FBQzdCLFFBQVEsRUFBRSwyUkFNYjtLQUNBLENBQUM7cUNBT3VDLDRCQUFnQjtHQU41QyxhQUFhLENBb0J6QjtBQXBCWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXR9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7Q29tcGFuaWVzU2VydmljZX0gZnJvbSBcIi4uL3Byb3ZpZGVycy9jb21wYW5pZXNcIjtcclxuaW1wb3J0IHtDb21wYW5pZX0gZnJvbSBcIi4uL2VudGl0aWVzL2NvbXBhbmllXCI7XHJcbmltcG9ydCB7U2VhcmNoRmlsdGVyfSBmcm9tIFwiLi4vZW50aXRpZXMvc2VhcmNoRmlsdGVyXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICBzZWxlY3RvcjogJ2NvbXBhbmllcycsXHJcbiAgICBwcm92aWRlcnM6IFtDb21wYW5pZXNTZXJ2aWNlXSxcclxuICAgIHRlbXBsYXRlOiBgXHJcbjxyb3V0ZXItb3V0bGV0Pjwvcm91dGVyLW91dGxldD5cclxuPGFjdGlvbnMtY29tcGFuaWVzPjwvYWN0aW9ucy1jb21wYW5pZXM+XHJcbjxzZWxlY3Rvcj48L3NlbGVjdG9yPlxyXG48Y29tcGFuaWVzLWxpc3QgW2NvbXBhbmllc109XCJjb21wYW5pZXNcIj48L2NvbXBhbmllcy1saXN0PlxyXG48cGFnaW5hdGlvbiBbdG90YWxJdGVtc109XCJ0b3RhbEl0ZW1zXCIgWyhuZ01vZGVsKV09XCJjdXJyZW50UGFnZVwiIChwYWdlQ2hhbmdlZCk9XCJwYWdlQ2hhbmdlZCgkZXZlbnQpXCI+PC9wYWdpbmF0aW9uPlxyXG5gXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDb21wYW5pZXNQYWdlIGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgICBjb21wYW5pZXM6IENvbXBhbmllW107XHJcbiAgICB0b3RhbEl0ZW1zOiBudW1iZXI7XHJcbiAgICBjdXJyZW50UGFnZTogbnVtYmVyO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgY29tcGFuaWVTZXJ2aWNlOiBDb21wYW5pZXNTZXJ2aWNlKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGZpbHRlcjogU2VhcmNoRmlsdGVyID0ge3F1ZXJ5OiAnJ307XHJcblxyXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XHJcblxyXG4gICAgICAgIHRoaXMuY29tcGFuaWVTZXJ2aWNlLmNvdW50KCkuc3Vic2NyaWJlKHJlc3BvbnNlID0+IHRoaXMudG90YWxJdGVtcyA9IHJlc3BvbnNlKTtcclxuICAgICAgICB0aGlzLmNvbXBhbmllU2VydmljZS5zZWFyY2godGhpcy5maWx0ZXIpLnN1YnNjcmliZShyZXNwb25zZSA9PiB0aGlzLmNvbXBhbmllcyA9IHJlc3BvbnNlKTtcclxuICAgIH1cclxuICAgIHBhZ2VDaGFuZ2VkIChldmVudCl7XHJcblxyXG4gICAgfVxyXG59Il19