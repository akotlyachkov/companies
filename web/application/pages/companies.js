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
var companies_1 = require("../data/companies");
var CompaniesPage = (function () {
    function CompaniesPage(companieService) {
        this.companieService = companieService;
    }
    CompaniesPage.prototype.ngOnInit = function () {
        var _this = this;
        this.companieService.search().subscribe(function (response) { return _this.companies = response; });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcGFuaWVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY29tcGFuaWVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxzQ0FBZ0Q7QUFDaEQsK0NBQW1EO0FBYW5EO0lBSUksdUJBQW9CLGVBQWlDO1FBQWpDLG9CQUFlLEdBQWYsZUFBZSxDQUFrQjtJQUVyRCxDQUFDO0lBRUQsZ0NBQVEsR0FBUjtRQUFBLGlCQUVDO1FBREcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxTQUFTLENBQUMsVUFBQSxRQUFRLElBQUksT0FBQSxLQUFJLENBQUMsU0FBUyxHQUFHLFFBQVEsRUFBekIsQ0FBeUIsQ0FBQyxDQUFDO0lBQ25GLENBQUM7SUFDTCxvQkFBQztBQUFELENBQUMsQUFYRCxJQVdDO0FBWEQ7SUFWQyxnQkFBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1FBQ25CLFFBQVEsRUFBRSxXQUFXO1FBQ3JCLFNBQVMsRUFBRSxDQUFDLDRCQUFnQixDQUFDO1FBQzdCLFFBQVEsRUFBRSx5SEFJYjtLQUNBLENBQUM7cUNBS3VDLDRCQUFnQjtpQkFPeEQ7QUFYWSx3QkFBQSxhQUFhLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0fSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQge0NvbXBhbmllc1NlcnZpY2V9IGZyb20gXCIuLi9kYXRhL2NvbXBhbmllc1wiO1xyXG5pbXBvcnQge0NvbXBhbmllfSBmcm9tIFwiLi4vZW50aXRpZXMvQ29tcGFuaWVcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHNlbGVjdG9yOiAnY29tcGFuaWVzJyxcclxuICAgIHByb3ZpZGVyczogW0NvbXBhbmllc1NlcnZpY2VdLFxyXG4gICAgdGVtcGxhdGU6IGBcclxuPHJvdXRlci1vdXRsZXQ+PC9yb3V0ZXItb3V0bGV0PlxyXG48c2VsZWN0b3I+PC9zZWxlY3Rvcj5cclxuPGNvbXBhbmllcy1saXN0IFtjb21wYW5pZXNdPVwiY29tcGFuaWVzXCI+PC9jb21wYW5pZXMtbGlzdD5cclxuYFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ29tcGFuaWVzUGFnZSBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gICAgY29tcGFuaWVzOkNvbXBhbmllW107XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBjb21wYW5pZVNlcnZpY2U6IENvbXBhbmllc1NlcnZpY2UpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5jb21wYW5pZVNlcnZpY2Uuc2VhcmNoKCkuc3Vic2NyaWJlKHJlc3BvbnNlID0+IHRoaXMuY29tcGFuaWVzID0gcmVzcG9uc2UpO1xyXG4gICAgfVxyXG59Il19