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
var navbar_1 = require("./navbar/navbar");
var features_1 = require("./features/features");
var simple_1 = require("./search-panels/simple/simple");
var core_1 = require("@angular/core");
var selector_1 = require("./selector/selector");
var actions_1 = require("./actions/actions");
var ControlsModule = (function () {
    function ControlsModule() {
    }
    ControlsModule = __decorate([
        core_1.NgModule({
            declarations: [
                navbar_1.NavbarControl,
                features_1.FeaturesControl,
                simple_1.SearchPanelSimpleControl,
                selector_1.SelectorControl,
                actions_1.ActionsControl
            ],
            exports: [
                navbar_1.NavbarControl,
                features_1.FeaturesControl,
                simple_1.SearchPanelSimpleControl,
                selector_1.SelectorControl,
                actions_1.ActionsControl
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], ControlsModule);
    return ControlsModule;
}());
exports.ControlsModule = ControlsModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJvbHNNb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjb250cm9sc01vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsdUJBQTRCLGlCQUFpQixDQUFDLENBQUE7QUFDOUMseUJBQThCLHFCQUFxQixDQUFDLENBQUE7QUFDcEQsdUJBQXVDLCtCQUErQixDQUFDLENBQUE7QUFDdkUscUJBQXVCLGVBQWUsQ0FBQyxDQUFBO0FBQ3ZDLHlCQUE4QixxQkFBcUIsQ0FBQyxDQUFBO0FBQ3BELHdCQUE2QixtQkFBbUIsQ0FBQyxDQUFBO0FBa0JqRDtJQUFBO0lBRUEsQ0FBQztJQWxCRDtRQUFDLGVBQVEsQ0FBQztZQUNOLFlBQVksRUFBRTtnQkFDVixzQkFBYTtnQkFDYiwwQkFBZTtnQkFDZixpQ0FBd0I7Z0JBQ3hCLDBCQUFlO2dCQUNmLHdCQUFjO2FBQ2pCO1lBQ0QsT0FBTyxFQUFDO2dCQUNKLHNCQUFhO2dCQUNiLDBCQUFlO2dCQUNmLGlDQUF3QjtnQkFDeEIsMEJBQWU7Z0JBQ2Ysd0JBQWM7YUFDakI7U0FDSixDQUFDOztzQkFBQTtJQUdGLHFCQUFDO0FBQUQsQ0FBQyxBQUZELElBRUM7QUFGWSxzQkFBYyxpQkFFMUIsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TmF2YmFyQ29udHJvbH0gZnJvbSBcIi4vbmF2YmFyL25hdmJhclwiO1xyXG5pbXBvcnQge0ZlYXR1cmVzQ29udHJvbH0gZnJvbSBcIi4vZmVhdHVyZXMvZmVhdHVyZXNcIjtcclxuaW1wb3J0IHtTZWFyY2hQYW5lbFNpbXBsZUNvbnRyb2x9IGZyb20gXCIuL3NlYXJjaC1wYW5lbHMvc2ltcGxlL3NpbXBsZVwiO1xyXG5pbXBvcnQge05nTW9kdWxlfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQge1NlbGVjdG9yQ29udHJvbH0gZnJvbSBcIi4vc2VsZWN0b3Ivc2VsZWN0b3JcIjtcclxuaW1wb3J0IHtBY3Rpb25zQ29udHJvbH0gZnJvbSBcIi4vYWN0aW9ucy9hY3Rpb25zXCI7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gICAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICAgICAgTmF2YmFyQ29udHJvbCxcclxuICAgICAgICBGZWF0dXJlc0NvbnRyb2wsXHJcbiAgICAgICAgU2VhcmNoUGFuZWxTaW1wbGVDb250cm9sLFxyXG4gICAgICAgIFNlbGVjdG9yQ29udHJvbCxcclxuICAgICAgICBBY3Rpb25zQ29udHJvbFxyXG4gICAgXSxcclxuICAgIGV4cG9ydHM6W1xyXG4gICAgICAgIE5hdmJhckNvbnRyb2wsXHJcbiAgICAgICAgRmVhdHVyZXNDb250cm9sLFxyXG4gICAgICAgIFNlYXJjaFBhbmVsU2ltcGxlQ29udHJvbCxcclxuICAgICAgICBTZWxlY3RvckNvbnRyb2wsXHJcbiAgICAgICAgQWN0aW9uc0NvbnRyb2xcclxuICAgIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIENvbnRyb2xzTW9kdWxlIHtcclxuXHJcbn0iXX0=