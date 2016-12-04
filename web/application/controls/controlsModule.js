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
var actions_1 = require("./actions/actions");
var person_1 = require("./search/businessmen/person/person");
var simple_1 = require("./search/businessmen/simple/simple");
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
var operators_1 = require("./dropdown/operators/operators");
var common_1 = require("@angular/common");
var navbar_2 = require("../providers/navbar");
var headcount_1 = require("./dropdown/headcount/headcount");
var okfs_1 = require("./dropdown/okfs/okfs");
var okopf_1 = require("./dropdown/okopf/okopf");
var ControlsModule = (function () {
    function ControlsModule() {
    }
    return ControlsModule;
}());
ControlsModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule, ng2_bootstrap_1.Ng2BootstrapModule, common_1.CommonModule],
        declarations: [
            operators_1.OperatorsDropwownControl,
            navbar_1.NavbarControl,
            features_1.FeaturesControl,
            person_1.SearchBusinessmenPersonControl,
            simple_1.SearchBusinessmenSimpleControl,
            finance_1.SearchCompaniesFinanceControl,
            founders_1.SearchCompaniesFoundersControl,
            identification_1.SearchCompaniesIdentificationControl,
            simple_2.SearchCompaniesSimpleControl,
            identification_2.SearchIchpIdentificationControl,
            simple_3.SearchIchpSimpleControl,
            selector_1.SelectorControl,
            actions_1.ActionsControl,
            //PagerControl,
            tabs_1.TabsControl,
            companies_list_1.CompaniesListControl,
            ichp_list_1.IchpListControl,
            businessmen_list_1.BusinessmenListControl,
            headcount_1.HeadcountDropwownControl,
            okfs_1.OkfsDropwownControl,
            okopf_1.OkopfDropwownControl
        ],
        exports: [
            operators_1.OperatorsDropwownControl,
            navbar_1.NavbarControl,
            features_1.FeaturesControl,
            person_1.SearchBusinessmenPersonControl,
            simple_1.SearchBusinessmenSimpleControl,
            finance_1.SearchCompaniesFinanceControl,
            founders_1.SearchCompaniesFoundersControl,
            identification_1.SearchCompaniesIdentificationControl,
            simple_2.SearchCompaniesSimpleControl,
            identification_2.SearchIchpIdentificationControl,
            simple_3.SearchIchpSimpleControl,
            selector_1.SelectorControl,
            actions_1.ActionsControl,
            //PagerControl,
            tabs_1.TabsControl,
            companies_list_1.CompaniesListControl,
            ichp_list_1.IchpListControl,
            businessmen_list_1.BusinessmenListControl,
            headcount_1.HeadcountDropwownControl,
            okfs_1.OkfsDropwownControl,
            okopf_1.OkopfDropwownControl
        ],
        providers: [navbar_2.NavbarService]
    }),
    __metadata("design:paramtypes", [])
], ControlsModule);
exports.ControlsModule = ControlsModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJvbHNNb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjb250cm9sc01vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQ0Esc0NBQXVDO0FBQ3ZDLDBDQUE2QztBQUM3Qyw2REFBaUU7QUFHakUsMENBQThDO0FBQzlDLGdEQUFvRDtBQUNwRCxnREFBb0Q7QUFDcEQsNkNBQWlEO0FBQ2pELDZEQUFrRjtBQUNsRiw2REFBa0Y7QUFDbEYsOERBQWlGO0FBQ2pGLGlFQUFvRjtBQUNwRixtRkFBc0c7QUFDdEcsMkRBQThFO0FBQzlFLDhFQUE0RjtBQUM1RixzREFBb0U7QUFDcEUsb0NBQXdDO0FBQ3hDLHlFQUE0RTtBQUM1RSwwREFBNkQ7QUFDN0QsK0VBQWtGO0FBQ2xGLDREQUF3RTtBQUN4RSwwQ0FBNkM7QUFDN0MsOENBQWtEO0FBQ2xELDREQUF3RTtBQUN4RSw2Q0FBeUQ7QUFDekQsZ0RBQTREO0FBb0Q1RDtJQUFBO0lBRUEsQ0FBQztJQUFELHFCQUFDO0FBQUQsQ0FBQyxBQUZELElBRUM7QUFGRDtJQWxEQyxlQUFRLENBQUM7UUFDTixPQUFPLEVBQUUsQ0FBQyxxQkFBWSxFQUFDLGtDQUFrQixFQUFDLHFCQUFZLENBQUM7UUFDdkQsWUFBWSxFQUFFO1lBQ1Ysb0NBQXdCO1lBQ3hCLHNCQUFhO1lBQ2IsMEJBQWU7WUFDZix1Q0FBOEI7WUFDOUIsdUNBQThCO1lBQzlCLHVDQUE2QjtZQUM3Qix5Q0FBOEI7WUFDOUIscURBQW9DO1lBQ3BDLHFDQUE0QjtZQUM1QixnREFBK0I7WUFDL0IsZ0NBQXVCO1lBQ3ZCLDBCQUFlO1lBQ2Ysd0JBQWM7WUFDZCxlQUFlO1lBQ2Ysa0JBQVc7WUFDWCxxQ0FBb0I7WUFDcEIsMkJBQWU7WUFDZix5Q0FBc0I7WUFDdEIsb0NBQXdCO1lBQ3hCLDBCQUFtQjtZQUNuQiw0QkFBb0I7U0FDdkI7UUFDRCxPQUFPLEVBQUU7WUFDTCxvQ0FBd0I7WUFDeEIsc0JBQWE7WUFDYiwwQkFBZTtZQUNmLHVDQUE4QjtZQUM5Qix1Q0FBOEI7WUFDOUIsdUNBQTZCO1lBQzdCLHlDQUE4QjtZQUM5QixxREFBb0M7WUFDcEMscUNBQTRCO1lBQzVCLGdEQUErQjtZQUMvQixnQ0FBdUI7WUFDdkIsMEJBQWU7WUFDZix3QkFBYztZQUNkLGVBQWU7WUFDZixrQkFBVztZQUNYLHFDQUFvQjtZQUNwQiwyQkFBZTtZQUNmLHlDQUFzQjtZQUN0QixvQ0FBd0I7WUFDeEIsMEJBQW1CO1lBQ25CLDRCQUFvQjtTQUN2QjtRQUNELFNBQVMsRUFBQyxDQUFDLHNCQUFhLENBQUM7S0FDNUIsQ0FBQzs7a0JBR0Q7QUFGWSx5QkFBQSxjQUFjLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHtOZ01vZHVsZX0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHtSb3V0ZXJNb2R1bGV9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgTmcyQm9vdHN0cmFwTW9kdWxlIH0gZnJvbSAnbmcyLWJvb3RzdHJhcC9uZzItYm9vdHN0cmFwJztcclxuXHJcblxyXG5pbXBvcnQge05hdmJhckNvbnRyb2x9IGZyb20gXCIuL25hdmJhci9uYXZiYXJcIjtcclxuaW1wb3J0IHtGZWF0dXJlc0NvbnRyb2x9IGZyb20gXCIuL2ZlYXR1cmVzL2ZlYXR1cmVzXCI7XHJcbmltcG9ydCB7U2VsZWN0b3JDb250cm9sfSBmcm9tIFwiLi9zZWxlY3Rvci9zZWxlY3RvclwiO1xyXG5pbXBvcnQge0FjdGlvbnNDb250cm9sfSBmcm9tIFwiLi9hY3Rpb25zL2FjdGlvbnNcIjtcclxuaW1wb3J0IHtTZWFyY2hCdXNpbmVzc21lblBlcnNvbkNvbnRyb2x9IGZyb20gXCIuL3NlYXJjaC9idXNpbmVzc21lbi9wZXJzb24vcGVyc29uXCI7XHJcbmltcG9ydCB7U2VhcmNoQnVzaW5lc3NtZW5TaW1wbGVDb250cm9sfSBmcm9tIFwiLi9zZWFyY2gvYnVzaW5lc3NtZW4vc2ltcGxlL3NpbXBsZVwiO1xyXG5pbXBvcnQge1NlYXJjaENvbXBhbmllc0ZpbmFuY2VDb250cm9sfSBmcm9tIFwiLi9zZWFyY2gvY29tcGFuaWVzL2ZpbmFuY2UvZmluYW5jZVwiO1xyXG5pbXBvcnQge1NlYXJjaENvbXBhbmllc0ZvdW5kZXJzQ29udHJvbH0gZnJvbSBcIi4vc2VhcmNoL2NvbXBhbmllcy9mb3VuZGVycy9mb3VuZGVyc1wiO1xyXG5pbXBvcnQge1NlYXJjaENvbXBhbmllc0lkZW50aWZpY2F0aW9uQ29udHJvbH0gZnJvbSBcIi4vc2VhcmNoL2NvbXBhbmllcy9pZGVudGlmaWNhdGlvbi9pZGVudGlmaWNhdGlvblwiO1xyXG5pbXBvcnQge1NlYXJjaENvbXBhbmllc1NpbXBsZUNvbnRyb2x9IGZyb20gXCIuL3NlYXJjaC9jb21wYW5pZXMvc2ltcGxlL3NpbXBsZVwiO1xyXG5pbXBvcnQge1NlYXJjaEljaHBJZGVudGlmaWNhdGlvbkNvbnRyb2x9IGZyb20gXCIuL3NlYXJjaC9pY2hwL2lkZW50aWZpY2F0aW9uL2lkZW50aWZpY2F0aW9uXCI7XHJcbmltcG9ydCB7U2VhcmNoSWNocFNpbXBsZUNvbnRyb2x9IGZyb20gXCIuL3NlYXJjaC9pY2hwL3NpbXBsZS9zaW1wbGVcIjtcclxuaW1wb3J0IHtUYWJzQ29udHJvbH0gZnJvbSBcIi4vdGFicy90YWJzXCI7XHJcbmltcG9ydCB7Q29tcGFuaWVzTGlzdENvbnRyb2x9IGZyb20gXCIuL3RhYmxlcy9jb21wYW5pZXMtbGlzdC9jb21wYW5pZXMtbGlzdFwiO1xyXG5pbXBvcnQge0ljaHBMaXN0Q29udHJvbH0gZnJvbSBcIi4vdGFibGVzL2ljaHAtbGlzdC9pY2hwLWxpc3RcIjtcclxuaW1wb3J0IHtCdXNpbmVzc21lbkxpc3RDb250cm9sfSBmcm9tIFwiLi90YWJsZXMvYnVzaW5lc3NtZW4tbGlzdC9idXNpbmVzc21lbi1saXN0XCI7XHJcbmltcG9ydCB7T3BlcmF0b3JzRHJvcHdvd25Db250cm9sfSBmcm9tIFwiLi9kcm9wZG93bi9vcGVyYXRvcnMvb3BlcmF0b3JzXCI7XHJcbmltcG9ydCB7Q29tbW9uTW9kdWxlfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XHJcbmltcG9ydCB7TmF2YmFyU2VydmljZX0gZnJvbSBcIi4uL3Byb3ZpZGVycy9uYXZiYXJcIjtcclxuaW1wb3J0IHtIZWFkY291bnREcm9wd293bkNvbnRyb2x9IGZyb20gXCIuL2Ryb3Bkb3duL2hlYWRjb3VudC9oZWFkY291bnRcIjtcclxuaW1wb3J0IHtPa2ZzRHJvcHdvd25Db250cm9sfSBmcm9tIFwiLi9kcm9wZG93bi9va2ZzL29rZnNcIjtcclxuaW1wb3J0IHtPa29wZkRyb3B3b3duQ29udHJvbH0gZnJvbSBcIi4vZHJvcGRvd24vb2tvcGYvb2tvcGZcIjtcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgICBpbXBvcnRzOiBbUm91dGVyTW9kdWxlLE5nMkJvb3RzdHJhcE1vZHVsZSxDb21tb25Nb2R1bGVdLFxyXG4gICAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICAgICAgT3BlcmF0b3JzRHJvcHdvd25Db250cm9sLFxyXG4gICAgICAgIE5hdmJhckNvbnRyb2wsXHJcbiAgICAgICAgRmVhdHVyZXNDb250cm9sLFxyXG4gICAgICAgIFNlYXJjaEJ1c2luZXNzbWVuUGVyc29uQ29udHJvbCxcclxuICAgICAgICBTZWFyY2hCdXNpbmVzc21lblNpbXBsZUNvbnRyb2wsXHJcbiAgICAgICAgU2VhcmNoQ29tcGFuaWVzRmluYW5jZUNvbnRyb2wsXHJcbiAgICAgICAgU2VhcmNoQ29tcGFuaWVzRm91bmRlcnNDb250cm9sLFxyXG4gICAgICAgIFNlYXJjaENvbXBhbmllc0lkZW50aWZpY2F0aW9uQ29udHJvbCxcclxuICAgICAgICBTZWFyY2hDb21wYW5pZXNTaW1wbGVDb250cm9sLFxyXG4gICAgICAgIFNlYXJjaEljaHBJZGVudGlmaWNhdGlvbkNvbnRyb2wsXHJcbiAgICAgICAgU2VhcmNoSWNocFNpbXBsZUNvbnRyb2wsXHJcbiAgICAgICAgU2VsZWN0b3JDb250cm9sLFxyXG4gICAgICAgIEFjdGlvbnNDb250cm9sLFxyXG4gICAgICAgIC8vUGFnZXJDb250cm9sLFxyXG4gICAgICAgIFRhYnNDb250cm9sLFxyXG4gICAgICAgIENvbXBhbmllc0xpc3RDb250cm9sLFxyXG4gICAgICAgIEljaHBMaXN0Q29udHJvbCxcclxuICAgICAgICBCdXNpbmVzc21lbkxpc3RDb250cm9sLFxyXG4gICAgICAgIEhlYWRjb3VudERyb3B3b3duQ29udHJvbCxcclxuICAgICAgICBPa2ZzRHJvcHdvd25Db250cm9sLFxyXG4gICAgICAgIE9rb3BmRHJvcHdvd25Db250cm9sXHJcbiAgICBdLFxyXG4gICAgZXhwb3J0czogW1xyXG4gICAgICAgIE9wZXJhdG9yc0Ryb3B3b3duQ29udHJvbCxcclxuICAgICAgICBOYXZiYXJDb250cm9sLFxyXG4gICAgICAgIEZlYXR1cmVzQ29udHJvbCxcclxuICAgICAgICBTZWFyY2hCdXNpbmVzc21lblBlcnNvbkNvbnRyb2wsXHJcbiAgICAgICAgU2VhcmNoQnVzaW5lc3NtZW5TaW1wbGVDb250cm9sLFxyXG4gICAgICAgIFNlYXJjaENvbXBhbmllc0ZpbmFuY2VDb250cm9sLFxyXG4gICAgICAgIFNlYXJjaENvbXBhbmllc0ZvdW5kZXJzQ29udHJvbCxcclxuICAgICAgICBTZWFyY2hDb21wYW5pZXNJZGVudGlmaWNhdGlvbkNvbnRyb2wsXHJcbiAgICAgICAgU2VhcmNoQ29tcGFuaWVzU2ltcGxlQ29udHJvbCxcclxuICAgICAgICBTZWFyY2hJY2hwSWRlbnRpZmljYXRpb25Db250cm9sLFxyXG4gICAgICAgIFNlYXJjaEljaHBTaW1wbGVDb250cm9sLFxyXG4gICAgICAgIFNlbGVjdG9yQ29udHJvbCxcclxuICAgICAgICBBY3Rpb25zQ29udHJvbCxcclxuICAgICAgICAvL1BhZ2VyQ29udHJvbCxcclxuICAgICAgICBUYWJzQ29udHJvbCxcclxuICAgICAgICBDb21wYW5pZXNMaXN0Q29udHJvbCxcclxuICAgICAgICBJY2hwTGlzdENvbnRyb2wsXHJcbiAgICAgICAgQnVzaW5lc3NtZW5MaXN0Q29udHJvbCxcclxuICAgICAgICBIZWFkY291bnREcm9wd293bkNvbnRyb2wsXHJcbiAgICAgICAgT2tmc0Ryb3B3b3duQ29udHJvbCxcclxuICAgICAgICBPa29wZkRyb3B3b3duQ29udHJvbFxyXG4gICAgXSxcclxuICAgIHByb3ZpZGVyczpbTmF2YmFyU2VydmljZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIENvbnRyb2xzTW9kdWxlIHtcclxuXHJcbn0iXX0=