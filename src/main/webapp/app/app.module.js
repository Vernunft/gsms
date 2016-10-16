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
var http_1 = require("@angular/http");
var app_component_1 = require("./app.component");
var DataListService_1 = require("./DataListService");
var amcharts_component_1 = require("./amcharts.component");
var itemChart_1 = require("./itemChart");
var amcharts_directive_1 = require("./amcharts.directive");
require("./rxjs-extensions");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, http_1.HttpModule],
        declarations: [app_component_1.AppComponent, app_component_1.AllComponent, app_component_1.DateComponent, amcharts_directive_1.AmChartsDirective, amcharts_component_1.totalChartComponent, itemChart_1.itemChartComponent],
        providers: [
            DataListService_1.DataListService,
        ],
        bootstrap: [app_component_1.AppComponent, app_component_1.AllComponent, app_component_1.DateComponent, amcharts_component_1.totalChartComponent, itemChart_1.itemChartComponent],
    }),
    __metadata("design:paramtypes", [])
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map