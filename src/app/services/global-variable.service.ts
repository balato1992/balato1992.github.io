import { Injectable } from '@angular/core';
import { Router, UrlTree } from '@angular/router';

export class LinkInfo {
  displayName: string;
  url: string[];
  subLink: LinkInfo[] | undefined;

  constructor(displayName: string, url: string[], subLink?: LinkInfo[]) {
    this.displayName = displayName;
    this.url = url;
    this.subLink = subLink;
  }
}

const LINK_DATA: LinkInfo[] = [
  new LinkInfo("Main", ['/main']),
  new LinkInfo("SideNav", ['/sidenav'], [
    new LinkInfo("Page 1", ['/', 'sidenav', 'page1']),
    new LinkInfo("Page 2", ['/', 'sidenav', 'page2']),
    new LinkInfo("Page 3", ['/', 'sidenav', 'page3'])
  ]),
];

@Injectable({
  providedIn: 'root'
})
export class GlobalVariableService {

  mobileQuery!: MediaQueryList;
  LinkInfos: LinkInfo[] = LINK_DATA;

  get isMobile(): boolean {
    return this.mobileQuery.matches;
  }

  constructor() { }

  // 20210910: check if there is a linkInfo is active and has subLink
  checkLinkActiveAndSub(linkInfos: LinkInfo[], router: Router): boolean {
    // todo: 20210909: figure out IsActiveMatchOptions params

    for (let linkInfo of linkInfos) {

      let url: string | UrlTree = router.createUrlTree(linkInfo.url);
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
