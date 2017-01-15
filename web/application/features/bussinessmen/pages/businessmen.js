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
var SearchPanelService_1 = require("../controls/search/SearchPanelService");
var businessmen_1 = require("../providers/businessmen");
var BusinessmenPage = (function () {
    function BusinessmenPage(filterService, businessmenProvider) {
        var _this = this;
        this.filterService = filterService;
        this.businessmenProvider = businessmenProvider;
        this.filterService.filterObservable.subscribe(function (filter) {
            _this.filter = filter;
            console.dir(_this.filter);
            businessmenProvider.searchCount(_this.filter).subscribe(function (response) { return _this.model = response; }, function (error) { return console.dir(error); });
        });
    }
    BusinessmenPage.prototype.ngOnInit = function () {
        console.log(this.serverConfig);
    };
    return BusinessmenPage;
}());
BusinessmenPage = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'businessmen',
        template: "\n<router-outlet></router-outlet>\n<selector></selector>\n<div>businessmen table</div>\n"
    }),
    __metadata("design:paramtypes", [SearchPanelService_1.FilterService,
        businessmen_1.BusinessmenProvider])
], BusinessmenPage);
exports.BusinessmenPage = BusinessmenPage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVzaW5lc3NtZW4uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJidXNpbmVzc21lbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsc0NBQWdEO0FBQ2hELDRFQUFvRTtBQUVwRSx3REFBNkQ7QUFZN0Q7SUFNSSx5QkFBb0IsYUFBNEIsRUFDNUIsbUJBQXdDO1FBRDVELGlCQVlDO1FBWm1CLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBQzVCLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBcUI7UUFFeEQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsVUFBQSxNQUFNO1lBQ2hELEtBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1lBQ3JCLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBRXpCLG1CQUFtQixDQUFDLFdBQVcsQ0FBQyxLQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsU0FBUyxDQUNsRCxVQUFBLFFBQVEsSUFBSSxPQUFBLEtBQUksQ0FBQyxLQUFLLEdBQUcsUUFBUSxFQUFyQixDQUFxQixFQUNqQyxVQUFBLEtBQUssSUFBSSxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQWxCLENBQWtCLENBQzlCLENBQUM7UUFDTixDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUM7SUFDRCxrQ0FBUSxHQUFSO1FBRUksT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUE7SUFDbEMsQ0FBQztJQUNMLHNCQUFDO0FBQUQsQ0FBQyxBQXZCRCxJQXVCQztBQXZCRDtJQVRDLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7UUFDbkIsUUFBUSxFQUFFLGFBQWE7UUFDdkIsUUFBUSxFQUFFLDBGQUliO0tBQ0EsQ0FBQztxQ0FPcUMsa0NBQWE7UUFDUCxpQ0FBbUI7bUJBZ0IvRDtBQXZCWSwwQkFBQSxlQUFlLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0fSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQge0ZpbHRlclNlcnZpY2V9IGZyb20gXCIuLi9jb250cm9scy9zZWFyY2gvU2VhcmNoUGFuZWxTZXJ2aWNlXCI7XHJcbmltcG9ydCB7RmlsdGVyfSBmcm9tIFwiLi4vZW50aXRpZXMvRmlsdGVyXCI7XHJcbmltcG9ydCB7QnVzaW5lc3NtZW5Qcm92aWRlcn0gZnJvbSBcIi4uL3Byb3ZpZGVycy9idXNpbmVzc21lblwiO1xyXG5pbXBvcnQge0FjdGl2YXRlZFJvdXRlfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICBzZWxlY3RvcjogJ2J1c2luZXNzbWVuJyxcclxuICAgIHRlbXBsYXRlOiBgXHJcbjxyb3V0ZXItb3V0bGV0Pjwvcm91dGVyLW91dGxldD5cclxuPHNlbGVjdG9yPjwvc2VsZWN0b3I+XHJcbjxkaXY+YnVzaW5lc3NtZW4gdGFibGU8L2Rpdj5cclxuYFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQnVzaW5lc3NtZW5QYWdlIGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgICBwdWJsaWMgZmlsdGVyOiBGaWx0ZXI7XHJcbiAgICBwdWJsaWMgbW9kZWw7XHJcbiAgICBwcml2YXRlIHNlcnZlckNvbmZpZztcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGZpbHRlclNlcnZpY2U6IEZpbHRlclNlcnZpY2UsXHJcbiAgICAgICAgICAgICAgICBwcml2YXRlIGJ1c2luZXNzbWVuUHJvdmlkZXI6IEJ1c2luZXNzbWVuUHJvdmlkZXIsXHJcbiAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICB0aGlzLmZpbHRlclNlcnZpY2UuZmlsdGVyT2JzZXJ2YWJsZS5zdWJzY3JpYmUoZmlsdGVyID0+IHtcclxuICAgICAgICAgICAgdGhpcy5maWx0ZXIgPSBmaWx0ZXI7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZGlyKHRoaXMuZmlsdGVyKTtcclxuXHJcbiAgICAgICAgICAgIGJ1c2luZXNzbWVuUHJvdmlkZXIuc2VhcmNoQ291bnQodGhpcy5maWx0ZXIpLnN1YnNjcmliZShcclxuICAgICAgICAgICAgICAgIHJlc3BvbnNlID0+IHRoaXMubW9kZWwgPSByZXNwb25zZSxcclxuICAgICAgICAgICAgICAgIGVycm9yID0+IGNvbnNvbGUuZGlyKGVycm9yKVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBuZ09uSW5pdCgpIHtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5zZXJ2ZXJDb25maWcpXHJcbiAgICB9XHJcbn0iXX0=