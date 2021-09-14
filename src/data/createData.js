"use strict";
exports.__esModule = true;
var fs = require("fs");
var moment = require("moment");
var NgxChartSeriesRow_1 = require("../shared-class/NgxChartSeriesRow");
var NgxChartDatum_1 = require("../shared-class/NgxChartDatum");
var Format = /** @class */ (function () {
    function Format() {
    }
    Format.csvToArray = function (str) {
        var newLine = '\r\n';
        var delimiter = ',';
        //const headers = str.slice(0, str.indexOf(newLine)).split(delimiter);
        var rows = str.slice(str.indexOf(newLine) + newLine.length).split(newLine);
        var output = [];
        for (var _i = 0, rows_1 = rows; _i < rows_1.length; _i++) {
            var row = rows_1[_i];
            var values = row.split(delimiter);
            var trimedValues = [];
            for (var _a = 0, values_1 = values; _a < values_1.length; _a++) {
                var value_1 = values_1[_a];
                var trimed = value_1.replace(/['"]+/g, '');
                trimedValues.push(trimed);
            }
            var date = moment(trimedValues[0], 'YYYY年MM月DD日').toDate();
            var value = Number(trimedValues[1]);
            var obj = new NgxChartSeriesRow_1.NgxChartSeriesRow(date, value);
            output.push(obj);
        }
        return output;
    };
    Format.formatData = function (inputFilePath) {
        var inputStr = fs.readFileSync(inputFilePath, 'utf8');
        var data = this.csvToArray(inputStr);
        return data;
    };
    return Format;
}());
var CustomData = /** @class */ (function () {
    function CustomData() {
    }
    CustomData.createDate = function () {
        var start = new Date('2001-01-01');
        var end = new Date('2006-01-01');
        var dates = [];
        while (end > start) {
            if (start.getDate() === 6 ||
                start.getDate() === 16 ||
                start.getDate() === 26) {
                dates.push(new Date(start));
            }
            start.setDate(start.getDate() + 1);
        }
        return dates;
    };
    CustomData.processInfo = function (dates, func) {
        var items = [];
        var dateCount = dates.length;
        for (var i = 0; i < dates.length; i++) {
            var item = new NgxChartSeriesRow_1.NgxChartSeriesRow(dates[i], func(i / dateCount));
            items.push(item);
        }
        return items;
    };
    CustomData.build = function () {
        var _this = this;
        var FuncInfo = /** @class */ (function () {
            function class_1(name, func) {
                this.name = name;
                this.func = func;
            }
            return class_1;
        }());
        var dates = this.createDate();
        var count = 0;
        var funcInfos = [
            new FuncInfo('Sample ' + ++count, function (x) { return 30 * x + 50; }),
            new FuncInfo('Sample ' + ++count, function (x) { return -30 * x + 50; }),
            new FuncInfo('Sample ' + ++count, function (x) {
                if (x < 0.5)
                    return 30 * x + 50;
                else
                    return -30 * x + 50 + 30;
            }),
            new FuncInfo('Sample ' + ++count, function (x) {
                if (x < 0.5)
                    return -30 * x + 50;
                else
                    return 30 * x + 50 - 30;
            }),
            new FuncInfo('Sample ' + ++count, function (x) {
                if (x < 0.25)
                    return 50 * x + 50;
                if (x < 0.75)
                    return -50 * x + 50 + 25;
                else
                    return 50 * x + 50 - 50;
            }),
            new FuncInfo('Sample ' + ++count, function (x) {
                if (x < 0.25)
                    return -50 * x + 50;
                if (x < 0.75)
                    return 50 * x + 50 - 25;
                else
                    return -50 * x + 50 + 50;
            }),
        ];
        var arr = [];
        funcInfos.forEach(function (funcInfo) {
            var data = _this.processInfo(dates, funcInfo.func);
            arr.push(new NgxChartDatum_1.NgxChartDatum(funcInfo.name, data));
        });
        return arr;
    };
    return CustomData;
}());
function writeData(outputFileName) {
    var data = [];
    var dataRows_0050 = Format.formatData(__dirname + '/history_0050.csv');
    data.push(new NgxChartDatum_1.NgxChartDatum('Yuanta/P-shares Taiwan Top 50 ETF (0050.TW)', dataRows_0050));
    var customData = CustomData.build();
    data = data.concat(customData);
    var path = __dirname + outputFileName;
    fs.writeFileSync(path, 'export let strData = \'' + JSON.stringify(data) + '\';');
}
writeData('/customData.ts');
