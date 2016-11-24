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
var ControlsModule = (function () {
    function ControlsModule() {
    }
    return ControlsModule;
}());
ControlsModule = __decorate([
    core_1.NgModule({
        declarations: [
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
            tabs_1.TabsControl
        ],
        exports: [
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
            tabs_1.TabsControl
        ]
    }),
    __metadata("design:paramtypes", [])
], ControlsModule);
exports.ControlsModule = ControlsModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJvbHNNb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjb250cm9sc01vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsc0NBQXVDO0FBRXZDLDBDQUE4QztBQUM5QyxnREFBb0Q7QUFDcEQsZ0RBQW9EO0FBQ3BELDZDQUFpRDtBQUNqRCw0REFBaUY7QUFDakYsNERBQWlGO0FBQ2pGLDhEQUFpRjtBQUNqRixpRUFBb0Y7QUFDcEYsbUZBQXNHO0FBQ3RHLDJEQUE4RTtBQUM5RSw4RUFBNEY7QUFDNUYsc0RBQW9FO0FBRXBFLG9DQUF3QztBQW9DeEM7SUFBQTtJQUVBLENBQUM7SUFBRCxxQkFBQztBQUFELENBQUMsQUFGRCxJQUVDO0FBRkQ7SUFsQ0MsZUFBUSxDQUFDO1FBQ04sWUFBWSxFQUFFO1lBQ1Ysc0JBQWE7WUFDYiwwQkFBZTtZQUNmLHVDQUE4QjtZQUM5Qix1Q0FBOEI7WUFDOUIsdUNBQTZCO1lBQzdCLHlDQUE4QjtZQUM5QixxREFBb0M7WUFDcEMscUNBQTRCO1lBQzVCLGdEQUErQjtZQUMvQixnQ0FBdUI7WUFDdkIsMEJBQWU7WUFDZix3QkFBYztZQUNkLGVBQWU7WUFDZixrQkFBVztTQUNkO1FBQ0QsT0FBTyxFQUFDO1lBQ0osc0JBQWE7WUFDYiwwQkFBZTtZQUNmLHVDQUE4QjtZQUM5Qix1Q0FBOEI7WUFDOUIsdUNBQTZCO1lBQzdCLHlDQUE4QjtZQUM5QixxREFBb0M7WUFDcEMscUNBQTRCO1lBQzVCLGdEQUErQjtZQUMvQixnQ0FBdUI7WUFDdkIsMEJBQWU7WUFDZix3QkFBYztZQUNkLGVBQWU7WUFDZixrQkFBVztTQUNkO0tBQ0osQ0FBQzs7a0JBR0Q7QUFGWSx5QkFBQSxjQUFjLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge05nTW9kdWxlfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5cclxuaW1wb3J0IHtOYXZiYXJDb250cm9sfSBmcm9tIFwiLi9uYXZiYXIvbmF2YmFyXCI7XHJcbmltcG9ydCB7RmVhdHVyZXNDb250cm9sfSBmcm9tIFwiLi9mZWF0dXJlcy9mZWF0dXJlc1wiO1xyXG5pbXBvcnQge1NlbGVjdG9yQ29udHJvbH0gZnJvbSBcIi4vc2VsZWN0b3Ivc2VsZWN0b3JcIjtcclxuaW1wb3J0IHtBY3Rpb25zQ29udHJvbH0gZnJvbSBcIi4vYWN0aW9ucy9hY3Rpb25zXCI7XHJcbmltcG9ydCB7U2VhcmNoQnVzaW5lc3NtZW5QZXJzb25Db250cm9sfSBmcm9tIFwiLi9zZWFyY2gvYnVpbmVzc21lbi9wZXJzb24vcGVyc29uXCI7XHJcbmltcG9ydCB7U2VhcmNoQnVzaW5lc3NtZW5TaW1wbGVDb250cm9sfSBmcm9tIFwiLi9zZWFyY2gvYnVpbmVzc21lbi9zaW1wbGUvc2ltcGxlXCI7XHJcbmltcG9ydCB7U2VhcmNoQ29tcGFuaWVzRmluYW5jZUNvbnRyb2x9IGZyb20gXCIuL3NlYXJjaC9jb21wYW5pZXMvZmluYW5jZS9maW5hbmNlXCI7XHJcbmltcG9ydCB7U2VhcmNoQ29tcGFuaWVzRm91bmRlcnNDb250cm9sfSBmcm9tIFwiLi9zZWFyY2gvY29tcGFuaWVzL2ZvdW5kZXJzL2ZvdW5kZXJzXCI7XHJcbmltcG9ydCB7U2VhcmNoQ29tcGFuaWVzSWRlbnRpZmljYXRpb25Db250cm9sfSBmcm9tIFwiLi9zZWFyY2gvY29tcGFuaWVzL2lkZW50aWZpY2F0aW9uL2lkZW50aWZpY2F0aW9uXCI7XHJcbmltcG9ydCB7U2VhcmNoQ29tcGFuaWVzU2ltcGxlQ29udHJvbH0gZnJvbSBcIi4vc2VhcmNoL2NvbXBhbmllcy9zaW1wbGUvc2ltcGxlXCI7XHJcbmltcG9ydCB7U2VhcmNoSWNocElkZW50aWZpY2F0aW9uQ29udHJvbH0gZnJvbSBcIi4vc2VhcmNoL2ljaHAvaWRlbnRpZmljYXRpb24vaWRlbnRpZmljYXRpb25cIjtcclxuaW1wb3J0IHtTZWFyY2hJY2hwU2ltcGxlQ29udHJvbH0gZnJvbSBcIi4vc2VhcmNoL2ljaHAvc2ltcGxlL3NpbXBsZVwiO1xyXG5pbXBvcnQge1BhZ2VyQ29udHJvbH0gZnJvbSBcIi4vcGFnZXIvcGFnZXJcIjtcclxuaW1wb3J0IHtUYWJzQ29udHJvbH0gZnJvbSBcIi4vdGFicy90YWJzXCI7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gICAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICAgICAgTmF2YmFyQ29udHJvbCxcclxuICAgICAgICBGZWF0dXJlc0NvbnRyb2wsXHJcbiAgICAgICAgU2VhcmNoQnVzaW5lc3NtZW5QZXJzb25Db250cm9sLFxyXG4gICAgICAgIFNlYXJjaEJ1c2luZXNzbWVuU2ltcGxlQ29udHJvbCxcclxuICAgICAgICBTZWFyY2hDb21wYW5pZXNGaW5hbmNlQ29udHJvbCxcclxuICAgICAgICBTZWFyY2hDb21wYW5pZXNGb3VuZGVyc0NvbnRyb2wsXHJcbiAgICAgICAgU2VhcmNoQ29tcGFuaWVzSWRlbnRpZmljYXRpb25Db250cm9sLFxyXG4gICAgICAgIFNlYXJjaENvbXBhbmllc1NpbXBsZUNvbnRyb2wsXHJcbiAgICAgICAgU2VhcmNoSWNocElkZW50aWZpY2F0aW9uQ29udHJvbCxcclxuICAgICAgICBTZWFyY2hJY2hwU2ltcGxlQ29udHJvbCxcclxuICAgICAgICBTZWxlY3RvckNvbnRyb2wsXHJcbiAgICAgICAgQWN0aW9uc0NvbnRyb2wsXHJcbiAgICAgICAgLy9QYWdlckNvbnRyb2wsXHJcbiAgICAgICAgVGFic0NvbnRyb2xcclxuICAgIF0sXHJcbiAgICBleHBvcnRzOltcclxuICAgICAgICBOYXZiYXJDb250cm9sLFxyXG4gICAgICAgIEZlYXR1cmVzQ29udHJvbCxcclxuICAgICAgICBTZWFyY2hCdXNpbmVzc21lblBlcnNvbkNvbnRyb2wsXHJcbiAgICAgICAgU2VhcmNoQnVzaW5lc3NtZW5TaW1wbGVDb250cm9sLFxyXG4gICAgICAgIFNlYXJjaENvbXBhbmllc0ZpbmFuY2VDb250cm9sLFxyXG4gICAgICAgIFNlYXJjaENvbXBhbmllc0ZvdW5kZXJzQ29udHJvbCxcclxuICAgICAgICBTZWFyY2hDb21wYW5pZXNJZGVudGlmaWNhdGlvbkNvbnRyb2wsXHJcbiAgICAgICAgU2VhcmNoQ29tcGFuaWVzU2ltcGxlQ29udHJvbCxcclxuICAgICAgICBTZWFyY2hJY2hwSWRlbnRpZmljYXRpb25Db250cm9sLFxyXG4gICAgICAgIFNlYXJjaEljaHBTaW1wbGVDb250cm9sLFxyXG4gICAgICAgIFNlbGVjdG9yQ29udHJvbCxcclxuICAgICAgICBBY3Rpb25zQ29udHJvbCxcclxuICAgICAgICAvL1BhZ2VyQ29udHJvbCxcclxuICAgICAgICBUYWJzQ29udHJvbFxyXG4gICAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ29udHJvbHNNb2R1bGUge1xyXG5cclxufSJdfQ==