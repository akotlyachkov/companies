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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcGFuaWVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY29tcGFuaWVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxzQ0FBMkQ7QUFDM0Qsb0RBQXdEO0FBa0J4RDtJQU1JLHVCQUFvQixlQUFpQztRQUFqQyxvQkFBZSxHQUFmLGVBQWUsQ0FBa0I7UUFJckQsV0FBTSxHQUFpQixFQUFDLEtBQUssRUFBRSxFQUFFLEVBQUMsQ0FBQztJQUZuQyxDQUFDO0lBSUQsZ0NBQVEsR0FBUjtRQUFBLGlCQUlDO1FBRkcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxTQUFTLENBQUMsVUFBQSxRQUFRLElBQUksT0FBQSxLQUFJLENBQUMsVUFBVSxHQUFHLFFBQVEsRUFBMUIsQ0FBMEIsQ0FBQyxDQUFDO1FBQy9FLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBQSxRQUFRLElBQUksT0FBQSxLQUFJLENBQUMsU0FBUyxHQUFHLFFBQVEsRUFBekIsQ0FBeUIsQ0FBQyxDQUFDO0lBQzlGLENBQUM7SUFFRCxtQ0FBVyxHQUFYLFVBQVksS0FBSztJQUVqQixDQUFDO0lBSUQsNEJBQUksR0FBSjtRQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDcEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxjQUFjLEVBQUUsQ0FBQTtJQUM3QixDQUFDO0lBQ0wsb0JBQUM7QUFBRCxDQUFDLEFBNUJELElBNEJDO0FBTnFCO0lBQWpCLGdCQUFTLENBQUMsS0FBSyxDQUFDOzswQ0FBSztBQXRCMUI7SUFkQyxnQkFBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1FBQ25CLFFBQVEsRUFBRSxXQUFXO1FBQ3JCLFNBQVMsRUFBRSxDQUFDLDRCQUFnQixDQUFDO1FBQzdCLFFBQVEsRUFBRSxrYkFRYjtLQUNBLENBQUM7cUNBT3VDLDRCQUFnQjtpQkFzQnhEO0FBNUJZLHdCQUFBLGFBQWEsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXQsIFZpZXdDaGlsZH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHtDb21wYW5pZXNTZXJ2aWNlfSBmcm9tIFwiLi4vcHJvdmlkZXJzL2NvbXBhbmllc1wiO1xyXG5pbXBvcnQge0NvbXBhbmllfSBmcm9tIFwiLi4vZW50aXRpZXMvY29tcGFuaWVcIjtcclxuaW1wb3J0IHtTZWFyY2hGaWx0ZXJ9IGZyb20gXCIuLi9lbnRpdGllcy9zZWFyY2hGaWx0ZXJcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHNlbGVjdG9yOiAnY29tcGFuaWVzJyxcclxuICAgIHByb3ZpZGVyczogW0NvbXBhbmllc1NlcnZpY2VdLFxyXG4gICAgdGVtcGxhdGU6IGBcclxuPHJvdXRlci1vdXRsZXQ+PC9yb3V0ZXItb3V0bGV0PlxyXG48YWN0aW9ucy1jb21wYW5pZXM+PC9hY3Rpb25zLWNvbXBhbmllcz5cclxuPHNlbGVjdG9yPjwvc2VsZWN0b3I+XHJcbjxjb21wYW5pZXMtbGlzdCBbY29tcGFuaWVzXT1cImNvbXBhbmllc1wiPjwvY29tcGFuaWVzLWxpc3Q+XHJcbjxwYWdpbmF0aW9uIFt0b3RhbEl0ZW1zXT1cInRvdGFsSXRlbXNcIiBbKG5nTW9kZWwpXT1cImN1cnJlbnRQYWdlXCIgKHBhZ2VDaGFuZ2VkKT1cInBhZ2VDaGFuZ2VkKCRldmVudClcIj48L3BhZ2luYXRpb24+XHJcbjxidXR0b24gY2xhc3M9XCJidG4gYnRuLXByaW1hcnlcIiAoY2xpY2spPVwidGVzdCgpXCI+TGFyZ2UgbW9kYWw8L2J1dHRvbj5cclxuPHF1ZXJ5LWhpc3RvcnktbW9kYWwgI21vZCBbc2hvd0NoaWxkTW9kYWxdPVwidGVzdFwiPjwvcXVlcnktaGlzdG9yeS1tb2RhbD5cclxuYFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ29tcGFuaWVzUGFnZSBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gICAgY29tcGFuaWVzOiBDb21wYW5pZVtdO1xyXG4gICAgdG90YWxJdGVtczogbnVtYmVyO1xyXG4gICAgY3VycmVudFBhZ2U6IG51bWJlcjtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNvbXBhbmllU2VydmljZTogQ29tcGFuaWVzU2VydmljZSkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBmaWx0ZXI6IFNlYXJjaEZpbHRlciA9IHtxdWVyeTogJyd9O1xyXG5cclxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xyXG5cclxuICAgICAgICB0aGlzLmNvbXBhbmllU2VydmljZS5jb3VudCgpLnN1YnNjcmliZShyZXNwb25zZSA9PiB0aGlzLnRvdGFsSXRlbXMgPSByZXNwb25zZSk7XHJcbiAgICAgICAgdGhpcy5jb21wYW5pZVNlcnZpY2Uuc2VhcmNoKHRoaXMuZmlsdGVyKS5zdWJzY3JpYmUocmVzcG9uc2UgPT4gdGhpcy5jb21wYW5pZXMgPSByZXNwb25zZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcGFnZUNoYW5nZWQoZXZlbnQpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgQFZpZXdDaGlsZCgnbW9kJykgbW9kO1xyXG5cclxuICAgIHRlc3QoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2RmZGYnKTtcclxuICAgICAgICB0aGlzLm1vZC5zaG93Q2hpbGRNb2RhbCgpXHJcbiAgICB9XHJcbn0iXX0=