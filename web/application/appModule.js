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
var platform_browser_1 = require("@angular/platform-browser");
var master_1 = require("./layouts/master");
var main_1 = require("./layouts/main");
var routes_1 = require("./pages/routes");
var page2_1 = require("./pages/page2/page2");
var login_1 = require("./pages/login/login");
var controlsModule_1 = require("./controls/controlsModule");
var notfound_1 = require("./pages/notfound/notfound");
var error_1 = require("./pages/error/error");
var companies_1 = require("./pages/companies");
var ichp_1 = require("./pages/ichp");
var businessmen_1 = require("./pages/businessmen");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        declarations: [
            master_1.MasterLayout,
            main_1.MainLayout,
            ichp_1.IchpPage,
            companies_1.CompaniesPage,
            businessmen_1.BusinessmenPage,
            error_1.ErrorPage,
            notfound_1.NotFoundPage,
            login_1.LoginPage,
            page2_1.Page2
        ],
        imports: [platform_browser_1.BrowserModule, routes_1.RoutingModule, controlsModule_1.ControlsModule],
        bootstrap: [master_1.MasterLayout]
    }),
    __metadata("design:paramtypes", [])
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwTW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwTW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxzQ0FBdUM7QUFDdkMsOERBQXdEO0FBRXhELDJDQUE4QztBQUM5Qyx1Q0FBMEM7QUFFMUMseUNBQTZDO0FBQzdDLDZDQUEwQztBQUMxQyw2Q0FBOEM7QUFDOUMsNERBQXlEO0FBQ3pELHNEQUF1RDtBQUN2RCw2Q0FBOEM7QUFFOUMsK0NBQWdEO0FBQ2hELHFDQUFzQztBQUN0QyxtREFBb0Q7QUFpQnBEO0lBQUE7SUFFQSxDQUFDO0lBQUQsZ0JBQUM7QUFBRCxDQUFDLEFBRkQsSUFFQztBQUZEO0lBZkMsZUFBUSxDQUFDO1FBQ04sWUFBWSxFQUFFO1lBQ1YscUJBQVk7WUFDWixpQkFBVTtZQUNWLGVBQVE7WUFDUix5QkFBYTtZQUNiLDZCQUFlO1lBQ2YsaUJBQVM7WUFDVCx1QkFBWTtZQUNaLGlCQUFTO1lBQ1QsYUFBSztTQUNSO1FBQ0QsT0FBTyxFQUFFLENBQUMsZ0NBQWEsRUFBRSxzQkFBYSxFQUFFLCtCQUFjLENBQUM7UUFDdkQsU0FBUyxFQUFFLENBQUMscUJBQVksQ0FBQztLQUM1QixDQUFDOzthQUdEO0FBRlksb0JBQUEsU0FBUyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtOZ01vZHVsZX0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHtCcm93c2VyTW9kdWxlfSBmcm9tIFwiQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3NlclwiO1xyXG5cclxuaW1wb3J0IHtNYXN0ZXJMYXlvdXR9IGZyb20gXCIuL2xheW91dHMvbWFzdGVyXCI7XHJcbmltcG9ydCB7TWFpbkxheW91dH0gZnJvbSBcIi4vbGF5b3V0cy9tYWluXCI7XHJcblxyXG5pbXBvcnQge1JvdXRpbmdNb2R1bGV9IGZyb20gXCIuL3BhZ2VzL3JvdXRlc1wiO1xyXG5pbXBvcnQge1BhZ2UyfSBmcm9tIFwiLi9wYWdlcy9wYWdlMi9wYWdlMlwiO1xyXG5pbXBvcnQge0xvZ2luUGFnZX0gZnJvbSBcIi4vcGFnZXMvbG9naW4vbG9naW5cIjtcclxuaW1wb3J0IHtDb250cm9sc01vZHVsZX0gZnJvbSBcIi4vY29udHJvbHMvY29udHJvbHNNb2R1bGVcIjtcclxuaW1wb3J0IHtOb3RGb3VuZFBhZ2V9IGZyb20gXCIuL3BhZ2VzL25vdGZvdW5kL25vdGZvdW5kXCI7XHJcbmltcG9ydCB7RXJyb3JQYWdlfSBmcm9tIFwiLi9wYWdlcy9lcnJvci9lcnJvclwiO1xyXG5cclxuaW1wb3J0IHtDb21wYW5pZXNQYWdlfSBmcm9tIFwiLi9wYWdlcy9jb21wYW5pZXNcIjtcclxuaW1wb3J0IHtJY2hwUGFnZX0gZnJvbSBcIi4vcGFnZXMvaWNocFwiO1xyXG5pbXBvcnQge0J1c2luZXNzbWVuUGFnZX0gZnJvbSBcIi4vcGFnZXMvYnVzaW5lc3NtZW5cIjtcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgICBkZWNsYXJhdGlvbnM6IFtcclxuICAgICAgICBNYXN0ZXJMYXlvdXQsXHJcbiAgICAgICAgTWFpbkxheW91dCxcclxuICAgICAgICBJY2hwUGFnZSxcclxuICAgICAgICBDb21wYW5pZXNQYWdlLFxyXG4gICAgICAgIEJ1c2luZXNzbWVuUGFnZSxcclxuICAgICAgICBFcnJvclBhZ2UsXHJcbiAgICAgICAgTm90Rm91bmRQYWdlLFxyXG4gICAgICAgIExvZ2luUGFnZSxcclxuICAgICAgICBQYWdlMlxyXG4gICAgXSxcclxuICAgIGltcG9ydHM6IFtCcm93c2VyTW9kdWxlLCBSb3V0aW5nTW9kdWxlLCBDb250cm9sc01vZHVsZV0sXHJcbiAgICBib290c3RyYXA6IFtNYXN0ZXJMYXlvdXRdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBcHBNb2R1bGUge1xyXG5cclxufSJdfQ==