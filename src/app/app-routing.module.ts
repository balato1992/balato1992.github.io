import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { LINK_INFOS } from './global-variables';
import { LinkInfo } from './classes/LinkInfo';

let animationCount = 0;
const getRouteStateName = () => 'a-' + animationCount++;

let flatLinkInfos = (arr: LinkInfo[]) => {
  let tmpRoutes: Routes = [];

  arr.forEach((linkInfo, index) => {
    tmpRoutes.push({
      path: linkInfo.url,
      component: linkInfo.component,
      data: { animation: getRouteStateName() }
    });

    if (linkInfo.subLink !== undefined) {
      let t = flatLinkInfos(linkInfo.subLink);
      tmpRoutes = tmpRoutes.concat(t);
    }
  });

  return tmpRoutes;
}
let tmpRoutes: Routes = flatLinkInfos(LINK_INFOS);

const routes: Routes = [
  ...tmpRoutes,
  { path: '', redirectTo: '/investment/versus', pathMatch: 'full' },
  { path: '404', component: PageNotFoundComponent, data: { animation: getRouteStateName() } },
  { path: '**', redirectTo: '/404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
