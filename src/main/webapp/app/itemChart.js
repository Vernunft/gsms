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
var makeChart = function (_a) {
    var dataProvider = _a.dataProvider, title = _a.title, valueField = _a.valueField;
    return {
        "type": "serial",
        "theme": "light",
        "marginRight": 50,
        "dataProvider": dataProvider,
        "valueAxes": [{
                "axisAlpha": 0,
                "position": "left",
                "title": title,
                "axisColor": "#B3E7F9",
                "axisThickness": 0
            }],
        "startDuration": 1,
        "graphs": [{
                "balloonText": "<b>[[deptName]]: [[value]]</b>",
                "fillColorsField": "color",
                "fillAlphas": 0.8,
                "lineAlpha": 0,
                "type": "column",
                "valueField": valueField,
            }],
        "chartCursor": {
            "categoryBalloonEnabled": false,
            "cursorAlpha": 0,
            "zoomable": false
        },
        "CategoryAxisWidth": 0.1,
        "categoryField": "deptName",
        "categoryAxis": {
            "gridPosition": "start",
            "labelRotation": 45,
            "gridAlpha": 0,
            "axisColor": "#B3E7F9"
        },
        "creditsPosition": "top-right",
        "color": "#F8FAFF",
        "export": {
            "enabled": true
        }
    };
};
var itemChartComponent = (function () {
    function itemChartComponent(dataListService) {
        this.dataListService = dataListService;
        this.id = "itemCountchart";
        this.itemChart = makeChart({
            dataProvider: this.itemList,
            title: "资源项（类）",
            valueField: "itemCount"
        });
        this.getItemList();
    }
    itemChartComponent.prototype.ngOnInit = function () {
        var _this = this;
        setInterval(function () {
            _this.getItemList();
        }, 10000);
    };
    itemChartComponent.prototype.getItemList = function () {
        var _this = this;
        this.dataListService
            .getItemList()
            .then(function (itemList) {
            _this.itemList = itemList;
            _this.itemChart = makeChart({
                dataProvider: _this.itemList,
                title: "资源项（类）",
                valueField: "itemCount"
            });
        });
    };
    return itemChartComponent;
}());
itemChartComponent = __decorate([
    core_1.Component({
        selector: "itemChart-app",
        template: "  <amCharts [id]=\"itemCountchart\" [options]=\"itemChart\"[style.width.%]=\"110\" [style.height.%]=\"100\"></amCharts>               \n  "
    }),
    __metadata("design:paramtypes", [DataListService_1.DataListService])
], itemChartComponent);
exports.itemChartComponent = itemChartComponent;
//# sourceMappingURL=itemChart.js.map