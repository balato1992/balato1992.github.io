import { ChangeDetectorRef, Component, OnDestroy, ViewChild } from '@angular/core';
import { ActivatedRoute, ChildrenOutletContexts, NavigationEnd, Router } from '@angular/router';
import { MediaMatcher } from '@angular/cdk/layout';
import { DomSanitizer } from '@angular/platform-browser';
import { filter, map } from 'rxjs/operators';

import { MatSidenav } from '@angular/material/sidenav';
import { MatIconRegistry } from '@angular/material/icon';

import { GlobalMethodsService } from './services/global-methods.service';
import { LinkInfo } from './classes/LinkInfo';
import { FADE_ANIMATION, LINK_INFOS, MENU_BTN_ANIMATION } from './global-variables';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [FADE_ANIMATION, MENU_BTN_ANIMATION]
})
export class AppComponent implements OnDestroy {
  title = 'angular-sample';

  @ViewChild('leftSidenav') leftSidenav!: MatSidenav;
  @ViewChild('container') navContainer!: any;

  private _mobileQueryListener: (e: MediaQueryListEvent) => void;
  routerHasNav: boolean = false;

  get isMobile(): boolean {
    return this.gvs.isMobile;
  }
  get linkInfos(): LinkInfo[] {
    return LINK_INFOS;
  }
  get isShownMenu(): boolean {
    return this.isMobile || this.routerHasNav;
  }

  hideLayout: boolean = false;

  constructor(
    route: ActivatedRoute,
    private router: Router,
    private contexts: ChildrenOutletContexts,
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
    matIconRegistry: MatIconRegistry,
    domSanitizer: DomSanitizer,
    private gvs: GlobalMethodsService) {

    this.initializeEvents(router, route);

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

  ngAfterViewInit(): void {
    // 2021/09/06: leftSidenav openedChange trigger resize to resize chart

    //console.log('ngAfterViewInit');
    this.leftSidenav.openedChange.subscribe(e => {
      //console.log('subscribe');
      window.dispatchEvent(new Event('resize'));
    });
  }

  initializeEvents(router: Router, route: ActivatedRoute) {

    let navEnd$ = router.events.pipe(
      filter(e => e instanceof NavigationEnd),
      map(e => e as NavigationEnd),
    );
    navEnd$.subscribe(event => {
      //console.log("--NavigationEnd");
      this.scrollToTop();

      this.updateSidenavVisibilty(event);

      // check if url has '/hide'
      route.firstChild?.paramMap.subscribe({
        next: (params) => {
          this.hideLayout = params.get('hideLayout') === 'hide';
        }
      });
    });
  }

  getRouteAnimationData() {
    return this.contexts.getContext('primary')?.route?.snapshot?.data?.['animation'];
  }

  updateSidenavVisibilty(event: NavigationEnd) {
    // console.log(event);

    this.routerHasNav = this.gvs.currentRouterHasNav(this.router);
    this.leftSidenav.opened = !this.isMobile && this.routerHasNav;
  }

  scrollToTop() {
    this.navContainer.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }
}
