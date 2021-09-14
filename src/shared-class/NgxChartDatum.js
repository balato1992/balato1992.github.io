"use strict";
exports.__esModule = true;
exports.NgxChartDatum = void 0;
var NgxChartDatum = /** @class */ (function () {
    function NgxChartDatum(name, series) {
        this.name = '';
        this.series = [];
        this.name = name;
        series.sort(function (a, b) {
            if (a['name'] < b['name']) {
                return -1;
            }
            if (a['name'] > b['name']) {
                return 1;
            }
            return 0;
        });
        this.series = series;
    }
    NgxChartDatum.parseArr = function (strArr) {
        var rtn = JSON.parse(strArr);
        for (var _i = 0, rtn_1 = rtn; _i < rtn_1.length; _i++) {
            var item = rtn_1[_i];
            for (var i = 0; i < item.series.length; i++) {
                item.series[i].name = new Date(item.series[i].name);
            }
        }
        return rtn;
    };
    return NgxChartDatum;
}());
exports.NgxChartDatum = NgxChartDatum;
