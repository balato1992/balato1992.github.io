/*
 * By 洪晟崴
 * 2021/08/31
 */

namespace myLibrary {
    // save global variable
    export class GlobalHelper {
        static rootPath: string = "/";

        static getPath(path: string): string {
            if (path != null && path.replace != null) {
                path = path.replace("~/", GlobalHelper.rootPath);
            }

            return path;
        }
    }

    export class UrlParamsHelper {
        parseURLParams(url: string) {
            let queryStart = url.indexOf("?") + 1,
                queryEnd = url.indexOf("#") + 1 || url.length + 1,
                query = url.slice(queryStart, queryEnd - 1),
                pairs = query.replace(/\+/g, " ").split("&"),
                parms: { [index: string]: any } = {}, i, n: string, v, nv;

            if (query === url || query === "") return;

            for (i = 0; i < pairs.length; i++) {
                nv = pairs[i].split("=", 2);
                n = decodeURIComponent(nv[0]);
                v = decodeURIComponent(nv[1]);

                if (!parms.hasOwnProperty(n)) parms[n] = [];
                parms[n].push(nv.length === 2 ? v : null);
            }
            return parms;
        }
    }

    export enum AjaxHelper_SendType { Mvc, WebApi }
    export enum AjaxHelper_Type { POST, GET }
    export class AjaxHelper {
        public static post(sendingType: AjaxHelper_SendType, type: AjaxHelper_Type, url: string, postData: any, successCB?: ((data: any) => void), completeCB?: any, errorCB?: any) {
            let settings: JQueryAjaxSettings = {
                data: undefined,
                dataType: undefined,
                contentType: undefined,

                type: undefined,
                url: url,
                success: function (data: any) {
                    if (successCB) {
                        successCB(data);
                    }
                },
                error: function (jqXHR: JQueryXHR, textStatus: string, errorThrown: string) {

                    var msg = '';
                    if (jqXHR.status === 0) {
                        msg = 'Not connect.\n Verify Network.';
                    } else if (jqXHR.status == 404) {
                        msg = 'Requested page not found. [404]';
                    } else if (jqXHR.status == 500) {
                        msg = 'Internal Server Error [500].';
                    } else if (textStatus === 'parsererror') {
                        msg = 'Requested JSON parse failed.';
                    } else if (textStatus === 'timeout') {
                        msg = 'Time out error.';
                    } else if (textStatus === 'abort') {
                        msg = 'Ajax request aborted.';
                    } else {
                        msg = 'Uncaught Error.\n' + jqXHR.responseText;
                    }

                    console.error("Error: " + (msg != '') ? msg : (jqXHR.status + ", " + textStatus));


                    if (errorCB) {
                        errorCB();
                    }
                },
                complete: function (jqXHR: JQueryXHR, textStatus: string) {
                    if (completeCB) {
                        completeCB();
                    }
                }
            };

            switch (sendingType) {
                case AjaxHelper_SendType.Mvc:
                    settings.data = postData;
                    settings.dataType = 'json';
                    break;
                case AjaxHelper_SendType.WebApi:
                    if (postData != undefined) {
                        settings.data = JSON.stringify(postData);
                    }
                    settings.contentType = "application/json";
                    break;

                default:
                    console.error("Error sending type of ajax.");
                    return;
            }

            switch (type) {
                case AjaxHelper_Type.POST:
                    settings.type = "POST";
                    break;
                case AjaxHelper_Type.GET:
                    settings.type = "GET";
                    break;

                default:
                    console.error("Error type of ajax.");
                    return;
            }

            $.ajax(settings);
        }

    }

    export class SessionStorageHelper {
        static set(key: string, value: any): void {
            let jsonValue: string = JSON.stringify(value);

            window.sessionStorage.setItem(key, jsonValue);
        }

        static get(key: string): any {
            let jsonValue: string | null = window.sessionStorage.getItem(key);

            if (jsonValue == null) {
                return null;
            } else {
                return JSON.parse(jsonValue);
            }
        }

        static getStroage(): Storage {
            return window.sessionStorage;
        }
    }

    export class CookieHelper {
        static set(cname: string, cvalue: any, exdays: number, isJson: boolean = true) {
            if (cvalue == undefined) {
                cvalue = null;
            }

            let d = new Date();
            d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));

            let expires = "expires=" + d.toUTCString();

            let jsonValue: string = cvalue;
            if (isJson) {
                jsonValue = JSON.stringify(jsonValue);
            }

            document.cookie = cname + "=" + jsonValue + ";" + expires + ";path=/";
        }

        static get(cname: string, isJson: boolean = true) {
            let name = cname + "=";
            let decodedCookie = decodeURIComponent(document.cookie);
            let ca = decodedCookie.split(';');
            for (let i: number = 0; i < ca.length; i++) {
                let c: string = ca[i];
                while (c.charAt(0) == ' ') {
                    c = c.substring(1);
                }
                if (c.indexOf(name) == 0) {
                    let jsonValue = c.substring(name.length, c.length);

                    if (isJson) {
                        return JSON.parse(jsonValue);
                    }
                    else {
                        return jsonValue;
                    }
                }
            }
            return null;
        }
    }

    // math
    export class MathHelper {
        // min <= value < range
        public static getBaseLog(x: number, y: number) {
            return Math.log(y) / Math.log(x);
        }
    }
    //// math

    // function
    export class SleepHelper {
        public static sleep(milliseconds: number) {
            let start: number = new Date().getTime();
            for (let i: number = 0; i < 1e7; i++) {
                if ((new Date().getTime() - start) > milliseconds) {
                    break;
                }
            }
        }
    }
    export class RandomHelper {
        // min <= value < range
        public static makeRandomBetweenInteger(min: number, range: number) {
            return Math.floor((Math.random() * range) + min);
        }

        public static makeRandomBetweenFloat(min: number, range: number) {
            return (Math.random() * range) + min;
        }
    }
    export class TimeSpanHelper {
        static _showLog: boolean = false;
        name: string;
        date1: Date;
        date2: Date;

        constructor(name: string, start?: boolean) {
            this.name = name;

            this.date1 = new Date();
            this.date2 = new Date();

            if (start) {
                this.start();
            }
        }

        public start() {
            //console.log("TimeSpan: start '" + this.name + "'.");
            this.date1 = new Date();
        }
        public stop() {
            this.date2 = new Date();

            let timespan = TimeSpanHelper.timeSpan(this.date1, this.date2);

            if (TimeSpanHelper._showLog) {
                console.log("TimeSpan: finish '" + this.name + "'." + " Time ragne ='" + timespan + "'.");
            }
        }
        private get() {
            let timespan = TimeSpanHelper.timeSpan(this.date1, this.date2);

            if (TimeSpanHelper._showLog) {
                console.log("TimeSpan: time ragne '" + this.name + "'= '" + timespan + "'.");
            }
        }

        public static timeSpanLogByFunction(func: Function, tagName: string) {
            let timespan = new TimeSpanHelper(tagName, true);

            func();

            timespan.stop();
        }

        public static showLog(value: boolean) {
            TimeSpanHelper._showLog = value;
        }

        public static timeSpan(date1: Date, date2: Date) {
            let diff = date2.getTime() - date1.getTime();

            let days = Math.floor(diff / (1000 * 60 * 60 * 24));
            diff -= days * (1000 * 60 * 60 * 24);

            let hours = Math.floor(diff / (1000 * 60 * 60));
            diff -= hours * (1000 * 60 * 60);

            let mins = Math.floor(diff / (1000 * 60));
            diff -= mins * (1000 * 60);

            let seconds = Math.floor(diff / (1000));
            diff -= seconds * (1000);

            let milliseconds = diff;

            let timeSpan = days + ", " + hours + ":" + mins + ":" + seconds + "," + diff;

            return timeSpan;
        }
    }
    export class LoggerHelper {
        // 0: simple log (simple message about program flow, exception message, and input data when exception)
        // 1: data log (program flow method name, small data)
        // 2: all log (big data, exception detail)
        private static NowLogLevel = 0;

        public static Logger(obj: any) {
            if (LoggerHelper.NowLogLevel >= 0) {
                console.log(obj);
            }
        }
        public static Debugger(obj: any) {
            if (LoggerHelper.NowLogLevel >= 1) {
                console.log(obj);
            }
        }
        public static DeepDebug(obj: any) {
            if (LoggerHelper.NowLogLevel >= 2) {
                console.log(obj);
            }
        }
    }
    export class DateHelper {
        // format: yyyy-MM-dd HH:mm:ss.SSS,
        static get(date: Date, splitSign: string = "T", isShowMS: boolean = false): string {
            let curr_year: string = NumberHelper.positiveIntegerFormat(date.getFullYear(), 4);
            let curr_month: string = NumberHelper.positiveIntegerFormat(date.getMonth() + 1, 2);
            let curr_date: string = NumberHelper.positiveIntegerFormat(date.getDate(), 2);

            let curr_hours: string = NumberHelper.positiveIntegerFormat(date.getHours(), 2);
            let curr_minutes: string = NumberHelper.positiveIntegerFormat(date.getMinutes(), 2);
            let curr_seconds: string = NumberHelper.positiveIntegerFormat(date.getSeconds(), 2);
            let curr_milliseconds: string = NumberHelper.positiveIntegerFormat(date.getMilliseconds(), 3);

            let str: string = curr_year + "-" + curr_month + "-" + curr_date + splitSign + curr_hours + ":" + curr_minutes + ":" + curr_seconds;

            if (isShowMS) {
                str += "." + curr_milliseconds;
            }

            return str;
        }
        static nGet(date: Date, splitSign: string = "T", splitSign2: string = "-", splitSign3: string = ":", isShowMS: boolean = false): string {
            let curr_year: string = NumberHelper.positiveIntegerFormat(date.getFullYear(), 4);
            let curr_month: string = NumberHelper.positiveIntegerFormat(date.getMonth() + 1, 2);
            let curr_date: string = NumberHelper.positiveIntegerFormat(date.getDate(), 2);

            let curr_hours: string = NumberHelper.positiveIntegerFormat(date.getHours(), 2);
            let curr_minutes: string = NumberHelper.positiveIntegerFormat(date.getMinutes(), 2);
            let curr_seconds: string = NumberHelper.positiveIntegerFormat(date.getSeconds(), 2);
            let curr_milliseconds: string = NumberHelper.positiveIntegerFormat(date.getMilliseconds(), 3);

            let str: string =
                curr_year + splitSign2 + curr_month + splitSign2 + curr_date
                + splitSign
                + curr_hours + splitSign3 + curr_minutes + splitSign3 + curr_seconds;

            if (isShowMS) {
                str += "." + curr_milliseconds;
            }

            return str;
        }
        static getDate(date: Date): string {
            let curr_year: string = NumberHelper.positiveIntegerFormat(date.getFullYear(), 4);
            let curr_month: string = NumberHelper.positiveIntegerFormat(date.getMonth() + 1, 2);
            let curr_date: string = NumberHelper.positiveIntegerFormat(date.getDate(), 2);

            let str: string = curr_year + "-" + curr_month + "-" + curr_date;

            return str;
        }

        static getUTC(date: Date, splitSign: string = "T", isShowMS: boolean = false): string {
            let curr_year: string = NumberHelper.positiveIntegerFormat(date.getUTCFullYear(), 4);
            let curr_month: string = NumberHelper.positiveIntegerFormat(date.getUTCMonth() + 1, 2);
            let curr_date: string = NumberHelper.positiveIntegerFormat(date.getUTCDate(), 2);

            let curr_hours: string = NumberHelper.positiveIntegerFormat(date.getUTCHours(), 2);
            let curr_minutes: string = NumberHelper.positiveIntegerFormat(date.getUTCMinutes(), 2);
            let curr_seconds: string = NumberHelper.positiveIntegerFormat(date.getUTCSeconds(), 2);
            let curr_milliseconds: string = NumberHelper.positiveIntegerFormat(date.getUTCMilliseconds(), 3);

            let str: string = curr_year + "-" + curr_month + "-" + curr_date + splitSign + curr_hours + ":" + curr_minutes + ":" + curr_seconds;

            if (isShowMS) {
                str += "." + curr_milliseconds;
            }

            return str;
        }

        static getNow(): string {
            let now = new Date();
            let strNow = DateHelper.get(now, " ");

            return strNow;
        }
    }
    //// end function

    // struct
    export class StringHelper {
        public static format(...iArgs: any[]) {
            var args = arguments;

            return args[0].replace(/{(\d+)}/g, function (searchValue: string | RegExp, replaceValue: string) {
                let value: number = Number(replaceValue) + 1;

                return typeof args[value] != 'undefined' ? args[value] : searchValue;
            });
        }
    }
    export class NumberHelper {

        public static toFixed(value: number, precision: number = 2): string {
            let tmp = Math.pow(10, precision);

            return (Math.round(value * tmp) / tmp).toFixed(precision);
        }

        /**
         * If input can trun into number than return value, else return null.
         * @param input
         */
        public static toNum(input: any, defaultValue?: number): number {
            if (input == null || isNaN(+input)) {
                if (typeof defaultValue != 'number') {
                    defaultValue = 0;
                }

                return defaultValue;
            }

            return +input;
        }

        /**
         * check if a value's type is number. If not return default value or null.
         * @param value
         * @param defaultValue
         */
        public static getNumber(value: any, defaultValue?: number): number {
            if (typeof value != 'number') {
                if (typeof defaultValue != 'number') {
                    defaultValue = 0;
                }

                value = defaultValue;
            }

            return value;
        }

        public static getMaxValue(v1: any, v2: any): number {
            v1 = NumberHelper.getNumber(v1, Number.MIN_VALUE);
            v2 = NumberHelper.getNumber(v2, Number.MIN_VALUE);

            return Math.max(v1, v2);
        }

        public static getMinValue(v1: any, v2: any): number {
            v1 = NumberHelper.getNumber(v1, Number.MAX_VALUE);
            v2 = NumberHelper.getNumber(v2, Number.MAX_VALUE);

            return Math.min(v1, v2);
        }

        public static positiveIntegerFormat(value: number, digits: number): string {
            if (value < 0) {
                return value.toString();
            }
            else if (value === 0) {
                return Array(digits + 1).join("0");
            }

            let currentDigits: number | null = Math.floor(Math.log(value) / Math.log(10));
            currentDigits = NumberHelper.getNumber(currentDigits, 0);

            digits = digits - currentDigits;
            if (digits < 0 || !isFinite(digits) || isNaN(digits)) {
                digits = 0;
            }

            //console.log(Array(digits).join("0") + value);

            return Array(digits).join("0") + value;
        }
    }
    export class ArrayHelper {
        public static getToArray(option: any): any {
            if (option != null && option.length == null) {
                option = [option];
            }

            return option;
        }
    }
    export class PropertyHelper {
        public static readonly of = <TObj>(name: keyof TObj) => name;

        public static getProperties(obj: any): Array<string> {
            let properties: Array<string> = [];

            for (let property in obj) {
                properties.push(property);
            }

            if (properties.length < 1) {
                console.log("This obj has no property.");
                console.log(obj);
            }

            return properties;
        }

        public static assignProperties(obj: any, prop: any, value: any) {
            if (typeof prop === "string")
                prop = prop.split(".");

            if (prop.length > 1) {
                let e: any = prop.shift();
                PropertyHelper.assignProperties(obj[e] =
                    Object.prototype.toString.call(obj[e]) === "[object Object]"
                        ? obj[e]
                        : {},
                    prop,
                    value);
            } else {
                obj[prop[0]] = value;
            }
        }
    }

    export class CloneHelper {
        public static ConvertTo(targetObj: any, fromObj: any) {
            if (!("object" == typeof targetObj && "object" == typeof fromObj)) {
                return fromObj;
            }

            if (targetObj instanceof Object && fromObj instanceof Object) {
                for (let attr in targetObj) {
                    if (targetObj.hasOwnProperty(attr) && fromObj.hasOwnProperty(attr)) {
                        targetObj[attr] = CloneHelper.ConvertTo(targetObj[attr], fromObj[attr]);
                    }
                }

                return targetObj;
            }

            return fromObj;
        }

        // reference: http://stackoverflow.com/questions/28150967/typescript-cloning-object
        public static deepCopy(obj: any) {
            let copy: { [key: string]: any };

            // Handle the 3 simple types, and null or undefined
            if (null == obj || "object" != typeof obj) {
                return obj;
            }

            // Handle Date
            if (obj instanceof Date) {
                let copyDate = new Date();
                copyDate.setTime(obj.getTime());
                return copyDate;
            }
            // Handle Array
            else if (obj instanceof Array) {
                copy = [];
                for (let i: number = 0, len = obj.length; i < len; i++) {
                    copy[i] = CloneHelper.deepCopy(obj[i]);
                }
                return copy;
            }
            // Handle Object
            else if (obj instanceof Object) {
                copy = {};
                for (let attr in obj) {
                    if (obj.hasOwnProperty(attr)) copy[attr] = CloneHelper.deepCopy(obj[attr]);
                }
                return copy;
            }

            throw new Error("Unable to copy obj! Its type isn't supported.");
        }
    }
    //// end struct

    // image
    export class ImageHelper {
        private static _imgArray: { [imgPath: string]: HTMLImageElement; };

        public static getImage(imgPath: string): HTMLImageElement {
            if (ImageHelper._imgArray == null) {
                ImageHelper._imgArray = {};
            }

            if (ImageHelper._imgArray[imgPath] == null) {
                let img = new Image();
                img.src = imgPath;

                ImageHelper._imgArray[imgPath] = img;
            }

            return ImageHelper._imgArray[imgPath];
        }
    }
    //// end custom image

    // custom image
    export enum MyImageNames {
        asterisk_pink,
        circle_blue,
        circle_gray,
        circle_lime,
        circle_red,
        circle_yellow,

        diamond_backcolor,
        diamond_gray,
        diamond_lime,
        diamond_red,
        diamond_yellow,

        inverted_triangle_blue,
        inverted_triangle_gray,
        inverted_triangle_lime,
        inverted_triangle_red,
        refresh_button,

        square_blue,
        square_gray,
        square_lime,
        square_red,
        square_yellow,
    }
    export class MyImage {
        public static rootPath = "../../";

        public static initialize() {
            MyImage.get(MyImageNames.asterisk_pink);
            MyImage.get(MyImageNames.circle_blue);
            MyImage.get(MyImageNames.circle_gray);
            MyImage.get(MyImageNames.circle_lime);
            MyImage.get(MyImageNames.circle_red);
            MyImage.get(MyImageNames.circle_yellow);

            MyImage.get(MyImageNames.diamond_backcolor);
            MyImage.get(MyImageNames.diamond_gray);
            MyImage.get(MyImageNames.diamond_lime);
            MyImage.get(MyImageNames.diamond_red);
            MyImage.get(MyImageNames.diamond_yellow);

            MyImage.get(MyImageNames.inverted_triangle_blue);
            MyImage.get(MyImageNames.inverted_triangle_gray);
            MyImage.get(MyImageNames.inverted_triangle_lime);
            MyImage.get(MyImageNames.inverted_triangle_red);
            MyImage.get(MyImageNames.refresh_button);

            MyImage.get(MyImageNames.square_blue);
            MyImage.get(MyImageNames.square_gray);
            MyImage.get(MyImageNames.square_lime);
            MyImage.get(MyImageNames.square_red);
            MyImage.get(MyImageNames.square_yellow);
        }

        public static get(name: MyImageNames): HTMLImageElement {
            //console.log("MyImage.get: " + name);

            let path = MyImage.getPath(name);

            return ImageHelper.getImage(path);
        }

        public static getPath(name: MyImageNames): string {
            let path: string = MyImage.rootPath + "Images/svg/";

            //console.log("rootPath: " + path);

            switch (name) {
                case MyImageNames.asterisk_pink:
                    path += "asterisk_pink.svg";
                    break;

                case MyImageNames.circle_blue:
                    path += "circle_blue.svg";
                    break;

                case MyImageNames.circle_gray:
                    path += "circle_gray.svg";
                    break;

                case MyImageNames.circle_lime:
                    path += "circle_lime.svg";
                    break;

                case MyImageNames.circle_red:
                    path += "circle_red.svg";
                    break;

                case MyImageNames.circle_yellow:
                    path += "circle_yellow.svg";
                    break;

                case MyImageNames.diamond_backcolor:
                    path += "diamond_backcolor.svg";
                    break;

                case MyImageNames.diamond_gray:
                    path += "diamond_gray.svg";
                    break;

                case MyImageNames.diamond_lime:
                    path += "diamond_lime.svg";
                    break;

                case MyImageNames.diamond_red:
                    path += "diamond_red.svg";
                    break;

                case MyImageNames.diamond_yellow:
                    path += "diamond_yellow.svg";
                    break;

                case MyImageNames.inverted_triangle_blue:
                    path += "inverted_triangle_blue.svg";
                    break;

                case MyImageNames.inverted_triangle_gray:
                    path += "inverted_triangle_gray.svg";
                    break;

                case MyImageNames.inverted_triangle_lime:
                    path += "inverted_triangle_lime.svg";
                    break;

                case MyImageNames.inverted_triangle_red:
                    path += "inverted_triangle_red.svg";
                    break;

                case MyImageNames.refresh_button:
                    path += "online/refresh-button.svg";
                    break;

                case MyImageNames.square_blue:
                    path += "square_blue.svg";
                    break;

                case MyImageNames.square_gray:
                    path += "square_gray.svg";
                    break;

                case MyImageNames.square_lime:
                    path += "square_lime.svg";
                    break;

                case MyImageNames.square_red:
                    path += "square_red.svg";
                    break;

                case MyImageNames.square_yellow:
                    path += "square_yellow.svg";
                    break;

                default:
                    path = "";
                    break;
            }

            return path;
        }
    }
    //// end custom image

    // chart unit
    export enum UnitStatus { Base2, Base5, Base10 }
    export class UnitHelper {
        /**
         * Find unit of range
         * @param max
         * @param min
         */
        public static findUnit(max: number, min: number): number {
            let range = Math.abs(max - min);

            let log10 = Math.log(range) / Math.log(10);

            let unit = Math.pow(10, Math.floor(log10));

            return unit;
        }

        /**
         * Find number of unit by upper bound, lower bound, and unit
         * @param unit
         * @param addUnitNum
         */
        private static findNewUnit(unit: number, addUnitNum: boolean): number {
            //     2    2.5    2    2   2.5   2    2   2.5
            // 0.1 | 0.2 | 0.5 |  1 |  2 |  5 | 10 | 20 | 50

            let base2Num = 2.5;
            let base5Num = 2;
            let base10Num = 2;

            // add UnitNum: Subtract unit
            if (addUnitNum) {
                base2Num = 1.0 / 2;
                base5Num = 1.0 / 2.5;
                base10Num = 1.0 / 2;
            }

            let unitStatus = UnitHelper.findCurrentStatus(unit);

            switch (unitStatus) {
                case UnitStatus.Base2:
                    unit *= base2Num;
                    break;

                case UnitStatus.Base5:
                    unit *= base5Num;
                    break;

                case UnitStatus.Base10:
                    unit *= base10Num;
                    break;

                default:
                    break;
            }

            return unit;
        }

        public static findNewUnitByRange(unit: number, max: number, min: number, targetNum: number, aboveTarget: boolean): number {
            let unitNum = UnitHelper.findUnitNum(unit, max, min);
            let LIMIT_COUNT = 100;

            for (let i: number = 0; i < LIMIT_COUNT; i++) {
                // find unit
                if ((aboveTarget && (unitNum >= targetNum)) || (!aboveTarget && (unitNum <= targetNum))) {
                    LIMIT_COUNT = 101;
                    break;
                }
                unit = UnitHelper.findNewUnit(unit, aboveTarget);
                unitNum = UnitHelper.findUnitNum(unit, max, min);
            }

            if (LIMIT_COUNT == 100) {
                console.log("Error 'findNewUnitByRange': can't find appropriate unit.");
            }

            return unit;
        }

        /**
         * Find number of unit by upper bound, lower bound, and unit
         * @param unit
         * @param max
         * @param min
         */
        public static findUnitNum(unit: number, max: number, min: number): number {
            let upper = UnitHelper.findBound(unit, max, max, true);
            let lower = UnitHelper.findBound(unit, max, min, false);

            let unitNum: number = Math.ceil(upper / unit) - Math.floor(lower / unit) + 1;

            return unitNum;
        }

        /**
         * Find upper bound or lower bound by unit and target
         * @param unit
         * @param max
         * @param min
         * @param upper
         */
        public static findBound(unit: number, max: number, min: number, upper: boolean): number {
            let range = Math.abs(max - min);
            let plusBound = unit * Math.floor(range / unit * 0.1);

            let matchUnit: number;

            if (upper) {
                matchUnit = unit * Math.ceil((max + range * 0.05) / unit);
            }
            else {
                matchUnit = unit * Math.floor((min - range * 0.05) / unit);
            }

            return matchUnit;
        }

        // find status of unit
        private static findCurrentStatus(unit: number): UnitStatus {
            let unitStatus: UnitStatus = UnitStatus.Base10;

            let value = NumberHelper.getNumber(unit);

            if (value != null && value != 0) {
                let reciprocal: boolean = false;
                if (Math.abs(value) < 1) {
                    value = 1.0 / value;

                    reciprocal = true;
                }

                //// unit should be format 1, 2, 5, 10, 20, ...
                //// so we can use below code to identify it
                //if (value % 10 == 0) {
                //    unitStatus = UnitStatus.Base10;
                //}

                // get most significant value
                let valueUnit = UnitHelper.findUnit(value, 0);
                value = value / valueUnit;

                if (reciprocal) {
                    value = 10.0 / value;
                }

                if (value == 5) {
                    unitStatus = UnitStatus.Base5;
                }
                else if (value == 2) {
                    unitStatus = UnitStatus.Base2;
                }
                //////
            }

            return unitStatus;
        }
    }
    //// end chart unit

    // create elements
    export namespace ElementsHelper {
        export function CreateFlexSample(input: JQuery) {
            let main = $("<div id='kk'></div>");
            main.css("height", "90%");
            main.css("min-width", "600px");

            for (let i = 0; i < 2; i++) {
                let top = $("<div></div>");
                top.css("display", "flex");
                top.css("width", "100%");
                top.css("height", "60%");
                top.css("background", "yellow");

                let buttom = $("<div></div>");
                buttom.css("display", "flex");
                buttom.css("width", "100%");
                buttom.css("height", "40%");
                buttom.css("background", "green");

                let inner2 = $("<div></div>");
                inner2.css("border", "1px solid hsl(0, 0%, 80%)");
                inner2.css("background", "hsl(0, 0%, 90%)");
                inner2.css("height", "100%");
                inner2.append(top);
                inner2.append(buttom);

                let inner = $("<div></div>");
                inner.css("margin", "8px");
                inner.css("background", "#f5f5f5");
                inner.css("width", "100%");
                inner.append(inner2);

                let item = $("<div></div>");
                item.css("display", "inline-flex");
                item.css("height", "100%");
                item.css("width", "50%");
                item.append(inner);

                main.append(item);
            }

            input.append(main);
        }

        export function CreateLegends(data: Array<LegendsStruct>, title: string) {
            let legends = document.createElement("div");
            legends.style.border = "1px solid #d1d1d1";
            legends.style.display = "inline-block";
            legends.style.padding = "4px 8px";
            legends.style.verticalAlign = "top";

            if (title != null && title != "") {
                let titleElem = document.createElement("div");
                titleElem.style.fontWeight = "bold";
                titleElem.style.display = "inline-block";
                //textElem.style.paddingBottom = "12px";
                titleElem.style.verticalAlign = "text-bottom";
                titleElem.innerText = title;

                let titleOuterElem = document.createElement("div");
                titleOuterElem.appendChild(titleElem);

                $(legends).append(titleOuterElem);
            }

            for (let datum of data) {
                let legendItemDiv = ElementsHelper.CreateLegend(datum);

                $(legends).append(legendItemDiv);
            }

            return legends;
        }

        export function CreateLegend(datum: LegendsStruct): JQuery {
            let LegendDiv = $(document.createElement("div"));
            LegendDiv.css('display', 'inline-block');

            let textElem = document.createElement("div");
            textElem.innerText = datum.text;
            textElem.style.verticalAlign = "middle";
            textElem.style.display = "inline-block";
            textElem.style.padding = "2px";

            let imageElem = document.createElement("img");
            imageElem.setAttribute("src", datum.imgPath);
            imageElem.setAttribute("alt", "");
            imageElem.style.verticalAlign = "middle";
            imageElem.style.display = "inline-block";
            imageElem.style.paddingLeft = "12px";
            imageElem.style.height = "16px";
            imageElem.style.width = "16px";

            LegendDiv.append(imageElem);
            LegendDiv.append(textElem);

            return LegendDiv;
        }

        export function CreatePropertyLable(id: string, title: string, value: string) {
            let mainDiv = $("<div>");
            mainDiv.addClass("propertyLable");

            let titleDiv = $("<div>");
            titleDiv.addClass("title");
            titleDiv.text(title);

            let spanSpace = $("<span>");
            spanSpace.css("display", "inline-block");
            spanSpace.css("width", "20px");

            let valueDiv = $("<span>");
            valueDiv.addClass("text");
            valueDiv.attr('id', id);
            valueDiv.append(value);

            mainDiv.append(titleDiv);
            mainDiv.append(spanSpace);
            mainDiv.append(valueDiv);

            return mainDiv;
        }

        export class LegendsStruct {
            imgPath: string;
            text: string;

            constructor(imgPath: string, text: string) {
                this.imgPath = imgPath;
                this.text = text;
            }
        }
    }
    //// end create elements
}