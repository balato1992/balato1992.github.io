import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainPageComponent } from './page-main/page-main.component';
import { TestContentComponent } from './test-content/test-content.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PageProjectsAndExamplesComponent } from './page-projects-and-examples/page-projects-and-examples.component';

const routes: Routes = [
  { path: 'main', component: MainPageComponent },
  { path: 'sidenav', component: TestContentComponent },
  { path: 'sidenav/page1', component: TestContentComponent },
  { path: 'sidenav/page2', component: TestContentComponent },
  { path: 'sidenav/page3', component: TestContentComponent },
  { path: 'projects-and-examples', component: PageProjectsAndExamplesComponent },
  { path: '', redirectTo: '/main', pathMatch: 'full' },
  { path: '404', component: PageNotFoundComponent },
  { path: '**', redirectTo: '/404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
