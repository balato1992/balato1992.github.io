import { Directive, Host } from '@angular/core';
import { LineChartComponent } from '@swimlane/ngx-charts';

@Directive({
  selector: '[appTflNgxCLC]'
})
export class TflNgxChartsLineChartDirective {

  constructor(@Host() private lcc: LineChartComponent) {

    this.lcc.legend = true;
    this.lcc.xAxis = true;
    this.lcc.yAxis = true;

    //this.lcc.autoScale = true;
    this.lcc.roundDomains = true;
  }
}
