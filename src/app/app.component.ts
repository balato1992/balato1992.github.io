import { ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { MediaMatcher } from '@angular/cdk/layout';
import { filter } from 'rxjs/operators';

import { MatSidenav } from '@angular/material/sidenav';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-sample';

  @ViewChild('leftSidenav') leftSidenav!: MatSidenav;
  isSidenavVisible: boolean = false;
  mobileQuery: MediaQueryList;
  private _mobileQueryListener: (e: MediaQueryListEvent) => void;

  constructor(
    router: Router,
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
    matIconRegistry: MatIconRegistry,
    domSanitizer: DomSanitizer) {

    router.events.pipe(
      filter(e => e instanceof NavigationEnd)
    ).subscribe(event => this.updateSidenavVisibilty(event as NavigationEnd));

    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = (e: MediaQueryListEvent) => changeDetectorRef.detectChanges();
    this.mobileQuery.addEventListener('change', this._mobileQueryListener);

    matIconRegistry.addSvgIcon(
      "githubicon",
      domSanitizer.bypassSecurityTrustResourceUrl("../assets/GitHub-white.svg")
    );
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeEventListener('change', this._mobileQueryListener);
  }

  updateSidenavVisibilty(event: NavigationEnd) {
    // console.log(event);

    let isSidenavVisible = this.getSidenavVisibilty(event.urlAfterRedirects, '/sidenav');

    this.isSidenavVisible = isSidenavVisible;
    this.leftSidenav.opened = isSidenavVisible;
  }

  getSidenavVisibilty(url: string, prefix: string) {
    return url === prefix || url.startsWith(prefix + '/');
  }
}
