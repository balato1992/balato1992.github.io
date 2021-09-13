import { ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { MediaMatcher } from '@angular/cdk/layout';
import { DomSanitizer } from '@angular/platform-browser';
import { filter } from 'rxjs/operators';

import { MatSidenav } from '@angular/material/sidenav';
import { MatIconRegistry } from '@angular/material/icon';
import { GlobalMethodsService } from './services/global-methods.service';
import { LinkInfo } from './classes/LinkInfo';
import { FADE_ANIMATION, LINK_INFOS } from './global-variables';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [FADE_ANIMATION]
})
export class AppComponent {
  title = 'angular-sample';

  @ViewChild('leftSidenav') leftSidenav!: MatSidenav;
  private _mobileQueryListener: (e: MediaQueryListEvent) => void;

  get isMobile(): boolean {
    return this.gvs.isMobile;
  }
  get linkInfos(): LinkInfo[] {
    return LINK_INFOS;
  }

  constructor(
    private router: Router,
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
    matIconRegistry: MatIconRegistry,
    domSanitizer: DomSanitizer,
    private gvs: GlobalMethodsService) {

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

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
  }

  updateSidenavVisibilty(event: NavigationEnd) {
    // console.log(event);

    this.leftSidenav.opened = !this.isMobile && this.gvs.checkLinkActiveAndSub(this.router);
  }
}
