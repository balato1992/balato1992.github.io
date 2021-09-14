import { Component, Input, SimpleChanges } from '@angular/core';

import { InvestingDatum } from 'src/shared-class/InvestingDatum';
import { NgxChartSeriesRow } from 'src/shared-class/NgxChartSeriesRow';
import { NgxChartDatum } from 'src/shared-class/NgxChartDatum';
import { DataProcessingService } from 'src/app/services/data-processing.service';

@Component({
  selector: 'app-investment-result-and-source',
  templateUrl: './investment-result-and-source.component.html',
  styleUrls: ['./investment-result-and-source.component.scss']
})
export class InvestmentResultAndSourceComponent {

  @Input() serie!: NgxChartDatum;

  title: string = '';
  targetSource: NgxChartDatum[] | undefined;
  data!: {
    title: string,
    info: InvestingDatum[],
    chartResults: NgxChartDatum[]
  }[] | undefined;

  constructor(private dps: DataProcessingService) { }

  ngOnChanges(changes: SimpleChanges) {
    let serie = changes.serie.currentValue;

    if (serie !== undefined) {
      this.processing(serie);
    } else {
      this.resetData();
    }
  }

  resetData() {
    this.title = '';
    this.targetSource = undefined;
    this.data = undefined;
  }
  processing(serie: NgxChartDatum) {

    let series = serie.series;

    let { maxDate, minDate } = NgxChartSeriesRow.getDateRange(series);

    let { infoOfDCA, chartResultsOfDCA, infoOfVA, chartResultsOfVA, }
      = this.dps.getData(series, minDate, maxDate);

    this.targetSource = [serie];
    this.title = serie.name;
    this.data = [{
      title: 'Dollar-Cost Averaging',
      info: infoOfDCA,
      chartResults: chartResultsOfDCA
    }, {
      title: 'Value Averaging',
      info: infoOfVA,
      chartResults: chartResultsOfVA
    }];
  }
}
