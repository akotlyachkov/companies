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
var Filter_1 = require("../../../entities/Filter");
var SearchPanelService_1 = require("../SearchPanelService");
var SearchBusinessmenSimpleControl = (function () {
    function SearchBusinessmenSimpleControl(filterService) {
        this.filterService = filterService;
        this.model = new Filter_1.Filter();
        this.onSearch = new core_1.EventEmitter();
    }
    SearchBusinessmenSimpleControl.prototype.search = function () {
        this.filterService.provideFilter(this.model);
        this.onSearch.emit(this.model);
    };
    return SearchBusinessmenSimpleControl;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Filter_1.Filter)
], SearchBusinessmenSimpleControl.prototype, "model", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], SearchBusinessmenSimpleControl.prototype, "onSearch", void 0);
SearchBusinessmenSimpleControl = __decorate([
    core_1.Component({
        moduleId: module.id,
        host: { class: 'search search--with-tabs' },
        selector: 'search-buinessmen-simple',
        templateUrl: 'simple.html'
    }),
    __metadata("design:paramtypes", [SearchPanelService_1.FilterService])
], SearchBusinessmenSimpleControl);
exports.SearchBusinessmenSimpleControl = SearchBusinessmenSimpleControl;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2ltcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic2ltcGxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxzQ0FBcUU7QUFDckUsbURBQWdEO0FBQ2hELDREQUFvRDtBQVFwRCxJQUFhLDhCQUE4QjtJQUd2Qyx3Q0FBb0IsYUFBNEI7UUFBNUIsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFLaEQsVUFBSyxHQUFXLElBQUksZUFBTSxFQUFFLENBQUM7UUFHN0IsYUFBUSxHQUFHLElBQUksbUJBQVksRUFBVSxDQUFDO0lBTnRDLENBQUM7SUFRRCwrQ0FBTSxHQUFOO1FBQ0ksSUFBSSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzdDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQTtJQUNsQyxDQUFDO0lBQ0wscUNBQUM7QUFBRCxDQUFDLEFBakJELElBaUJDO0FBVEc7SUFEQyxZQUFLLEVBQUU7OEJBQ0QsZUFBTTs2REFBZ0I7QUFHN0I7SUFEQyxhQUFNLEVBQUU7O2dFQUM2QjtBQVg3Qiw4QkFBOEI7SUFOMUMsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtRQUNuQixJQUFJLEVBQUUsRUFBQyxLQUFLLEVBQUUsMEJBQTBCLEVBQUM7UUFDekMsUUFBUSxFQUFFLDBCQUEwQjtRQUNwQyxXQUFXLEVBQUUsYUFBYTtLQUM3QixDQUFDO3FDQUlxQyxrQ0FBYTtHQUh2Qyw4QkFBOEIsQ0FpQjFDO0FBakJZLHdFQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgSW5wdXR9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7RmlsdGVyfSBmcm9tIFwiLi4vLi4vLi4vZW50aXRpZXMvRmlsdGVyXCI7XHJcbmltcG9ydCB7RmlsdGVyU2VydmljZX0gZnJvbSBcIi4uL1NlYXJjaFBhbmVsU2VydmljZVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgaG9zdDoge2NsYXNzOiAnc2VhcmNoIHNlYXJjaC0td2l0aC10YWJzJ30sXHJcbiAgICBzZWxlY3RvcjogJ3NlYXJjaC1idWluZXNzbWVuLXNpbXBsZScsXHJcbiAgICB0ZW1wbGF0ZVVybDogJ3NpbXBsZS5odG1sJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgU2VhcmNoQnVzaW5lc3NtZW5TaW1wbGVDb250cm9sIHtcclxuXHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBmaWx0ZXJTZXJ2aWNlOiBGaWx0ZXJTZXJ2aWNlKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIEBJbnB1dCgpXHJcbiAgICBtb2RlbDogRmlsdGVyID0gbmV3IEZpbHRlcigpO1xyXG5cclxuICAgIEBPdXRwdXQoKVxyXG4gICAgb25TZWFyY2ggPSBuZXcgRXZlbnRFbWl0dGVyPEZpbHRlcj4oKTtcclxuXHJcbiAgICBzZWFyY2goKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5maWx0ZXJTZXJ2aWNlLnByb3ZpZGVGaWx0ZXIodGhpcy5tb2RlbCk7XHJcbiAgICAgICAgdGhpcy5vblNlYXJjaC5lbWl0KHRoaXMubW9kZWwpXHJcbiAgICB9XHJcbn0iXX0=