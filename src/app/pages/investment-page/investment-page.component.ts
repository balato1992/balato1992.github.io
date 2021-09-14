import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatStep, MatStepper } from '@angular/material/stepper';

import { InvestingDatum } from 'src/shared-class/InvestingDatum';
import { NgxChartSeriesRow } from 'src/shared-class/NgxChartSeriesRow';
import { NgxChartDatum } from 'src/shared-class/NgxChartDatum';
import { TradeInfo } from 'src/shared-class/TradeInfo';
import { DataSourceService } from 'src/app/services/data-source.service';
import { DataProcessingService } from 'src/app/services/data-processing.service';

@Component({
  selector: 'app-investment-page',
  templateUrl: './investment-page.component.html',
  styleUrls: ['./investment-page.component.scss']
})
export class InvestmentPageComponent implements OnInit {

  @ViewChild('stepper') private stepper!: MatStepper;
  @ViewChild('step1') private step1!: MatStep;
  @ViewChild('step2') private step2!: MatStep;

  step1FormGroup!: FormGroup;
  step1Submitted: boolean = false;
  get step1SelectedIndex() { return this.step1FormGroup.get('step1SelectedIndex')!; }

  s2FormGroup!: FormGroup;
  s2Submitted: boolean = false;
  get s2StartDate() { return this.s2FormGroup.get('s2StartDate')!; }
  get s2EndDate() { return this.s2FormGroup.get('s2EndDate')!; }

  resultsSet: NgxChartDatum[] | undefined = undefined;
  step1Data!: { seriesInfo: NgxChartDatum, maxDate: Date, minDate: Date };
  step2ViewRangeData: NgxChartDatum[] | undefined = undefined;

  step3Data!: NgxChartDatum;

  constructor(
    private _formBuilder: FormBuilder,
    private dss: DataSourceService,
    private dps: DataProcessingService) { }

  ngOnInit(): void {

    this.step1FormGroup = this._formBuilder.group({
      step1SelectedIndex: ['', Validators.required]
    });
    this.s2FormGroup = this._formBuilder.group({
      s2StartDate: ['', Validators.required],
      s2EndDate: ['', Validators.required],
    });


    this.dss.getSources()
      .subscribe(source => {
        this.resultsSet = source;

        if (this.resultsSet.length > 0) {
          this.step1SelectedIndex.setValue(0);
        }
      });
  }

  stepperSelectionChange(event: any) {
    let selectedIndex = event.selectedIndex;

    // TODO: completed after data changed, not header seletion changed
    if (selectedIndex <= 0) {
      this.step1.completed = false;
    }
    if (selectedIndex <= 1) {
      this.step2.completed = false;
    }
  }

  onStep1Submit() {
    this.step1Submitted = true;

    if (this.step1FormGroup.invalid) {
      return;
    }

    let seriesInfo = this.resultsSet![this.step1SelectedIndex.value];

    let { maxDate, minDate } = NgxChartSeriesRow.getDateRange(seriesInfo.series);

    this.step1Data = {
      seriesInfo: seriesInfo,
      maxDate: maxDate,
      minDate: minDate,
    };

    this.s2StartDate.setValue(minDate);
    this.s2EndDate.setValue(maxDate);
    this.setStep2RagneData();

    this.step1.completed = true;
    this.stepper.next();
  }
  onStep2Submit() {
    console.log('onStep2Submit');
    this.s2Submitted = true;

    if (this.s2FormGroup.invalid) {
      return;
    }

    let datum: NgxChartDatum = this.getRagneData(this.step1Data.seriesInfo, this.s2StartDate.value, this.s2EndDate.value);
    this.step3Data = datum;

    this.step2.completed = true;
    this.stepper.next();
  }
  dataRangeChange(event: any) {

    this.setStep2RagneData();
  }

  setStep2RagneData() {

    let datum: NgxChartDatum = this.getRagneData(this.step1Data.seriesInfo, this.s2StartDate.value, this.s2EndDate.value);
    datum.name = 'Range';

    this.step2ViewRangeData = [this.step1Data.seriesInfo, datum];
  }

  getRagneData(priceSource: NgxChartDatum, inputFromDate: Date, inputToDate: Date): NgxChartDatum {
    let tradeDates = this.dps.getTradeDates(inputFromDate, inputToDate);

    let tradeInfos: TradeInfo[] = this.dps.getTradeInfo(priceSource.series, tradeDates);

    let series: NgxChartSeriesRow[] = [];
    for (let datum of tradeInfos) {
      series.push(new NgxChartSeriesRow(datum.date, datum.price));
    }

    return new NgxChartDatum(priceSource.name, series);
  }

}

