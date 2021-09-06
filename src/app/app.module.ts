import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from './app.component';
import { MainPageComponent } from './pages/page-main/page-main.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { TestContentComponent } from './pages/test-content/test-content.component';
import { ToolbarComponent } from './pages/toolbar/toolbar.component';
import { SidenavComponent } from './pages/sidenav/sidenav.component';
import { PageProjectsAndExamplesComponent } from './pages/page-projects-and-examples/page-projects-and-examples.component';



@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    PageNotFoundComponent,
    TestContentComponent,
    ToolbarComponent,
    SidenavComponent,
    PageProjectsAndExamplesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
