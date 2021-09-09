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
  new LinkInfo("Investment", ['/', 'investment', 'versus'], [
    new LinkInfo("DCA versus VA", ['/', 'investment', 'versus']), //Dollar Cost Averaging, Value Averaging
    new LinkInfo("Custom", ['/', 'investment', 'custom']),
  ]),
  new LinkInfo("Projects&Examples", ['/projects-and-examples']),
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

  customFormatNumber(num: number, exponent: number = 0) {
    let base = Math.pow(10, exponent);

    return Math.round(num * base) / base;
  }
}
