import { NgModule } from '@angular/core';
import { RouterModule, Routes, UrlSegment } from '@angular/router';

import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { ToolsPageComponent } from './pages/tools-page/tools-page.component';
import { LINK_INFOS } from './global-variables';
import { LinkInfo } from './classes/LinkInfo';

let animationCount = 0;
const getRouteStateName = () => 'a-' + animationCount++;

let flatLinkInfos = (arr: LinkInfo[]) => {
  let rtnRoutes: Routes = [];

  arr.forEach((linkInfo, index) => {

    rtnRoutes.push({
      path: linkInfo.url,
      component: linkInfo.component,
      data: {
        animation: getRouteStateName()
      },
    });

    if (linkInfo.subLink !== undefined) {
      let tmpRoutes = flatLinkInfos(linkInfo.subLink);
      rtnRoutes = rtnRoutes.concat(tmpRoutes);
    }
  });

  return rtnRoutes;
}
let flatRoutes: Routes = flatLinkInfos(LINK_INFOS);

const routes: Routes = [
  {
    matcher: (url) => {
      //console.log(url);
      if (url.length > 0 && url[0].path.match(/hide/)) {
        return {
          consumed: [url[0]],
          posParams: {
            hideLayout: new UrlSegment("hide", {})
          }
        };
      }

      return null;
    },
    children: [...flatRoutes]
  },
  ...flatRoutes,
  { path: '', redirectTo: '/about', pathMatch: 'full' },
  { path: 'tools', component: ToolsPageComponent, data: { animation: getRouteStateName() } },
  { path: '404', component: PageNotFoundComponent, data: { animation: getRouteStateName() } },
  { path: '**', redirectTo: '/404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
