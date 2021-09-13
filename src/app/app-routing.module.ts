import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { LINK_INFOS } from './global-variables';
import { LinkInfo } from './classes/LinkInfo';

let animationCount = 0;
let flatLinkInfos = function (arr: LinkInfo[]) {
  let tmp: Routes = [];

  arr.forEach((e, index) => {
    tmp.push({
      path: e.url,
      component: e.component,
      data: { animation: 'a-' + animationCount++ }
    });

    if (e.subLink !== undefined) {
      let t = flatLinkInfos(e.subLink);
      tmp = tmp.concat(t);
    }
  });

  return tmp;
}
let tmpRoutes: Routes = flatLinkInfos(LINK_INFOS);

const routes: Routes = [
  ...tmpRoutes,
  { path: '', redirectTo: '/main', pathMatch: 'full' },
  { path: '404', component: PageNotFoundComponent, data: { animation: 'a-' + animationCount++ } },
  { path: '**', redirectTo: '/404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
