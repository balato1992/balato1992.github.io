import { Injectable } from '@angular/core';

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
}
