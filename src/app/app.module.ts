import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DecimalPipe } from '@angular/common';

import { NgxChartsModule } from '@swimlane/ngx-charts';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';

import { MathjaxModule } from 'mathjax-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { InvestmentPageComponent } from './pages/investment-page/investment-page.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { InvestmentVersusPageComponent } from './pages/investment-versus-page/investment-versus-page.component';
import { PreviewPageComponent } from './pages/preview-page/preview-page.component';
import { SidenavLinkItemComponent } from './pages/sidenav-link-item/sidenav-link-item.component';
import { KellyCriterionPageComponent } from './pages/kelly-criterion-page/kelly-criterion-page.component';
import { ToolsPageComponent } from './pages/tools-page/tools-page.component';
import { DiagramPageComponent } from './pages/diagram-page/diagram-page.component';

import { InvestmentResultComponent } from './components/investment-result/investment-result.component';
import { InvestmentResultAndSourceComponent } from './components/investment-result-and-source/investment-result-and-source.component';
import { TflNgxChartsLineChartDirective } from './directives/tfl-ngx-charts-line-chart.directive';
import { AboutComponent } from './pages/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    InvestmentPageComponent,
    PageNotFoundComponent,
    InvestmentResultComponent,
    TflNgxChartsLineChartDirective,
    InvestmentVersusPageComponent,
    PreviewPageComponent,
    SidenavLinkItemComponent,
    InvestmentResultAndSourceComponent,
    KellyCriterionPageComponent,
    ToolsPageComponent,
    DiagramPageComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgxChartsModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatCardModule,
    MatDatepickerModule,
    MatDividerModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatStepperModule,
    MatTableModule,
    MatToolbarModule,
    MatTooltipModule,
    MathjaxModule.forRoot()
  ],
  providers: [DecimalPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
