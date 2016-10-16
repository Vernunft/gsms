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
// TODO more efficient copying ?
// TODO better type ?
var copy = function (x) {
    return JSON.parse(JSON.stringify(x));
};
var AmChartsDirective = (function () {
    // TODO is this correct ?
    function AmChartsDirective(el) {
        this.el = el.nativeElement;
    }
    // TODO is this correct ?
    AmChartsDirective.prototype.ngOnChanges = function (x) {
        if (x.options) {
            // Update the chart after init
            if (this.chart) {
                // TODO make this more efficient ?
                for (var key in this.options) {
                    this.chart[key] = copy(this.options[key]);
                }
                this.chart.validateNow(true, false);
            }
        }
    };
    // TODO is this the correct hook to use ?
    AmChartsDirective.prototype.ngOnInit = function () {
        // TODO is this correct ?
        this.el.id = this.id;
        // TODO a bit hacky
        this.el.style.display = "block";
        // TODO more efficient copying of an object ?
        this.chart = AmCharts.makeChart(this.id, copy(this.options));
    };
    AmChartsDirective.prototype.ngOnDestroy = function () {
        this.chart.clear();
    };
    return AmChartsDirective;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], AmChartsDirective.prototype, "id", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], AmChartsDirective.prototype, "options", void 0);
AmChartsDirective = __decorate([
    core_1.Directive({
        selector: "amCharts"
    }),
    __metadata("design:paramtypes", [core_1.ElementRef])
], AmChartsDirective);
exports.AmChartsDirective = AmChartsDirective;
//# sourceMappingURL=amcharts.directive.js.map