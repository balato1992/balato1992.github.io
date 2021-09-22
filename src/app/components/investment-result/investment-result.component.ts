import { formatNumber, formatDate } from '@angular/common';
import { Component, Inject, Input, LOCALE_ID, OnChanges, SimpleChanges } from '@angular/core';
import { GlobalMethodsService } from 'src/app/services/global-methods.service';
import { InvestingDatum } from 'src/shared-class/InvestingDatum';
import { NgxChartDatum } from 'src/shared-class/NgxChartDatum';

@Component({
  selector: 'app-investment-result',
  templateUrl: './investment-result.component.html',
  styleUrls: ['./investment-result.component.scss']
})
export class InvestmentResultComponent implements OnChanges {

  @Input() data!: InfoForStatistic[];

  statistics!: ViewDatum[];
  displayedColumnInfos!: ViewColumnInfo[];
  get displayedColumns(): String[] {
    return this.displayedColumnInfos.map(i => i.strIndex);
  }
  displayedData!: any[];


  get isMobile(): boolean {
    return this.gvs.isMobile;
  }

  constructor(@Inject(LOCALE_ID) private locale: string, private gvs: GlobalMethodsService) { }

  ngOnChanges(changes: SimpleChanges) {

    this.statistics = [];
    this.displayedColumnInfos = [];
    this.displayedData = [];

    if (changes.data !== undefined && changes.data.currentValue !== undefined) {

      let results = this.getStatistics(changes.data.currentValue);

      this.statistics = results.statistics;
      this.displayedColumnInfos = results.displayedColumnInfos;
      this.displayedData = results.displayedData;
    }
  }

  getStatistics(data: InfoForStatistic[]): {
    statistics: ViewDatum[],
    displayedColumnInfos: ViewColumnInfo[],
    displayedData: any[],
  } {

    let _this = this;

    let statistics: ViewDatum[] = [ViewDatum.createHeader()];
    for (let datum of data) {

      let vd = ViewDatum.createByInfo(
        datum,
        (value: number, digitsInfo?: string): string => {
          return formatNumber(value, _this.locale, digitsInfo);
        },
        (value: Date): string => {
          return formatDate(value, 'yyyy/MM/dd', _this.locale);
        });

      //console.log(vd);

      statistics.push(vd);
    }

    let displayedColumnInfos = statistics.map(datum => new ViewColumnInfo(datum.title, datum.index));
    let displayedData =
      Object.getOwnPropertyNames(new ViewDatum())
        .filter(p => p !== 'title' && p !== 'index') // already used
        .map(prop => {
          const output: any = {};

          for (let i = 0; i < statistics.length; i++) {
            output[statistics[i].index] = statistics[i][prop as keyof ViewDatum];
          }

          return output;
        });

    return {
      statistics,
      displayedColumnInfos,
      displayedData,
    };
  }
}

class InfoForStatistic {
  title: string = '';
  info: InvestingDatum[] = [];
  chartResults: NgxChartDatum[] = [];
}

class ViewColumnInfo {
  title: string = '';
  strIndex: string = '';

  constructor(title: string, index: number) {
    this.title = title;
    this.strIndex = index.toString();
  }
}

class ViewDatum {
  title: string = '--';
  description: string = '--';
  dateRange: string = '--';
  maxMinCost: string = '--';
  totalCost: string = '--';
  currentValue: string = '--';
  gain: string = '--';

  index: number = -1;
  static global_index: number = 0;

  constructor(init?: Partial<ViewDatum>) {
    Object.assign(this, init);

    this.index = ViewDatum.global_index++;
  }

  static createByInfo(datum: InfoForStatistic, formatNumber: any, formatDate: any) {

    let rtn = new ViewDatum({
      title: datum.title,
      description: 'Invest on the 1st of each month',
    });

    let info = datum.info;
    let count = info.length;

    if (count === 0) {
      return rtn;
    }

    let maxCostPerUnit = Number.MIN_VALUE;
    let minCostPerUnit = Number.MAX_VALUE;
    info.forEach(i => {
      let d = i.dollarCost;
      if (d > maxCostPerUnit) {
        maxCostPerUnit = d;
      }
      if (d < minCostPerUnit) {
        minCostPerUnit = d;
      }
    });

    let maxDate = new Date(-8640000000000000);
    let minDate = new Date(8640000000000000);
    info.forEach(i => {
      let d = i.tradeDate;
      if (d > maxDate) {
        maxDate = d;
      }
      if (d < minDate) {
        minDate = d;
      }
    });

    let lastInfo = info[count - 1];
    let currentValue = lastInfo.currentValue;
    let totalCost = lastInfo.cumulativeDollarCost;
    let gain = currentValue - totalCost;
    let percentageGain = gain / totalCost * 100;

    return new ViewDatum({
      title: datum.title,
      description: 'Invest on the 1st of each month',
      dateRange: formatDate(minDate) + '-' + formatDate(maxDate) + ' (' + formatNumber(count) + ' months)',
      maxMinCost: formatNumber(maxCostPerUnit, '1.0-0') + '/' + formatNumber(minCostPerUnit, '1.0-0'),
      currentValue: formatNumber(currentValue, '1.0-0'),
      totalCost: formatNumber(totalCost, '1.0-0'),
      gain: formatNumber(gain, '1.0-0') + ' (' + formatNumber(percentageGain, '1.2-2') + '%)',
    });
  }

  static createHeader() {
    return new ViewDatum({
      title: '',
      description: 'Description',
      dateRange: 'Date Range',
      maxMinCost: 'Max/Min Investment of months',
      currentValue: 'Current Value',
      totalCost: 'Total Investment',
      gain: 'Gain (%)',
    });
  }
}