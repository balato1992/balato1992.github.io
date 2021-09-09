import { Injectable } from '@angular/core';

import { InvestingDatum } from 'src/shared-class/InvestingDatum';
import { NgxChartSeriesRow } from 'src/shared-class/NgxChartSeriesRow';
import { NgxChartDatum } from 'src/shared-class/NgxChartDatum';
import { TradeInfo } from 'src/shared-class/TradeInfo';

@Injectable({
  providedIn: 'root'
})
export class DataProcessingService {

  constructor() { }

  getTradeDates(inputFromDate: Date, inputToDate: Date): Date[] {

    let fromDate = new Date(inputFromDate);
    let toDate = new Date(inputToDate);

    let dates: Date[] = [];
    while (toDate > fromDate) {

      if (fromDate.getDate() == 6) {
        dates.push(new Date(fromDate));
      }

      fromDate.setDate(fromDate.getDate() + 1);
    }

    return dates;
  }

  getTradeInfo(priceSource: NgxChartSeriesRow[], tradeDates: Date[]): TradeInfo[] {
    let arr: TradeInfo[] = [];
    let indexOfLastTarget = 0;

    for (let date of tradeDates) {

      let targetItem = undefined;
      for (let i = indexOfLastTarget; i < priceSource.length; i++) {

        let sourceDate = priceSource[i]['name'];
        let sourcePrice = priceSource[i]['value'];

        if (date <= sourceDate) {

          targetItem = new TradeInfo(sourceDate, sourcePrice);
          indexOfLastTarget = i;
          break;
        }
      }

      if (targetItem === undefined) {
        throw 'tradeInfo not found: ' + date;
      }

      arr.push(targetItem);
    }

    return arr;
  }

  getDollarCostAveraging(tradeInfos: TradeInfo[], money: number): InvestingDatum[] {

    let arr: InvestingDatum[] = [];

    let lastDatum: InvestingDatum | undefined;
    for (let tradeInfo of tradeInfos) {
      let date = tradeInfo.date;
      let price = tradeInfo.price;
      let shareCount = (money - money % price) / price;
      let cumulativeShareCount = (lastDatum?.cumulativeShareCount ?? 0) + shareCount;
      let cumulativeDollarCost = (lastDatum?.cumulativeDollarCost ?? 0) + price * shareCount;

      lastDatum = new InvestingDatum(date, price, shareCount, cumulativeShareCount, cumulativeDollarCost);
      arr.push(lastDatum);
    }

    return arr;
  }
  getValueAveraging(tradeInfos: TradeInfo[], money: number): InvestingDatum[] {

    let arr: InvestingDatum[] = [];

    let lastDatum: InvestingDatum | undefined;
    let count = 0;
    for (let tradeInfo of tradeInfos) {
      let date = tradeInfo.date;
      let price = tradeInfo.price;

      let lastCumulativeShareCount = (lastDatum?.cumulativeShareCount ?? 0);
      let amountRequied = ++count * money;
      let funding = amountRequied - lastCumulativeShareCount * price;

      let shareCount = (funding - funding % price) / price;
      let cumulativeShareCount = lastCumulativeShareCount + shareCount;
      let cumulativeDollarCost = (lastDatum?.cumulativeDollarCost ?? 0) + price * shareCount;

      lastDatum = new InvestingDatum(date, price, shareCount, cumulativeShareCount, cumulativeDollarCost);
      arr.push(lastDatum);
    }

    return arr;
  }

  getChartDatum(investingData: InvestingDatum[]): NgxChartDatum[] {

    let results: NgxChartDatum[] = [];
    let series1: NgxChartSeriesRow[] = [];
    let series2: NgxChartSeriesRow[] = [];
    for (let datum of investingData) {
      series1.push(new NgxChartSeriesRow(datum.tradeDate, datum.currentValue));
      series2.push(new NgxChartSeriesRow(datum.tradeDate, datum.cumulativeDollarCost));
    }
    results.push(new NgxChartDatum('Value(Portfolio)', series1));
    results.push(new NgxChartDatum('Dollar-Cost(Investment)', series2));

    return results;
  }


  getData(rawData: NgxChartSeriesRow[], startDate: Date, endDate: Date) {

    let tradeDates = this.getTradeDates(startDate, endDate);

    let tradeInfos: TradeInfo[] = this.getTradeInfo(rawData, tradeDates);

    let infoOfDCA: InvestingDatum[] = this.getDollarCostAveraging(tradeInfos, 1000);
    let chartResultsOfDCA = this.getChartDatum(infoOfDCA);

    let infoOfVA: InvestingDatum[] = this.getValueAveraging(tradeInfos, 1000);
    let chartResultsOfVA = this.getChartDatum(infoOfVA);

    return {
      infoOfDCA: infoOfDCA,
      chartResultsOfDCA: chartResultsOfDCA,
      infoOfVA: infoOfVA,
      chartResultsOfVA: chartResultsOfVA,
    };
  }
}
