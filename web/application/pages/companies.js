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
    CompaniesPage.prototype.test = function () {
        console.log('dfdf');
        this.mod.showChildModal();
    };
    return CompaniesPage;
}());
__decorate([
    core_1.ViewChild('mod'),
    __metadata("design:type", Object)
], CompaniesPage.prototype, "mod", void 0);
CompaniesPage = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'companies',
        providers: [companies_1.CompaniesService],
        template: "\n<router-outlet></router-outlet>\n<actions-companies></actions-companies>\n<selector></selector>\n<companies-list [companies]=\"companies\"></companies-list>\n<pagination [totalItems]=\"totalItems\" [(ngModel)]=\"currentPage\" (pageChanged)=\"pageChanged($event)\"></pagination>\n<button class=\"btn btn-primary\" (click)=\"test()\">Large modal</button>\n<query-history-modal #mod [showChildModal]=\"test\"></query-history-modal>\n"
    }),
    __metadata("design:paramtypes", [companies_1.CompaniesService])
], CompaniesPage);
exports.CompaniesPage = CompaniesPage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcGFuaWVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY29tcGFuaWVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxzQ0FBMkQ7QUFDM0Qsb0RBQXdEO0FBa0J4RCxJQUFhLGFBQWE7SUFNdEIsdUJBQW9CLGVBQWlDO1FBQWpDLG9CQUFlLEdBQWYsZUFBZSxDQUFrQjtRQUlyRCxXQUFNLEdBQWlCLEVBQUMsS0FBSyxFQUFFLEVBQUUsRUFBQyxDQUFDO0lBRm5DLENBQUM7SUFJRCxnQ0FBUSxHQUFSO1FBQUEsaUJBSUM7UUFGRyxJQUFJLENBQUMsZUFBZSxDQUFDLEtBQUssRUFBRSxDQUFDLFNBQVMsQ0FBQyxVQUFBLFFBQVEsSUFBSSxPQUFBLEtBQUksQ0FBQyxVQUFVLEdBQUcsUUFBUSxFQUExQixDQUEwQixDQUFDLENBQUM7UUFDL0UsSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFBLFFBQVEsSUFBSSxPQUFBLEtBQUksQ0FBQyxTQUFTLEdBQUcsUUFBUSxFQUF6QixDQUF5QixDQUFDLENBQUM7SUFDOUYsQ0FBQztJQUVELG1DQUFXLEdBQVgsVUFBWSxLQUFLO0lBRWpCLENBQUM7SUFJRCw0QkFBSSxHQUFKO1FBQ0ksT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNwQixJQUFJLENBQUMsR0FBRyxDQUFDLGNBQWMsRUFBRSxDQUFBO0lBQzdCLENBQUM7SUFDTCxvQkFBQztBQUFELENBQUMsQUE1QkQsSUE0QkM7QUFOcUI7SUFBakIsZ0JBQVMsQ0FBQyxLQUFLLENBQUM7OzBDQUFLO0FBdEJiLGFBQWE7SUFkekIsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtRQUNuQixRQUFRLEVBQUUsV0FBVztRQUNyQixTQUFTLEVBQUUsQ0FBQyw0QkFBZ0IsQ0FBQztRQUM3QixRQUFRLEVBQUUsa2JBUWI7S0FDQSxDQUFDO3FDQU91Qyw0QkFBZ0I7R0FONUMsYUFBYSxDQTRCekI7QUE1Qlksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0LCBWaWV3Q2hpbGR9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7Q29tcGFuaWVzU2VydmljZX0gZnJvbSBcIi4uL3Byb3ZpZGVycy9jb21wYW5pZXNcIjtcclxuaW1wb3J0IHtDb21wYW5pZX0gZnJvbSBcIi4uL2VudGl0aWVzL2NvbXBhbmllXCI7XHJcbmltcG9ydCB7U2VhcmNoRmlsdGVyfSBmcm9tIFwiLi4vZW50aXRpZXMvc2VhcmNoRmlsdGVyXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICBzZWxlY3RvcjogJ2NvbXBhbmllcycsXHJcbiAgICBwcm92aWRlcnM6IFtDb21wYW5pZXNTZXJ2aWNlXSxcclxuICAgIHRlbXBsYXRlOiBgXHJcbjxyb3V0ZXItb3V0bGV0Pjwvcm91dGVyLW91dGxldD5cclxuPGFjdGlvbnMtY29tcGFuaWVzPjwvYWN0aW9ucy1jb21wYW5pZXM+XHJcbjxzZWxlY3Rvcj48L3NlbGVjdG9yPlxyXG48Y29tcGFuaWVzLWxpc3QgW2NvbXBhbmllc109XCJjb21wYW5pZXNcIj48L2NvbXBhbmllcy1saXN0PlxyXG48cGFnaW5hdGlvbiBbdG90YWxJdGVtc109XCJ0b3RhbEl0ZW1zXCIgWyhuZ01vZGVsKV09XCJjdXJyZW50UGFnZVwiIChwYWdlQ2hhbmdlZCk9XCJwYWdlQ2hhbmdlZCgkZXZlbnQpXCI+PC9wYWdpbmF0aW9uPlxyXG48YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5XCIgKGNsaWNrKT1cInRlc3QoKVwiPkxhcmdlIG1vZGFsPC9idXR0b24+XHJcbjxxdWVyeS1oaXN0b3J5LW1vZGFsICNtb2QgW3Nob3dDaGlsZE1vZGFsXT1cInRlc3RcIj48L3F1ZXJ5LWhpc3RvcnktbW9kYWw+XHJcbmBcclxufSlcclxuZXhwb3J0IGNsYXNzIENvbXBhbmllc1BhZ2UgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICAgIGNvbXBhbmllczogQ29tcGFuaWVbXTtcclxuICAgIHRvdGFsSXRlbXM6IG51bWJlcjtcclxuICAgIGN1cnJlbnRQYWdlOiBudW1iZXI7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBjb21wYW5pZVNlcnZpY2U6IENvbXBhbmllc1NlcnZpY2UpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgZmlsdGVyOiBTZWFyY2hGaWx0ZXIgPSB7cXVlcnk6ICcnfTtcclxuXHJcbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuXHJcbiAgICAgICAgdGhpcy5jb21wYW5pZVNlcnZpY2UuY291bnQoKS5zdWJzY3JpYmUocmVzcG9uc2UgPT4gdGhpcy50b3RhbEl0ZW1zID0gcmVzcG9uc2UpO1xyXG4gICAgICAgIHRoaXMuY29tcGFuaWVTZXJ2aWNlLnNlYXJjaCh0aGlzLmZpbHRlcikuc3Vic2NyaWJlKHJlc3BvbnNlID0+IHRoaXMuY29tcGFuaWVzID0gcmVzcG9uc2UpO1xyXG4gICAgfVxyXG5cclxuICAgIHBhZ2VDaGFuZ2VkKGV2ZW50KSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIEBWaWV3Q2hpbGQoJ21vZCcpIG1vZDtcclxuXHJcbiAgICB0ZXN0KCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdkZmRmJyk7XHJcbiAgICAgICAgdGhpcy5tb2Quc2hvd0NoaWxkTW9kYWwoKVxyXG4gICAgfVxyXG59Il19