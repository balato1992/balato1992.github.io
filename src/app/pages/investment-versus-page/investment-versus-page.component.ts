import { Component, OnInit } from '@angular/core';

import { InvestingDatum } from 'src/shared-class/InvestingDatum';
import { NgxChartSeriesRow } from 'src/shared-class/NgxChartSeriesRow';
import { NgxChartDatum } from 'src/shared-class/NgxChartDatum';
import { DataSourceService } from 'src/app/services/data-source.service';
import { DataProcessingService } from 'src/app/services/data-processing.service';

@Component({
  selector: 'app-investment-versus-page',
  templateUrl: './investment-versus-page.component.html',
  styleUrls: ['./investment-versus-page.component.scss']
})
export class InvestmentVersusPageComponent implements OnInit {

  targetSource!: NgxChartDatum[];
  title!: string;
  data!: {
    title: string,
    info: InvestingDatum[],
    chartResults: NgxChartDatum[]
  }[];

  constructor(
    private dss: DataSourceService,
    private dps: DataProcessingService) { }

  ngOnInit(): void {

    this.dss.getSources().subscribe(source => this.processing(source));
  }

  processing(source: NgxChartDatum[]) {

    let find = source.find(e => e.name.includes('0050'));
    if (find !== undefined) {

      let series = find.series;

      let { maxDate, minDate } = NgxChartSeriesRow.getDateRange(series);

      let { infoOfDCA, chartResultsOfDCA, infoOfVA, chartResultsOfVA, }
        = this.dps.getData(series, minDate, maxDate);

      this.targetSource = [find];
      this.title = find.name;
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
}
