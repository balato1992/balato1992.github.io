import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InvestmentPageComponent } from './pages/investment-page/investment-page.component';
import { InvestmentVersusPageComponent } from './pages/investment-versus-page/investment-versus-page.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { PageProjectsAndExamplesComponent } from './pages/page-projects-and-examples/page-projects-and-examples.component';

const routes: Routes = [
  { path: 'investment/versus', component: InvestmentVersusPageComponent },
  { path: 'investment/custom', component: InvestmentPageComponent },
  { path: 'projects-and-examples', component: PageProjectsAndExamplesComponent },
  { path: '', redirectTo: '/investment/versus', pathMatch: 'full' },
  { path: '404', component: PageNotFoundComponent },
  { path: '**', redirectTo: '/404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
