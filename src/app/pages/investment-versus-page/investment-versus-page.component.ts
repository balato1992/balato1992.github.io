import { Component, OnInit } from '@angular/core';

import { NgxChartDatum } from 'src/shared-class/NgxChartDatum';
import { DataSourceService } from 'src/app/services/data-source.service';

@Component({
  selector: 'app-investment-versus-page',
  templateUrl: './investment-versus-page.component.html',
  styleUrls: ['./investment-versus-page.component.scss']
})
export class InvestmentVersusPageComponent implements OnInit {

  serie!: NgxChartDatum;

  constructor(private dss: DataSourceService) { }

  ngOnInit(): void {
    this.dss.getSources().subscribe(source => {

      let find = source.find(e => e.name.includes('0050'));
      if (find !== undefined) {
        this.serie = find;
      }
    });
  }
}
