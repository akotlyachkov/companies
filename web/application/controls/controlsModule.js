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
var router_1 = require("@angular/router");
var ng2_bootstrap_1 = require("ng2-bootstrap/ng2-bootstrap");
var navbar_1 = require("./navbar/navbar");
var features_1 = require("./features/features");
var selector_1 = require("./selector/selector");
var companies_1 = require("./actions/companies/companies");
var person_1 = require("../features/bussinessmen/controls/search/person/person");
var simple_1 = require("../features/bussinessmen/controls/search/simple/simple");
var finance_1 = require("./search/companies/finance/finance");
var founders_1 = require("./search/companies/founders/founders");
var identification_1 = require("./search/companies/identification/identification");
var simple_2 = require("./search/companies/simple/simple");
var identification_2 = require("./search/ichp/identification/identification");
var simple_3 = require("./search/ichp/simple/simple");
var tabs_1 = require("./tabs/tabs");
var companies_list_1 = require("./tables/companies-list/companies-list");
var ichp_list_1 = require("./tables/ichp-list/ichp-list");
var businessmen_list_1 = require("./tables/businessmen-list/businessmen-list");
var operators_1 = require("./dropdown/standart/operators");
var common_1 = require("@angular/common");
var navbar_2 = require("../providers/navbar");
var headcount_1 = require("./dropdown/standart/headcount");
var okfs_1 = require("./dropdown/templated/okfs");
var okopf_1 = require("./dropdown/templated/okopf");
var assets_1 = require("./dropdown/standart/assets");
var periods_1 = require("./dropdown/standart/periods");
var currency_1 = require("./dropdown/standart/currency");
var identification_3 = require("../features/bussinessmen/controls/search/identification/identification");
var ControlsModule = (function () {
    function ControlsModule() {
    }
    return ControlsModule;
}());
ControlsModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule, ng2_bootstrap_1.Ng2BootstrapModule, common_1.CommonModule],
        declarations: [
            navbar_1.NavbarControl,
            features_1.FeaturesControl,
            person_1.SearchBusinessmenPersonControl,
            simple_1.SearchBusinessmenSimpleControl,
            identification_3.SearchBusinessmenIdentificationControl,
            finance_1.SearchCompaniesFinanceControl,
            founders_1.SearchCompaniesFoundersControl,
            identification_1.SearchCompaniesIdentificationControl,
            simple_2.SearchCompaniesSimpleControl,
            identification_2.SearchIchpIdentificationControl,
            simple_3.SearchIchpSimpleControl,
            selector_1.SelectorControl,
            companies_1.ActionsCompaniesControl,
            tabs_1.TabsControl,
            companies_list_1.CompaniesListControl,
            ichp_list_1.IchpListControl,
            businessmen_list_1.BusinessmenListControl,
            headcount_1.HeadcountDropwownControl,
            okfs_1.OkfsDropwownControl,
            okopf_1.OkopfDropwownControl,
            assets_1.AssetsDropwownControl,
            periods_1.PeriodsDropwownControl,
            operators_1.OperatorsDropwownControl,
            currency_1.CurrencyDropwownControl
        ],
        exports: [
            navbar_1.NavbarControl,
            features_1.FeaturesControl,
            person_1.SearchBusinessmenPersonControl,
            simple_1.SearchBusinessmenSimpleControl,
            identification_3.SearchBusinessmenIdentificationControl,
            finance_1.SearchCompaniesFinanceControl,
            founders_1.SearchCompaniesFoundersControl,
            identification_1.SearchCompaniesIdentificationControl,
            simple_2.SearchCompaniesSimpleControl,
            identification_2.SearchIchpIdentificationControl,
            simple_3.SearchIchpSimpleControl,
            selector_1.SelectorControl,
            companies_1.ActionsCompaniesControl,
            tabs_1.TabsControl,
            companies_list_1.CompaniesListControl,
            ichp_list_1.IchpListControl,
            businessmen_list_1.BusinessmenListControl,
            headcount_1.HeadcountDropwownControl,
            okfs_1.OkfsDropwownControl,
            okopf_1.OkopfDropwownControl,
            assets_1.AssetsDropwownControl,
            periods_1.PeriodsDropwownControl,
            operators_1.OperatorsDropwownControl,
            currency_1.CurrencyDropwownControl
        ],
        providers: [navbar_2.NavbarService]
    }),
    __metadata("design:paramtypes", [])
], ControlsModule);
exports.ControlsModule = ControlsModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJvbHNNb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjb250cm9sc01vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsc0NBQXVDO0FBQ3ZDLDBDQUE2QztBQUM3Qyw2REFBaUU7QUFHakUsMENBQThDO0FBQzlDLGdEQUFvRDtBQUNwRCxnREFBb0Q7QUFDcEQsMkRBQXNFO0FBQ3RFLGlGQUFzRztBQUN0RyxpRkFBc0c7QUFDdEcsOERBQWlGO0FBQ2pGLGlFQUFvRjtBQUNwRixtRkFBc0c7QUFDdEcsMkRBQThFO0FBQzlFLDhFQUE0RjtBQUM1RixzREFBb0U7QUFDcEUsb0NBQXdDO0FBQ3hDLHlFQUE0RTtBQUM1RSwwREFBNkQ7QUFDN0QsK0VBQWtGO0FBQ2xGLDJEQUF1RTtBQUN2RSwwQ0FBNkM7QUFDN0MsOENBQWtEO0FBQ2xELDJEQUF1RTtBQUN2RSxrREFBOEQ7QUFDOUQsb0RBQWdFO0FBQ2hFLHFEQUFpRTtBQUNqRSx1REFBbUU7QUFDbkUseURBQXFFO0FBQ3JFLHlHQUE4SDtBQTJEOUg7SUFBQTtJQUVBLENBQUM7SUFBRCxxQkFBQztBQUFELENBQUMsQUFGRCxJQUVDO0FBRkQ7SUF6REMsZUFBUSxDQUFDO1FBQ04sT0FBTyxFQUFFLENBQUMscUJBQVksRUFBQyxrQ0FBa0IsRUFBQyxxQkFBWSxDQUFDO1FBQ3ZELFlBQVksRUFBRTtZQUNWLHNCQUFhO1lBQ2IsMEJBQWU7WUFDZix1Q0FBOEI7WUFDOUIsdUNBQThCO1lBQzlCLHVEQUFzQztZQUN0Qyx1Q0FBNkI7WUFDN0IseUNBQThCO1lBQzlCLHFEQUFvQztZQUNwQyxxQ0FBNEI7WUFDNUIsZ0RBQStCO1lBQy9CLGdDQUF1QjtZQUN2QiwwQkFBZTtZQUNmLG1DQUF1QjtZQUN2QixrQkFBVztZQUNYLHFDQUFvQjtZQUNwQiwyQkFBZTtZQUNmLHlDQUFzQjtZQUN0QixvQ0FBd0I7WUFDeEIsMEJBQW1CO1lBQ25CLDRCQUFvQjtZQUNwQiw4QkFBcUI7WUFDckIsZ0NBQXNCO1lBQ3RCLG9DQUF3QjtZQUN4QixrQ0FBdUI7U0FDMUI7UUFDRCxPQUFPLEVBQUU7WUFFTCxzQkFBYTtZQUNiLDBCQUFlO1lBQ2YsdUNBQThCO1lBQzlCLHVDQUE4QjtZQUM5Qix1REFBc0M7WUFDdEMsdUNBQTZCO1lBQzdCLHlDQUE4QjtZQUM5QixxREFBb0M7WUFDcEMscUNBQTRCO1lBQzVCLGdEQUErQjtZQUMvQixnQ0FBdUI7WUFDdkIsMEJBQWU7WUFDZixtQ0FBdUI7WUFDdkIsa0JBQVc7WUFDWCxxQ0FBb0I7WUFDcEIsMkJBQWU7WUFDZix5Q0FBc0I7WUFDdEIsb0NBQXdCO1lBQ3hCLDBCQUFtQjtZQUNuQiw0QkFBb0I7WUFDcEIsOEJBQXFCO1lBQ3JCLGdDQUFzQjtZQUN0QixvQ0FBd0I7WUFDeEIsa0NBQXVCO1NBQzFCO1FBQ0QsU0FBUyxFQUFDLENBQUMsc0JBQWEsQ0FBQztLQUM1QixDQUFDOztrQkFHRDtBQUZZLHlCQUFBLGNBQWMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TmdNb2R1bGV9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7Um91dGVyTW9kdWxlfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IE5nMkJvb3RzdHJhcE1vZHVsZSB9IGZyb20gJ25nMi1ib290c3RyYXAvbmcyLWJvb3RzdHJhcCc7XHJcblxyXG5cclxuaW1wb3J0IHtOYXZiYXJDb250cm9sfSBmcm9tIFwiLi9uYXZiYXIvbmF2YmFyXCI7XHJcbmltcG9ydCB7RmVhdHVyZXNDb250cm9sfSBmcm9tIFwiLi9mZWF0dXJlcy9mZWF0dXJlc1wiO1xyXG5pbXBvcnQge1NlbGVjdG9yQ29udHJvbH0gZnJvbSBcIi4vc2VsZWN0b3Ivc2VsZWN0b3JcIjtcclxuaW1wb3J0IHtBY3Rpb25zQ29tcGFuaWVzQ29udHJvbH0gZnJvbSBcIi4vYWN0aW9ucy9jb21wYW5pZXMvY29tcGFuaWVzXCI7XHJcbmltcG9ydCB7U2VhcmNoQnVzaW5lc3NtZW5QZXJzb25Db250cm9sfSBmcm9tIFwiLi4vZmVhdHVyZXMvYnVzc2luZXNzbWVuL2NvbnRyb2xzL3NlYXJjaC9wZXJzb24vcGVyc29uXCI7XHJcbmltcG9ydCB7U2VhcmNoQnVzaW5lc3NtZW5TaW1wbGVDb250cm9sfSBmcm9tIFwiLi4vZmVhdHVyZXMvYnVzc2luZXNzbWVuL2NvbnRyb2xzL3NlYXJjaC9zaW1wbGUvc2ltcGxlXCI7XHJcbmltcG9ydCB7U2VhcmNoQ29tcGFuaWVzRmluYW5jZUNvbnRyb2x9IGZyb20gXCIuL3NlYXJjaC9jb21wYW5pZXMvZmluYW5jZS9maW5hbmNlXCI7XHJcbmltcG9ydCB7U2VhcmNoQ29tcGFuaWVzRm91bmRlcnNDb250cm9sfSBmcm9tIFwiLi9zZWFyY2gvY29tcGFuaWVzL2ZvdW5kZXJzL2ZvdW5kZXJzXCI7XHJcbmltcG9ydCB7U2VhcmNoQ29tcGFuaWVzSWRlbnRpZmljYXRpb25Db250cm9sfSBmcm9tIFwiLi9zZWFyY2gvY29tcGFuaWVzL2lkZW50aWZpY2F0aW9uL2lkZW50aWZpY2F0aW9uXCI7XHJcbmltcG9ydCB7U2VhcmNoQ29tcGFuaWVzU2ltcGxlQ29udHJvbH0gZnJvbSBcIi4vc2VhcmNoL2NvbXBhbmllcy9zaW1wbGUvc2ltcGxlXCI7XHJcbmltcG9ydCB7U2VhcmNoSWNocElkZW50aWZpY2F0aW9uQ29udHJvbH0gZnJvbSBcIi4vc2VhcmNoL2ljaHAvaWRlbnRpZmljYXRpb24vaWRlbnRpZmljYXRpb25cIjtcclxuaW1wb3J0IHtTZWFyY2hJY2hwU2ltcGxlQ29udHJvbH0gZnJvbSBcIi4vc2VhcmNoL2ljaHAvc2ltcGxlL3NpbXBsZVwiO1xyXG5pbXBvcnQge1RhYnNDb250cm9sfSBmcm9tIFwiLi90YWJzL3RhYnNcIjtcclxuaW1wb3J0IHtDb21wYW5pZXNMaXN0Q29udHJvbH0gZnJvbSBcIi4vdGFibGVzL2NvbXBhbmllcy1saXN0L2NvbXBhbmllcy1saXN0XCI7XHJcbmltcG9ydCB7SWNocExpc3RDb250cm9sfSBmcm9tIFwiLi90YWJsZXMvaWNocC1saXN0L2ljaHAtbGlzdFwiO1xyXG5pbXBvcnQge0J1c2luZXNzbWVuTGlzdENvbnRyb2x9IGZyb20gXCIuL3RhYmxlcy9idXNpbmVzc21lbi1saXN0L2J1c2luZXNzbWVuLWxpc3RcIjtcclxuaW1wb3J0IHtPcGVyYXRvcnNEcm9wd293bkNvbnRyb2x9IGZyb20gXCIuL2Ryb3Bkb3duL3N0YW5kYXJ0L29wZXJhdG9yc1wiO1xyXG5pbXBvcnQge0NvbW1vbk1vZHVsZX0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xyXG5pbXBvcnQge05hdmJhclNlcnZpY2V9IGZyb20gXCIuLi9wcm92aWRlcnMvbmF2YmFyXCI7XHJcbmltcG9ydCB7SGVhZGNvdW50RHJvcHdvd25Db250cm9sfSBmcm9tIFwiLi9kcm9wZG93bi9zdGFuZGFydC9oZWFkY291bnRcIjtcclxuaW1wb3J0IHtPa2ZzRHJvcHdvd25Db250cm9sfSBmcm9tIFwiLi9kcm9wZG93bi90ZW1wbGF0ZWQvb2tmc1wiO1xyXG5pbXBvcnQge09rb3BmRHJvcHdvd25Db250cm9sfSBmcm9tIFwiLi9kcm9wZG93bi90ZW1wbGF0ZWQvb2tvcGZcIjtcclxuaW1wb3J0IHtBc3NldHNEcm9wd293bkNvbnRyb2x9IGZyb20gXCIuL2Ryb3Bkb3duL3N0YW5kYXJ0L2Fzc2V0c1wiO1xyXG5pbXBvcnQge1BlcmlvZHNEcm9wd293bkNvbnRyb2x9IGZyb20gXCIuL2Ryb3Bkb3duL3N0YW5kYXJ0L3BlcmlvZHNcIjtcclxuaW1wb3J0IHtDdXJyZW5jeURyb3B3b3duQ29udHJvbH0gZnJvbSBcIi4vZHJvcGRvd24vc3RhbmRhcnQvY3VycmVuY3lcIjtcclxuaW1wb3J0IHtTZWFyY2hCdXNpbmVzc21lbklkZW50aWZpY2F0aW9uQ29udHJvbH0gZnJvbSBcIi4uL2ZlYXR1cmVzL2J1c3NpbmVzc21lbi9jb250cm9scy9zZWFyY2gvaWRlbnRpZmljYXRpb24vaWRlbnRpZmljYXRpb25cIjtcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgICBpbXBvcnRzOiBbUm91dGVyTW9kdWxlLE5nMkJvb3RzdHJhcE1vZHVsZSxDb21tb25Nb2R1bGVdLFxyXG4gICAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICAgICAgTmF2YmFyQ29udHJvbCxcclxuICAgICAgICBGZWF0dXJlc0NvbnRyb2wsXHJcbiAgICAgICAgU2VhcmNoQnVzaW5lc3NtZW5QZXJzb25Db250cm9sLFxyXG4gICAgICAgIFNlYXJjaEJ1c2luZXNzbWVuU2ltcGxlQ29udHJvbCxcclxuICAgICAgICBTZWFyY2hCdXNpbmVzc21lbklkZW50aWZpY2F0aW9uQ29udHJvbCxcclxuICAgICAgICBTZWFyY2hDb21wYW5pZXNGaW5hbmNlQ29udHJvbCxcclxuICAgICAgICBTZWFyY2hDb21wYW5pZXNGb3VuZGVyc0NvbnRyb2wsXHJcbiAgICAgICAgU2VhcmNoQ29tcGFuaWVzSWRlbnRpZmljYXRpb25Db250cm9sLFxyXG4gICAgICAgIFNlYXJjaENvbXBhbmllc1NpbXBsZUNvbnRyb2wsXHJcbiAgICAgICAgU2VhcmNoSWNocElkZW50aWZpY2F0aW9uQ29udHJvbCxcclxuICAgICAgICBTZWFyY2hJY2hwU2ltcGxlQ29udHJvbCxcclxuICAgICAgICBTZWxlY3RvckNvbnRyb2wsXHJcbiAgICAgICAgQWN0aW9uc0NvbXBhbmllc0NvbnRyb2wsXHJcbiAgICAgICAgVGFic0NvbnRyb2wsXHJcbiAgICAgICAgQ29tcGFuaWVzTGlzdENvbnRyb2wsXHJcbiAgICAgICAgSWNocExpc3RDb250cm9sLFxyXG4gICAgICAgIEJ1c2luZXNzbWVuTGlzdENvbnRyb2wsXHJcbiAgICAgICAgSGVhZGNvdW50RHJvcHdvd25Db250cm9sLFxyXG4gICAgICAgIE9rZnNEcm9wd293bkNvbnRyb2wsXHJcbiAgICAgICAgT2tvcGZEcm9wd293bkNvbnRyb2wsXHJcbiAgICAgICAgQXNzZXRzRHJvcHdvd25Db250cm9sLFxyXG4gICAgICAgIFBlcmlvZHNEcm9wd293bkNvbnRyb2wsXHJcbiAgICAgICAgT3BlcmF0b3JzRHJvcHdvd25Db250cm9sLFxyXG4gICAgICAgIEN1cnJlbmN5RHJvcHdvd25Db250cm9sXHJcbiAgICBdLFxyXG4gICAgZXhwb3J0czogW1xyXG5cclxuICAgICAgICBOYXZiYXJDb250cm9sLFxyXG4gICAgICAgIEZlYXR1cmVzQ29udHJvbCxcclxuICAgICAgICBTZWFyY2hCdXNpbmVzc21lblBlcnNvbkNvbnRyb2wsXHJcbiAgICAgICAgU2VhcmNoQnVzaW5lc3NtZW5TaW1wbGVDb250cm9sLFxyXG4gICAgICAgIFNlYXJjaEJ1c2luZXNzbWVuSWRlbnRpZmljYXRpb25Db250cm9sLFxyXG4gICAgICAgIFNlYXJjaENvbXBhbmllc0ZpbmFuY2VDb250cm9sLFxyXG4gICAgICAgIFNlYXJjaENvbXBhbmllc0ZvdW5kZXJzQ29udHJvbCxcclxuICAgICAgICBTZWFyY2hDb21wYW5pZXNJZGVudGlmaWNhdGlvbkNvbnRyb2wsXHJcbiAgICAgICAgU2VhcmNoQ29tcGFuaWVzU2ltcGxlQ29udHJvbCxcclxuICAgICAgICBTZWFyY2hJY2hwSWRlbnRpZmljYXRpb25Db250cm9sLFxyXG4gICAgICAgIFNlYXJjaEljaHBTaW1wbGVDb250cm9sLFxyXG4gICAgICAgIFNlbGVjdG9yQ29udHJvbCxcclxuICAgICAgICBBY3Rpb25zQ29tcGFuaWVzQ29udHJvbCxcclxuICAgICAgICBUYWJzQ29udHJvbCxcclxuICAgICAgICBDb21wYW5pZXNMaXN0Q29udHJvbCxcclxuICAgICAgICBJY2hwTGlzdENvbnRyb2wsXHJcbiAgICAgICAgQnVzaW5lc3NtZW5MaXN0Q29udHJvbCxcclxuICAgICAgICBIZWFkY291bnREcm9wd293bkNvbnRyb2wsXHJcbiAgICAgICAgT2tmc0Ryb3B3b3duQ29udHJvbCxcclxuICAgICAgICBPa29wZkRyb3B3b3duQ29udHJvbCxcclxuICAgICAgICBBc3NldHNEcm9wd293bkNvbnRyb2wsXHJcbiAgICAgICAgUGVyaW9kc0Ryb3B3b3duQ29udHJvbCxcclxuICAgICAgICBPcGVyYXRvcnNEcm9wd293bkNvbnRyb2wsXHJcbiAgICAgICAgQ3VycmVuY3lEcm9wd293bkNvbnRyb2xcclxuICAgIF0sXHJcbiAgICBwcm92aWRlcnM6W05hdmJhclNlcnZpY2VdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDb250cm9sc01vZHVsZSB7XHJcblxyXG59Il19