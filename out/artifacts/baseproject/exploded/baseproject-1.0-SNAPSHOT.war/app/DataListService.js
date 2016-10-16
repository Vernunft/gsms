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
var http_1 = require("@angular/http");
require("rxjs/add/operator/toPromise");
var DataListService = (function () {
    function DataListService(http) {
        this.http = http;
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        this.getDeptCountUrl = 'dataListController/getDeptCount'; // 获取单位总数
        this.getItemCountUrl = 'dataListController/getItemCount'; // 获取资源项总数
        this.getTotalCountUrl = 'dataListController/getTotalCount'; // 获取资源量总数
        this.getAllUrl = 'dataListController/getAll'; //获取已有单位列表
        this.getItemListUrl = 'dataListController/getItemList'; //获取已有单位列表
    }
    DataListService.prototype.getDeptCount = function () {
        return this.http.get(this.getDeptCountUrl)
            .toPromise()
            .then(function (response) { return response.json().deptCount; })
            .catch(this.handleError);
    };
    DataListService.prototype.getItemCount = function () {
        return this.http.get(this.getItemCountUrl)
            .toPromise()
            .then(function (response) { return response.json().itemCount; })
            .catch(this.handleError);
    };
    DataListService.prototype.getTotalCount = function () {
        return this.http.get(this.getTotalCountUrl)
            .toPromise()
            .then(function (response) { return response.json().totalCount; })
            .catch(this.handleError);
    };
    DataListService.prototype.getAll = function () {
        return this.http.get(this.getAllUrl)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    DataListService.prototype.getItemList = function () {
        return this.http.get(this.getItemListUrl)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    DataListService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    return DataListService;
}());
DataListService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], DataListService);
exports.DataListService = DataListService;
//# sourceMappingURL=DataListService.js.map