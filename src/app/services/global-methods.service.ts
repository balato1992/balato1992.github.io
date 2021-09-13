import { Injectable } from '@angular/core';
import { Router, UrlTree } from '@angular/router';
import { LINK_INFOS } from '../global-variables';


@Injectable({
  providedIn: 'root'
})
export class GlobalMethodsService {

  mobileQuery!: MediaQueryList;

  get isMobile(): boolean {
    return this.mobileQuery.matches;
  }

  constructor() { }

  // 20210910: check if there is a linkInfo is active and has subLink
  currentRouterHasNav(router: Router): boolean {
    // todo: 20210909: figure out IsActiveMatchOptions params

    for (let linkInfo of LINK_INFOS) {

      let url: string = linkInfo.url;
      let isActive = router.isActive(url, {
        matrixParams: 'subset',
        queryParams: 'subset',
        paths: 'subset',
        fragment: 'exact'
      });

      if (isActive && linkInfo.subLink !== undefined) {
        return true;
      }
    }
    return false;
  }
}
