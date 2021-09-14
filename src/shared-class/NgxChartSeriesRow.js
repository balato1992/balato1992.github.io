"use strict";
exports.__esModule = true;
exports.NgxChartSeriesRow = void 0;
var NgxChartSeriesRow = /** @class */ (function () {
    function NgxChartSeriesRow(name, value) {
        this.name = name;
        this.value = value;
    }
    NgxChartSeriesRow.getDateRange = function (arr) {
        var maxDate = new Date(-8640000000000000);
        var minDate = new Date(8640000000000000);
        arr.forEach(function (row) {
            var date = row.name;
            if (maxDate < date) {
                maxDate = date;
            }
            if (minDate > date) {
                minDate = date;
            }
        });
        return {
            maxDate: maxDate,
            minDate: minDate
        };
    };
    return NgxChartSeriesRow;
}());
exports.NgxChartSeriesRow = NgxChartSeriesRow;
