import * as fs from 'fs';
import * as  moment from 'moment';
import { NgxChartSeriesRow } from '../shared-class/NgxChartSeriesRow';
import { NgxChartDatum } from '../shared-class/NgxChartDatum';


class Format {

    static csvToArray(str: string): NgxChartSeriesRow[] {

        let newLine = '\r\n';
        let delimiter = ',';

        //const headers = str.slice(0, str.indexOf(newLine)).split(delimiter);
        const rows = str.slice(str.indexOf(newLine) + newLine.length).split(newLine);

        let output = [];
        for (let row of rows) {

            let values = row.split(delimiter);
            let trimedValues = [];

            for (let value of values) {
                let trimed = value.replace(/['"]+/g, '');
                trimedValues.push(trimed);
            }


            let date = moment(trimedValues[0], 'YYYY年MM月DD日').toDate();
            let value = Number(trimedValues[1]);

            let obj = new NgxChartSeriesRow(date, value);

            output.push(obj);
        }

        return output;
    }

    static formatData(inputFilePath: string): NgxChartSeriesRow[] {

        let inputStr = fs.readFileSync(inputFilePath, 'utf8');

        let data = this.csvToArray(inputStr);

        return data;
    }
}

class CustomData {

    static createDate(): Date[] {

        let start = new Date('2001-01-01');
        let end = new Date('2006-01-01');

        let dates = [];
        while (end > start) {

            if (start.getDate() === 6 ||
                start.getDate() === 16 ||
                start.getDate() === 26) {

                dates.push(new Date(start));
            }

            start.setDate(start.getDate() + 1);
        }

        return dates;
    }
    static processInfo(dates: Date[], func: (x: number) => number): NgxChartSeriesRow[] {

        let items: NgxChartSeriesRow[] = [];
        let dateCount = dates.length;
        for (let i = 0; i < dates.length; i++) {

            let item = new NgxChartSeriesRow(dates[i], func(i / dateCount));

            items.push(item);
        }

        return items;
    }
    static build(): NgxChartDatum[] {

        let FuncInfo = class {
            name: string;
            func: (x: number) => number;

            constructor(name: string, func: (x: number) => number) {
                this.name = name;
                this.func = func;
            }
        }

        let dates = this.createDate();
        let funcInfos = [
            new FuncInfo('Sample 1', (x) => { return 10 * x + 50; }),
            new FuncInfo('Sample 2', (x) => { return 30 * x + 50; }),
            new FuncInfo('Sample 3', (x) => { return -10 * x + 50; }),
            new FuncInfo('Sample 4', (x) => { return -30 * x + 50; }),

            new FuncInfo('Sample 5', (x) => {
                if (x < 0.5) return 10 * x + 50;
                else return -10 * x + 50 + 10;
            }),
            new FuncInfo('Sample 6', (x) => {
                if (x < 0.5) return 30 * x + 50;
                else return -30 * x + 50 + 30;
            }),
            new FuncInfo('Sample 7', (x) => {
                if (x < 0.5) return -10 * x + 50;
                else return 10 * x + 50 - 10;
            }),
            new FuncInfo('Sample 8', (x) => {
                if (x < 0.5) return -30 * x + 50;
                else return 30 * x + 50 - 30;
            }),

            new FuncInfo('Sample 9', (x) => {
                if (x < 0.25) return 50 * x + 50;
                if (x < 0.75) return -50 * x + 50 + 25;
                else return 50 * x + 50 - 50;
            }),
            new FuncInfo('Sample 10', (x) => {
                if (x < 0.25) return -50 * x + 50;
                if (x < 0.75) return 50 * x + 50 - 25;
                else return -50 * x + 50 + 50;
            }),
        ];

        let arr: NgxChartDatum[] = [];
        funcInfos.forEach((funcInfo) => {

            let data = this.processInfo(dates, funcInfo.func);

            arr.push(new NgxChartDatum(funcInfo.name, data));
        });

        return arr;
    }
}


function writeData(outputFileName: string) {

    let data: NgxChartDatum[] = [];

    let dataRows_0050: NgxChartSeriesRow[] = Format.formatData(__dirname + '/history_0050.csv');
    data.push(new NgxChartDatum('Yuanta/P-shares Taiwan Top 50 ETF (0050.TW)', dataRows_0050));

    let customData: NgxChartDatum[] = CustomData.build();
    data = data.concat(customData);


    let path = __dirname + outputFileName;
    fs.writeFileSync(path, 'export let strData = \'' + JSON.stringify(data) + '\';');
}

writeData('/customData.ts');
