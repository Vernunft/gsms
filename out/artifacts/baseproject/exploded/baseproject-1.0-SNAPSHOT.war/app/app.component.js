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
var DataListService_1 = require("./DataListService");
require("../js/countUp.js");
var AppComponent = (function () {
    function AppComponent(dataListService) {
        this.dataListService = dataListService;
        // setInterval(()=>{
        //     this.getDeptCount();
        //     this.getTotalCount();
        //     this.getItemCount();
        // },10000);
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getDeptCount();
        this.getItemCount();
        this.getTotalCount();
        setInterval(function () {
            _this.getDeptCount();
            _this.getTotalCount();
            _this.getItemCount();
        }, 10000);
    };
    AppComponent.prototype.getDeptCount = function () {
        var _this = this;
        this.dataListService
            .getDeptCount()
            .then(function (deptCount) {
            _this.deptCount = deptCount;
            var demo = new CountUp("deptCount", 0, _this.deptCount, 0, 2.5);
            demo.start();
        });
    };
    AppComponent.prototype.getItemCount = function () {
        var _this = this;
        this.dataListService
            .getItemCount()
            .then(function (itemCount) {
            _this.itemCount = itemCount;
            var demo = new CountUp("itemCount", 0, _this.itemCount, 0, 2.5);
            demo.start();
        });
    };
    AppComponent.prototype.getTotalCount = function () {
        var _this = this;
        this.dataListService
            .getTotalCount()
            .then(function (totalCount) {
            _this.count = totalCount;
            if (totalCount <= 9999) {
                _this.totalCount = totalCount;
            }
            if (totalCount >= 10000) {
                _this.totalCount = Math.round(totalCount / 10000);
            }
            var demo = new CountUp("totalCount", 0, _this.totalCount, 2, 2.5);
            demo.start();
        });
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'dept-app',
        template: "\n     <ul>\n                    <li><span ><strong id = \"deptCount\"></strong>\u5BB6</span>\u5355\u4F4D</li>\n                    <li><span><strong id=\"itemCount\"></strong>\u9879</span>\u8D44\u6E90\u9879</li>\n                    <li>\n                        <span>\n                          <strong id=\"totalCount\"></strong><i *ngIf=\"count<=9999\">\u4E07</i>\n                          <i *ngIf=\"count>=10000\">\u4EBF</i>\n                        </span>\n                        \u8D44\u6E90\u603B\u91CF\n                     </li>\n     </ul>\n    "
    }),
    __metadata("design:paramtypes", [DataListService_1.DataListService])
], AppComponent);
exports.AppComponent = AppComponent;
var AllComponent = (function () {
    function AllComponent(dataListService) {
        this.dataListService = dataListService;
    }
    AllComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getAll();
        setInterval(function () {
            _this.getAll();
        }, 10000);
    };
    AllComponent.prototype.getAll = function () {
        var _this = this;
        this.dataListService
            .getAll()
            .then(function (dataLists) { return _this.dataLists = dataLists; });
    };
    return AllComponent;
}());
AllComponent = __decorate([
    core_1.Component({
        selector: 'all-app',
        template: "\n            <ul>\n                <li *ngFor=\"let dataList of dataLists\" >\n                    <a href=\"#\">  \n                      <s class=\"{{dataList.iconClass}}\"></s>\n                        <div class=\"title\">{{dataList.deptName}}</div>\n                        <div class=\"info\">\n                            <span class=\"num1\">{{dataList.itemCount}}</span>\n                            <span class=\"num2\">\u7C7B</span>\n                            <span class=\"num3\">\n                            {{dataList.totalFormat}}</span>\n                            <span class=\"num4\"  *ngIf=\"dataList.totalCount<=9999\">\u4E07\u6761\u6570\u636E</span>\n                            <span class=\"num4\"  *ngIf=\"dataList.totalCount>=10000\">\u4EBF\u6761\u6570\u636E</span>\n                        </div>\n                    </a>\n                </li>\n            </ul>\n       \n    ",
        styleUrls: ['app/index.css']
    }),
    __metadata("design:paramtypes", [DataListService_1.DataListService])
], AllComponent);
exports.AllComponent = AllComponent;
var DateComponent = (function () {
    function DateComponent() {
        var _this = this;
        this.currentTime = new Date;
        setInterval(function () {
            _this.currentTime = new Date;
        }, 100);
    }
    return DateComponent;
}());
DateComponent = __decorate([
    core_1.Component({
        selector: 'date-app',
        template: "\n      {{currentTime|date:\"yyyy-MM-dd HH:mm:ss\"}}\n    "
    }),
    __metadata("design:paramtypes", [])
], DateComponent);
exports.DateComponent = DateComponent;
//# sourceMappingURL=app.component.js.map