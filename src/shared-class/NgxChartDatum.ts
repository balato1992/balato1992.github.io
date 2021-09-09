import { NgxChartSeriesRow } from "./NgxChartSeriesRow";

export class NgxChartDatum {
  name: string = '';
  series: NgxChartSeriesRow[] = [];

  constructor(name: string, series: NgxChartSeriesRow[]) {

    this.name = name;

    series.sort((a, b) => {
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

  static parseArr(strArr: string): NgxChartDatum[] {

    let rtn: NgxChartDatum[] = JSON.parse(strArr);

    for (let item of rtn) {

      for (let i = 0; i < item.series.length; i++) {
        item.series[i].name = new Date(item.series[i].name);
      }
    }

    return rtn;
  }
}
