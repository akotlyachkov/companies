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
var history_1 = require("../features/bussinessmen/modals/history/history");
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
        providers: [companies_1.CompaniesProvider],
        template: "\n<router-outlet></router-outlet>\n<actions-companies></actions-companies>\n<selector></selector>\n<companies-list [companies]=\"companies\"></companies-list>\n<pagination [totalItems]=\"totalItems\" [(ngModel)]=\"currentPage\" (pageChanged)=\"pageChanged($event)\"></pagination>\n<button class=\"btn btn-primary\" (click)=\"test()\">Large modal</button>\n<query-history-modal #mod></query-history-modal>\n"
    }),
    __metadata("design:paramtypes", [companies_1.CompaniesProvider])
], CompaniesPage);
exports.CompaniesPage = CompaniesPage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcGFuaWVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY29tcGFuaWVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxzQ0FBMkQ7QUFDM0Qsb0RBQXlEO0FBR3pELDJFQUF3RjtBQWlCeEY7SUFNSSx1QkFBb0IsZUFBa0M7UUFBbEMsb0JBQWUsR0FBZixlQUFlLENBQW1CO1FBSXRELFdBQU0sR0FBaUIsRUFBQyxLQUFLLEVBQUUsRUFBRSxFQUFDLENBQUM7SUFGbkMsQ0FBQztJQUlELGdDQUFRLEdBQVI7UUFBQSxpQkFJQztRQUZHLElBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxFQUFFLENBQUMsU0FBUyxDQUFDLFVBQUEsUUFBUSxJQUFJLE9BQUEsS0FBSSxDQUFDLFVBQVUsR0FBRyxRQUFRLEVBQTFCLENBQTBCLENBQUMsQ0FBQztRQUMvRSxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsU0FBUyxDQUFDLFVBQUEsUUFBUSxJQUFJLE9BQUEsS0FBSSxDQUFDLFNBQVMsR0FBRyxRQUFRLEVBQXpCLENBQXlCLENBQUMsQ0FBQztJQUM5RixDQUFDO0lBRUQsbUNBQVcsR0FBWCxVQUFZLEtBQUs7SUFFakIsQ0FBQztJQUtELDRCQUFJLEdBQUo7UUFDSSxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3BCLElBQUksQ0FBQyxHQUFHLENBQUMsY0FBYyxFQUFFLENBQUE7SUFDN0IsQ0FBQztJQUNMLG9CQUFDO0FBQUQsQ0FBQyxBQTdCRCxJQTZCQztBQU5HO0lBREMsZ0JBQVMsQ0FBQyxLQUFLLENBQUM7OEJBQ2IsaUNBQXVCOzBDQUFDO0FBdkJoQztJQWRDLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7UUFDbkIsUUFBUSxFQUFFLFdBQVc7UUFDckIsU0FBUyxFQUFFLENBQUMsNkJBQWlCLENBQUM7UUFDOUIsUUFBUSxFQUFFLHdaQVFiO0tBQ0EsQ0FBQztxQ0FPdUMsNkJBQWlCO2lCQXVCekQ7QUE3Qlksd0JBQUEsYUFBYSxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdCwgVmlld0NoaWxkfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQge0NvbXBhbmllc1Byb3ZpZGVyfSBmcm9tIFwiLi4vcHJvdmlkZXJzL2NvbXBhbmllc1wiO1xyXG5pbXBvcnQge0NvbXBhbmllfSBmcm9tIFwiLi4vZW50aXRpZXMvY29tcGFuaWVcIjtcclxuaW1wb3J0IHtTZWFyY2hGaWx0ZXJ9IGZyb20gXCIuLi9lbnRpdGllcy9zZWFyY2hGaWx0ZXJcIjtcclxuaW1wb3J0IHtQZXJzb25RdWVyeUhpc3RvcnlNb2RhbH0gZnJvbSBcIi4uL2ZlYXR1cmVzL2J1c3NpbmVzc21lbi9tb2RhbHMvaGlzdG9yeS9oaXN0b3J5XCI7XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgc2VsZWN0b3I6ICdjb21wYW5pZXMnLFxyXG4gICAgcHJvdmlkZXJzOiBbQ29tcGFuaWVzUHJvdmlkZXJdLFxyXG4gICAgdGVtcGxhdGU6IGBcclxuPHJvdXRlci1vdXRsZXQ+PC9yb3V0ZXItb3V0bGV0PlxyXG48YWN0aW9ucy1jb21wYW5pZXM+PC9hY3Rpb25zLWNvbXBhbmllcz5cclxuPHNlbGVjdG9yPjwvc2VsZWN0b3I+XHJcbjxjb21wYW5pZXMtbGlzdCBbY29tcGFuaWVzXT1cImNvbXBhbmllc1wiPjwvY29tcGFuaWVzLWxpc3Q+XHJcbjxwYWdpbmF0aW9uIFt0b3RhbEl0ZW1zXT1cInRvdGFsSXRlbXNcIiBbKG5nTW9kZWwpXT1cImN1cnJlbnRQYWdlXCIgKHBhZ2VDaGFuZ2VkKT1cInBhZ2VDaGFuZ2VkKCRldmVudClcIj48L3BhZ2luYXRpb24+XHJcbjxidXR0b24gY2xhc3M9XCJidG4gYnRuLXByaW1hcnlcIiAoY2xpY2spPVwidGVzdCgpXCI+TGFyZ2UgbW9kYWw8L2J1dHRvbj5cclxuPHF1ZXJ5LWhpc3RvcnktbW9kYWwgI21vZD48L3F1ZXJ5LWhpc3RvcnktbW9kYWw+XHJcbmBcclxufSlcclxuZXhwb3J0IGNsYXNzIENvbXBhbmllc1BhZ2UgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICAgIGNvbXBhbmllczogQ29tcGFuaWVbXTtcclxuICAgIHRvdGFsSXRlbXM6IG51bWJlcjtcclxuICAgIGN1cnJlbnRQYWdlOiBudW1iZXI7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBjb21wYW5pZVNlcnZpY2U6IENvbXBhbmllc1Byb3ZpZGVyKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGZpbHRlcjogU2VhcmNoRmlsdGVyID0ge3F1ZXJ5OiAnJ307XHJcblxyXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XHJcblxyXG4gICAgICAgIHRoaXMuY29tcGFuaWVTZXJ2aWNlLmNvdW50KCkuc3Vic2NyaWJlKHJlc3BvbnNlID0+IHRoaXMudG90YWxJdGVtcyA9IHJlc3BvbnNlKTtcclxuICAgICAgICB0aGlzLmNvbXBhbmllU2VydmljZS5zZWFyY2godGhpcy5maWx0ZXIpLnN1YnNjcmliZShyZXNwb25zZSA9PiB0aGlzLmNvbXBhbmllcyA9IHJlc3BvbnNlKTtcclxuICAgIH1cclxuXHJcbiAgICBwYWdlQ2hhbmdlZChldmVudCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBAVmlld0NoaWxkKCdtb2QnKVxyXG4gICAgbW9kOlBlcnNvblF1ZXJ5SGlzdG9yeU1vZGFsO1xyXG5cclxuICAgIHRlc3QoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2RmZGYnKTtcclxuICAgICAgICB0aGlzLm1vZC5zaG93Q2hpbGRNb2RhbCgpXHJcbiAgICB9XHJcbn0iXX0=