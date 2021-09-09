import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { strData } from 'src/data/customData';
import { NgxChartDatum } from 'src/shared-class/NgxChartDatum';

@Injectable({
  providedIn: 'root'
})
export class DataSourceService {

  constructor() { }

  getSources(): Observable<NgxChartDatum[]> {

    return of(NgxChartDatum.parseArr(strData));
  }
}
