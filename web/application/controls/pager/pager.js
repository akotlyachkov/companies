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
var PagerControl = (function () {
    function PagerControl() {
        this.totalItems = 64;
        this.currentPage = 4;
        this.maxSize = 5;
        this.bigTotalItems = 175;
        this.bigCurrentPage = 1;
    }
    PagerControl.prototype.setPage = function (pageNo) {
        this.currentPage = pageNo;
    };
    ;
    PagerControl.prototype.pageChanged = function (event) {
        console.log('Page changed to: ' + event.page);
        console.log('Number items per page: ' + event.itemsPerPage);
    };
    ;
    return PagerControl;
}());
PagerControl = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'pager',
        templateUrl: 'pager.html'
    }),
    __metadata("design:paramtypes", [])
], PagerControl);
exports.PagerControl = PagerControl;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsc0NBQTBDO0FBUTFDO0lBTEE7UUFNVyxlQUFVLEdBQVUsRUFBRSxDQUFDO1FBQ3ZCLGdCQUFXLEdBQVUsQ0FBQyxDQUFDO1FBRXZCLFlBQU8sR0FBVSxDQUFDLENBQUM7UUFDbkIsa0JBQWEsR0FBVSxHQUFHLENBQUM7UUFDM0IsbUJBQWMsR0FBVSxDQUFDLENBQUM7SUFVckMsQ0FBQztJQVJVLDhCQUFPLEdBQWQsVUFBZSxNQUFhO1FBQ3hCLElBQUksQ0FBQyxXQUFXLEdBQUcsTUFBTSxDQUFDO0lBQzlCLENBQUM7SUFBQSxDQUFDO0lBRUssa0NBQVcsR0FBbEIsVUFBbUIsS0FBUztRQUN4QixPQUFPLENBQUMsR0FBRyxDQUFDLG1CQUFtQixHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM5QyxPQUFPLENBQUMsR0FBRyxDQUFDLHlCQUF5QixHQUFHLEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUNoRSxDQUFDO0lBQUEsQ0FBQztJQUNOLG1CQUFDO0FBQUQsQ0FBQyxBQWhCRCxJQWdCQztBQWhCRDtJQUxDLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7UUFDbkIsUUFBUSxFQUFFLE9BQU87UUFDakIsV0FBVyxFQUFFLFlBQVk7S0FDNUIsQ0FBQzs7Z0JBaUJEO0FBaEJZLHVCQUFBLFlBQVksQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHNlbGVjdG9yOiAncGFnZXInLFxyXG4gICAgdGVtcGxhdGVVcmw6ICdwYWdlci5odG1sJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgUGFnZXJDb250cm9sIHtcclxuICAgIHB1YmxpYyB0b3RhbEl0ZW1zOm51bWJlciA9IDY0O1xyXG4gICAgcHVibGljIGN1cnJlbnRQYWdlOm51bWJlciA9IDQ7XHJcblxyXG4gICAgcHVibGljIG1heFNpemU6bnVtYmVyID0gNTtcclxuICAgIHB1YmxpYyBiaWdUb3RhbEl0ZW1zOm51bWJlciA9IDE3NTtcclxuICAgIHB1YmxpYyBiaWdDdXJyZW50UGFnZTpudW1iZXIgPSAxO1xyXG5cclxuICAgIHB1YmxpYyBzZXRQYWdlKHBhZ2VObzpudW1iZXIpOnZvaWQge1xyXG4gICAgICAgIHRoaXMuY3VycmVudFBhZ2UgPSBwYWdlTm87XHJcbiAgICB9O1xyXG5cclxuICAgIHB1YmxpYyBwYWdlQ2hhbmdlZChldmVudDphbnkpOnZvaWQge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdQYWdlIGNoYW5nZWQgdG86ICcgKyBldmVudC5wYWdlKTtcclxuICAgICAgICBjb25zb2xlLmxvZygnTnVtYmVyIGl0ZW1zIHBlciBwYWdlOiAnICsgZXZlbnQuaXRlbXNQZXJQYWdlKTtcclxuICAgIH07XHJcbn0iXX0=