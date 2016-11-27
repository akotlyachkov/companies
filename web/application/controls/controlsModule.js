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
var person_1 = require("./search/buinessmen/person/person");
var simple_1 = require("./search/buinessmen/simple/simple");
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
var operators_1 = require("./dropdown/operators");
var common_1 = require("@angular/common");
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
            businessmen_list_1.BusinessmenListControl
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
            businessmen_list_1.BusinessmenListControl
        ]
    }),
    __metadata("design:paramtypes", [])
], ControlsModule);
exports.ControlsModule = ControlsModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJvbHNNb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjb250cm9sc01vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQ0Esc0NBQXVDO0FBQ3ZDLDBDQUE2QztBQUM3Qyw2REFBaUU7QUFHakUsMENBQThDO0FBQzlDLGdEQUFvRDtBQUNwRCxnREFBb0Q7QUFDcEQsNkNBQWlEO0FBQ2pELDREQUFpRjtBQUNqRiw0REFBaUY7QUFDakYsOERBQWlGO0FBQ2pGLGlFQUFvRjtBQUNwRixtRkFBc0c7QUFDdEcsMkRBQThFO0FBQzlFLDhFQUE0RjtBQUM1RixzREFBb0U7QUFDcEUsb0NBQXdDO0FBQ3hDLHlFQUE0RTtBQUM1RSwwREFBNkQ7QUFDN0QsK0VBQWtGO0FBQ2xGLGtEQUE4RDtBQUM5RCwwQ0FBNkM7QUE4QzdDO0lBQUE7SUFFQSxDQUFDO0lBQUQscUJBQUM7QUFBRCxDQUFDLEFBRkQsSUFFQztBQUZEO0lBNUNDLGVBQVEsQ0FBQztRQUNOLE9BQU8sRUFBRSxDQUFDLHFCQUFZLEVBQUMsa0NBQWtCLEVBQUMscUJBQVksQ0FBQztRQUN2RCxZQUFZLEVBQUU7WUFDVixvQ0FBd0I7WUFDeEIsc0JBQWE7WUFDYiwwQkFBZTtZQUNmLHVDQUE4QjtZQUM5Qix1Q0FBOEI7WUFDOUIsdUNBQTZCO1lBQzdCLHlDQUE4QjtZQUM5QixxREFBb0M7WUFDcEMscUNBQTRCO1lBQzVCLGdEQUErQjtZQUMvQixnQ0FBdUI7WUFDdkIsMEJBQWU7WUFDZix3QkFBYztZQUNkLGVBQWU7WUFDZixrQkFBVztZQUNYLHFDQUFvQjtZQUNwQiwyQkFBZTtZQUNmLHlDQUFzQjtTQUV6QjtRQUNELE9BQU8sRUFBRTtZQUNMLG9DQUF3QjtZQUN4QixzQkFBYTtZQUNiLDBCQUFlO1lBQ2YsdUNBQThCO1lBQzlCLHVDQUE4QjtZQUM5Qix1Q0FBNkI7WUFDN0IseUNBQThCO1lBQzlCLHFEQUFvQztZQUNwQyxxQ0FBNEI7WUFDNUIsZ0RBQStCO1lBQy9CLGdDQUF1QjtZQUN2QiwwQkFBZTtZQUNmLHdCQUFjO1lBQ2QsZUFBZTtZQUNmLGtCQUFXO1lBQ1gscUNBQW9CO1lBQ3BCLDJCQUFlO1lBQ2YseUNBQXNCO1NBQ3pCO0tBQ0osQ0FBQzs7a0JBR0Q7QUFGWSx5QkFBQSxjQUFjLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHtOZ01vZHVsZX0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHtSb3V0ZXJNb2R1bGV9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgTmcyQm9vdHN0cmFwTW9kdWxlIH0gZnJvbSAnbmcyLWJvb3RzdHJhcC9uZzItYm9vdHN0cmFwJztcclxuXHJcblxyXG5pbXBvcnQge05hdmJhckNvbnRyb2x9IGZyb20gXCIuL25hdmJhci9uYXZiYXJcIjtcclxuaW1wb3J0IHtGZWF0dXJlc0NvbnRyb2x9IGZyb20gXCIuL2ZlYXR1cmVzL2ZlYXR1cmVzXCI7XHJcbmltcG9ydCB7U2VsZWN0b3JDb250cm9sfSBmcm9tIFwiLi9zZWxlY3Rvci9zZWxlY3RvclwiO1xyXG5pbXBvcnQge0FjdGlvbnNDb250cm9sfSBmcm9tIFwiLi9hY3Rpb25zL2FjdGlvbnNcIjtcclxuaW1wb3J0IHtTZWFyY2hCdXNpbmVzc21lblBlcnNvbkNvbnRyb2x9IGZyb20gXCIuL3NlYXJjaC9idWluZXNzbWVuL3BlcnNvbi9wZXJzb25cIjtcclxuaW1wb3J0IHtTZWFyY2hCdXNpbmVzc21lblNpbXBsZUNvbnRyb2x9IGZyb20gXCIuL3NlYXJjaC9idWluZXNzbWVuL3NpbXBsZS9zaW1wbGVcIjtcclxuaW1wb3J0IHtTZWFyY2hDb21wYW5pZXNGaW5hbmNlQ29udHJvbH0gZnJvbSBcIi4vc2VhcmNoL2NvbXBhbmllcy9maW5hbmNlL2ZpbmFuY2VcIjtcclxuaW1wb3J0IHtTZWFyY2hDb21wYW5pZXNGb3VuZGVyc0NvbnRyb2x9IGZyb20gXCIuL3NlYXJjaC9jb21wYW5pZXMvZm91bmRlcnMvZm91bmRlcnNcIjtcclxuaW1wb3J0IHtTZWFyY2hDb21wYW5pZXNJZGVudGlmaWNhdGlvbkNvbnRyb2x9IGZyb20gXCIuL3NlYXJjaC9jb21wYW5pZXMvaWRlbnRpZmljYXRpb24vaWRlbnRpZmljYXRpb25cIjtcclxuaW1wb3J0IHtTZWFyY2hDb21wYW5pZXNTaW1wbGVDb250cm9sfSBmcm9tIFwiLi9zZWFyY2gvY29tcGFuaWVzL3NpbXBsZS9zaW1wbGVcIjtcclxuaW1wb3J0IHtTZWFyY2hJY2hwSWRlbnRpZmljYXRpb25Db250cm9sfSBmcm9tIFwiLi9zZWFyY2gvaWNocC9pZGVudGlmaWNhdGlvbi9pZGVudGlmaWNhdGlvblwiO1xyXG5pbXBvcnQge1NlYXJjaEljaHBTaW1wbGVDb250cm9sfSBmcm9tIFwiLi9zZWFyY2gvaWNocC9zaW1wbGUvc2ltcGxlXCI7XHJcbmltcG9ydCB7VGFic0NvbnRyb2x9IGZyb20gXCIuL3RhYnMvdGFic1wiO1xyXG5pbXBvcnQge0NvbXBhbmllc0xpc3RDb250cm9sfSBmcm9tIFwiLi90YWJsZXMvY29tcGFuaWVzLWxpc3QvY29tcGFuaWVzLWxpc3RcIjtcclxuaW1wb3J0IHtJY2hwTGlzdENvbnRyb2x9IGZyb20gXCIuL3RhYmxlcy9pY2hwLWxpc3QvaWNocC1saXN0XCI7XHJcbmltcG9ydCB7QnVzaW5lc3NtZW5MaXN0Q29udHJvbH0gZnJvbSBcIi4vdGFibGVzL2J1c2luZXNzbWVuLWxpc3QvYnVzaW5lc3NtZW4tbGlzdFwiO1xyXG5pbXBvcnQge09wZXJhdG9yc0Ryb3B3b3duQ29udHJvbH0gZnJvbSBcIi4vZHJvcGRvd24vb3BlcmF0b3JzXCI7XHJcbmltcG9ydCB7Q29tbW9uTW9kdWxlfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gICAgaW1wb3J0czogW1JvdXRlck1vZHVsZSxOZzJCb290c3RyYXBNb2R1bGUsQ29tbW9uTW9kdWxlXSxcclxuICAgIGRlY2xhcmF0aW9uczogW1xyXG4gICAgICAgIE9wZXJhdG9yc0Ryb3B3b3duQ29udHJvbCxcclxuICAgICAgICBOYXZiYXJDb250cm9sLFxyXG4gICAgICAgIEZlYXR1cmVzQ29udHJvbCxcclxuICAgICAgICBTZWFyY2hCdXNpbmVzc21lblBlcnNvbkNvbnRyb2wsXHJcbiAgICAgICAgU2VhcmNoQnVzaW5lc3NtZW5TaW1wbGVDb250cm9sLFxyXG4gICAgICAgIFNlYXJjaENvbXBhbmllc0ZpbmFuY2VDb250cm9sLFxyXG4gICAgICAgIFNlYXJjaENvbXBhbmllc0ZvdW5kZXJzQ29udHJvbCxcclxuICAgICAgICBTZWFyY2hDb21wYW5pZXNJZGVudGlmaWNhdGlvbkNvbnRyb2wsXHJcbiAgICAgICAgU2VhcmNoQ29tcGFuaWVzU2ltcGxlQ29udHJvbCxcclxuICAgICAgICBTZWFyY2hJY2hwSWRlbnRpZmljYXRpb25Db250cm9sLFxyXG4gICAgICAgIFNlYXJjaEljaHBTaW1wbGVDb250cm9sLFxyXG4gICAgICAgIFNlbGVjdG9yQ29udHJvbCxcclxuICAgICAgICBBY3Rpb25zQ29udHJvbCxcclxuICAgICAgICAvL1BhZ2VyQ29udHJvbCxcclxuICAgICAgICBUYWJzQ29udHJvbCxcclxuICAgICAgICBDb21wYW5pZXNMaXN0Q29udHJvbCxcclxuICAgICAgICBJY2hwTGlzdENvbnRyb2wsXHJcbiAgICAgICAgQnVzaW5lc3NtZW5MaXN0Q29udHJvbFxyXG5cclxuICAgIF0sXHJcbiAgICBleHBvcnRzOiBbXHJcbiAgICAgICAgT3BlcmF0b3JzRHJvcHdvd25Db250cm9sLFxyXG4gICAgICAgIE5hdmJhckNvbnRyb2wsXHJcbiAgICAgICAgRmVhdHVyZXNDb250cm9sLFxyXG4gICAgICAgIFNlYXJjaEJ1c2luZXNzbWVuUGVyc29uQ29udHJvbCxcclxuICAgICAgICBTZWFyY2hCdXNpbmVzc21lblNpbXBsZUNvbnRyb2wsXHJcbiAgICAgICAgU2VhcmNoQ29tcGFuaWVzRmluYW5jZUNvbnRyb2wsXHJcbiAgICAgICAgU2VhcmNoQ29tcGFuaWVzRm91bmRlcnNDb250cm9sLFxyXG4gICAgICAgIFNlYXJjaENvbXBhbmllc0lkZW50aWZpY2F0aW9uQ29udHJvbCxcclxuICAgICAgICBTZWFyY2hDb21wYW5pZXNTaW1wbGVDb250cm9sLFxyXG4gICAgICAgIFNlYXJjaEljaHBJZGVudGlmaWNhdGlvbkNvbnRyb2wsXHJcbiAgICAgICAgU2VhcmNoSWNocFNpbXBsZUNvbnRyb2wsXHJcbiAgICAgICAgU2VsZWN0b3JDb250cm9sLFxyXG4gICAgICAgIEFjdGlvbnNDb250cm9sLFxyXG4gICAgICAgIC8vUGFnZXJDb250cm9sLFxyXG4gICAgICAgIFRhYnNDb250cm9sLFxyXG4gICAgICAgIENvbXBhbmllc0xpc3RDb250cm9sLFxyXG4gICAgICAgIEljaHBMaXN0Q29udHJvbCxcclxuICAgICAgICBCdXNpbmVzc21lbkxpc3RDb250cm9sXHJcbiAgICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDb250cm9sc01vZHVsZSB7XHJcblxyXG59Il19