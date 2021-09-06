export class NgxChartSeriesRow {
  name: Date;
  value: number;

  constructor(name: Date, value: number) {
    this.name = name;
    this.value = value;
  }


  static getDateRange(arr: NgxChartSeriesRow[]) {

    let maxDate = new Date(-8640000000000000);
    let minDate = new Date(8640000000000000);
    arr.forEach(row => {
      let date = row.name;

      if (maxDate < date) {
        maxDate = date;
      }
      if (minDate > date) {
        minDate = date;
      }
    });

    return {
      maxDate: maxDate,
      minDate: minDate,
    };
  }
}