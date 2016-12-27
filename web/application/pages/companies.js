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
var history_1 = require("../modals/history/history");
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
    __metadata("design:type", history_1.PersonQueryHistoryModal)
], CompaniesPage.prototype, "mod", void 0);
CompaniesPage = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'companies',
        providers: [companies_1.CompaniesService],
        template: "\n<router-outlet></router-outlet>\n<actions-companies></actions-companies>\n<selector></selector>\n<companies-list [companies]=\"companies\"></companies-list>\n<pagination [totalItems]=\"totalItems\" [(ngModel)]=\"currentPage\" (pageChanged)=\"pageChanged($event)\"></pagination>\n<button class=\"btn btn-primary\" (click)=\"test()\">Large modal</button>\n<query-history-modal #mod></query-history-modal>\n"
    }),
    __metadata("design:paramtypes", [companies_1.CompaniesService])
], CompaniesPage);
exports.CompaniesPage = CompaniesPage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcGFuaWVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY29tcGFuaWVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxzQ0FBMkQ7QUFDM0Qsb0RBQXdEO0FBR3hELHFEQUFrRTtBQWlCbEUsSUFBYSxhQUFhO0lBTXRCLHVCQUFvQixlQUFpQztRQUFqQyxvQkFBZSxHQUFmLGVBQWUsQ0FBa0I7UUFJckQsV0FBTSxHQUFpQixFQUFDLEtBQUssRUFBRSxFQUFFLEVBQUMsQ0FBQztJQUZuQyxDQUFDO0lBSUQsZ0NBQVEsR0FBUjtRQUFBLGlCQUlDO1FBRkcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxTQUFTLENBQUMsVUFBQSxRQUFRLElBQUksT0FBQSxLQUFJLENBQUMsVUFBVSxHQUFHLFFBQVEsRUFBMUIsQ0FBMEIsQ0FBQyxDQUFDO1FBQy9FLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBQSxRQUFRLElBQUksT0FBQSxLQUFJLENBQUMsU0FBUyxHQUFHLFFBQVEsRUFBekIsQ0FBeUIsQ0FBQyxDQUFDO0lBQzlGLENBQUM7SUFFRCxtQ0FBVyxHQUFYLFVBQVksS0FBSztJQUVqQixDQUFDO0lBS0QsNEJBQUksR0FBSjtRQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDcEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxjQUFjLEVBQUUsQ0FBQTtJQUM3QixDQUFDO0lBQ0wsb0JBQUM7QUFBRCxDQUFDLEFBN0JELElBNkJDO0FBTkc7SUFEQyxnQkFBUyxDQUFDLEtBQUssQ0FBQzs4QkFDYixpQ0FBdUI7MENBQUM7QUF2Qm5CLGFBQWE7SUFkekIsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtRQUNuQixRQUFRLEVBQUUsV0FBVztRQUNyQixTQUFTLEVBQUUsQ0FBQyw0QkFBZ0IsQ0FBQztRQUM3QixRQUFRLEVBQUUsd1pBUWI7S0FDQSxDQUFDO3FDQU91Qyw0QkFBZ0I7R0FONUMsYUFBYSxDQTZCekI7QUE3Qlksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0LCBWaWV3Q2hpbGR9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7Q29tcGFuaWVzU2VydmljZX0gZnJvbSBcIi4uL3Byb3ZpZGVycy9jb21wYW5pZXNcIjtcclxuaW1wb3J0IHtDb21wYW5pZX0gZnJvbSBcIi4uL2VudGl0aWVzL2NvbXBhbmllXCI7XHJcbmltcG9ydCB7U2VhcmNoRmlsdGVyfSBmcm9tIFwiLi4vZW50aXRpZXMvc2VhcmNoRmlsdGVyXCI7XHJcbmltcG9ydCB7UGVyc29uUXVlcnlIaXN0b3J5TW9kYWx9IGZyb20gXCIuLi9tb2RhbHMvaGlzdG9yeS9oaXN0b3J5XCI7XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgc2VsZWN0b3I6ICdjb21wYW5pZXMnLFxyXG4gICAgcHJvdmlkZXJzOiBbQ29tcGFuaWVzU2VydmljZV0sXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG48cm91dGVyLW91dGxldD48L3JvdXRlci1vdXRsZXQ+XHJcbjxhY3Rpb25zLWNvbXBhbmllcz48L2FjdGlvbnMtY29tcGFuaWVzPlxyXG48c2VsZWN0b3I+PC9zZWxlY3Rvcj5cclxuPGNvbXBhbmllcy1saXN0IFtjb21wYW5pZXNdPVwiY29tcGFuaWVzXCI+PC9jb21wYW5pZXMtbGlzdD5cclxuPHBhZ2luYXRpb24gW3RvdGFsSXRlbXNdPVwidG90YWxJdGVtc1wiIFsobmdNb2RlbCldPVwiY3VycmVudFBhZ2VcIiAocGFnZUNoYW5nZWQpPVwicGFnZUNoYW5nZWQoJGV2ZW50KVwiPjwvcGFnaW5hdGlvbj5cclxuPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeVwiIChjbGljayk9XCJ0ZXN0KClcIj5MYXJnZSBtb2RhbDwvYnV0dG9uPlxyXG48cXVlcnktaGlzdG9yeS1tb2RhbCAjbW9kPjwvcXVlcnktaGlzdG9yeS1tb2RhbD5cclxuYFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ29tcGFuaWVzUGFnZSBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gICAgY29tcGFuaWVzOiBDb21wYW5pZVtdO1xyXG4gICAgdG90YWxJdGVtczogbnVtYmVyO1xyXG4gICAgY3VycmVudFBhZ2U6IG51bWJlcjtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNvbXBhbmllU2VydmljZTogQ29tcGFuaWVzU2VydmljZSkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBmaWx0ZXI6IFNlYXJjaEZpbHRlciA9IHtxdWVyeTogJyd9O1xyXG5cclxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xyXG5cclxuICAgICAgICB0aGlzLmNvbXBhbmllU2VydmljZS5jb3VudCgpLnN1YnNjcmliZShyZXNwb25zZSA9PiB0aGlzLnRvdGFsSXRlbXMgPSByZXNwb25zZSk7XHJcbiAgICAgICAgdGhpcy5jb21wYW5pZVNlcnZpY2Uuc2VhcmNoKHRoaXMuZmlsdGVyKS5zdWJzY3JpYmUocmVzcG9uc2UgPT4gdGhpcy5jb21wYW5pZXMgPSByZXNwb25zZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcGFnZUNoYW5nZWQoZXZlbnQpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgQFZpZXdDaGlsZCgnbW9kJylcclxuICAgIG1vZDpQZXJzb25RdWVyeUhpc3RvcnlNb2RhbDtcclxuXHJcbiAgICB0ZXN0KCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdkZmRmJyk7XHJcbiAgICAgICAgdGhpcy5tb2Quc2hvd0NoaWxkTW9kYWwoKVxyXG4gICAgfVxyXG59Il19