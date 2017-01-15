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
var serverConfig_1 = require("./serverConfig");
var ServerConfigResolver = (function () {
    function ServerConfigResolver(serverConfigProvider) {
        this.serverConfigProvider = serverConfigProvider;
    }
    ServerConfigResolver.prototype.resolve = function (route) {
        return this.serverConfigProvider.get();
    };
    return ServerConfigResolver;
}());
ServerConfigResolver = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [serverConfig_1.ServerConfigProvider])
], ServerConfigResolver);
exports.ServerConfigResolver = ServerConfigResolver;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmVyQ29uZmlnUmVzb2x2ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzZXJ2ZXJDb25maWdSZXNvbHZlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQ0Esc0NBQTJDO0FBRzNDLCtDQUFvRDtBQUtwRDtJQUNJLDhCQUFvQixvQkFBMEM7UUFBMUMseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjtJQUc5RCxDQUFDO0lBRUQsc0NBQU8sR0FBUCxVQUFRLEtBQTZCO1FBQ2pDLE1BQU0sQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsR0FBRyxFQUFFLENBQUM7SUFDM0MsQ0FBQztJQUNMLDJCQUFDO0FBQUQsQ0FBQyxBQVRELElBU0M7QUFURDtJQURDLGlCQUFVLEVBQUU7cUNBRWlDLG1DQUFvQjt3QkFRakU7QUFUWSwrQkFBQSxvQkFBb0IsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFJlc29sdmUsIEFjdGl2YXRlZFJvdXRlU25hcHNob3QgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9SeCc7XHJcbmltcG9ydCB7U2VydmVyQ29uZmlnUHJvdmlkZXJ9IGZyb20gXCIuL3NlcnZlckNvbmZpZ1wiO1xyXG5pbXBvcnQge1NoYXJlZFNlcnZpY2V9IGZyb20gXCIuL2dsb2JhbFwiO1xyXG5cclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFNlcnZlckNvbmZpZ1Jlc29sdmVyIGltcGxlbWVudHMgUmVzb2x2ZTxhbnk+IHtcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgc2VydmVyQ29uZmlnUHJvdmlkZXI6IFNlcnZlckNvbmZpZ1Byb3ZpZGVyKSB7XHJcblxyXG5cclxuICAgIH1cclxuXHJcbiAgICByZXNvbHZlKHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90KTogT2JzZXJ2YWJsZTxPYmplY3Q+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zZXJ2ZXJDb25maWdQcm92aWRlci5nZXQoKTtcclxuICAgIH1cclxufSJdfQ==