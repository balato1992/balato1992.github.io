import { ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { MediaMatcher } from '@angular/cdk/layout';
import { DomSanitizer } from '@angular/platform-browser';
import { filter } from 'rxjs/operators';

import { MatSidenav } from '@angular/material/sidenav';
import { MatIconRegistry } from '@angular/material/icon';
import { GlobalVariableService, LinkInfo } from './services/global-variable.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-sample';

  @ViewChild('leftSidenav') leftSidenav!: MatSidenav;
  private _mobileQueryListener: (e: MediaQueryListEvent) => void;

  get isMobile(): boolean {
    return this.gvs.isMobile;
  }
  get linkInfos(): LinkInfo[] {
    return this.gvs.LinkInfos;
  }

  constructor(
    private router: Router,
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
    matIconRegistry: MatIconRegistry,
    domSanitizer: DomSanitizer,
    private gvs: GlobalVariableService) {

    router.events.pipe(
      filter(e => e instanceof NavigationEnd)
    ).subscribe(event => this.updateSidenavVisibilty(event as NavigationEnd));

    // 20210909: detect window width
    gvs.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = (e: MediaQueryListEvent) => changeDetectorRef.detectChanges();
    gvs.mobileQuery.addEventListener('change', this._mobileQueryListener);

    matIconRegistry.addSvgIcon(
      "githubicon",
      domSanitizer.bypassSecurityTrustResourceUrl("../assets/GitHub.svg")
    );
  }

  ngOnDestroy(): void {
    this.gvs.mobileQuery.removeEventListener('change', this._mobileQueryListener);
  }

  updateSidenavVisibilty(event: NavigationEnd) {
    // console.log(event);

    this.leftSidenav.opened = !this.isMobile && this.gvs.checkLinkActiveAndSub(this.linkInfos, this.router);
  }
}
