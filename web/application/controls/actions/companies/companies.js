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
var ActionsCompaniesControl = (function () {
    function ActionsCompaniesControl() {
    }
    ActionsCompaniesControl.prototype.showModal1 = function () {
        console.log('модал1');
    };
    ActionsCompaniesControl.prototype.showModal2 = function () {
        console.log('модал2');
    };
    ActionsCompaniesControl.prototype.showModal3 = function () {
        console.log('модал3');
    };
    return ActionsCompaniesControl;
}());
ActionsCompaniesControl = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'actions-companies',
        host: { class: "pull-right" },
        templateUrl: 'companies.html'
    }),
    __metadata("design:paramtypes", [])
], ActionsCompaniesControl);
exports.ActionsCompaniesControl = ActionsCompaniesControl;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcGFuaWVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY29tcGFuaWVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxzQ0FBd0M7QUFTeEMsSUFBYSx1QkFBdUI7SUFBcEM7SUFhQSxDQUFDO0lBWEcsNENBQVUsR0FBVjtRQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUE7SUFDekIsQ0FBQztJQUVELDRDQUFVLEdBQVY7UUFDSSxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFBO0lBQ3pCLENBQUM7SUFFRCw0Q0FBVSxHQUFWO1FBQ0ksT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQTtJQUN6QixDQUFDO0lBQ0wsOEJBQUM7QUFBRCxDQUFDLEFBYkQsSUFhQztBQWJZLHVCQUF1QjtJQU5uQyxnQkFBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1FBQ25CLFFBQVEsRUFBRSxtQkFBbUI7UUFDN0IsSUFBSSxFQUFDLEVBQUMsS0FBSyxFQUFDLFlBQVksRUFBQztRQUN6QixXQUFXLEVBQUUsZ0JBQWdCO0tBQ2hDLENBQUM7O0dBQ1csdUJBQXVCLENBYW5DO0FBYlksMERBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgc2VsZWN0b3I6ICdhY3Rpb25zLWNvbXBhbmllcycsXHJcbiAgICBob3N0OntjbGFzczpcInB1bGwtcmlnaHRcIn0sXHJcbiAgICB0ZW1wbGF0ZVVybDogJ2NvbXBhbmllcy5odG1sJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgQWN0aW9uc0NvbXBhbmllc0NvbnRyb2wge1xyXG5cclxuICAgIHNob3dNb2RhbDEoKXtcclxuICAgICAgICBjb25zb2xlLmxvZygn0LzQvtC00LDQuzEnKVxyXG4gICAgfVxyXG5cclxuICAgIHNob3dNb2RhbDIoKXtcclxuICAgICAgICBjb25zb2xlLmxvZygn0LzQvtC00LDQuzInKVxyXG4gICAgfVxyXG5cclxuICAgIHNob3dNb2RhbDMoKXtcclxuICAgICAgICBjb25zb2xlLmxvZygn0LzQvtC00LDQuzMnKVxyXG4gICAgfVxyXG59Il19