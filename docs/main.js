"use strict";
(self["webpackChunkangular_sample"] = self["webpackChunkangular_sample"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _pages_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/page-not-found/page-not-found.component */ 8340);
/* harmony import */ var _global_variables__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./global-variables */ 7544);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);





let animationCount = 0;
const getRouteStateName = () => 'a-' + animationCount++;
let flatLinkInfos = (arr) => {
    let rtnRoutes = [];
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
};
let flatRoutes = flatLinkInfos(_global_variables__WEBPACK_IMPORTED_MODULE_1__.LINK_INFOS);
const routes = [
    {
        matcher: (url) => {
            //console.log(url);
            if (url.length > 0 && url[0].path.match(/hide/)) {
                return {
                    consumed: [url[0]],
                    posParams: {
                        hideLayout: new _angular_router__WEBPACK_IMPORTED_MODULE_2__.UrlSegment("hide", {})
                    }
                };
            }
            return null;
        },
        children: [...flatRoutes]
    },
    ...flatRoutes,
    { path: '', redirectTo: '/about', pathMatch: 'full' },
    { path: '404', component: _pages_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_0__.PageNotFoundComponent, data: { animation: getRouteStateName() } },
    { path: '**', redirectTo: '/404' }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 9151);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 6942);
/* harmony import */ var _global_variables__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./global-variables */ 7544);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/layout */ 3278);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _services_global_methods_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/global-methods.service */ 7028);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/list */ 6517);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/sidenav */ 6643);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/toolbar */ 2543);
/* harmony import */ var _pages_sidenav_link_item_sidenav_link_item_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/sidenav-link-item/sidenav-link-item.component */ 753);
















const _c0 = ["leftSidenav"];
const _c1 = ["container"];
function AppComponent_mat_toolbar_1_ng_container_8_button_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const linkInfo_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", linkInfo_r5.url);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", linkInfo_r5.displayName, " ");
} }
function AppComponent_mat_toolbar_1_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, AppComponent_mat_toolbar_1_ng_container_8_button_1_Template, 2, 2, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r3.linkInfos);
} }
function AppComponent_mat_toolbar_1_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-toolbar", 11)(1, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AppComponent_mat_toolbar_1_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r7); _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](4); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](_r1.toggle()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "menu");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "button", 13)(5, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "cottage");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, " Hong Cheng-Wei ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, AppComponent_mat_toolbar_1_ng_container_8_Template, 2, 1, "ng-container", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "mat-icon", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("@menuBtnAnimation", ctx_r0.isShownMenu ? "show" : "hidden");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", "/");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r0.isMobile);
} }
const _c2 = function (a0) { return { "hide-layout": a0 }; };
const _c3 = function () { return []; };
const _c4 = function () { return [0]; };
class AppComponent {
    constructor(route, router, contexts, changeDetectorRef, media, matIconRegistry, domSanitizer, gvs) {
        this.router = router;
        this.contexts = contexts;
        this.gvs = gvs;
        this.title = 'angular-sample';
        this.routerHasNav = false;
        this.hideLayout = false;
        this.initializeEvents(router, route);
        // 20210909: detect window width
        gvs.mobileQuery = media.matchMedia('(max-width: 600px)');
        this._mobileQueryListener = (e) => changeDetectorRef.detectChanges();
        gvs.mobileQuery.addEventListener('change', this._mobileQueryListener);
        matIconRegistry.addSvgIcon("githubicon", domSanitizer.bypassSecurityTrustResourceUrl("../assets/GitHub.svg"));
    }
    get isMobile() {
        return this.gvs.isMobile;
    }
    get linkInfos() {
        return _global_variables__WEBPACK_IMPORTED_MODULE_0__.LINK_INFOS;
    }
    get isShownMenu() {
        return this.isMobile || this.routerHasNav;
    }
    ngOnDestroy() {
        this.gvs.mobileQuery.removeEventListener('change', this._mobileQueryListener);
    }
    ngAfterViewInit() {
        // 2021/09/06: leftSidenav openedChange trigger resize to resize chart
        //console.log('ngAfterViewInit');
        this.leftSidenav.openedChange.subscribe(e => {
            //console.log('subscribe');
            window.dispatchEvent(new Event('resize'));
        });
    }
    initializeEvents(router, route) {
        let navEnd$ = router.events.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.filter)(e => e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_5__.NavigationEnd), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)(e => e));
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
    updateSidenavVisibilty(event) {
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
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.ChildrenOutletContexts), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_7__.MediaMatcher), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIconRegistry), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__.DomSanitizer), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_global_methods_service__WEBPACK_IMPORTED_MODULE_1__.GlobalMethodsService)); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], viewQuery: function AppComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c1, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.leftSidenav = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.navContainer = _t.first);
    } }, decls: 13, vars: 11, consts: [[1, "vertical-flex", 2, "height", "100vh"], ["color", "primary", "class", "toolbar", 4, "ngIf"], [1, "sidenav", 3, "ngClass"], [2, "background-color", "hsl(0 0% 95%)", 3, "mode"], ["leftSidenav", ""], [3, "linkInfos", "hiddenLevels", "currentLevel"], [2, "display", "flex", "flex-direction", "column"], ["container", ""], [2, "display", "grid", "flex", "1 1 auto", "width", "100%"], [2, "display", "none"], [1, "custom-primary", "vertical-flex", 2, "padding", "24px", "text-align", "center"], ["color", "primary", 1, "toolbar"], ["mat-icon-button", "", 1, "hover-effect", 3, "click"], ["mat-flat-button", "", "color", "primary", 1, "hover-effect", "title-font", 3, "routerLink"], [4, "ngIf"], [1, "spacer"], ["mat-icon-button", "", "color", "primary", "href", "https://github.com/balato1992/balato1992.github.io/", 1, "hover-effect"], ["svgIcon", "githubicon", 2, "color", "#fff"], ["mat-flat-button", "", "color", "primary", "class", "hover-effect", 3, "routerLink", 4, "ngFor", "ngForOf"], ["mat-flat-button", "", "color", "primary", 1, "hover-effect", 3, "routerLink"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, AppComponent_mat_toolbar_1_Template, 12, 3, "mat-toolbar", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "mat-sidenav-container", 2)(3, "mat-sidenav", 3, 4)(5, "mat-nav-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "app-sidenav-link-item", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "mat-sidenav-content", 6, 7)(9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](10, "router-outlet", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, " Copyright \u00A9 2021 \u6D2A\u665F\u5D34(balato1992@gmail.com) All rights reserved. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.hideLayout);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](7, _c2, ctx.hideLayout));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("mode", ctx.isMobile ? "over" : "side");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("linkInfos", ctx.linkInfos)("hiddenLevels", ctx.isMobile ? _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](9, _c3) : _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](10, _c4))("currentLevel", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("@routeAnimations", ctx.getRouteAnimationData());
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterOutlet, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLink, _angular_material_button__WEBPACK_IMPORTED_MODULE_11__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_11__.MatAnchor, _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIcon, _angular_material_list__WEBPACK_IMPORTED_MODULE_12__.MatNavList, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_13__.MatSidenav, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_13__.MatSidenavContainer, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_13__.MatSidenavContent, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_14__.MatToolbar, _pages_sidenav_link_item_sidenav_link_item_component__WEBPACK_IMPORTED_MODULE_2__.SidenavLinkItemComponent], styles: [".toolbar[_ngcontent-%COMP%] {\n  min-height: 64px;\n}\n\n.sidenav[_ngcontent-%COMP%] {\n  height: calc(100% - 64px);\n}\n\n.sidenav.hide-layout[_ngcontent-%COMP%] {\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0FBQ0o7O0FBRUE7RUFDSSx5QkFBQTtBQUNKOztBQUNJO0VBQ0ksWUFBQTtBQUNSIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50b29sYmFyIHtcclxuICAgIG1pbi1oZWlnaHQ6IDY0cHg7XHJcbn1cclxuXHJcbi5zaWRlbmF2IHtcclxuICAgIGhlaWdodDogY2FsYygxMDAlIC0gNjRweCk7XHJcblxyXG4gICAgJi5oaWRlLWxheW91dCB7XHJcbiAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMCUpO1xyXG4gICAgfVxyXG59Il19 */"], data: { animation: [_global_variables__WEBPACK_IMPORTED_MODULE_0__.FADE_ANIMATION, _global_variables__WEBPACK_IMPORTED_MODULE_0__.MENU_BTN_ANIMATION] } });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @swimlane/ngx-charts */ 9575);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/autocomplete */ 8550);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/card */ 2156);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/datepicker */ 2298);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/divider */ 1528);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/form-field */ 5074);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/input */ 8562);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/list */ 6517);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/menu */ 8589);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/core */ 9121);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/radio */ 2922);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/select */ 7371);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/sidenav */ 6643);
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/material/stepper */ 4193);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/material/table */ 5288);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/material/toolbar */ 2543);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/material/tooltip */ 6896);
/* harmony import */ var mathjax_angular__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! mathjax-angular */ 8666);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/platform-browser/animations */ 7146);
/* harmony import */ var _pages_investment_page_investment_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/investment-page/investment-page.component */ 969);
/* harmony import */ var _pages_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/page-not-found/page-not-found.component */ 8340);
/* harmony import */ var _pages_investment_versus_page_investment_versus_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/investment-versus-page/investment-versus-page.component */ 7540);
/* harmony import */ var _pages_preview_page_preview_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/preview-page/preview-page.component */ 4707);
/* harmony import */ var _pages_sidenav_link_item_sidenav_link_item_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/sidenav-link-item/sidenav-link-item.component */ 753);
/* harmony import */ var _pages_kelly_criterion_page_kelly_criterion_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/kelly-criterion-page/kelly-criterion-page.component */ 7281);
/* harmony import */ var _pages_diagram_page_diagram_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/diagram-page/diagram-page.component */ 1175);
/* harmony import */ var _components_investment_result_investment_result_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/investment-result/investment-result.component */ 5694);
/* harmony import */ var _components_investment_result_and_source_investment_result_and_source_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/investment-result-and-source/investment-result-and-source.component */ 6522);
/* harmony import */ var _directives_tfl_ngx_charts_line_chart_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./directives/tfl-ngx-charts-line-chart.directive */ 706);
/* harmony import */ var _pages_about_about_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/about/about.component */ 3794);
/* harmony import */ var _components_language_language_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/language/language.component */ 5035);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 2560);












































class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineInjector"]({ providers: [_angular_common__WEBPACK_IMPORTED_MODULE_15__.DecimalPipe], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_16__.BrowserModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_17__.HttpClientModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_18__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_18__.ReactiveFormsModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_19__.BrowserAnimationsModule,
        _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_20__.NgxChartsModule,
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_21__.MatAutocompleteModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_22__.MatButtonModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_23__.MatCardModule,
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_24__.MatDatepickerModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_25__.MatDialogModule,
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_26__.MatDividerModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_27__.MatFormFieldModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_28__.MatIconModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_29__.MatInputModule,
        _angular_material_list__WEBPACK_IMPORTED_MODULE_30__.MatListModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_31__.MatMenuModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_32__.MatNativeDateModule,
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_33__.MatRadioModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_32__.MatRippleModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_34__.MatSelectModule,
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_35__.MatSidenavModule,
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_36__.MatStepperModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_37__.MatTableModule,
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_38__.MatToolbarModule,
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_39__.MatTooltipModule,
        mathjax_angular__WEBPACK_IMPORTED_MODULE_40__.MathjaxModule.forRoot()] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent,
        _pages_investment_page_investment_page_component__WEBPACK_IMPORTED_MODULE_2__.InvestmentPageComponent,
        _pages_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_3__.PageNotFoundComponent,
        _components_investment_result_investment_result_component__WEBPACK_IMPORTED_MODULE_9__.InvestmentResultComponent,
        _directives_tfl_ngx_charts_line_chart_directive__WEBPACK_IMPORTED_MODULE_11__.TflNgxChartsLineChartDirective,
        _pages_investment_versus_page_investment_versus_page_component__WEBPACK_IMPORTED_MODULE_4__.InvestmentVersusPageComponent,
        _pages_preview_page_preview_page_component__WEBPACK_IMPORTED_MODULE_5__.PreviewPageComponent,
        _pages_sidenav_link_item_sidenav_link_item_component__WEBPACK_IMPORTED_MODULE_6__.SidenavLinkItemComponent,
        _components_investment_result_and_source_investment_result_and_source_component__WEBPACK_IMPORTED_MODULE_10__.InvestmentResultAndSourceComponent,
        _pages_kelly_criterion_page_kelly_criterion_page_component__WEBPACK_IMPORTED_MODULE_7__.KellyCriterionPageComponent,
        _pages_diagram_page_diagram_page_component__WEBPACK_IMPORTED_MODULE_8__.DiagramPageComponent,
        _pages_about_about_component__WEBPACK_IMPORTED_MODULE_12__.AboutComponent,
        _components_language_language_component__WEBPACK_IMPORTED_MODULE_13__.LanguageComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_16__.BrowserModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_17__.HttpClientModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_18__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_18__.ReactiveFormsModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_19__.BrowserAnimationsModule,
        _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_20__.NgxChartsModule,
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_21__.MatAutocompleteModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_22__.MatButtonModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_23__.MatCardModule,
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_24__.MatDatepickerModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_25__.MatDialogModule,
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_26__.MatDividerModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_27__.MatFormFieldModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_28__.MatIconModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_29__.MatInputModule,
        _angular_material_list__WEBPACK_IMPORTED_MODULE_30__.MatListModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_31__.MatMenuModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_32__.MatNativeDateModule,
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_33__.MatRadioModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_32__.MatRippleModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_34__.MatSelectModule,
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_35__.MatSidenavModule,
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_36__.MatStepperModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_37__.MatTableModule,
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_38__.MatToolbarModule,
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_39__.MatTooltipModule, mathjax_angular__WEBPACK_IMPORTED_MODULE_40__.MathjaxModule] }); })();
_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵsetComponentScope"](_components_investment_result_and_source_investment_result_and_source_component__WEBPACK_IMPORTED_MODULE_10__.InvestmentResultAndSourceComponent, function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_15__.NgIf, _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_20__.LineChartComponent, _components_investment_result_investment_result_component__WEBPACK_IMPORTED_MODULE_9__.InvestmentResultComponent,
    _directives_tfl_ngx_charts_line_chart_directive__WEBPACK_IMPORTED_MODULE_11__.TflNgxChartsLineChartDirective]; }, []);


/***/ }),

/***/ 1479:
/*!*************************************!*\
  !*** ./src/app/classes/LinkInfo.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LinkInfo": () => (/* binding */ LinkInfo)
/* harmony export */ });
class LinkInfo {
    constructor(displayName, url, component, subLink) {
        this.displayName = displayName;
        this.url = url;
        this.component = component;
        this.subLink = subLink;
    }
}


/***/ }),

/***/ 6522:
/*!***************************************************************************************************!*\
  !*** ./src/app/components/investment-result-and-source/investment-result-and-source.component.ts ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InvestmentResultAndSourceComponent": () => (/* binding */ InvestmentResultAndSourceComponent)
/* harmony export */ });
/* harmony import */ var src_shared_class_NgxChartSeriesRow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/shared-class/NgxChartSeriesRow */ 5065);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_data_processing_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/data-processing.service */ 3578);




const _c0 = function (a0, a1) { return [a0, a1]; };
function InvestmentResultAndSourceComponent_ngx_charts_line_chart_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "ngx-charts-line-chart", 5);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("view", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](3, _c0, _r0.offsetWidth, _r0.offsetHeight))("results", ctx_r1.targetSource)("legend", false);
} }
function InvestmentResultAndSourceComponent_app_investment_result_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-investment-result", 6);
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("data", ctx_r2.data);
} }
class InvestmentResultAndSourceComponent {
    constructor(dps) {
        this.dps = dps;
        this.title = '';
    }
    ngOnChanges(changes) {
        let serie = changes.serie.currentValue;
        if (serie !== undefined) {
            this.processing(serie);
        }
        else {
            this.resetData();
        }
    }
    resetData() {
        this.title = '';
        this.targetSource = undefined;
        this.data = undefined;
    }
    processing(serie) {
        let series = serie.series;
        let { maxDate, minDate } = src_shared_class_NgxChartSeriesRow__WEBPACK_IMPORTED_MODULE_0__.NgxChartSeriesRow.getDateRange(series);
        let { infoOfDCA, chartResultsOfDCA, infoOfVA, chartResultsOfVA, } = this.dps.getData(series, minDate, maxDate);
        this.targetSource = [serie];
        this.title = serie.name;
        this.data = [{
                title: 'Dollar-Cost Averaging',
                info: infoOfDCA,
                chartResults: chartResultsOfDCA
            }, {
                title: 'Value Averaging',
                info: infoOfVA,
                chartResults: chartResultsOfVA
            }];
    }
}
InvestmentResultAndSourceComponent.ɵfac = function InvestmentResultAndSourceComponent_Factory(t) { return new (t || InvestmentResultAndSourceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_data_processing_service__WEBPACK_IMPORTED_MODULE_1__.DataProcessingService)); };
InvestmentResultAndSourceComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: InvestmentResultAndSourceComponent, selectors: [["app-investment-result-and-source"]], inputs: { serie: "serie" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"]], decls: 8, vars: 3, consts: [[2, "padding-top", "12px"], [2, "width", "100%", "height", "300px"], ["ContainerRef", ""], ["appTflNgxCLC", "", 3, "view", "results", "legend", 4, "ngIf"], [3, "data", 4, "ngIf"], ["appTflNgxCLC", "", 3, "view", "results", "legend"], [3, "data"]], template: function InvestmentResultAndSourceComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div")(1, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, InvestmentResultAndSourceComponent_ngx_charts_line_chart_5_Template, 1, 6, "ngx-charts-line-chart", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, InvestmentResultAndSourceComponent_app_investment_result_7_Template, 1, 1, "app-investment-result", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.targetSource !== undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.data !== undefined);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbnZlc3RtZW50LXJlc3VsdC1hbmQtc291cmNlLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 5694:
/*!*****************************************************************************!*\
  !*** ./src/app/components/investment-result/investment-result.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InvestmentResultComponent": () => (/* binding */ InvestmentResultComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_global_methods_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/global-methods.service */ 7028);
/* harmony import */ var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swimlane/ngx-charts */ 9575);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/table */ 5288);
/* harmony import */ var _directives_tfl_ngx_charts_line_chart_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../directives/tfl-ngx-charts-line-chart.directive */ 706);








const _c0 = function (a0) { return [a0]; };
const _c1 = function (a0, a1) { return [a0, a1]; };
function InvestmentResultComponent_div_0_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div")(1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 8, 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "ngx-charts-line-chart", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const datum_r7 = ctx.$implicit;
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](4);
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](6, _c0, ctx_r3.isMobile ? "width100" : "width50"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](datum_r7.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("view", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](8, _c1, _r8.offsetWidth, _r8.offsetHeight))("results", datum_r7.chartResults)("legend", false);
} }
function InvestmentResultComponent_div_0_ng_container_5_th_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const columnInfo_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", columnInfo_r9.title, " ");
} }
function InvestmentResultComponent_div_0_ng_container_5_ng_template_2_td_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r16 = ctx.$implicit;
    const columnInfo_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", element_r16[columnInfo_r9.strIndex], " ");
} }
function InvestmentResultComponent_div_0_ng_container_5_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, InvestmentResultComponent_div_0_ng_container_5_ng_template_2_td_0_Template, 2, 1, "td", 15);
} }
function InvestmentResultComponent_div_0_ng_container_5_ng_template_3_td_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r19 = ctx.$implicit;
    const columnInfo_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", element_r19[columnInfo_r9.strIndex], " ");
} }
function InvestmentResultComponent_div_0_ng_container_5_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, InvestmentResultComponent_div_0_ng_container_5_ng_template_3_td_0_Template, 2, 1, "td", 17);
} }
function InvestmentResultComponent_div_0_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0, 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, InvestmentResultComponent_div_0_ng_container_5_th_1_Template, 2, 1, "th", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, InvestmentResultComponent_div_0_ng_container_5_ng_template_2_Template, 1, 0, "ng-template", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, InvestmentResultComponent_div_0_ng_container_5_ng_template_3_Template, 1, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const columnInfo_r9 = ctx.$implicit;
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matColumnDef", columnInfo_r9.strIndex);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", columnInfo_r9.strIndex === "0")("ngIfElse", _r12);
} }
function InvestmentResultComponent_div_0_tr_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "tr", 19);
} }
function InvestmentResultComponent_div_0_tr_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "tr", 20);
} }
function InvestmentResultComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div")(1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, InvestmentResultComponent_div_0_div_2_Template, 6, 11, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "table", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, InvestmentResultComponent_div_0_ng_container_5_Template, 5, 3, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, InvestmentResultComponent_div_0_tr_6_Template, 1, 0, "tr", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, InvestmentResultComponent_div_0_tr_7_Template, 1, 0, "tr", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r0.data);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("dataSource", ctx_r0.displayedData);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r0.displayedColumnInfos);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matHeaderRowDef", ctx_r0.displayedColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matRowDefColumns", ctx_r0.displayedColumns);
} }
function InvestmentResultComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](0, " Data not available.\n");
} }
class InvestmentResultComponent {
    constructor(locale, gvs) {
        this.locale = locale;
        this.gvs = gvs;
    }
    get displayedColumns() {
        return this.displayedColumnInfos.map(i => i.strIndex);
    }
    get isMobile() {
        return this.gvs.isMobile;
    }
    ngOnChanges(changes) {
        this.statistics = [];
        this.displayedColumnInfos = [];
        this.displayedData = [];
        if (changes.data !== undefined && changes.data.currentValue !== undefined) {
            let results = this.getStatistics(changes.data.currentValue);
            this.statistics = results.statistics;
            this.displayedColumnInfos = results.displayedColumnInfos;
            this.displayedData = results.displayedData;
        }
    }
    getStatistics(data) {
        let _this = this;
        let statistics = [ViewDatum.createHeader()];
        for (let datum of data) {
            let vd = ViewDatum.createByInfo(datum, (value, digitsInfo) => {
                return (0,_angular_common__WEBPACK_IMPORTED_MODULE_3__.formatNumber)(value, _this.locale, digitsInfo);
            }, (value) => {
                return (0,_angular_common__WEBPACK_IMPORTED_MODULE_3__.formatDate)(value, 'yyyy/MM/dd', _this.locale);
            });
            //console.log(vd);
            statistics.push(vd);
        }
        let displayedColumnInfos = statistics.map(datum => new ViewColumnInfo(datum.title, datum.index));
        let displayedData = Object.getOwnPropertyNames(new ViewDatum())
            .filter(p => p !== 'title' && p !== 'index') // already used
            .map(prop => {
            const output = {};
            for (let i = 0; i < statistics.length; i++) {
                output[statistics[i].index] = statistics[i][prop];
            }
            return output;
        });
        return {
            statistics,
            displayedColumnInfos,
            displayedData,
        };
    }
}
InvestmentResultComponent.ɵfac = function InvestmentResultComponent_Factory(t) { return new (t || InvestmentResultComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.LOCALE_ID), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_global_methods_service__WEBPACK_IMPORTED_MODULE_0__.GlobalMethodsService)); };
InvestmentResultComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: InvestmentResultComponent, selectors: [["app-investment-result"]], inputs: { data: "data" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"]], decls: 3, vars: 2, consts: [[4, "ngIf", "ngIfElse"], ["elseBlock", ""], [2, "display", "flex", "flex-wrap", "wrap"], [3, "class", 4, "ngFor", "ngForOf"], ["mat-table", "", 2, "width", "100%", 3, "dataSource"], [3, "matColumnDef", 4, "ngFor", "ngForOf"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], [2, "height", "300px"], ["ContainerRef", ""], ["appTflNgxCLC", "", 3, "view", "results", "legend"], [3, "matColumnDef"], ["mat-header-cell", "", 4, "matHeaderCellDef"], [3, "ngIf", "ngIfElse"], ["mat-header-cell", ""], ["mat-cell", "", "style", "font-size: 0.9em; font-weight: 500; color: rgba(0, 0, 0, 0.54);", 4, "matCellDef"], ["mat-cell", "", 2, "font-size", "0.9em", "font-weight", "500", "color", "rgba(0, 0, 0, 0.54)"], ["mat-cell", "", 4, "matCellDef"], ["mat-cell", ""], ["mat-header-row", ""], ["mat-row", ""]], template: function InvestmentResultComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, InvestmentResultComponent_div_0_Template, 8, 5, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, InvestmentResultComponent_ng_template_1_Template, 1, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.data !== undefined)("ngIfElse", _r1);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_4__.LineChartComponent, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatRow, _directives_tfl_ngx_charts_line_chart_directive__WEBPACK_IMPORTED_MODULE_1__.TflNgxChartsLineChartDirective], styles: [".width50[_ngcontent-%COMP%] {\n  width: 50%;\n}\n\n.width100[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImludmVzdG1lbnQtcmVzdWx0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksVUFBQTtBQUNKOztBQUVBO0VBQ0ksV0FBQTtBQUNKIiwiZmlsZSI6ImludmVzdG1lbnQtcmVzdWx0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndpZHRoNTAge1xyXG4gICAgd2lkdGg6IDUwJTtcclxufVxyXG5cclxuLndpZHRoMTAwIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59Il19 */"] });
class InfoForStatistic {
    constructor() {
        this.title = '';
        this.info = [];
        this.chartResults = [];
    }
}
class ViewColumnInfo {
    constructor(title, index) {
        this.title = '';
        this.strIndex = '';
        this.title = title;
        this.strIndex = index.toString();
    }
}
class ViewDatum {
    constructor(init) {
        this.title = '--';
        this.description = '--';
        this.dateRange = '--';
        this.maxMinCost = '--';
        this.totalCost = '--';
        this.currentValue = '--';
        this.gain = '--';
        this.index = -1;
        Object.assign(this, init);
        this.index = ViewDatum.global_index++;
    }
    static createByInfo(datum, formatNumber, formatDate) {
        let rtn = new ViewDatum({
            title: datum.title,
            description: 'Invest on the 1st of each month',
        });
        let info = datum.info;
        let count = info.length;
        if (count === 0) {
            return rtn;
        }
        let maxCostPerUnit = Number.MIN_VALUE;
        let minCostPerUnit = Number.MAX_VALUE;
        info.forEach(i => {
            let d = i.dollarCost;
            if (d > maxCostPerUnit) {
                maxCostPerUnit = d;
            }
            if (d < minCostPerUnit) {
                minCostPerUnit = d;
            }
        });
        let maxDate = new Date(-8640000000000000);
        let minDate = new Date(8640000000000000);
        info.forEach(i => {
            let d = i.tradeDate;
            if (d > maxDate) {
                maxDate = d;
            }
            if (d < minDate) {
                minDate = d;
            }
        });
        let lastInfo = info[count - 1];
        let currentValue = lastInfo.currentValue;
        let totalCost = lastInfo.cumulativeDollarCost;
        let gain = currentValue - totalCost;
        let percentageGain = gain / totalCost * 100;
        return new ViewDatum({
            title: datum.title,
            description: 'Invest on the 1st of each month',
            dateRange: formatDate(minDate) + '-' + formatDate(maxDate) + ' (' + formatNumber(count) + ' months)',
            maxMinCost: formatNumber(maxCostPerUnit, '1.0-0') + '/' + formatNumber(minCostPerUnit, '1.0-0'),
            currentValue: formatNumber(currentValue, '1.0-0'),
            totalCost: formatNumber(totalCost, '1.0-0'),
            gain: formatNumber(gain, '1.0-0') + ' (' + formatNumber(percentageGain, '1.2-2') + '%)',
        });
    }
    static createHeader() {
        return new ViewDatum({
            title: '',
            description: 'Description',
            dateRange: 'Date Range',
            maxMinCost: 'Max/Min Investment of months',
            currentValue: 'Current Value',
            totalCost: 'Total Investment',
            gain: 'Gain (%)',
        });
    }
}
ViewDatum.global_index = 0;


/***/ }),

/***/ 5035:
/*!***********************************************************!*\
  !*** ./src/app/components/language/language.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LanguageComponent": () => (/* binding */ LanguageComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/core */ 9121);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/select */ 7371);





function LanguageComponent_mat_option_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const language_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", language_r1.code);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](language_r1.name);
} }
class LanguageComponent {
    constructor() {
        this.displayLanguage = 'tw';
        this.languageList = [
            { code: 'en', name: 'English' },
            { code: 'tw', name: 'Traditional-Chinese' },
            { code: 'jp', name: 'Japan' }
        ];
        this.getCurrentLanguage = () => {
            const lang = ['en', 'tw', 'jp'];
            const currentLang = lang.find(l => new RegExp(`/${l}/`).test(window.location.pathname));
            if (!currentLang) {
                return 'en';
            }
            return currentLang;
        };
    }
    get i18nLang() {
        const mapping = {
            en: 'US',
            tw: 'ZH',
            jp: 'JP'
        };
        return mapping[this.displayLanguage];
    }
    ngOnInit() {
        this.displayLanguage = this.getCurrentLanguage();
    }
    onSelectionChange($event) {
        this.redirectTo($event);
    }
    redirectTo(redirectLang) {
        const redirectPathName = window.location.pathname.replace(`/${this.displayLanguage}/`, `/${redirectLang}/`);
        console.log(redirectPathName);
        //window.location.pathname = redirectPathName;
    }
}
LanguageComponent.ɵfac = function LanguageComponent_Factory(t) { return new (t || LanguageComponent)(); };
LanguageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LanguageComponent, selectors: [["app-language"]], decls: 8, vars: 3, consts: [[2, "width", "50px", "height", "100%", 3, "value", "selectionChange"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]], template: function LanguageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-select", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectionChange", function LanguageComponent_Template_mat_select_selectionChange_0_listener($event) { return ctx.onSelectionChange($event.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-select-trigger")(2, "div")(3, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "language");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, LanguageComponent_mat_option_7_Template, 2, 2, "mat-option", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.displayLanguage);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.i18nLang);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.languageList);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_material_core__WEBPACK_IMPORTED_MODULE_2__.MatOption, _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__.MatIcon, _angular_material_select__WEBPACK_IMPORTED_MODULE_4__.MatSelect, _angular_material_select__WEBPACK_IMPORTED_MODULE_4__.MatSelectTrigger], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsYW5ndWFnZS5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 706:
/*!*******************************************************************!*\
  !*** ./src/app/directives/tfl-ngx-charts-line-chart.directive.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TflNgxChartsLineChartDirective": () => (/* binding */ TflNgxChartsLineChartDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @swimlane/ngx-charts */ 9575);


class TflNgxChartsLineChartDirective {
    constructor(lcc) {
        this.lcc = lcc;
        this.lcc.legend = true;
        this.lcc.xAxis = true;
        this.lcc.yAxis = true;
        //this.lcc.autoScale = true;
        this.lcc.roundDomains = true;
    }
}
TflNgxChartsLineChartDirective.ɵfac = function TflNgxChartsLineChartDirective_Factory(t) { return new (t || TflNgxChartsLineChartDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_1__.LineChartComponent, 1)); };
TflNgxChartsLineChartDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: TflNgxChartsLineChartDirective, selectors: [["", "appTflNgxCLC", ""]] });


/***/ }),

/***/ 7544:
/*!*************************************!*\
  !*** ./src/app/global-variables.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FADE_ANIMATION": () => (/* binding */ FADE_ANIMATION),
/* harmony export */   "LINK_INFOS": () => (/* binding */ LINK_INFOS),
/* harmony export */   "MENU_BTN_ANIMATION": () => (/* binding */ MENU_BTN_ANIMATION)
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/animations */ 4851);
/* harmony import */ var _classes_LinkInfo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classes/LinkInfo */ 1479);
/* harmony import */ var _pages_investment_page_investment_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/investment-page/investment-page.component */ 969);
/* harmony import */ var _pages_investment_versus_page_investment_versus_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/investment-versus-page/investment-versus-page.component */ 7540);
/* harmony import */ var _pages_kelly_criterion_page_kelly_criterion_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/kelly-criterion-page/kelly-criterion-page.component */ 7281);
/* harmony import */ var _pages_about_about_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/about/about.component */ 3794);
/* harmony import */ var _pages_diagram_page_diagram_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/diagram-page/diagram-page.component */ 1175);







const LINK_INFOS = [
    new _classes_LinkInfo__WEBPACK_IMPORTED_MODULE_0__.LinkInfo("About", 'about', _pages_about_about_component__WEBPACK_IMPORTED_MODULE_4__.AboutComponent),
    new _classes_LinkInfo__WEBPACK_IMPORTED_MODULE_0__.LinkInfo("Diagram", 'diagram', _pages_diagram_page_diagram_page_component__WEBPACK_IMPORTED_MODULE_5__.DiagramPageComponent),
    //new LinkInfo("Preview", 'preview', PreviewPageComponent),
    new _classes_LinkInfo__WEBPACK_IMPORTED_MODULE_0__.LinkInfo("Tools", 'investment', _pages_investment_versus_page_investment_versus_page_component__WEBPACK_IMPORTED_MODULE_2__.InvestmentVersusPageComponent, [
        new _classes_LinkInfo__WEBPACK_IMPORTED_MODULE_0__.LinkInfo("DCA versus VA", 'investment/versus', _pages_investment_versus_page_investment_versus_page_component__WEBPACK_IMPORTED_MODULE_2__.InvestmentVersusPageComponent),
        new _classes_LinkInfo__WEBPACK_IMPORTED_MODULE_0__.LinkInfo("Custom DCA versus VA", 'investment/custom', _pages_investment_page_investment_page_component__WEBPACK_IMPORTED_MODULE_1__.InvestmentPageComponent),
        new _classes_LinkInfo__WEBPACK_IMPORTED_MODULE_0__.LinkInfo("Kelly Criterion", 'investment/kelly-criterion', _pages_kelly_criterion_page_kelly_criterion_page_component__WEBPACK_IMPORTED_MODULE_3__.KellyCriterionPageComponent),
    ]),
];
const FADE_ANIMATION = (0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.trigger)('routeAnimations', [
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.transition)('* <=> *', [
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.style)({ position: 'relative' }),
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.group)([
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.query)(':enter, :leave', [
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.style)({
                    'grid-column-start': 1,
                    'grid-row-start': 1,
                    'transition': '1s',
                })
            ], { optional: true }),
        ]),
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.query)(':enter', [
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.style)({ opacity: 0, height: '30vh', overflow: 'hidden', })
        ], { optional: true }),
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.query)(':leave', [
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.animate)('300ms ease-out', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.style)({ opacity: 0, height: '0px', }))
        ], { optional: true }),
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.query)(':enter', [
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.animate)('500ms ease-out', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.style)({ opacity: 1, height: '*', }))
        ], { optional: true }),
    ]),
]);
const MENU_BTN_ANIMATION = (0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.trigger)('menuBtnAnimation', [
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.state)('show', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.style)({
        width: '40px',
        opacity: 1,
    })),
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.state)('hidden', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.style)({
        width: '0px',
        opacity: 0,
    })),
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.transition)('show => hidden', [
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.animate)('0.2s')
    ]),
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.transition)('hidden => show', [
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.animate)('0.2s')
    ]),
]);


/***/ }),

/***/ 3794:
/*!************************************************!*\
  !*** ./src/app/pages/about/about.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AboutComponent": () => (/* binding */ AboutComponent),
/* harmony export */   "ImageDialog": () => (/* binding */ ImageDialog)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);




class AboutComponent {
    constructor(dialog) {
        this.dialog = dialog;
    }
    ngOnInit() {
    }
    openDialog(name) {
        const dialogRef = this.dialog.open(ImageDialog, {
            data: { name: name },
        });
    }
}
AboutComponent.ɵfac = function AboutComponent_Factory(t) { return new (t || AboutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialog)); };
AboutComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutComponent, selectors: [["app-about"]], decls: 271, vars: 0, consts: [[1, "inner-content"], [2, "padding-top", "12px"], [1, "content"], [2, "font-size", "32px", "line-height", "initial"], [2, "margin", "1rem 0"], ["href", "mailto:balato1992@gmail.com", "target", "_blank"], [2, "display", "flex", "flex-wrap", "wrap"], [1, "cusflex"], [1, "exp-title"], [1, "title"], [1, "exp-content"], ["routerLink", "/investment"], ["href", "javascript:void(0);", 3, "click"]], template: function AboutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div")(2, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u95DC\u65BC");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2)(5, "div")(6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " \u6D2A\u665F\u5D34 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " \u64C1\u6709\u4E94\u5E74\u5DE5\u4F5C\u7D93\u9A57\uFF0C\u66FE\u5728\u667A\u6167\u88FD\u9020\u7522\u696D\u64D4\u4EFB");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\u8EDF\u9AD4\u5DE5\u7A0B\u5E2B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\uFF0C \u5BE6\u4F5C\u4E2D\u63A7\u53F0\u3001\u8CC7\u6599\u8655\u7406\u7CFB\u7D71\u7684");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\u524D\u7AEF");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "\uFF0C\u4E26\u4E3B\u8981\u8A2D\u8A08\u8207\u5BE6\u4F5C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "\u5F8C\u7AEF\u6574\u5408");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "\uFF0C \u5C0D\u7CFB\u7D71\u8A2D\u8A08\u6709\u57FA\u672C\u6982\u5FF5\uFF0C\u524D\u5F8C\u7AEF\u7686\u6709\u5BE6\u4F5C\u80FD\u529B\uFF0C\u4E0D\u8A2D\u9650\u81EA\u5DF1\u4F7F\u7528\u7684\u7A0B\u5F0F\u8A9E\u8A00\uFF0C \u6703\u53BB");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "\u6E9D\u901A\u3001\u7406\u89E3\u9700\u6C42");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "\uFF0C\u82E5\u6709\u4EBA\u6E34\u4E86\uFF0C\u4E0D\u4E00\u5B9A\u8981\u6398\u4E95\uFF0C\u6216\u8A31\u7576\u4E0B\u7D66\u4ED6\u4E00\u74F6\u7926\u6CC9\u6C34\uFF0C\u5C31\u80FD\u6EFF\u8DB3\u9700\u6C42\u3002 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " \u8EDF\u9AD4\u5DE5\u7A0B\u5E2B ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div")(25, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "balato1992@gmail.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div")(28, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "\u5C08\u696D\u80FD\u529B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 2)(31, "div", 6)(32, "div", 7)(33, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "\u5F8C\u7AEF\u8A9E\u8A00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "ul")(37, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "C#");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 7)(40, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Windows \u524D\u7AEF");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "ul")(44, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "WPF");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "WinForm");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 7)(49, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "\u7DB2\u9801\u5F8C\u7AEF");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "ul")(53, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "ASP.Net Core MVC");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 7)(56, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "\u7DB2\u9801\u524D\u7AEF");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "ul")(60, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Angular, React");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "TypeScript");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "JS \u7E6A\u5716\u5143\u4EF6(Kendo UI)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Web Socket");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 7)(69, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Database");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "ul")(73, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "SQL");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "MongoDB");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 7)(78, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "\u5176\u4ED6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "ul")(82, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "\u5229\u7528 UML \u7C21\u5316\u7A0B\u5F0F\u67B6\u69CB\u3001\u6D41\u7A0B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "\u57FA\u672C\u591A\u57F7\u884C\u7DD2\u8655\u7406");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "WebAPI");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "\u719F\u6089\u4F7F\u7528\u7DB2\u8DEF\u8CC7\u6E90\u8207\u6587\u4EF6\u67E5\u627E\u4E26\u89E3\u6C7A\u554F\u984C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div")(91, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "\u7D93\u6B77/\u5B78\u6B77");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 2)(94, "div")(95, "div", 8)(96, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "\u8EDF\u9AD4\u5DE5\u7A0B\u5E2B/\u5408\u5925");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "\u96F6\u8CB3\u904A\u6232\u6709\u9650\u516C\u53F8");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "2022/03~");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, " \u904A\u6232\u958B\u767C ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "ul")(105, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "Unity");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "\u7CFB\u7D71\u539F\u578B\u958B\u767C (2D, \u8FF7\u5BAE, \u81EA\u52D5\u6230\u9B25)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "div")(110, "div", 8)(111, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "Side Projects/Piecework");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](113, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, "2020/03~2022/03");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "div", 10)(117, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, " Tic-tac-toe AI ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "ul")(120, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, "Unity");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, "Reinforcement Learning");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, "Monte Carlo Method");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, " \u6295\u8CC7\u76F8\u95DC\u5DE5\u5177 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "ul")(129, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130, "Angular/swimlane/mathjax-angular");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132, "DCA versus VA \u7C21\u6613\u6BD4\u8F03\u5747\u50F9\u8207\u5747\u503C\u5DEE\u7570");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134, "Kelly criterion \u51F1\u5229\u516C\u5F0F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "li")(136, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](137, "Tools Link");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](139, " \u55AE\u5B57\u7B46\u8A18\u7DB2\u7AD9 (ngx-your-vocabulary-book) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "ul")(141, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142, "Angular/Express/Mongodb");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](144, "\u4F7F\u7528 Google OAuth \u767B\u5165\uFF0C\u4E26\u4EE5 mongodb \u8A18\u9304\u5E33\u865F\u8CC7\u8A0A\u8207\u7B46\u8A18\u8CC7\u6599");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](146, "\u53EF\u7528 Google Speech API \u64AD\u653E\u7B46\u8A18");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "li")(148, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AboutComponent_Template_a_click_148_listener() { return ctx.openDialog("vocabulary.png"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](149, "Preview Picture");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](151, " product-and-receipt ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "ul")(153, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](154, ".NET Core/React/MySQL");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](156, "\u516C\u53F8\u8CC7\u6599/\u7522\u54C1/\u6536\u64DA \u8A18\u9304");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "li")(158, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AboutComponent_Template_a_click_158_listener() { return ctx.openDialog("product-and-receipt.png"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](159, "Preview Picture");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "div")(161, "div", 8)(162, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](163, "\u5C08\u6848\u52A9\u7406/\u8EDF\u9AD4\u5DE5\u7A0B\u5E2B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](165, "\u6210\u529F\u5927\u5B78 \u667A\u6167\u88FD\u9020\u7814\u7A76\u4E2D\u5FC3(\u8207\u5148\u77E5\u79D1\u6280\u5408\u4F5C)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](167, "2016/07~2020/03");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "div", 10)(169, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](170, " \u4E2D\u63A7\u53F0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "ul")(172, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](173, "C#/WPF");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](175, "\u6574\u5408\u8EDF\u9AD4\u5916\u90E85\u7D44\u4EE5\u4E0A\u786C\u9AD4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](177, "\u5229\u7528\u8A2D\u8A08\u6A21\u5F0F\u8A18\u9304\u8207\u97CC\u9AD4\u6E9D\u901A\u4E4B\u6240\u6709\u8A0A\u606F\uFF0C\u65B9\u4FBF\u91D0\u6E05\u554F\u984C\u6240\u5728");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](179, "\u81EA\u88FDLogger\u8207\u8B80\u53D6\u5668\uFF0C\u5448\u73FE\u5BA2\u88FD\u8A0A\u606F\u3001\u904E\u6FFE\u689D\u4EF6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](181, "\u8CC7\u6599\u3001\u529F\u80FD\u6D41\u7A0B\u7BA1\u7406");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](183, "\u8A2D\u8A08\u8B8A\u6578\u6C60\u4F86\u7D71\u6574\u8CC7\u6599\u540C\u6B65\u3001\u89F8\u767C\u7B49\u554F\u984C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](185, "\u591A\u57F7\u884C\u7E8C\u8655\u7406\u76F8\u95DC\u904B\u7B97\u8207\u8CC7\u6599\u540C\u6B65");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](187, "\u7368\u7ACB\u5BE6\u4F5C\u4ECB\u9762 (\u5373\u6642\u8CC7\u8A0A\u3001\u5404\u9805\u8A2D\u5B9A)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](189, " \u8CC7\u6599\u8655\u7406\u76F8\u95DC\u7CFB\u7D71: KSA\u3001IPM \u7CFB\u7D71 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](190, "ul")(191, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](192, "C#/ASP.NET Core MVC/React/\u7E6A\u5716\u5143\u4EF6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](193, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](194, "\u8A2D\u8A08\u6392\u968A\u6A5F\u5236\u4F86\u975E\u540C\u6B65\u8655\u7406\u8CC7\u6599");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](196, "\u5206\u968E\u6BB5\u7D00\u9304\u8A0A\u606F\uFF0C\u4EE5\u4FBF\u91CD\u73FE\u8CC7\u6599\u53D6\u5F97\u3001\u6F14\u7B97\u8207\u53D6\u5F97\u4F8B\u5916\u8CC7\u8A0A");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](198, "\u7CFB\u7D71\u898F\u5283\u3001\u6574\u5408");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](200, "\u4ECB\u9762\u5BE6\u4F5C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](201, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](202, " \u7DAD\u8B77 AVM \u7CFB\u7D71 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](203, "ul")(204, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](205, "C#/WPF/C++/WinForm");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](206, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](207, "C++ \u8F49\u63DB\u8A9E\u8A00\u70BA C# \u4E26\u90E8\u5206\u91CD\u69CB");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](208, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](209, "\u5408\u4F75\u88AB\u5206\u5225\u958B\u767C\u7684\u5B50\u5C08\u6848");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](210, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](211, "\u81EA\u88FD\u6B04\u4F4D\u81EA\u52D5\u751F\u6210\u5143\u4EF6\uFF0C\u4F9D\u7167\u7269\u4EF6\u5C6C\u6027\u81EA\u52D5\u751F\u6210\u6B04\u4F4D\u4F86\u7C21\u5316\u958B\u767C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](212, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](213, "\u7CFB\u7D71\u7DAD\u8B77");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](214, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](215, " \u5176\u4ED6\u5C08\u6848 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](216, "ul")(217, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](218, "C#/ASP.NET Core MVC/MySQL");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](219, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](220, "WPF/WinForm");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](221, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](222, "React/Vue/KendoUI");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](223, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](224, "\u7E6A\u5716\u5143\u4EF6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](225, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](226, "\u81EA\u88FD\u7C21\u6613 cache \u907F\u514D\u5BA2\u6236\u7AEF\u9AD8\u983B\u7387\u5237\u65B0 \u5360\u7528\u8CC7\u6599\u5EAB\u8CC7\u6E90");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](227, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](228, "\u81EA\u88FD\u90E8\u5206\u7E6A\u5716\u5143\u4EF6\u529F\u80FD\uFF0C\u518D\u5229\u7528 WebSocket \u5373\u6642\u5237\u65B0\u7576\u4E0B\u8CC7\u8A0A");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](229, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](230, "\u7CFB\u7D71\u57FA\u672C\u8A2D\u8A08\u3001\u6574\u5408");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](231, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](232, "\u4ECB\u9762\u5BE6\u4F5C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](233, "div")(234, "div", 8)(235, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](236, "\u97CC\u9AD4\u5DE5\u7A0B\u5E2B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](237, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](238, "\u5229\u9304\u79D1\u6280\u80A1\u4EFD\u6709\u9650\u516C\u53F8");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](239, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](240, "2016/01~2016/07");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](241, "div", 10)(242, "ul")(243, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](244, "\u62F7\u8C9D\u6A5F\u958B\u767C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](245, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](246, "AngularJS \u88FD\u4F5C\u5B98\u7DB2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](247, "div")(248, "div", 8)(249, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](250, "\u5B78\u58EB");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](251, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](252, "\u81FA\u5357\u5927\u5B78 \u8CC7\u8A0A\u5DE5\u7A0B\u5B78\u7CFB 103\u7D1A");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](253, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](254, "2010/07~2014/06");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](255, "div", 10)(256, "ul")(257, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](258, "2012 \u5357\u5340\u5927\u5C08\u9662\u6821\u7A0B\u5F0F\u8A2D\u8A08\u7AF6\u8CFD \u9032\u968E\u7D44 \u4F73\u4F5C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](259, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](260, "2012 \u81FA\u5357\u5927\u5B78 \u5357\u5927\u8CC7\u5DE5\u7A0B\u5F0F\u7AF6\u8CFD \u7B2C\u4E00\u540D");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](261, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](262, "2012 \u7B2C16\u6B21ITSA\u7DDA\u4E0A\u7A0B\u5F0F\u8A2D\u8A08\u5927\u8CFD \u7E3E\u512A\u5718\u968A");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](263, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](264, "2012 \u7B2C17\u6B21ITSA\u7DDA\u4E0A\u7A0B\u5F0F\u8A2D\u8A08\u5927\u8CFD \u7E3E\u512A\u5718\u968A");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](265, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](266, "2012 \u7B2C19\u6B21ITSA\u7DDA\u4E0A\u7A0B\u5F0F\u8A2D\u8A08\u5927\u8CFD \u7E3E\u512A\u5718\u968A");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](267, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](268, "2011 \u81FA\u5357\u5927\u5B78 \u7A0B\u5F0F\u8A2D\u8A08\u6BD4\u8CFD \u7B2C\u4E00\u540D");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](269, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](270, "2010 \u81FA\u5357\u5927\u5B78 \u7A0B\u5F0F\u8A2D\u8A08\u6BD4\u8CFD \u7B2C\u4E8C\u540D");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()();
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkWithHref], styles: ["h2[_ngcontent-%COMP%] {\n  margin-block-end: 0.4rem;\n}\n\n.content[_ngcontent-%COMP%] {\n  margin: 0 1.5rem 1rem;\n}\n\n.cusflex[_ngcontent-%COMP%] {\n  padding: 0 1rem;\n  width: calc((100% - 6rem) / 3);\n}\n\n@media screen and (max-width: 700px) {\n  .cusflex[_ngcontent-%COMP%] {\n    padding: 0 1rem;\n    width: calc((100% - 4rem) / 2);\n  }\n}\n\n@media screen and (max-width: 500px) {\n  .cusflex[_ngcontent-%COMP%] {\n    padding: 0 1rem;\n    width: calc(100% - 2rem);\n  }\n}\n\n.exp-title[_ngcontent-%COMP%] {\n  padding: 0.5rem 0;\n}\n\n.exp-title[_ngcontent-%COMP%]    > .title[_ngcontent-%COMP%] {\n  font-size: larger;\n  font-weight: 600;\n}\n\n.exp-content[_ngcontent-%COMP%] {\n  padding: 0 1rem;\n}\n\n.exp-content[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  margin: 0.5rem 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFib3V0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksd0JBQUE7QUFDSjs7QUFFQTtFQUNJLHFCQUFBO0FBQ0o7O0FBRUE7RUFDSSxlQUFBO0VBQ0EsOEJBQUE7QUFDSjs7QUFDQTtFQUNJO0lBQ0ksZUFBQTtJQUNBLDhCQUFBO0VBRU47QUFDRjs7QUFBQTtFQUNJO0lBQ0ksZUFBQTtJQUNBLHdCQUFBO0VBRU47QUFDRjs7QUFFQTtFQUNJLGlCQUFBO0FBQUo7O0FBR0E7RUFDSSxpQkFBQTtFQUNBLGdCQUFBO0FBQUo7O0FBR0E7RUFDSSxlQUFBO0FBQUo7O0FBR0E7RUFDSSxnQkFBQTtBQUFKIiwiZmlsZSI6ImFib3V0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDIge1xyXG4gICAgbWFyZ2luLWJsb2NrLWVuZDogMC40cmVtO1xyXG59XHJcblxyXG4uY29udGVudCB7XHJcbiAgICBtYXJnaW46IDAgMS41cmVtIDFyZW07XHJcbn1cclxuXHJcbi5jdXNmbGV4IHtcclxuICAgIHBhZGRpbmc6IDAgMXJlbTtcclxuICAgIHdpZHRoOiBjYWxjKCgxMDAlIC0gMXJlbSAqIDYpIC8gMyk7XHJcbn1cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzAwcHgpIHtcclxuICAgIC5jdXNmbGV4IHtcclxuICAgICAgICBwYWRkaW5nOiAwIDFyZW07XHJcbiAgICAgICAgd2lkdGg6IGNhbGMoKDEwMCUgLSAxcmVtICogNCkgLyAyKTtcclxuICAgIH1cclxufVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xyXG4gICAgLmN1c2ZsZXgge1xyXG4gICAgICAgIHBhZGRpbmc6IDAgMXJlbTtcclxuICAgICAgICB3aWR0aDogY2FsYygoMTAwJSAtIDFyZW0gKiAyKSk7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4uZXhwLXRpdGxlIHtcclxuICAgIHBhZGRpbmc6IDAuNXJlbSAwO1xyXG59XHJcblxyXG4uZXhwLXRpdGxlPi50aXRsZSB7XHJcbiAgICBmb250LXNpemU6IGxhcmdlcjtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuXHJcbi5leHAtY29udGVudCB7XHJcbiAgICBwYWRkaW5nOiAwIDFyZW07XHJcbn1cclxuXHJcbi5leHAtY29udGVudCB1bCB7XHJcbiAgICBtYXJnaW46IDAuNXJlbSAwO1xyXG59Il19 */"] });
class ImageDialog {
    constructor(data) {
        this.data = data;
        this.imgUrl = './assets/imgs/';
        this.imgUrl += data.name;
    }
}
ImageDialog.ɵfac = function ImageDialog_Factory(t) { return new (t || ImageDialog)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MAT_DIALOG_DATA)); };
ImageDialog.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ImageDialog, selectors: [["img-dialog"]], decls: 2, vars: 1, consts: [[1, "img-shadow", 3, "src"]], template: function ImageDialog_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.imgUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    } }, encapsulation: 2 });


/***/ }),

/***/ 1175:
/*!**************************************************************!*\
  !*** ./src/app/pages/diagram-page/diagram-page.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DiagramPageComponent": () => (/* binding */ DiagramPageComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class DiagramPageComponent {
    constructor() { }
    ngOnInit() {
    }
}
DiagramPageComponent.ɵfac = function DiagramPageComponent_Factory(t) { return new (t || DiagramPageComponent)(); };
DiagramPageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DiagramPageComponent, selectors: [["app-diagram-page"]], decls: 13, vars: 2, consts: [[1, "inner-content"], [2, "font-size", "32px", "padding-top", "12px"], [2, "display", "flex", "flex-direction", "column", "align-items", "center"], [1, "img-shadow", 3, "src"]], template: function DiagramPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Diagram");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2)(4, "div")(5, "div")(6, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\u57FA\u672C\u4ECB\u9762\u8CC7\u6599\u5237\u65B0\u65B9\u5F0F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div")(10, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\u904A\u6232\u89D2\u8272\u529F\u80FD\u5FAA\u5E8F\u5716");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", "./assets/imgs/data_sync.png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", "./assets/imgs/uml_resume.png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkaWFncmFtLXBhZ2UuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 969:
/*!********************************************************************!*\
  !*** ./src/app/pages/investment-page/investment-page.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InvestmentPageComponent": () => (/* binding */ InvestmentPageComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var src_shared_class_NgxChartSeriesRow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/shared-class/NgxChartSeriesRow */ 5065);
/* harmony import */ var src_shared_class_NgxChartDatum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/shared-class/NgxChartDatum */ 8417);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_data_source_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/data-source.service */ 4941);
/* harmony import */ var src_app_services_data_processing_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/data-processing.service */ 3578);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @swimlane/ngx-charts */ 9575);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/datepicker */ 2298);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/form-field */ 5074);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/radio */ 2922);
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/stepper */ 4193);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/tooltip */ 6896);
/* harmony import */ var _directives_tfl_ngx_charts_line_chart_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../directives/tfl-ngx-charts-line-chart.directive */ 706);
/* harmony import */ var _components_investment_result_and_source_investment_result_and_source_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/investment-result-and-source/investment-result-and-source.component */ 6522);


















const _c0 = ["stepper"];
const _c1 = ["step1"];
const _c2 = ["step2"];
function InvestmentPageComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](0, "Select Data");
} }
const _c3 = function (a0, a1) { return [a0, a1]; };
const _c4 = function (a0) { return [a0]; };
function InvestmentPageComponent_mat_radio_group_6_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 16)(1, "mat-radio-button", 17)(2, "span", 18, 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 20, 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](7, "ngx-charts-line-chart", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const results_r11 = ctx.$implicit;
    const i_r12 = ctx.index;
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", i_r12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("matTooltip", results_r11.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", results_r11.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("view", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction2"](6, _c3, _r14.offsetWidth, _r14.offsetHeight))("results", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](9, _c4, results_r11))("legend", false);
} }
function InvestmentPageComponent_mat_radio_group_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-radio-group", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, InvestmentPageComponent_mat_radio_group_6_div_1_Template, 8, 11, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r3.resultsSet);
} }
function InvestmentPageComponent_div_7_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Please select a chart. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function InvestmentPageComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, InvestmentPageComponent_div_7_div_1_Template, 2, 0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r4.step1SelectedIndex.errors == null ? null : ctx_r4.step1SelectedIndex.errors.required);
} }
function InvestmentPageComponent_ng_template_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](0, "Select Range");
} }
function InvestmentPageComponent_div_20_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div")(1, "div")(2, "mat-form-field", 24)(3, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "Choose a data range");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "mat-date-range-input", 25)(6, "input", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("dateChange", function InvestmentPageComponent_div_20_Template_input_dateChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r19); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r18.dataRangeChange($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "input", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("dateChange", function InvestmentPageComponent_div_20_Template_input_dateChange_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r19); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r20.dataRangeChange($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](8, "mat-datepicker-toggle", 28)(9, "mat-date-range-picker", null, 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "div", 30, 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](13, "ngx-charts-line-chart", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](14, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "div", 8)(16, "button", 13)(17, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](18, "arrow_left");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](19, " Back ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](20, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "button", 10)(22, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](23, "arrow_right");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](24, " Next ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](10);
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](12);
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("rangePicker", _r16)("min", ctx_r7.step1Data.minDate)("max", ctx_r7.step1Data.maxDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("for", _r16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("view", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction2"](6, _c3, _r17.offsetWidth, _r17.offsetHeight))("results", ctx_r7.step2ViewRangeData);
} }
function InvestmentPageComponent_ng_template_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](0, "Result");
} }
function InvestmentPageComponent_div_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "app-investment-result-and-source", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("serie", ctx_r9.step3Data);
} }
class InvestmentPageComponent {
    constructor(_formBuilder, dss, dps) {
        this._formBuilder = _formBuilder;
        this.dss = dss;
        this.dps = dps;
        this.step1Submitted = false;
        this.s2Submitted = false;
        this.resultsSet = undefined;
        this.step2ViewRangeData = undefined;
    }
    get step1SelectedIndex() { return this.step1FormGroup.get('step1SelectedIndex'); }
    get s2StartDate() { return this.s2FormGroup.get('s2StartDate'); }
    get s2EndDate() { return this.s2FormGroup.get('s2EndDate'); }
    ngOnInit() {
        this.step1FormGroup = this._formBuilder.group({
            step1SelectedIndex: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]
        });
        this.s2FormGroup = this._formBuilder.group({
            s2StartDate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
            s2EndDate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
        });
        this.dss.getSources()
            .subscribe(source => {
            this.resultsSet = source;
            if (this.resultsSet.length > 0) {
                this.step1SelectedIndex.setValue(0);
            }
        });
    }
    stepperSelectionChange(event) {
        let selectedIndex = event.selectedIndex;
        // TODO: completed after data changed, not header seletion changed
        if (selectedIndex <= 0) {
            this.step1.completed = false;
        }
        if (selectedIndex <= 1) {
            this.step2.completed = false;
        }
    }
    onStep1Submit() {
        this.step1Submitted = true;
        if (this.step1FormGroup.invalid) {
            return;
        }
        let seriesInfo = this.resultsSet[this.step1SelectedIndex.value];
        let { maxDate, minDate } = src_shared_class_NgxChartSeriesRow__WEBPACK_IMPORTED_MODULE_0__.NgxChartSeriesRow.getDateRange(seriesInfo.series);
        this.step1Data = {
            seriesInfo: seriesInfo,
            maxDate: maxDate,
            minDate: minDate,
        };
        this.s2StartDate.setValue(minDate);
        this.s2EndDate.setValue(maxDate);
        this.setStep2RagneData();
        this.step1.completed = true;
        this.stepper.next();
    }
    onStep2Submit() {
        console.log('onStep2Submit');
        this.s2Submitted = true;
        if (this.s2FormGroup.invalid) {
            return;
        }
        let datum = this.getRagneData(this.step1Data.seriesInfo, this.s2StartDate.value, this.s2EndDate.value);
        this.step3Data = datum;
        this.step2.completed = true;
        this.stepper.next();
    }
    dataRangeChange(event) {
        this.setStep2RagneData();
    }
    setStep2RagneData() {
        let datum = this.getRagneData(this.step1Data.seriesInfo, this.s2StartDate.value, this.s2EndDate.value);
        datum.name = 'Range';
        this.step2ViewRangeData = [this.step1Data.seriesInfo, datum];
    }
    getRagneData(priceSource, inputFromDate, inputToDate) {
        let tradeDates = this.dps.getTradeDates(inputFromDate, inputToDate);
        let tradeInfos = this.dps.getTradeInfo(priceSource.series, tradeDates);
        let series = [];
        for (let datum of tradeInfos) {
            series.push(new src_shared_class_NgxChartSeriesRow__WEBPACK_IMPORTED_MODULE_0__.NgxChartSeriesRow(datum.date, datum.price));
        }
        return new src_shared_class_NgxChartDatum__WEBPACK_IMPORTED_MODULE_1__.NgxChartDatum(priceSource.name, series);
    }
}
InvestmentPageComponent.ɵfac = function InvestmentPageComponent_Factory(t) { return new (t || InvestmentPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_7__.UntypedFormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_services_data_source_service__WEBPACK_IMPORTED_MODULE_2__.DataSourceService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_services_data_processing_service__WEBPACK_IMPORTED_MODULE_3__.DataProcessingService)); };
InvestmentPageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: InvestmentPageComponent, selectors: [["app-investment-page"]], viewQuery: function InvestmentPageComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_c1, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_c2, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.stepper = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.step1 = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.step2 = _t.first);
    } }, decls: 30, vars: 9, consts: [["linear", "", "orientation", "vertical", 3, "selectionChange"], ["stepper", ""], [3, "completed"], ["step1", ""], [3, "formGroup", "ngSubmit"], ["matStepLabel", ""], ["formControlName", "step1SelectedIndex", "style", "display: flex; flex-flow: wrap; justify-content: space-around;", 4, "ngIf"], ["class", "alert", 4, "ngIf"], [2, "display", "flex"], [1, "spacer"], ["mat-flat-button", "", "color", "primary", 1, "icon-button"], ["step2", ""], [4, "ngIf"], ["mat-flat-button", "", "color", "primary", "matStepperPrevious", "", 1, "icon-button"], ["formControlName", "step1SelectedIndex", 2, "display", "flex", "flex-flow", "wrap", "justify-content", "space-around"], ["class", "radioContent", 4, "ngFor", "ngForOf"], [1, "radioContent"], ["color", "primary", 3, "value"], [3, "matTooltip"], ["tooltip", "matTooltip"], [2, "width", "80%", "height", "80%", "margin", "4px auto", "border", "1px solid #ddd"], ["ContainerRef1", ""], ["appTflNgxCLC", "", 3, "view", "results", "legend"], [1, "alert"], ["appearance", "fill"], [3, "rangePicker", "min", "max"], ["matStartDate", "", "placeholder", "Start date", "formControlName", "s2StartDate", 3, "dateChange"], ["matEndDate", "", "placeholder", "End date", "formControlName", "s2EndDate", 3, "dateChange"], ["matSuffix", "", 3, "for"], ["drp", ""], [2, "width", "100%", "height", "300px"], ["ContainerRef2", ""], ["appTflNgxCLC", "", 3, "view", "results"], [3, "serie"]], template: function InvestmentPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-stepper", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("selectionChange", function InvestmentPageComponent_Template_mat_stepper_selectionChange_0_listener($event) { return ctx.stepperSelectionChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "mat-step", 2, 3)(4, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngSubmit", function InvestmentPageComponent_Template_form_ngSubmit_4_listener() { return ctx.onStep1Submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, InvestmentPageComponent_ng_template_5_Template, 1, 0, "ng-template", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](6, InvestmentPageComponent_mat_radio_group_6_Template, 2, 1, "mat-radio-group", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](7, InvestmentPageComponent_div_7_Template, 2, 1, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](8, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](10, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "button", 10)(12, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13, "arrow_right");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14, " Next ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "mat-step", 2, 11)(17, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngSubmit", function InvestmentPageComponent_Template_form_ngSubmit_17_listener() { return ctx.onStep2Submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](18, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](19, InvestmentPageComponent_ng_template_19_Template, 1, 0, "ng-template", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](20, InvestmentPageComponent_div_20_Template, 25, 9, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "mat-step", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](22, InvestmentPageComponent_ng_template_22_Template, 1, 0, "ng-template", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](23, InvestmentPageComponent_div_23_Template, 2, 1, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](24, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](25, "div", 8)(26, "button", 13)(27, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](28, "arrow_left");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](29, " Back ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("completed", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx.step1FormGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.resultsSet !== undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.step1SelectedIndex.invalid && (ctx.step1SelectedIndex.dirty || ctx.step1SelectedIndex.touched || ctx.step1Submitted));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("completed", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx.s2FormGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.step1Data !== undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("completed", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.step3Data !== undefined);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControlName, _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_9__.LineChartComponent, _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButton, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__.MatDatepickerToggle, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__.MatDateRangeInput, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__.MatStartDate, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__.MatEndDate, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__.MatDateRangePicker, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__.MatSuffix, _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__.MatIcon, _angular_material_radio__WEBPACK_IMPORTED_MODULE_14__.MatRadioGroup, _angular_material_radio__WEBPACK_IMPORTED_MODULE_14__.MatRadioButton, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_15__.MatStep, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_15__.MatStepLabel, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_15__.MatStepper, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_15__.MatStepperPrevious, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_16__.MatTooltip, _directives_tfl_ngx_charts_line_chart_directive__WEBPACK_IMPORTED_MODULE_4__.TflNgxChartsLineChartDirective, _components_investment_result_and_source_investment_result_and_source_component__WEBPACK_IMPORTED_MODULE_5__.InvestmentResultAndSourceComponent], styles: [".alert[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  background-color: #fed3d3;\n  color: #820000;\n  padding: 1rem;\n  margin-bottom: 1rem;\n}\n\n.radioContent[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  padding-top: 10px;\n  padding-bottom: 6px;\n  width: 33.3%;\n  height: 19.8vw;\n  min-width: 150px;\n  min-height: 100px;\n}\n\n  .mat-radio-label-content {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImludmVzdG1lbnQtcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUVBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUVBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQUFKOztBQUlBO0VBQ0ksbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0FBREoiLCJmaWxlIjoiaW52ZXN0bWVudC1wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFsZXJ0IGRpdiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVkM2QzO1xyXG4gICAgY29sb3IgICAgICAgICAgIDogIzgyMDAwMDtcclxuICAgIHBhZGRpbmcgICAgICAgICA6IDFyZW07XHJcbiAgICBtYXJnaW4tYm90dG9tICAgOiAxcmVtO1xyXG59XHJcblxyXG4ucmFkaW9Db250ZW50IHtcclxuICAgIGRpc3BsYXkgICAgICAgOiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIHBhZGRpbmctdG9wICAgOiAxMHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDZweDtcclxuXHJcbiAgICB3aWR0aCAgICAgOiBjYWxjKDMzLjMlKTtcclxuICAgIGhlaWdodCAgICA6IGNhbGMoMzN2dyAqIDAuNik7XHJcbiAgICBtaW4td2lkdGggOiAxNTBweDtcclxuICAgIG1pbi1oZWlnaHQ6IDEwMHB4O1xyXG59XHJcblxyXG4vLyB0cnVuY2F0ZSByYWRpbyBidXR0b25cclxuOjpuZy1kZWVwIC5tYXQtcmFkaW8tbGFiZWwtY29udGVudCB7XHJcbiAgICB3aGl0ZS1zcGFjZSAgOiBub3dyYXA7XHJcbiAgICBvdmVyZmxvdyAgICAgOiBoaWRkZW47XHJcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxufSJdfQ== */"] });


/***/ }),

/***/ 7540:
/*!**********************************************************************************!*\
  !*** ./src/app/pages/investment-versus-page/investment-versus-page.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InvestmentVersusPageComponent": () => (/* binding */ InvestmentVersusPageComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_data_source_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/data-source.service */ 4941);
/* harmony import */ var _components_investment_result_and_source_investment_result_and_source_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/investment-result-and-source/investment-result-and-source.component */ 6522);



class InvestmentVersusPageComponent {
    constructor(dss) {
        this.dss = dss;
    }
    ngOnInit() {
        this.dss.getSources().subscribe(source => {
            let find = source.find(e => e.name.includes('0050'));
            if (find !== undefined) {
                this.serie = find;
            }
        });
    }
}
InvestmentVersusPageComponent.ɵfac = function InvestmentVersusPageComponent_Factory(t) { return new (t || InvestmentVersusPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_data_source_service__WEBPACK_IMPORTED_MODULE_0__.DataSourceService)); };
InvestmentVersusPageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: InvestmentVersusPageComponent, selectors: [["app-investment-versus-page"]], decls: 4, vars: 1, consts: [[1, "inner-content"], [2, "font-size", "32px", "padding-top", "12px"], [3, "serie"]], template: function InvestmentVersusPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "DCA versus VA");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "app-investment-result-and-source", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("serie", ctx.serie);
    } }, dependencies: [_components_investment_result_and_source_investment_result_and_source_component__WEBPACK_IMPORTED_MODULE_1__.InvestmentResultAndSourceComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbnZlc3RtZW50LXZlcnN1cy1wYWdlLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 7281:
/*!******************************************************************************!*\
  !*** ./src/app/pages/kelly-criterion-page/kelly-criterion-page.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KellyCriterionPageComponent": () => (/* binding */ KellyCriterionPageComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ 2156);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/divider */ 1528);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ 5074);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ 8562);
/* harmony import */ var mathjax_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! mathjax-angular */ 8666);










function KellyCriterionPageComponent_mat_error_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Probability should be below ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "100");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, ". ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function KellyCriterionPageComponent_mat_error_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Probability should be above ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, ". ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function KellyCriterionPageComponent_mat_error_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Probability is ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
} }
function KellyCriterionPageComponent_mat_error_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Proportion should be below ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "1000000");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, ". ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function KellyCriterionPageComponent_mat_error_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Proportion should be above ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, ". ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function KellyCriterionPageComponent_mat_error_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Proportion is ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
} }
function KellyCriterionPageComponent_ng_container_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mat-divider", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-content")(3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Fraction of the current bankroll to wager: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-form-field")(7, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Current Bankroll");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "$\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " * ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](17, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mathjax", ctx_r6.result.fractionJax);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx_r6.currentBankroll);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](15, 4, ctx_r6.result.fraction * 100), "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" = $", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](17, 6, ctx_r6.currentBankroll.value * ctx_r6.result.fraction), " ");
} }
class KellyCriterionPageComponent {
    constructor(fb, decimalPipe) {
        this.fb = fb;
        this.decimalPipe = decimalPipe;
        this.kcForm = this.fb.group({
            probability: [50, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.max(100), _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.min(0)]],
            proportion: [2, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.max(1000000), _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.min(0)]],
        });
        this.currentBankroll = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.UntypedFormControl(300, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required);
        this.result = undefined;
    }
    get probability() { return this.kcForm.get('probability'); }
    get proportion() { return this.kcForm.get('proportion'); }
    ngOnInit() { }
    calcFraction(p, b) {
        return p + (p - 1) / b;
    }
    pipe(n) {
        return this.decimalPipe.transform(n) ?? "";
    }
    onSubmit() {
        let p = this.kcForm.value['probability'] / 100;
        let b = this.kcForm.value['proportion'];
        let fraction = this.calcFraction(p, b);
        let strP = this.pipe(p);
        let strB = this.pipe(b);
        let strF = this.pipe(fraction);
        this.result = {
            fraction: fraction,
            fractionJax: `$\\LARGE{ f^* = ${strP} + {${strP}-1 \\over ${strB}} = ${strF} }$`,
        };
    }
}
KellyCriterionPageComponent.ɵfac = function KellyCriterionPageComponent_Factory(t) { return new (t || KellyCriterionPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__.UntypedFormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__.DecimalPipe)); };
KellyCriterionPageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: KellyCriterionPageComponent, selectors: [["app-kelly-criterion-page"]], decls: 46, vars: 16, consts: [[1, "inner-content"], [2, "font-size", "32px", "padding-top", "12px"], [2, "margin", "0 0 16px"], ["href", "https://wikipedia.org/wiki/Kelly_criterion"], [2, "margin", "16px 0"], [1, "mathjax-margin", 3, "mathjax"], [3, "mathjax"], [2, "padding", "24px"], [3, "formGroup", "ngSubmit"], [2, "display", "flex", "flex-wrap", "wrap", "gap", "12px 24px"], [2, "flex", "1 1 auto"], ["color", "primary", 3, "mathjax"], ["matInput", "", "formControlName", "probability", "type", "number", "step", "1", "max", "100", "min", "0", "placeholder", "Please enter value", 2, "text-align", "right"], ["matSuffix", ""], [4, "ngIf"], ["matInput", "", "formControlName", "proportion", "type", "number", "step", "1", "max", "1000000", "min", "0", "placeholder", "Please enter value", 2, "text-align", "right"], ["mat-flat-button", "", "color", "primary", "type", "submit", 2, "width", "100%", 3, "disabled"], ["inset", "", 2, "margin", "16px 0"], ["matPrefix", ""], ["matInput", "", "type", "number", "step", "1", "max", "1000000", "min", "0", "placeholder", "Please enter value", 3, "formControl"]], template: function KellyCriterionPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Kelly criterion");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " (From ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "https://wikipedia.org/wiki/Kelly_criterion");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, ") ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " In probability theory, the Kelly criterion (or Kelly strategy or Kelly bet), is a formula that determines the optimal theoretical size for a bet. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "mat-divider", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Gambling formula");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Where losing the bet involves losing the entire wager, the Kelly bet is: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Where: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "li", 6)(19, "li", 6)(20, "li", 6)(21, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "mat-divider", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Calculator");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-card", 7)(26, "mat-card-content")(27, "form", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function KellyCriterionPageComponent_Template_form_ngSubmit_27_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 9)(29, "mat-form-field", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "mat-label", 11)(31, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "\u00A0%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, KellyCriterionPageComponent_mat_error_34_Template, 5, 0, "mat-error", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, KellyCriterionPageComponent_mat_error_35_Template, 5, 0, "mat-error", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, KellyCriterionPageComponent_mat_error_36_Template, 4, 0, "mat-error", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "mat-form-field", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "mat-label", 6)(39, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, KellyCriterionPageComponent_mat_error_40_Template, 5, 0, "mat-error", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, KellyCriterionPageComponent_mat_error_41_Template, 5, 0, "mat-error", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, KellyCriterionPageComponent_mat_error_42_Template, 4, 0, "mat-error", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Calculate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](45, KellyCriterionPageComponent_ng_container_45_Template, 18, 8, "ng-container", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mathjax", "$\\LARGE{ f^* = p - { q \\over b } = p + { p-1 \\over b } }$");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mathjax", "$ f^* $ is the fraction of the current bankroll to wager.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mathjax", "$ p $ is the probability of a win.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mathjax", "$ q $ is the probability of a loss $ (q = 1-p) $.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mathjax", "$ b $ is the proportion of the bet gained with a win. E.g. If betting \\$10 on a 2-to-1 odds bet, (upon win you are returned \\$30, winning you \\$20), then $ b = \\$20/\\$10 = 2.0 $ ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.kcForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mathjax", "$ p $ (Probability of a win)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.probability.hasError("max"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.probability.hasError("min"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.probability.hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mathjax", "$ b $ (Proportion of the bet gained)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.proportion.hasError("max"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.proportion.hasError("min"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.proportion.hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.kcForm.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.result != undefined);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.MinValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.MaxValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlName, _angular_material_button__WEBPACK_IMPORTED_MODULE_3__.MatButton, _angular_material_card__WEBPACK_IMPORTED_MODULE_4__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_4__.MatCardContent, _angular_material_divider__WEBPACK_IMPORTED_MODULE_5__.MatDivider, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatError, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatPrefix, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatSuffix, _angular_material_input__WEBPACK_IMPORTED_MODULE_7__.MatInput, mathjax_angular__WEBPACK_IMPORTED_MODULE_8__.MathjaxDirective, _angular_common__WEBPACK_IMPORTED_MODULE_2__.DecimalPipe], styles: [".right-align[_ngcontent-%COMP%] {\n  text-align: right;\n}\n\ninput.right-align[_ngcontent-%COMP%]::-webkit-outer-spin-button, input.right-align[_ngcontent-%COMP%]::-webkit-inner-spin-button {\n  display: none;\n}\n\ninput.right-align[_ngcontent-%COMP%] {\n  -moz-appearance: textfield1;\n}\n\n.mathjax-margin[_ngcontent-%COMP%] {\n  margin: 8px 16px 24px;\n}\n\nmat-card[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%] {\n  font-size: 1.4em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImtlbGx5LWNyaXRlcmlvbi1wYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsaUJBQUE7QUFBRjs7QUFHQTs7RUFFRSxhQUFBO0FBQUY7O0FBR0E7RUFDRSwyQkFBQTtBQUFGOztBQUtBO0VBQ0UscUJBQUE7QUFGRjs7QUFLQTtFQUNFLGdCQUFBO0FBRkYiLCJmaWxlIjoia2VsbHktY3JpdGVyaW9uLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyByZWZlcmVuY2U6IGh0dHBzOi8vbWF0ZXJpYWwuYW5ndWxhci5pby9jb21wb25lbnRzL2Zvcm0tZmllbGQvb3ZlcnZpZXdcclxuLnJpZ2h0LWFsaWduIHtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG5cclxuaW5wdXQucmlnaHQtYWxpZ246Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24sXHJcbmlucHV0LnJpZ2h0LWFsaWduOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG5pbnB1dC5yaWdodC1hbGlnbiB7XHJcbiAgLW1vei1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQxO1xyXG59XHJcblxyXG4vLy8vXHJcblxyXG4ubWF0aGpheC1tYXJnaW4ge1xyXG4gIG1hcmdpbjogOHB4IDE2cHggMjRweDtcclxufVxyXG5cclxubWF0LWNhcmQgbWF0LWZvcm0tZmllbGQge1xyXG4gIGZvbnQtc2l6ZTogMS40ZW07XHJcbn0iXX0= */"] });


/***/ }),

/***/ 8340:
/*!******************************************************************!*\
  !*** ./src/app/pages/page-not-found/page-not-found.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageNotFoundComponent": () => (/* binding */ PageNotFoundComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ 7822);




class PageNotFoundComponent {
    constructor() { }
    ngOnInit() {
    }
}
PageNotFoundComponent.ɵfac = function PageNotFoundComponent_Factory(t) { return new (t || PageNotFoundComponent)(); };
PageNotFoundComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PageNotFoundComponent, selectors: [["app-page-not-found"]], decls: 8, vars: 1, consts: [[2, "display", "flex", "flex-direction", "column", "align-items", "center", "justify-content", "center", "padding", "64px"], [2, "vertical-align", "middle", "padding-right", "12px"], [2, "vertical-align", "middle"], ["mat-flat-button", "", "color", "primary", 2, "margin-top", "24px", 3, "routerLink"]], template: function PageNotFoundComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "h1")(2, "mat-icon", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "error");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Page Not Found");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Go Home ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/");
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink, _angular_material_button__WEBPACK_IMPORTED_MODULE_2__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__.MatIcon], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYWdlLW5vdC1mb3VuZC5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 4707:
/*!**************************************************************!*\
  !*** ./src/app/pages/preview-page/preview-page.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PreviewPageComponent": () => (/* binding */ PreviewPageComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class PreviewPageComponent {
    constructor() {
        this.projectData = [new urlInfo('ngx-your-vocabulary-book ', 'https://your-vocabulary-book.azurewebsites.net/', 'https://github.com/balato1992/ngx-your-vocabulary-book '), new urlInfo('product-and-receipt ', '', // https://time-management-tools.azurewebsites.net
            'https://github.com/balato1992/product-and-receipt '), /*new urlInfo(
              'time-management-tools',
              'https://time-management-tools.azurewebsites.net',
              'https://github.com/balato1992/time-management-tools'
            )*/
        ];
        this.exampleData = [new urlInfo('Signal R Example', 'https://signalrwebpacktest.azurewebsites.net', 'https://github.com/balato1992/Practice-SignalRWebPack'),];
    }
    ngOnInit() {
        /* this.projectData.push(); */
        this.exampleData.push();
    }
}
PreviewPageComponent.ɵfac = function PreviewPageComponent_Factory(t) { return new (t || PreviewPageComponent)(); };
PreviewPageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PreviewPageComponent, selectors: [["app-preview-page"]], decls: 14, vars: 2, consts: [[1, "inner-content"], [2, "font-size", "32px", "padding-top", "12px"], [2, "display", "flex", "flex-direction", "column", "align-items", "center"], ["id", "product-and-receipt", 1, "img-div"], [1, "msg"], [1, "img-shadow", 3, "src"], [1, "img-div"]], template: function PreviewPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Side Projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2)(4, "div", 3)(5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " \u5354\u52A9\u96FB\u5B50\u5316 \u516C\u53F8\u8CC7\u6599/\u7522\u54C1/\u6536\u64DA ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6)(10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " \u55AE\u5B57\u7B46\u8A18\u7DB2\u7AD9\uFF0C\u4F7F\u7528 google OAuth \u767B\u5165\uFF0C\u4E26\u4EE5 mongodb \u8A18\u9304\u5E33\u865F\u8CC7\u8A0A\u8207\u7B46\u8A18\u8CC7\u6599\uFF0C\u53EF\u7528 google Speech API \u64AD\u653E\u7B46\u8A18 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", "./assets/imgs/product-and-receipt.png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", "./assets/imgs/vocabulary.png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcmV2aWV3LXBhZ2UuY29tcG9uZW50LnNjc3MifQ== */"] });
class urlInfo {
    constructor(name, projectDemo, githubUrl) {
        this.name = name;
        this.projectDemo = projectDemo;
        this.githubUrl = githubUrl;
    }
}


/***/ }),

/***/ 753:
/*!************************************************************************!*\
  !*** ./src/app/pages/sidenav-link-item/sidenav-link-item.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SidenavLinkItemComponent": () => (/* binding */ SidenavLinkItemComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/list */ 6517);




function SidenavLinkItemComponent_div_0_a_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const linkInfo_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", linkInfo_r1.url);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", linkInfo_r1.displayName, " ");
} }
function SidenavLinkItemComponent_div_0_app_sidenav_link_item_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-sidenav-link-item", 4);
} if (rf & 2) {
    const linkInfo_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("linkInfos", linkInfo_r1.subLink)("hiddenLevels", ctx_r3.hiddenLevels)("currentLevel", ctx_r3.currentLevel + 1);
} }
const _c0 = function (a0) { return { "padding-left": a0 }; };
function SidenavLinkItemComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SidenavLinkItemComponent_div_0_a_1_Template, 2, 2, "a", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SidenavLinkItemComponent_div_0_app_sidenav_link_item_3_Template, 1, 3, "app-sidenav-link-item", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const linkInfo_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.isHiddenLevel());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, ctx_r0.isHiddenLevel() ? "" : "12px"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", linkInfo_r1.subLink !== undefined);
} }
class SidenavLinkItemComponent {
    constructor() { }
    ngOnInit() {
    }
    isHiddenLevel() {
        return this.hiddenLevels.includes(this.currentLevel);
    }
}
SidenavLinkItemComponent.ɵfac = function SidenavLinkItemComponent_Factory(t) { return new (t || SidenavLinkItemComponent)(); };
SidenavLinkItemComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SidenavLinkItemComponent, selectors: [["app-sidenav-link-item"]], inputs: { linkInfos: "linkInfos", hiddenLevels: "hiddenLevels", currentLevel: "currentLevel" }, decls: 1, vars: 1, consts: [[4, "ngFor", "ngForOf"], ["mat-list-item", "", "routerLinkActive", "active-link", 3, "routerLink", 4, "ngIf"], [3, "linkInfos", "hiddenLevels", "currentLevel", 4, "ngIf"], ["mat-list-item", "", "routerLinkActive", "active-link", 3, "routerLink"], [3, "linkInfos", "hiddenLevels", "currentLevel"]], template: function SidenavLinkItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, SidenavLinkItemComponent_div_0_Template, 4, 6, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.linkInfos);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkWithHref, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkActive, _angular_material_list__WEBPACK_IMPORTED_MODULE_3__.MatListItem, SidenavLinkItemComponent], styles: [".active-link[_ngcontent-%COMP%] {\n  color: #1565c0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZGVuYXYtbGluay1pdGVtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBQTtBQUNKIiwiZmlsZSI6InNpZGVuYXYtbGluay1pdGVtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFjdGl2ZS1saW5rIHtcclxuICAgIGNvbG9yOiAjMTU2NWMwO1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 3578:
/*!*****************************************************!*\
  !*** ./src/app/services/data-processing.service.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DataProcessingService": () => (/* binding */ DataProcessingService)
/* harmony export */ });
/* harmony import */ var src_shared_class_InvestingDatum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/shared-class/InvestingDatum */ 7420);
/* harmony import */ var src_shared_class_NgxChartSeriesRow__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/shared-class/NgxChartSeriesRow */ 5065);
/* harmony import */ var src_shared_class_NgxChartDatum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/shared-class/NgxChartDatum */ 8417);
/* harmony import */ var src_shared_class_TradeInfo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/shared-class/TradeInfo */ 6134);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);





class DataProcessingService {
    constructor() { }
    getTradeDates(inputFromDate, inputToDate) {
        let fromDate = new Date(inputFromDate);
        let toDate = new Date(inputToDate);
        let dates = [];
        while (toDate >= fromDate) {
            if (fromDate.getDate() == 1) {
                dates.push(new Date(fromDate));
            }
            fromDate.setDate(fromDate.getDate() + 1);
        }
        return dates;
    }
    getTradeInfo(priceSource, tradeDates) {
        let arr = [];
        let indexOfLastTarget = 0;
        for (let date of tradeDates) {
            let targetItem = undefined;
            for (let i = indexOfLastTarget; i < priceSource.length; i++) {
                let sourceDate = priceSource[i]['name'];
                let sourcePrice = priceSource[i]['value'];
                if (date <= sourceDate) {
                    targetItem = new src_shared_class_TradeInfo__WEBPACK_IMPORTED_MODULE_3__.TradeInfo(sourceDate, sourcePrice);
                    indexOfLastTarget = i;
                    break;
                }
            }
            if (targetItem === undefined) {
                throw 'tradeInfo not found: ' + date;
            }
            arr.push(targetItem);
        }
        return arr;
    }
    getDollarCostAveraging(tradeInfos, money) {
        let arr = [];
        let lastDatum;
        for (let tradeInfo of tradeInfos) {
            let date = tradeInfo.date;
            let price = tradeInfo.price;
            let shareCount = (money - money % price) / price;
            let cumulativeShareCount = (lastDatum?.cumulativeShareCount ?? 0) + shareCount;
            let cumulativeDollarCost = (lastDatum?.cumulativeDollarCost ?? 0) + price * shareCount;
            lastDatum = new src_shared_class_InvestingDatum__WEBPACK_IMPORTED_MODULE_0__.InvestingDatum(date, price, shareCount, cumulativeShareCount, cumulativeDollarCost);
            arr.push(lastDatum);
        }
        return arr;
    }
    getValueAveraging(tradeInfos, money) {
        let arr = [];
        let lastDatum;
        let count = 0;
        for (let tradeInfo of tradeInfos) {
            let date = tradeInfo.date;
            let price = tradeInfo.price;
            let lastCumulativeShareCount = (lastDatum?.cumulativeShareCount ?? 0);
            let amountRequied = ++count * money;
            let funding = amountRequied - lastCumulativeShareCount * price;
            let shareCount = (funding - funding % price) / price;
            let cumulativeShareCount = lastCumulativeShareCount + shareCount;
            let cumulativeDollarCost = (lastDatum?.cumulativeDollarCost ?? 0) + price * shareCount;
            lastDatum = new src_shared_class_InvestingDatum__WEBPACK_IMPORTED_MODULE_0__.InvestingDatum(date, price, shareCount, cumulativeShareCount, cumulativeDollarCost);
            arr.push(lastDatum);
        }
        return arr;
    }
    getChartDatum(investingData) {
        let results = [];
        let series1 = [];
        let series2 = [];
        for (let datum of investingData) {
            series1.push(new src_shared_class_NgxChartSeriesRow__WEBPACK_IMPORTED_MODULE_1__.NgxChartSeriesRow(datum.tradeDate, datum.currentValue));
            series2.push(new src_shared_class_NgxChartSeriesRow__WEBPACK_IMPORTED_MODULE_1__.NgxChartSeriesRow(datum.tradeDate, datum.cumulativeDollarCost));
        }
        results.push(new src_shared_class_NgxChartDatum__WEBPACK_IMPORTED_MODULE_2__.NgxChartDatum('Value(Portfolio)', series1));
        results.push(new src_shared_class_NgxChartDatum__WEBPACK_IMPORTED_MODULE_2__.NgxChartDatum('Dollar-Cost(Investment)', series2));
        return results;
    }
    getData(rawData, startDate, endDate) {
        let tradeDates = this.getTradeDates(startDate, endDate);
        let tradeInfos = this.getTradeInfo(rawData, tradeDates);
        let infoOfDCA = this.getDollarCostAveraging(tradeInfos, 1000);
        let chartResultsOfDCA = this.getChartDatum(infoOfDCA);
        let infoOfVA = this.getValueAveraging(tradeInfos, 1000);
        let chartResultsOfVA = this.getChartDatum(infoOfVA);
        return {
            infoOfDCA: infoOfDCA,
            chartResultsOfDCA: chartResultsOfDCA,
            infoOfVA: infoOfVA,
            chartResultsOfVA: chartResultsOfVA,
        };
    }
}
DataProcessingService.ɵfac = function DataProcessingService_Factory(t) { return new (t || DataProcessingService)(); };
DataProcessingService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: DataProcessingService, factory: DataProcessingService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 4941:
/*!*************************************************!*\
  !*** ./src/app/services/data-source.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DataSourceService": () => (/* binding */ DataSourceService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 4139);
/* harmony import */ var src_data_customData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/data/customData */ 6074);
/* harmony import */ var src_shared_class_NgxChartDatum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/shared-class/NgxChartDatum */ 8417);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);




class DataSourceService {
    constructor() { }
    getSources() {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)(src_shared_class_NgxChartDatum__WEBPACK_IMPORTED_MODULE_1__.NgxChartDatum.parseArr(src_data_customData__WEBPACK_IMPORTED_MODULE_0__.strData));
    }
}
DataSourceService.ɵfac = function DataSourceService_Factory(t) { return new (t || DataSourceService)(); };
DataSourceService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: DataSourceService, factory: DataSourceService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 7028:
/*!****************************************************!*\
  !*** ./src/app/services/global-methods.service.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GlobalMethodsService": () => (/* binding */ GlobalMethodsService)
/* harmony export */ });
/* harmony import */ var _global_variables__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../global-variables */ 7544);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);



class GlobalMethodsService {
    constructor() { }
    get isMobile() {
        return this.mobileQuery.matches;
    }
    // 20210910: check if there is a linkInfo is active and has subLink
    currentRouterHasNav(router) {
        // todo: 20210909: figure out IsActiveMatchOptions params
        for (let linkInfo of _global_variables__WEBPACK_IMPORTED_MODULE_0__.LINK_INFOS) {
            let url = linkInfo.url;
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
GlobalMethodsService.ɵfac = function GlobalMethodsService_Factory(t) { return new (t || GlobalMethodsService)(); };
GlobalMethodsService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: GlobalMethodsService, factory: GlobalMethodsService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 6074:
/*!********************************!*\
  !*** ./src/data/customData.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "strData": () => (/* binding */ strData)
/* harmony export */ });
let strData = '[{"name":"Yuanta/P-shares Taiwan Top 50 ETF (0050.TW)","series":[{"name":"2013-10-17T16:00:00.000Z","value":59.05},{"name":"2013-10-20T16:00:00.000Z","value":59},{"name":"2013-10-21T16:00:00.000Z","value":59},{"name":"2013-10-22T16:00:00.000Z","value":58.7},{"name":"2013-10-23T16:00:00.000Z","value":57.55},{"name":"2013-10-24T16:00:00.000Z","value":57.1},{"name":"2013-10-27T16:00:00.000Z","value":57.5},{"name":"2013-10-28T16:00:00.000Z","value":57.75},{"name":"2013-10-29T16:00:00.000Z","value":57.9},{"name":"2013-10-30T16:00:00.000Z","value":57.9},{"name":"2013-10-31T16:00:00.000Z","value":57.6},{"name":"2013-11-03T16:00:00.000Z","value":57.35},{"name":"2013-11-04T16:00:00.000Z","value":56.8},{"name":"2013-11-05T16:00:00.000Z","value":56.8},{"name":"2013-11-06T16:00:00.000Z","value":56.65},{"name":"2013-11-07T16:00:00.000Z","value":56.45},{"name":"2013-11-10T16:00:00.000Z","value":56.3},{"name":"2013-11-11T16:00:00.000Z","value":56.5},{"name":"2013-11-12T16:00:00.000Z","value":55.75},{"name":"2013-11-13T16:00:00.000Z","value":55.9},{"name":"2013-11-14T16:00:00.000Z","value":56.15},{"name":"2013-11-17T16:00:00.000Z","value":56.45},{"name":"2013-11-18T16:00:00.000Z","value":56.8},{"name":"2013-11-19T16:00:00.000Z","value":56.45},{"name":"2013-11-20T16:00:00.000Z","value":55.45},{"name":"2013-11-21T16:00:00.000Z","value":55.5},{"name":"2013-11-24T16:00:00.000Z","value":56.25},{"name":"2013-11-25T16:00:00.000Z","value":56.7},{"name":"2013-11-26T16:00:00.000Z","value":57},{"name":"2013-11-27T16:00:00.000Z","value":57.35},{"name":"2013-11-28T16:00:00.000Z","value":57.55},{"name":"2013-12-01T16:00:00.000Z","value":57.45},{"name":"2013-12-02T16:00:00.000Z","value":57.5},{"name":"2013-12-03T16:00:00.000Z","value":57.45},{"name":"2013-12-04T16:00:00.000Z","value":57.1},{"name":"2013-12-05T16:00:00.000Z","value":57.15},{"name":"2013-12-08T16:00:00.000Z","value":57.65},{"name":"2013-12-09T16:00:00.000Z","value":57.8},{"name":"2013-12-10T16:00:00.000Z","value":57.85},{"name":"2013-12-11T16:00:00.000Z","value":57.4},{"name":"2013-12-12T16:00:00.000Z","value":57.35},{"name":"2013-12-15T16:00:00.000Z","value":56.9},{"name":"2013-12-16T16:00:00.000Z","value":57.2},{"name":"2013-12-17T16:00:00.000Z","value":57},{"name":"2013-12-18T16:00:00.000Z","value":57.35},{"name":"2013-12-19T16:00:00.000Z","value":57.45},{"name":"2013-12-22T16:00:00.000Z","value":57.85},{"name":"2013-12-23T16:00:00.000Z","value":57.8},{"name":"2013-12-24T16:00:00.000Z","value":57.85},{"name":"2013-12-25T16:00:00.000Z","value":57.85},{"name":"2013-12-26T16:00:00.000Z","value":58.3},{"name":"2013-12-29T16:00:00.000Z","value":58.8},{"name":"2013-12-30T16:00:00.000Z","value":58.7},{"name":"2014-01-01T16:00:00.000Z","value":58.55},{"name":"2014-01-02T16:00:00.000Z","value":57.85},{"name":"2014-01-05T16:00:00.000Z","value":57.7},{"name":"2014-01-06T16:00:00.000Z","value":57.7},{"name":"2014-01-07T16:00:00.000Z","value":57.8},{"name":"2014-01-08T16:00:00.000Z","value":57.55},{"name":"2014-01-09T16:00:00.000Z","value":57.55},{"name":"2014-01-12T16:00:00.000Z","value":57.9},{"name":"2014-01-13T16:00:00.000Z","value":57.8},{"name":"2014-01-14T16:00:00.000Z","value":58.4},{"name":"2014-01-15T16:00:00.000Z","value":58.55},{"name":"2014-01-16T16:00:00.000Z","value":58.65},{"name":"2014-01-19T16:00:00.000Z","value":58.8},{"name":"2014-01-20T16:00:00.000Z","value":58.55},{"name":"2014-01-21T16:00:00.000Z","value":58.65},{"name":"2014-01-22T16:00:00.000Z","value":58.5},{"name":"2014-01-23T16:00:00.000Z","value":58.65},{"name":"2014-01-26T16:00:00.000Z","value":57.6},{"name":"2014-02-04T16:00:00.000Z","value":55.8},{"name":"2014-02-05T16:00:00.000Z","value":56},{"name":"2014-02-06T16:00:00.000Z","value":56.6},{"name":"2014-02-09T16:00:00.000Z","value":56.6},{"name":"2014-02-10T16:00:00.000Z","value":56.95},{"name":"2014-02-11T16:00:00.000Z","value":57.55},{"name":"2014-02-12T16:00:00.000Z","value":57.4},{"name":"2014-02-13T16:00:00.000Z","value":57.95},{"name":"2014-02-16T16:00:00.000Z","value":57.95},{"name":"2014-02-17T16:00:00.000Z","value":58.15},{"name":"2014-02-18T16:00:00.000Z","value":58.15},{"name":"2014-02-19T16:00:00.000Z","value":57.65},{"name":"2014-02-20T16:00:00.000Z","value":58.2},{"name":"2014-02-23T16:00:00.000Z","value":57.9},{"name":"2014-02-24T16:00:00.000Z","value":58.15},{"name":"2014-02-25T16:00:00.000Z","value":58.4},{"name":"2014-02-26T16:00:00.000Z","value":58.3},{"name":"2014-03-02T16:00:00.000Z","value":57.95},{"name":"2014-03-03T16:00:00.000Z","value":57.7},{"name":"2014-03-04T16:00:00.000Z","value":58.3},{"name":"2014-03-05T16:00:00.000Z","value":59.15},{"name":"2014-03-06T16:00:00.000Z","value":59.4},{"name":"2014-03-09T16:00:00.000Z","value":59.05},{"name":"2014-03-10T16:00:00.000Z","value":59.35},{"name":"2014-03-11T16:00:00.000Z","value":58.8},{"name":"2014-03-12T16:00:00.000Z","value":59.75},{"name":"2014-03-13T16:00:00.000Z","value":59.15},{"name":"2014-03-16T16:00:00.000Z","value":59.05},{"name":"2014-03-17T16:00:00.000Z","value":59.4},{"name":"2014-03-18T16:00:00.000Z","value":59.25},{"name":"2014-03-19T16:00:00.000Z","value":58.5},{"name":"2014-03-20T16:00:00.000Z","value":58.5},{"name":"2014-03-23T16:00:00.000Z","value":58.65},{"name":"2014-03-24T16:00:00.000Z","value":59.15},{"name":"2014-03-25T16:00:00.000Z","value":59.7},{"name":"2014-03-26T16:00:00.000Z","value":59.8},{"name":"2014-03-27T16:00:00.000Z","value":59.9},{"name":"2014-03-30T16:00:00.000Z","value":60.1},{"name":"2014-03-31T16:00:00.000Z","value":60.6},{"name":"2014-04-01T16:00:00.000Z","value":60.8},{"name":"2014-04-02T16:00:00.000Z","value":60.65},{"name":"2014-04-06T16:00:00.000Z","value":60.5},{"name":"2014-04-07T16:00:00.000Z","value":60.8},{"name":"2014-04-08T16:00:00.000Z","value":61},{"name":"2014-04-09T16:00:00.000Z","value":61.2},{"name":"2014-04-10T16:00:00.000Z","value":61.15},{"name":"2014-04-13T16:00:00.000Z","value":61.05},{"name":"2014-04-14T16:00:00.000Z","value":61.35},{"name":"2014-04-15T16:00:00.000Z","value":61.3},{"name":"2014-04-16T16:00:00.000Z","value":61.15},{"name":"2014-04-17T16:00:00.000Z","value":61.55},{"name":"2014-04-20T16:00:00.000Z","value":61.55},{"name":"2014-04-21T16:00:00.000Z","value":61.75},{"name":"2014-04-22T16:00:00.000Z","value":61.65},{"name":"2014-04-23T16:00:00.000Z","value":61.75},{"name":"2014-04-24T16:00:00.000Z","value":60.7},{"name":"2014-04-27T16:00:00.000Z","value":61.25},{"name":"2014-04-28T16:00:00.000Z","value":61.35},{"name":"2014-04-29T16:00:00.000Z","value":61},{"name":"2014-05-01T16:00:00.000Z","value":61.3},{"name":"2014-05-04T16:00:00.000Z","value":61.2},{"name":"2014-05-05T16:00:00.000Z","value":61.55},{"name":"2014-05-06T16:00:00.000Z","value":61.4},{"name":"2014-05-07T16:00:00.000Z","value":61.85},{"name":"2014-05-08T16:00:00.000Z","value":61.45},{"name":"2014-05-11T16:00:00.000Z","value":61.15},{"name":"2014-05-12T16:00:00.000Z","value":61.45},{"name":"2014-05-13T16:00:00.000Z","value":61.8},{"name":"2014-05-14T16:00:00.000Z","value":61.75},{"name":"2014-05-15T16:00:00.000Z","value":61.85},{"name":"2014-05-18T16:00:00.000Z","value":61.85},{"name":"2014-05-19T16:00:00.000Z","value":62.1},{"name":"2014-05-20T16:00:00.000Z","value":61.8},{"name":"2014-05-21T16:00:00.000Z","value":62.65},{"name":"2014-05-22T16:00:00.000Z","value":62.75},{"name":"2014-05-25T16:00:00.000Z","value":63.05},{"name":"2014-05-26T16:00:00.000Z","value":63.1},{"name":"2014-05-27T16:00:00.000Z","value":63.7},{"name":"2014-05-28T16:00:00.000Z","value":63.4},{"name":"2014-05-29T16:00:00.000Z","value":63.1},{"name":"2014-06-02T16:00:00.000Z","value":63.15},{"name":"2014-06-03T16:00:00.000Z","value":63.4},{"name":"2014-06-04T16:00:00.000Z","value":63.4},{"name":"2014-06-05T16:00:00.000Z","value":63.55},{"name":"2014-06-08T16:00:00.000Z","value":63.8},{"name":"2014-06-09T16:00:00.000Z","value":64.2},{"name":"2014-06-10T16:00:00.000Z","value":64.15},{"name":"2014-06-11T16:00:00.000Z","value":64},{"name":"2014-06-12T16:00:00.000Z","value":63.85},{"name":"2014-06-15T16:00:00.000Z","value":63.9},{"name":"2014-06-16T16:00:00.000Z","value":64.35},{"name":"2014-06-17T16:00:00.000Z","value":64.5},{"name":"2014-06-18T16:00:00.000Z","value":64.95},{"name":"2014-06-19T16:00:00.000Z","value":64.75},{"name":"2014-06-22T16:00:00.000Z","value":64.7},{"name":"2014-06-23T16:00:00.000Z","value":64.8},{"name":"2014-06-24T16:00:00.000Z","value":64.65},{"name":"2014-06-25T16:00:00.000Z","value":65.35},{"name":"2014-06-26T16:00:00.000Z","value":65.35},{"name":"2014-06-29T16:00:00.000Z","value":65.95},{"name":"2014-06-30T16:00:00.000Z","value":66.55},{"name":"2014-07-01T16:00:00.000Z","value":67.1},{"name":"2014-07-02T16:00:00.000Z","value":67.7},{"name":"2014-07-03T16:00:00.000Z","value":67.7},{"name":"2014-07-06T16:00:00.000Z","value":67.6},{"name":"2014-07-07T16:00:00.000Z","value":67.75},{"name":"2014-07-08T16:00:00.000Z","value":67.85},{"name":"2014-07-09T16:00:00.000Z","value":68.35},{"name":"2014-07-10T16:00:00.000Z","value":68.3},{"name":"2014-07-13T16:00:00.000Z","value":68.7},{"name":"2014-07-14T16:00:00.000Z","value":68.95},{"name":"2014-07-15T16:00:00.000Z","value":68.35},{"name":"2014-07-16T16:00:00.000Z","value":67.5},{"name":"2014-07-17T16:00:00.000Z","value":67.5},{"name":"2014-07-20T16:00:00.000Z","value":67.5},{"name":"2014-07-21T16:00:00.000Z","value":68.1},{"name":"2014-07-23T16:00:00.000Z","value":68.4},{"name":"2014-07-24T16:00:00.000Z","value":67.65},{"name":"2014-07-27T16:00:00.000Z","value":67.5},{"name":"2014-07-28T16:00:00.000Z","value":67.45},{"name":"2014-07-29T16:00:00.000Z","value":67.85},{"name":"2014-07-30T16:00:00.000Z","value":66.75},{"name":"2014-07-31T16:00:00.000Z","value":66.25},{"name":"2014-08-03T16:00:00.000Z","value":66.6},{"name":"2014-08-04T16:00:00.000Z","value":65.25},{"name":"2014-08-05T16:00:00.000Z","value":65.7},{"name":"2014-08-06T16:00:00.000Z","value":65.7},{"name":"2014-08-07T16:00:00.000Z","value":65.7},{"name":"2014-08-10T16:00:00.000Z","value":66.05},{"name":"2014-08-11T16:00:00.000Z","value":66.1},{"name":"2014-08-12T16:00:00.000Z","value":66.75},{"name":"2014-08-13T16:00:00.000Z","value":67.1},{"name":"2014-08-14T16:00:00.000Z","value":67.1},{"name":"2014-08-17T16:00:00.000Z","value":66.9},{"name":"2014-08-18T16:00:00.000Z","value":67.75},{"name":"2014-08-19T16:00:00.000Z","value":68},{"name":"2014-08-20T16:00:00.000Z","value":67.9},{"name":"2014-08-21T16:00:00.000Z","value":68.75},{"name":"2014-08-24T16:00:00.000Z","value":68.65},{"name":"2014-08-25T16:00:00.000Z","value":68.6},{"name":"2014-08-26T16:00:00.000Z","value":69.25},{"name":"2014-08-27T16:00:00.000Z","value":69.35},{"name":"2014-08-28T16:00:00.000Z","value":69.2},{"name":"2014-08-31T16:00:00.000Z","value":69.8},{"name":"2014-09-01T16:00:00.000Z","value":68.75},{"name":"2014-09-02T16:00:00.000Z","value":69.25},{"name":"2014-09-03T16:00:00.000Z","value":69},{"name":"2014-09-04T16:00:00.000Z","value":69},{"name":"2014-09-08T16:00:00.000Z","value":69.25},{"name":"2014-09-09T16:00:00.000Z","value":68.65},{"name":"2014-09-10T16:00:00.000Z","value":68.4},{"name":"2014-09-11T16:00:00.000Z","value":67.75},{"name":"2014-09-14T16:00:00.000Z","value":67.75},{"name":"2014-09-15T16:00:00.000Z","value":67.2},{"name":"2014-09-16T16:00:00.000Z","value":67.7},{"name":"2014-09-17T16:00:00.000Z","value":67.85},{"name":"2014-09-18T16:00:00.000Z","value":68},{"name":"2014-09-21T16:00:00.000Z","value":66.95},{"name":"2014-09-22T16:00:00.000Z","value":66.8},{"name":"2014-09-23T16:00:00.000Z","value":66.55},{"name":"2014-09-24T16:00:00.000Z","value":65.95},{"name":"2014-09-25T16:00:00.000Z","value":65.6},{"name":"2014-09-28T16:00:00.000Z","value":65.4},{"name":"2014-09-29T16:00:00.000Z","value":65.3},{"name":"2014-09-30T16:00:00.000Z","value":65.5},{"name":"2014-10-01T16:00:00.000Z","value":65.5},{"name":"2014-10-02T16:00:00.000Z","value":66.7},{"name":"2014-10-05T16:00:00.000Z","value":66.65},{"name":"2014-10-06T16:00:00.000Z","value":66.1},{"name":"2014-10-07T16:00:00.000Z","value":65.7},{"name":"2014-10-08T16:00:00.000Z","value":66},{"name":"2014-10-12T16:00:00.000Z","value":64},{"name":"2014-10-13T16:00:00.000Z","value":64.55},{"name":"2014-10-14T16:00:00.000Z","value":64.1},{"name":"2014-10-15T16:00:00.000Z","value":64},{"name":"2014-10-16T16:00:00.000Z","value":63.35},{"name":"2014-10-19T16:00:00.000Z","value":64.6},{"name":"2014-10-20T16:00:00.000Z","value":64.3},{"name":"2014-10-21T16:00:00.000Z","value":65.3},{"name":"2014-10-22T16:00:00.000Z","value":65.05},{"name":"2014-10-23T16:00:00.000Z","value":63.05},{"name":"2014-10-26T16:00:00.000Z","value":63.25},{"name":"2014-10-27T16:00:00.000Z","value":64.35},{"name":"2014-10-28T16:00:00.000Z","value":65},{"name":"2014-10-29T16:00:00.000Z","value":64.8},{"name":"2014-10-30T16:00:00.000Z","value":65.3},{"name":"2014-11-02T16:00:00.000Z","value":65.6},{"name":"2014-11-03T16:00:00.000Z","value":65.65},{"name":"2014-11-04T16:00:00.000Z","value":65.5},{"name":"2014-11-05T16:00:00.000Z","value":65.1},{"name":"2014-11-06T16:00:00.000Z","value":65.2},{"name":"2014-11-09T16:00:00.000Z","value":66.15},{"name":"2014-11-10T16:00:00.000Z","value":65.95},{"name":"2014-11-11T16:00:00.000Z","value":65},{"name":"2014-11-12T16:00:00.000Z","value":65.65},{"name":"2014-11-13T16:00:00.000Z","value":65.7},{"name":"2014-11-16T16:00:00.000Z","value":65.1},{"name":"2014-11-17T16:00:00.000Z","value":64.9},{"name":"2014-11-18T16:00:00.000Z","value":65.85},{"name":"2014-11-19T16:00:00.000Z","value":66.6},{"name":"2014-11-20T16:00:00.000Z","value":66.65},{"name":"2014-11-23T16:00:00.000Z","value":66.8},{"name":"2014-11-24T16:00:00.000Z","value":66.85},{"name":"2014-11-25T16:00:00.000Z","value":66.85},{"name":"2014-11-26T16:00:00.000Z","value":67.5},{"name":"2014-11-27T16:00:00.000Z","value":67.5},{"name":"2014-11-30T16:00:00.000Z","value":66.8},{"name":"2014-12-01T16:00:00.000Z","value":65.8},{"name":"2014-12-02T16:00:00.000Z","value":66.85},{"name":"2014-12-03T16:00:00.000Z","value":67.1},{"name":"2014-12-04T16:00:00.000Z","value":66.85},{"name":"2014-12-07T16:00:00.000Z","value":66.35},{"name":"2014-12-08T16:00:00.000Z","value":66.2},{"name":"2014-12-09T16:00:00.000Z","value":65.3},{"name":"2014-12-10T16:00:00.000Z","value":65.25},{"name":"2014-12-11T16:00:00.000Z","value":65.3},{"name":"2014-12-14T16:00:00.000Z","value":65.1},{"name":"2014-12-15T16:00:00.000Z","value":64.55},{"name":"2014-12-16T16:00:00.000Z","value":63.55},{"name":"2014-12-17T16:00:00.000Z","value":63.7},{"name":"2014-12-18T16:00:00.000Z","value":65.2},{"name":"2014-12-21T16:00:00.000Z","value":66},{"name":"2014-12-22T16:00:00.000Z","value":65.8},{"name":"2014-12-23T16:00:00.000Z","value":66.3},{"name":"2014-12-24T16:00:00.000Z","value":66.3},{"name":"2014-12-25T16:00:00.000Z","value":66.45},{"name":"2014-12-28T16:00:00.000Z","value":67.2},{"name":"2014-12-29T16:00:00.000Z","value":66.85},{"name":"2014-12-30T16:00:00.000Z","value":66.85},{"name":"2015-01-04T16:00:00.000Z","value":66.55},{"name":"2015-01-05T16:00:00.000Z","value":64.9},{"name":"2015-01-06T16:00:00.000Z","value":65},{"name":"2015-01-07T16:00:00.000Z","value":66.5},{"name":"2015-01-08T16:00:00.000Z","value":66.15},{"name":"2015-01-11T16:00:00.000Z","value":65.75},{"name":"2015-01-12T16:00:00.000Z","value":65.95},{"name":"2015-01-13T16:00:00.000Z","value":65.6},{"name":"2015-01-14T16:00:00.000Z","value":65.8},{"name":"2015-01-15T16:00:00.000Z","value":65.5},{"name":"2015-01-18T16:00:00.000Z","value":66.25},{"name":"2015-01-19T16:00:00.000Z","value":66.75},{"name":"2015-01-20T16:00:00.000Z","value":67.25},{"name":"2015-01-21T16:00:00.000Z","value":67.6},{"name":"2015-01-22T16:00:00.000Z","value":68.7},{"name":"2015-01-25T16:00:00.000Z","value":68.7},{"name":"2015-01-26T16:00:00.000Z","value":69.15},{"name":"2015-01-27T16:00:00.000Z","value":69.15},{"name":"2015-01-28T16:00:00.000Z","value":68.3},{"name":"2015-01-29T16:00:00.000Z","value":68},{"name":"2015-02-01T16:00:00.000Z","value":68.15},{"name":"2015-02-02T16:00:00.000Z","value":68.65},{"name":"2015-02-03T16:00:00.000Z","value":69.4},{"name":"2015-02-04T16:00:00.000Z","value":69.1},{"name":"2015-02-05T16:00:00.000Z","value":68.75},{"name":"2015-02-08T16:00:00.000Z","value":68.5},{"name":"2015-02-09T16:00:00.000Z","value":68.25},{"name":"2015-02-10T16:00:00.000Z","value":69},{"name":"2015-02-11T16:00:00.000Z","value":69},{"name":"2015-02-12T16:00:00.000Z","value":69.45},{"name":"2015-02-23T16:00:00.000Z","value":70.25},{"name":"2015-02-24T16:00:00.000Z","value":70.8},{"name":"2015-02-25T16:00:00.000Z","value":70.3},{"name":"2015-03-01T16:00:00.000Z","value":70},{"name":"2015-03-02T16:00:00.000Z","value":69.9},{"name":"2015-03-03T16:00:00.000Z","value":69.95},{"name":"2015-03-04T16:00:00.000Z","value":69.7},{"name":"2015-03-05T16:00:00.000Z","value":69.8},{"name":"2015-03-08T16:00:00.000Z","value":69.1},{"name":"2015-03-09T16:00:00.000Z","value":68.95},{"name":"2015-03-10T16:00:00.000Z","value":69.05},{"name":"2015-03-11T16:00:00.000Z","value":69.65},{"name":"2015-03-12T16:00:00.000Z","value":69.45},{"name":"2015-03-15T16:00:00.000Z","value":68.9},{"name":"2015-03-16T16:00:00.000Z","value":69.15},{"name":"2015-03-17T16:00:00.000Z","value":69.9},{"name":"2015-03-18T16:00:00.000Z","value":70.65},{"name":"2015-03-19T16:00:00.000Z","value":70.55},{"name":"2015-03-22T16:00:00.000Z","value":70.75},{"name":"2015-03-23T16:00:00.000Z","value":70.5},{"name":"2015-03-24T16:00:00.000Z","value":70.25},{"name":"2015-03-25T16:00:00.000Z","value":69.4},{"name":"2015-03-26T16:00:00.000Z","value":68.75},{"name":"2015-03-29T16:00:00.000Z","value":68.8},{"name":"2015-03-30T16:00:00.000Z","value":69.05},{"name":"2015-03-31T16:00:00.000Z","value":68.65},{"name":"2015-04-01T16:00:00.000Z","value":69.5},{"name":"2015-04-06T16:00:00.000Z","value":69.6},{"name":"2015-04-07T16:00:00.000Z","value":69},{"name":"2015-04-08T16:00:00.000Z","value":69.1},{"name":"2015-04-09T16:00:00.000Z","value":69.65},{"name":"2015-04-12T16:00:00.000Z","value":69.85},{"name":"2015-04-13T16:00:00.000Z","value":69.5},{"name":"2015-04-14T16:00:00.000Z","value":68.65},{"name":"2015-04-15T16:00:00.000Z","value":69.7},{"name":"2015-04-16T16:00:00.000Z","value":69.05},{"name":"2015-04-19T16:00:00.000Z","value":68.95},{"name":"2015-04-20T16:00:00.000Z","value":68.95},{"name":"2015-04-21T16:00:00.000Z","value":69.65},{"name":"2015-04-22T16:00:00.000Z","value":71.5},{"name":"2015-04-23T16:00:00.000Z","value":72.2},{"name":"2015-04-26T16:00:00.000Z","value":72.75},{"name":"2015-04-27T16:00:00.000Z","value":72.6},{"name":"2015-04-28T16:00:00.000Z","value":71.8},{"name":"2015-04-29T16:00:00.000Z","value":71.45},{"name":"2015-05-03T16:00:00.000Z","value":71.6},{"name":"2015-05-04T16:00:00.000Z","value":71.2},{"name":"2015-05-05T16:00:00.000Z","value":71.3},{"name":"2015-05-06T16:00:00.000Z","value":70.45},{"name":"2015-05-07T16:00:00.000Z","value":70.5},{"name":"2015-05-10T16:00:00.000Z","value":70.85},{"name":"2015-05-11T16:00:00.000Z","value":70.7},{"name":"2015-05-12T16:00:00.000Z","value":71.1},{"name":"2015-05-13T16:00:00.000Z","value":70.1},{"name":"2015-05-14T16:00:00.000Z","value":70},{"name":"2015-05-17T16:00:00.000Z","value":70.25},{"name":"2015-05-18T16:00:00.000Z","value":71.3},{"name":"2015-05-19T16:00:00.000Z","value":70.8},{"name":"2015-05-20T16:00:00.000Z","value":70.15},{"name":"2015-05-21T16:00:00.000Z","value":70.7},{"name":"2015-05-24T16:00:00.000Z","value":70.7},{"name":"2015-05-25T16:00:00.000Z","value":71},{"name":"2015-05-26T16:00:00.000Z","value":71.15},{"name":"2015-05-27T16:00:00.000Z","value":71.5},{"name":"2015-05-28T16:00:00.000Z","value":71.1},{"name":"2015-05-31T16:00:00.000Z","value":70.5},{"name":"2015-06-01T16:00:00.000Z","value":70.4},{"name":"2015-06-02T16:00:00.000Z","value":69.95},{"name":"2015-06-03T16:00:00.000Z","value":68.6},{"name":"2015-06-04T16:00:00.000Z","value":68.45},{"name":"2015-06-07T16:00:00.000Z","value":68.9},{"name":"2015-06-08T16:00:00.000Z","value":68.35},{"name":"2015-06-09T16:00:00.000Z","value":68.65},{"name":"2015-06-10T16:00:00.000Z","value":68.85},{"name":"2015-06-11T16:00:00.000Z","value":68.8},{"name":"2015-06-14T16:00:00.000Z","value":68.65},{"name":"2015-06-15T16:00:00.000Z","value":68.2},{"name":"2015-06-16T16:00:00.000Z","value":68.5},{"name":"2015-06-17T16:00:00.000Z","value":68.4},{"name":"2015-06-21T16:00:00.000Z","value":69.35},{"name":"2015-06-22T16:00:00.000Z","value":69.55},{"name":"2015-06-23T16:00:00.000Z","value":69.65},{"name":"2015-06-24T16:00:00.000Z","value":70.45},{"name":"2015-06-25T16:00:00.000Z","value":70.45},{"name":"2015-06-28T16:00:00.000Z","value":68.8},{"name":"2015-06-29T16:00:00.000Z","value":69.4},{"name":"2015-06-30T16:00:00.000Z","value":70.05},{"name":"2015-07-01T16:00:00.000Z","value":70.1},{"name":"2015-07-02T16:00:00.000Z","value":70.1},{"name":"2015-07-05T16:00:00.000Z","value":69.3},{"name":"2015-07-06T16:00:00.000Z","value":69.6},{"name":"2015-07-07T16:00:00.000Z","value":67.5},{"name":"2015-07-08T16:00:00.000Z","value":67.1},{"name":"2015-07-12T16:00:00.000Z","value":68.1},{"name":"2015-07-13T16:00:00.000Z","value":68.1},{"name":"2015-07-14T16:00:00.000Z","value":68.25},{"name":"2015-07-15T16:00:00.000Z","value":68.6},{"name":"2015-07-16T16:00:00.000Z","value":68.5},{"name":"2015-07-19T16:00:00.000Z","value":68},{"name":"2015-07-20T16:00:00.000Z","value":68.65},{"name":"2015-07-21T16:00:00.000Z","value":67.8},{"name":"2015-07-22T16:00:00.000Z","value":67.15},{"name":"2015-07-23T16:00:00.000Z","value":66.75},{"name":"2015-07-26T16:00:00.000Z","value":65.8},{"name":"2015-07-27T16:00:00.000Z","value":65.85},{"name":"2015-07-28T16:00:00.000Z","value":65.4},{"name":"2015-07-29T16:00:00.000Z","value":66.5},{"name":"2015-07-30T16:00:00.000Z","value":66.15},{"name":"2015-08-02T16:00:00.000Z","value":65.25},{"name":"2015-08-03T16:00:00.000Z","value":65.3},{"name":"2015-08-04T16:00:00.000Z","value":65.7},{"name":"2015-08-05T16:00:00.000Z","value":65},{"name":"2015-08-06T16:00:00.000Z","value":64.7},{"name":"2015-08-09T16:00:00.000Z","value":64.55},{"name":"2015-08-10T16:00:00.000Z","value":64.55},{"name":"2015-08-11T16:00:00.000Z","value":63.45},{"name":"2015-08-12T16:00:00.000Z","value":63.55},{"name":"2015-08-13T16:00:00.000Z","value":63.3},{"name":"2015-08-16T16:00:00.000Z","value":62.9},{"name":"2015-08-17T16:00:00.000Z","value":62.55},{"name":"2015-08-18T16:00:00.000Z","value":61.6},{"name":"2015-08-19T16:00:00.000Z","value":61.4},{"name":"2015-08-20T16:00:00.000Z","value":59.8},{"name":"2015-08-23T16:00:00.000Z","value":57.5},{"name":"2015-08-24T16:00:00.000Z","value":60},{"name":"2015-08-25T16:00:00.000Z","value":60.35},{"name":"2015-08-26T16:00:00.000Z","value":60.15},{"name":"2015-08-27T16:00:00.000Z","value":61.8},{"name":"2015-08-30T16:00:00.000Z","value":62.3},{"name":"2015-08-31T16:00:00.000Z","value":61.75},{"name":"2015-09-01T16:00:00.000Z","value":62.1},{"name":"2015-09-02T16:00:00.000Z","value":62.15},{"name":"2015-09-03T16:00:00.000Z","value":61.35},{"name":"2015-09-06T16:00:00.000Z","value":61.25},{"name":"2015-09-07T16:00:00.000Z","value":61.45},{"name":"2015-09-08T16:00:00.000Z","value":64.15},{"name":"2015-09-09T16:00:00.000Z","value":63.45},{"name":"2015-09-10T16:00:00.000Z","value":63.5},{"name":"2015-09-13T16:00:00.000Z","value":63.65},{"name":"2015-09-14T16:00:00.000Z","value":63.15},{"name":"2015-09-15T16:00:00.000Z","value":63.9},{"name":"2015-09-16T16:00:00.000Z","value":65},{"name":"2015-09-17T16:00:00.000Z","value":64.85},{"name":"2015-09-20T16:00:00.000Z","value":63.45},{"name":"2015-09-21T16:00:00.000Z","value":63.8},{"name":"2015-09-22T16:00:00.000Z","value":62.35},{"name":"2015-09-23T16:00:00.000Z","value":62},{"name":"2015-09-24T16:00:00.000Z","value":62.25},{"name":"2015-09-29T16:00:00.000Z","value":62.4},{"name":"2015-09-30T16:00:00.000Z","value":63.6},{"name":"2015-10-01T16:00:00.000Z","value":63.25},{"name":"2015-10-04T16:00:00.000Z","value":63.4},{"name":"2015-10-05T16:00:00.000Z","value":63.9},{"name":"2015-10-06T16:00:00.000Z","value":64.85},{"name":"2015-10-07T16:00:00.000Z","value":64.7},{"name":"2015-10-11T16:00:00.000Z","value":65.55},{"name":"2015-10-12T16:00:00.000Z","value":65.3},{"name":"2015-10-13T16:00:00.000Z","value":65.05},{"name":"2015-10-14T16:00:00.000Z","value":66},{"name":"2015-10-15T16:00:00.000Z","value":65.75},{"name":"2015-10-18T16:00:00.000Z","value":65.95},{"name":"2015-10-19T16:00:00.000Z","value":65.95},{"name":"2015-10-20T16:00:00.000Z","value":65.5},{"name":"2015-10-21T16:00:00.000Z","value":65.5},{"name":"2015-10-22T16:00:00.000Z","value":65.9},{"name":"2015-10-25T16:00:00.000Z","value":64.55},{"name":"2015-10-26T16:00:00.000Z","value":64.2},{"name":"2015-10-27T16:00:00.000Z","value":63.75},{"name":"2015-10-28T16:00:00.000Z","value":63.3},{"name":"2015-10-29T16:00:00.000Z","value":63.2},{"name":"2015-11-01T16:00:00.000Z","value":63.3},{"name":"2015-11-02T16:00:00.000Z","value":64.3},{"name":"2015-11-03T16:00:00.000Z","value":65.55},{"name":"2015-11-04T16:00:00.000Z","value":65.4},{"name":"2015-11-05T16:00:00.000Z","value":64.1},{"name":"2015-11-08T16:00:00.000Z","value":63.65},{"name":"2015-11-09T16:00:00.000Z","value":62.9},{"name":"2015-11-10T16:00:00.000Z","value":62.15},{"name":"2015-11-11T16:00:00.000Z","value":62.25},{"name":"2015-11-12T16:00:00.000Z","value":61.6},{"name":"2015-11-15T16:00:00.000Z","value":61.15},{"name":"2015-11-16T16:00:00.000Z","value":62.35},{"name":"2015-11-17T16:00:00.000Z","value":61.4},{"name":"2015-11-18T16:00:00.000Z","value":62.3},{"name":"2015-11-19T16:00:00.000Z","value":62.3},{"name":"2015-11-22T16:00:00.000Z","value":62.6},{"name":"2015-11-23T16:00:00.000Z","value":61.95},{"name":"2015-11-24T16:00:00.000Z","value":61.95},{"name":"2015-11-25T16:00:00.000Z","value":62.8},{"name":"2015-11-26T16:00:00.000Z","value":61.95},{"name":"2015-11-29T16:00:00.000Z","value":61.2},{"name":"2015-11-30T16:00:00.000Z","value":62.4},{"name":"2015-12-01T16:00:00.000Z","value":62.3},{"name":"2015-12-02T16:00:00.000Z","value":62.4},{"name":"2015-12-03T16:00:00.000Z","value":61.75},{"name":"2015-12-06T16:00:00.000Z","value":62.5},{"name":"2015-12-07T16:00:00.000Z","value":61.5},{"name":"2015-12-08T16:00:00.000Z","value":60.75},{"name":"2015-12-09T16:00:00.000Z","value":60.55},{"name":"2015-12-10T16:00:00.000Z","value":59.85},{"name":"2015-12-13T16:00:00.000Z","value":59.4},{"name":"2015-12-14T16:00:00.000Z","value":59.45},{"name":"2015-12-15T16:00:00.000Z","value":60.35},{"name":"2015-12-16T16:00:00.000Z","value":61.05},{"name":"2015-12-17T16:00:00.000Z","value":60.75},{"name":"2015-12-20T16:00:00.000Z","value":60.65},{"name":"2015-12-21T16:00:00.000Z","value":60.8},{"name":"2015-12-22T16:00:00.000Z","value":60.9},{"name":"2015-12-23T16:00:00.000Z","value":61.2},{"name":"2015-12-24T16:00:00.000Z","value":61.6},{"name":"2015-12-27T16:00:00.000Z","value":61.45},{"name":"2015-12-28T16:00:00.000Z","value":61},{"name":"2015-12-29T16:00:00.000Z","value":60.55},{"name":"2015-12-30T16:00:00.000Z","value":60.75},{"name":"2016-01-03T16:00:00.000Z","value":59.55},{"name":"2016-01-04T16:00:00.000Z","value":59.05},{"name":"2016-01-05T16:00:00.000Z","value":58.45},{"name":"2016-01-06T16:00:00.000Z","value":57.35},{"name":"2016-01-07T16:00:00.000Z","value":57.45},{"name":"2016-01-10T16:00:00.000Z","value":56.55},{"name":"2016-01-11T16:00:00.000Z","value":56.5},{"name":"2016-01-12T16:00:00.000Z","value":57.15},{"name":"2016-01-13T16:00:00.000Z","value":56.7},{"name":"2016-01-14T16:00:00.000Z","value":56.7},{"name":"2016-01-17T16:00:00.000Z","value":57.1},{"name":"2016-01-18T16:00:00.000Z","value":57.25},{"name":"2016-01-19T16:00:00.000Z","value":55.9},{"name":"2016-01-20T16:00:00.000Z","value":55.8},{"name":"2016-01-21T16:00:00.000Z","value":56.55},{"name":"2016-01-24T16:00:00.000Z","value":57.55},{"name":"2016-01-25T16:00:00.000Z","value":57},{"name":"2016-01-26T16:00:00.000Z","value":57.25},{"name":"2016-01-27T16:00:00.000Z","value":57.55},{"name":"2016-01-28T16:00:00.000Z","value":59},{"name":"2016-01-29T16:00:00.000Z","value":59.55},{"name":"2016-01-31T16:00:00.000Z","value":59.55},{"name":"2016-02-01T16:00:00.000Z","value":59.35},{"name":"2016-02-02T16:00:00.000Z","value":58.95},{"name":"2016-02-14T16:00:00.000Z","value":59},{"name":"2016-02-15T16:00:00.000Z","value":60.25},{"name":"2016-02-16T16:00:00.000Z","value":59.95},{"name":"2016-02-17T16:00:00.000Z","value":60.9},{"name":"2016-02-18T16:00:00.000Z","value":60.85},{"name":"2016-02-21T16:00:00.000Z","value":60.8},{"name":"2016-02-22T16:00:00.000Z","value":60.85},{"name":"2016-02-23T16:00:00.000Z","value":60.3},{"name":"2016-02-24T16:00:00.000Z","value":61.1},{"name":"2016-02-25T16:00:00.000Z","value":61.25},{"name":"2016-02-29T16:00:00.000Z","value":61.85},{"name":"2016-03-01T16:00:00.000Z","value":62.35},{"name":"2016-03-02T16:00:00.000Z","value":62.95},{"name":"2016-03-03T16:00:00.000Z","value":63.1},{"name":"2016-03-06T16:00:00.000Z","value":63.1},{"name":"2016-03-07T16:00:00.000Z","value":63.05},{"name":"2016-03-08T16:00:00.000Z","value":63.1},{"name":"2016-03-09T16:00:00.000Z","value":63.25},{"name":"2016-03-10T16:00:00.000Z","value":63.55},{"name":"2016-03-13T16:00:00.000Z","value":64},{"name":"2016-03-14T16:00:00.000Z","value":63.05},{"name":"2016-03-15T16:00:00.000Z","value":63.6},{"name":"2016-03-16T16:00:00.000Z","value":64.3},{"name":"2016-03-17T16:00:00.000Z","value":64.7},{"name":"2016-03-20T16:00:00.000Z","value":64.6},{"name":"2016-03-21T16:00:00.000Z","value":64.4},{"name":"2016-03-22T16:00:00.000Z","value":64.35},{"name":"2016-03-23T16:00:00.000Z","value":64.35},{"name":"2016-03-24T16:00:00.000Z","value":64.05},{"name":"2016-03-27T16:00:00.000Z","value":64.1},{"name":"2016-03-28T16:00:00.000Z","value":63.65},{"name":"2016-03-29T16:00:00.000Z","value":64.7},{"name":"2016-03-30T16:00:00.000Z","value":64.65},{"name":"2016-03-31T16:00:00.000Z","value":63.9},{"name":"2016-04-05T16:00:00.000Z","value":62.4},{"name":"2016-04-06T16:00:00.000Z","value":62.15},{"name":"2016-04-07T16:00:00.000Z","value":62.75},{"name":"2016-04-10T16:00:00.000Z","value":63},{"name":"2016-04-11T16:00:00.000Z","value":62.95},{"name":"2016-04-12T16:00:00.000Z","value":64.05},{"name":"2016-04-13T16:00:00.000Z","value":64.25},{"name":"2016-04-14T16:00:00.000Z","value":64.25},{"name":"2016-04-17T16:00:00.000Z","value":63.85},{"name":"2016-04-18T16:00:00.000Z","value":63.6},{"name":"2016-04-19T16:00:00.000Z","value":62.65},{"name":"2016-04-20T16:00:00.000Z","value":62.95},{"name":"2016-04-21T16:00:00.000Z","value":63.2},{"name":"2016-04-24T16:00:00.000Z","value":63.25},{"name":"2016-04-25T16:00:00.000Z","value":63.5},{"name":"2016-04-26T16:00:00.000Z","value":63.4},{"name":"2016-04-27T16:00:00.000Z","value":62.4},{"name":"2016-04-28T16:00:00.000Z","value":61.6},{"name":"2016-05-02T16:00:00.000Z","value":60.75},{"name":"2016-05-03T16:00:00.000Z","value":60.1},{"name":"2016-05-04T16:00:00.000Z","value":60.2},{"name":"2016-05-05T16:00:00.000Z","value":59.7},{"name":"2016-05-08T16:00:00.000Z","value":59.7},{"name":"2016-05-09T16:00:00.000Z","value":60},{"name":"2016-05-10T16:00:00.000Z","value":59.85},{"name":"2016-05-11T16:00:00.000Z","value":59.8},{"name":"2016-05-12T16:00:00.000Z","value":59.15},{"name":"2016-05-15T16:00:00.000Z","value":59.6},{"name":"2016-05-16T16:00:00.000Z","value":60.05},{"name":"2016-05-17T16:00:00.000Z","value":59.95},{"name":"2016-05-18T16:00:00.000Z","value":59.65},{"name":"2016-05-19T16:00:00.000Z","value":60},{"name":"2016-05-22T16:00:00.000Z","value":62},{"name":"2016-05-23T16:00:00.000Z","value":61.35},{"name":"2016-05-24T16:00:00.000Z","value":62},{"name":"2016-05-25T16:00:00.000Z","value":62.15},{"name":"2016-05-26T16:00:00.000Z","value":62.6},{"name":"2016-05-29T16:00:00.000Z","value":63.15},{"name":"2016-05-30T16:00:00.000Z","value":63.15},{"name":"2016-05-31T16:00:00.000Z","value":63.7},{"name":"2016-06-01T16:00:00.000Z","value":63.7},{"name":"2016-06-02T16:00:00.000Z","value":63.85},{"name":"2016-06-03T16:00:00.000Z","value":63.95},{"name":"2016-06-05T16:00:00.000Z","value":64.05},{"name":"2016-06-06T16:00:00.000Z","value":64.9},{"name":"2016-06-07T16:00:00.000Z","value":65.25},{"name":"2016-06-12T16:00:00.000Z","value":63.75},{"name":"2016-06-13T16:00:00.000Z","value":64.15},{"name":"2016-06-14T16:00:00.000Z","value":64.25},{"name":"2016-06-15T16:00:00.000Z","value":63.35},{"name":"2016-06-16T16:00:00.000Z","value":64.05},{"name":"2016-06-19T16:00:00.000Z","value":64.5},{"name":"2016-06-20T16:00:00.000Z","value":64.75},{"name":"2016-06-21T16:00:00.000Z","value":64.95},{"name":"2016-06-22T16:00:00.000Z","value":64.8},{"name":"2016-06-23T16:00:00.000Z","value":63.1},{"name":"2016-06-26T16:00:00.000Z","value":63.75},{"name":"2016-06-27T16:00:00.000Z","value":64},{"name":"2016-06-28T16:00:00.000Z","value":64.7},{"name":"2016-06-29T16:00:00.000Z","value":65.45},{"name":"2016-06-30T16:00:00.000Z","value":66.25},{"name":"2016-07-03T16:00:00.000Z","value":66.3},{"name":"2016-07-04T16:00:00.000Z","value":66.1},{"name":"2016-07-05T16:00:00.000Z","value":64.9},{"name":"2016-07-06T16:00:00.000Z","value":65.7},{"name":"2016-07-10T16:00:00.000Z","value":67},{"name":"2016-07-11T16:00:00.000Z","value":67.6},{"name":"2016-07-12T16:00:00.000Z","value":67.65},{"name":"2016-07-13T16:00:00.000Z","value":67.7},{"name":"2016-07-14T16:00:00.000Z","value":68.5},{"name":"2016-07-17T16:00:00.000Z","value":69.15},{"name":"2016-07-18T16:00:00.000Z","value":69.25},{"name":"2016-07-19T16:00:00.000Z","value":69.2},{"name":"2016-07-20T16:00:00.000Z","value":69.55},{"name":"2016-07-21T16:00:00.000Z","value":69.3},{"name":"2016-07-24T16:00:00.000Z","value":69},{"name":"2016-07-25T16:00:00.000Z","value":69.4},{"name":"2016-07-26T16:00:00.000Z","value":69.7},{"name":"2016-07-27T16:00:00.000Z","value":69.05},{"name":"2016-07-28T16:00:00.000Z","value":68.55},{"name":"2016-07-31T16:00:00.000Z","value":69.3},{"name":"2016-08-01T16:00:00.000Z","value":69.3},{"name":"2016-08-02T16:00:00.000Z","value":68.75},{"name":"2016-08-03T16:00:00.000Z","value":68.9},{"name":"2016-08-04T16:00:00.000Z","value":69.6},{"name":"2016-08-07T16:00:00.000Z","value":70.05},{"name":"2016-08-08T16:00:00.000Z","value":70.4},{"name":"2016-08-09T16:00:00.000Z","value":70.6},{"name":"2016-08-10T16:00:00.000Z","value":69.95},{"name":"2016-08-11T16:00:00.000Z","value":70.2},{"name":"2016-08-14T16:00:00.000Z","value":70.35},{"name":"2016-08-15T16:00:00.000Z","value":69.95},{"name":"2016-08-16T16:00:00.000Z","value":70.05},{"name":"2016-08-17T16:00:00.000Z","value":69.9},{"name":"2016-08-18T16:00:00.000Z","value":69.2},{"name":"2016-08-21T16:00:00.000Z","value":68.7},{"name":"2016-08-22T16:00:00.000Z","value":69.4},{"name":"2016-08-23T16:00:00.000Z","value":69.2},{"name":"2016-08-24T16:00:00.000Z","value":70},{"name":"2016-08-25T16:00:00.000Z","value":70.1},{"name":"2016-08-28T16:00:00.000Z","value":70.05},{"name":"2016-08-29T16:00:00.000Z","value":70},{"name":"2016-08-30T16:00:00.000Z","value":69.4},{"name":"2016-08-31T16:00:00.000Z","value":69.05},{"name":"2016-09-01T16:00:00.000Z","value":69.15},{"name":"2016-09-04T16:00:00.000Z","value":70.3},{"name":"2016-09-05T16:00:00.000Z","value":70.85},{"name":"2016-09-06T16:00:00.000Z","value":71.85},{"name":"2016-09-07T16:00:00.000Z","value":71.6},{"name":"2016-09-08T16:00:00.000Z","value":70.4},{"name":"2016-09-09T16:00:00.000Z","value":69.4},{"name":"2016-09-11T16:00:00.000Z","value":68.85},{"name":"2016-09-12T16:00:00.000Z","value":68.85},{"name":"2016-09-13T16:00:00.000Z","value":68.45},{"name":"2016-09-18T16:00:00.000Z","value":71},{"name":"2016-09-19T16:00:00.000Z","value":70.9},{"name":"2016-09-20T16:00:00.000Z","value":71.25},{"name":"2016-09-21T16:00:00.000Z","value":71.4},{"name":"2016-09-22T16:00:00.000Z","value":71.9},{"name":"2016-09-25T16:00:00.000Z","value":71},{"name":"2016-09-28T16:00:00.000Z","value":71.9},{"name":"2016-09-29T16:00:00.000Z","value":70.95},{"name":"2016-10-02T16:00:00.000Z","value":71.45},{"name":"2016-10-03T16:00:00.000Z","value":71.75},{"name":"2016-10-04T16:00:00.000Z","value":71.5},{"name":"2016-10-05T16:00:00.000Z","value":71.7},{"name":"2016-10-06T16:00:00.000Z","value":71.65},{"name":"2016-10-10T16:00:00.000Z","value":71.45},{"name":"2016-10-11T16:00:00.000Z","value":72.25},{"name":"2016-10-12T16:00:00.000Z","value":71.7},{"name":"2016-10-13T16:00:00.000Z","value":71.45},{"name":"2016-10-16T16:00:00.000Z","value":71.45},{"name":"2016-10-17T16:00:00.000Z","value":71.95},{"name":"2016-10-18T16:00:00.000Z","value":72.35},{"name":"2016-10-19T16:00:00.000Z","value":72.65},{"name":"2016-10-20T16:00:00.000Z","value":72.6},{"name":"2016-10-23T16:00:00.000Z","value":72.7},{"name":"2016-10-24T16:00:00.000Z","value":73.4},{"name":"2016-10-25T16:00:00.000Z","value":73},{"name":"2016-10-26T16:00:00.000Z","value":72.6},{"name":"2016-10-27T16:00:00.000Z","value":72.6},{"name":"2016-10-30T16:00:00.000Z","value":72.6},{"name":"2016-10-31T16:00:00.000Z","value":72.6},{"name":"2016-11-01T16:00:00.000Z","value":71.75},{"name":"2016-11-02T16:00:00.000Z","value":71.2},{"name":"2016-11-03T16:00:00.000Z","value":71},{"name":"2016-11-06T16:00:00.000Z","value":72},{"name":"2016-11-07T16:00:00.000Z","value":72.35},{"name":"2016-11-08T16:00:00.000Z","value":70},{"name":"2016-11-09T16:00:00.000Z","value":72},{"name":"2016-11-10T16:00:00.000Z","value":70.05},{"name":"2016-11-13T16:00:00.000Z","value":70.1},{"name":"2016-11-14T16:00:00.000Z","value":69.9},{"name":"2016-11-15T16:00:00.000Z","value":70},{"name":"2016-11-16T16:00:00.000Z","value":70.2},{"name":"2016-11-17T16:00:00.000Z","value":70.4},{"name":"2016-11-20T16:00:00.000Z","value":70.5},{"name":"2016-11-21T16:00:00.000Z","value":71.45},{"name":"2016-11-22T16:00:00.000Z","value":71.8},{"name":"2016-11-23T16:00:00.000Z","value":71.4},{"name":"2016-11-24T16:00:00.000Z","value":71.35},{"name":"2016-11-27T16:00:00.000Z","value":71.75},{"name":"2016-11-28T16:00:00.000Z","value":71.65},{"name":"2016-11-29T16:00:00.000Z","value":71.7},{"name":"2016-11-30T16:00:00.000Z","value":72},{"name":"2016-12-01T16:00:00.000Z","value":71.2},{"name":"2016-12-04T16:00:00.000Z","value":71.1},{"name":"2016-12-05T16:00:00.000Z","value":72},{"name":"2016-12-06T16:00:00.000Z","value":72},{"name":"2016-12-07T16:00:00.000Z","value":72.9},{"name":"2016-12-08T16:00:00.000Z","value":73.15},{"name":"2016-12-11T16:00:00.000Z","value":72.85},{"name":"2016-12-12T16:00:00.000Z","value":72.95},{"name":"2016-12-13T16:00:00.000Z","value":73.1},{"name":"2016-12-14T16:00:00.000Z","value":73},{"name":"2016-12-15T16:00:00.000Z","value":72.3},{"name":"2016-12-18T16:00:00.000Z","value":71.85},{"name":"2016-12-19T16:00:00.000Z","value":71.75},{"name":"2016-12-20T16:00:00.000Z","value":71.7},{"name":"2016-12-21T16:00:00.000Z","value":70.8},{"name":"2016-12-22T16:00:00.000Z","value":70.55},{"name":"2016-12-25T16:00:00.000Z","value":70.8},{"name":"2016-12-26T16:00:00.000Z","value":70.75},{"name":"2016-12-27T16:00:00.000Z","value":71.6},{"name":"2016-12-28T16:00:00.000Z","value":71.25},{"name":"2016-12-29T16:00:00.000Z","value":71.8},{"name":"2017-01-02T16:00:00.000Z","value":71.9},{"name":"2017-01-03T16:00:00.000Z","value":71.85},{"name":"2017-01-04T16:00:00.000Z","value":72.5},{"name":"2017-01-05T16:00:00.000Z","value":72.65},{"name":"2017-01-08T16:00:00.000Z","value":72.45},{"name":"2017-01-09T16:00:00.000Z","value":72.4},{"name":"2017-01-10T16:00:00.000Z","value":72.4},{"name":"2017-01-11T16:00:00.000Z","value":73.15},{"name":"2017-01-12T16:00:00.000Z","value":72.6},{"name":"2017-01-15T16:00:00.000Z","value":72},{"name":"2017-01-16T16:00:00.000Z","value":72.3},{"name":"2017-01-17T16:00:00.000Z","value":72.15},{"name":"2017-01-18T16:00:00.000Z","value":71.95},{"name":"2017-01-19T16:00:00.000Z","value":72.15},{"name":"2017-01-22T16:00:00.000Z","value":72.75},{"name":"2017-01-23T16:00:00.000Z","value":73.3},{"name":"2017-02-01T16:00:00.000Z","value":72.9},{"name":"2017-02-02T16:00:00.000Z","value":72.85},{"name":"2017-02-05T16:00:00.000Z","value":73.25},{"name":"2017-02-06T16:00:00.000Z","value":73.3},{"name":"2017-02-07T16:00:00.000Z","value":71.75},{"name":"2017-02-08T16:00:00.000Z","value":72},{"name":"2017-02-09T16:00:00.000Z","value":72.8},{"name":"2017-02-12T16:00:00.000Z","value":72.95},{"name":"2017-02-13T16:00:00.000Z","value":73.2},{"name":"2017-02-14T16:00:00.000Z","value":73.9},{"name":"2017-02-15T16:00:00.000Z","value":73.45},{"name":"2017-02-16T16:00:00.000Z","value":73.35},{"name":"2017-02-17T16:00:00.000Z","value":73.5},{"name":"2017-02-19T16:00:00.000Z","value":73.1},{"name":"2017-02-20T16:00:00.000Z","value":73.25},{"name":"2017-02-21T16:00:00.000Z","value":73.3},{"name":"2017-02-22T16:00:00.000Z","value":73.1},{"name":"2017-02-23T16:00:00.000Z","value":73.15},{"name":"2017-02-28T16:00:00.000Z","value":72.35},{"name":"2017-03-01T16:00:00.000Z","value":72.55},{"name":"2017-03-02T16:00:00.000Z","value":72.1},{"name":"2017-03-05T16:00:00.000Z","value":72.15},{"name":"2017-03-06T16:00:00.000Z","value":72.45},{"name":"2017-03-07T16:00:00.000Z","value":72.85},{"name":"2017-03-08T16:00:00.000Z","value":72.05},{"name":"2017-03-09T16:00:00.000Z","value":72},{"name":"2017-03-12T16:00:00.000Z","value":72.5},{"name":"2017-03-13T16:00:00.000Z","value":73},{"name":"2017-03-14T16:00:00.000Z","value":72.85},{"name":"2017-03-15T16:00:00.000Z","value":73.8},{"name":"2017-03-16T16:00:00.000Z","value":74},{"name":"2017-03-19T16:00:00.000Z","value":73.95},{"name":"2017-03-20T16:00:00.000Z","value":74.9},{"name":"2017-03-21T16:00:00.000Z","value":74.2},{"name":"2017-03-22T16:00:00.000Z","value":74.35},{"name":"2017-03-23T16:00:00.000Z","value":74.25},{"name":"2017-03-26T16:00:00.000Z","value":74.2},{"name":"2017-03-27T16:00:00.000Z","value":74.25},{"name":"2017-03-28T16:00:00.000Z","value":74},{"name":"2017-03-29T16:00:00.000Z","value":73.9},{"name":"2017-03-30T16:00:00.000Z","value":73.7},{"name":"2017-04-04T16:00:00.000Z","value":74.65},{"name":"2017-04-05T16:00:00.000Z","value":74.4},{"name":"2017-04-06T16:00:00.000Z","value":74.1},{"name":"2017-04-09T16:00:00.000Z","value":74.2},{"name":"2017-04-10T16:00:00.000Z","value":73.9},{"name":"2017-04-11T16:00:00.000Z","value":74.05},{"name":"2017-04-12T16:00:00.000Z","value":74.4},{"name":"2017-04-13T16:00:00.000Z","value":73.55},{"name":"2017-04-16T16:00:00.000Z","value":73.6},{"name":"2017-04-17T16:00:00.000Z","value":73.6},{"name":"2017-04-18T16:00:00.000Z","value":72.8},{"name":"2017-04-19T16:00:00.000Z","value":72.8},{"name":"2017-04-20T16:00:00.000Z","value":73.5},{"name":"2017-04-23T16:00:00.000Z","value":73.65},{"name":"2017-04-24T16:00:00.000Z","value":74.35},{"name":"2017-04-25T16:00:00.000Z","value":74.55},{"name":"2017-04-26T16:00:00.000Z","value":74.5},{"name":"2017-04-27T16:00:00.000Z","value":74.55},{"name":"2017-05-01T16:00:00.000Z","value":75.2},{"name":"2017-05-02T16:00:00.000Z","value":75.55},{"name":"2017-05-03T16:00:00.000Z","value":75.65},{"name":"2017-05-04T16:00:00.000Z","value":75.15},{"name":"2017-05-07T16:00:00.000Z","value":75.7},{"name":"2017-05-08T16:00:00.000Z","value":75.95},{"name":"2017-05-09T16:00:00.000Z","value":76.25},{"name":"2017-05-10T16:00:00.000Z","value":76.5},{"name":"2017-05-11T16:00:00.000Z","value":76.3},{"name":"2017-05-14T16:00:00.000Z","value":76.5},{"name":"2017-05-15T16:00:00.000Z","value":76.5},{"name":"2017-05-16T16:00:00.000Z","value":76.3},{"name":"2017-05-17T16:00:00.000Z","value":75.9},{"name":"2017-05-18T16:00:00.000Z","value":75.85},{"name":"2017-05-21T16:00:00.000Z","value":76.05},{"name":"2017-05-22T16:00:00.000Z","value":76.35},{"name":"2017-05-23T16:00:00.000Z","value":76.3},{"name":"2017-05-24T16:00:00.000Z","value":77},{"name":"2017-05-25T16:00:00.000Z","value":76.95},{"name":"2017-05-30T16:00:00.000Z","value":76.5},{"name":"2017-05-31T16:00:00.000Z","value":76.9},{"name":"2017-06-01T16:00:00.000Z","value":77.2},{"name":"2017-06-02T16:00:00.000Z","value":77.4},{"name":"2017-06-04T16:00:00.000Z","value":78},{"name":"2017-06-05T16:00:00.000Z","value":77.95},{"name":"2017-06-06T16:00:00.000Z","value":77.95},{"name":"2017-06-07T16:00:00.000Z","value":78.25},{"name":"2017-06-08T16:00:00.000Z","value":78},{"name":"2017-06-11T16:00:00.000Z","value":77.15},{"name":"2017-06-12T16:00:00.000Z","value":77.25},{"name":"2017-06-13T16:00:00.000Z","value":76.85},{"name":"2017-06-14T16:00:00.000Z","value":76.9},{"name":"2017-06-15T16:00:00.000Z","value":77.7},{"name":"2017-06-18T16:00:00.000Z","value":78.55},{"name":"2017-06-19T16:00:00.000Z","value":79.45},{"name":"2017-06-20T16:00:00.000Z","value":79.55},{"name":"2017-06-21T16:00:00.000Z","value":79.75},{"name":"2017-06-22T16:00:00.000Z","value":79.7},{"name":"2017-06-25T16:00:00.000Z","value":81.4},{"name":"2017-06-26T16:00:00.000Z","value":81.3},{"name":"2017-06-27T16:00:00.000Z","value":80.55},{"name":"2017-06-28T16:00:00.000Z","value":80.65},{"name":"2017-06-29T16:00:00.000Z","value":80.4},{"name":"2017-07-02T16:00:00.000Z","value":80.45},{"name":"2017-07-03T16:00:00.000Z","value":80},{"name":"2017-07-04T16:00:00.000Z","value":80.75},{"name":"2017-07-05T16:00:00.000Z","value":80.4},{"name":"2017-07-06T16:00:00.000Z","value":79.95},{"name":"2017-07-09T16:00:00.000Z","value":80.35},{"name":"2017-07-10T16:00:00.000Z","value":81.55},{"name":"2017-07-11T16:00:00.000Z","value":81.55},{"name":"2017-07-12T16:00:00.000Z","value":82.2},{"name":"2017-07-13T16:00:00.000Z","value":82.05},{"name":"2017-07-16T16:00:00.000Z","value":82.2},{"name":"2017-07-17T16:00:00.000Z","value":82.4},{"name":"2017-07-18T16:00:00.000Z","value":82.7},{"name":"2017-07-19T16:00:00.000Z","value":82.65},{"name":"2017-07-20T16:00:00.000Z","value":82.1},{"name":"2017-07-23T16:00:00.000Z","value":82.3},{"name":"2017-07-24T16:00:00.000Z","value":82.45},{"name":"2017-07-25T16:00:00.000Z","value":82.15},{"name":"2017-07-26T16:00:00.000Z","value":83},{"name":"2017-07-27T16:00:00.000Z","value":82.1},{"name":"2017-07-30T16:00:00.000Z","value":81.35},{"name":"2017-07-31T16:00:00.000Z","value":81.8},{"name":"2017-08-01T16:00:00.000Z","value":82.5},{"name":"2017-08-02T16:00:00.000Z","value":82.2},{"name":"2017-08-03T16:00:00.000Z","value":82.35},{"name":"2017-08-06T16:00:00.000Z","value":82.95},{"name":"2017-08-07T16:00:00.000Z","value":82.9},{"name":"2017-08-08T16:00:00.000Z","value":82.15},{"name":"2017-08-09T16:00:00.000Z","value":81.6},{"name":"2017-08-10T16:00:00.000Z","value":81.25},{"name":"2017-08-13T16:00:00.000Z","value":80.75},{"name":"2017-08-14T16:00:00.000Z","value":81.3},{"name":"2017-08-15T16:00:00.000Z","value":81},{"name":"2017-08-16T16:00:00.000Z","value":81.65},{"name":"2017-08-17T16:00:00.000Z","value":81.15},{"name":"2017-08-20T16:00:00.000Z","value":81.05},{"name":"2017-08-21T16:00:00.000Z","value":81.85},{"name":"2017-08-22T16:00:00.000Z","value":81.75},{"name":"2017-08-23T16:00:00.000Z","value":82.55},{"name":"2017-08-24T16:00:00.000Z","value":82.7},{"name":"2017-08-27T16:00:00.000Z","value":82.55},{"name":"2017-08-28T16:00:00.000Z","value":82.3},{"name":"2017-08-29T16:00:00.000Z","value":82.7},{"name":"2017-08-30T16:00:00.000Z","value":82.95},{"name":"2017-08-31T16:00:00.000Z","value":83},{"name":"2017-09-03T16:00:00.000Z","value":82.85},{"name":"2017-09-04T16:00:00.000Z","value":82.95},{"name":"2017-09-05T16:00:00.000Z","value":82.6},{"name":"2017-09-06T16:00:00.000Z","value":82.25},{"name":"2017-09-07T16:00:00.000Z","value":82.7},{"name":"2017-09-10T16:00:00.000Z","value":82.55},{"name":"2017-09-11T16:00:00.000Z","value":82.85},{"name":"2017-09-12T16:00:00.000Z","value":82.3},{"name":"2017-09-13T16:00:00.000Z","value":82.35},{"name":"2017-09-14T16:00:00.000Z","value":82.35},{"name":"2017-09-17T16:00:00.000Z","value":83.15},{"name":"2017-09-18T16:00:00.000Z","value":82.75},{"name":"2017-09-19T16:00:00.000Z","value":82.2},{"name":"2017-09-20T16:00:00.000Z","value":82.7},{"name":"2017-09-21T16:00:00.000Z","value":81.6},{"name":"2017-09-24T16:00:00.000Z","value":80.95},{"name":"2017-09-25T16:00:00.000Z","value":80.3},{"name":"2017-09-26T16:00:00.000Z","value":80.7},{"name":"2017-09-27T16:00:00.000Z","value":80.4},{"name":"2017-09-28T16:00:00.000Z","value":80.65},{"name":"2017-09-29T16:00:00.000Z","value":81.2},{"name":"2017-10-01T16:00:00.000Z","value":81.5},{"name":"2017-10-02T16:00:00.000Z","value":81.5},{"name":"2017-10-04T16:00:00.000Z","value":81.85},{"name":"2017-10-05T16:00:00.000Z","value":82.1},{"name":"2017-10-10T16:00:00.000Z","value":83.4},{"name":"2017-10-11T16:00:00.000Z","value":84.2},{"name":"2017-10-12T16:00:00.000Z","value":84.05},{"name":"2017-10-15T16:00:00.000Z","value":84.5},{"name":"2017-10-16T16:00:00.000Z","value":84.3},{"name":"2017-10-17T16:00:00.000Z","value":84.6},{"name":"2017-10-18T16:00:00.000Z","value":84.9},{"name":"2017-10-19T16:00:00.000Z","value":84.55},{"name":"2017-10-22T16:00:00.000Z","value":84.5},{"name":"2017-10-23T16:00:00.000Z","value":84.4},{"name":"2017-10-24T16:00:00.000Z","value":84.35},{"name":"2017-10-25T16:00:00.000Z","value":84.25},{"name":"2017-10-26T16:00:00.000Z","value":84.3},{"name":"2017-10-29T16:00:00.000Z","value":84.95},{"name":"2017-10-30T16:00:00.000Z","value":85.2},{"name":"2017-10-31T16:00:00.000Z","value":85.1},{"name":"2017-11-01T16:00:00.000Z","value":84.8},{"name":"2017-11-02T16:00:00.000Z","value":84.7},{"name":"2017-11-05T16:00:00.000Z","value":84.85},{"name":"2017-11-06T16:00:00.000Z","value":85.3},{"name":"2017-11-07T16:00:00.000Z","value":84.95},{"name":"2017-11-08T16:00:00.000Z","value":84.4},{"name":"2017-11-09T16:00:00.000Z","value":84.55},{"name":"2017-11-12T16:00:00.000Z","value":84.3},{"name":"2017-11-13T16:00:00.000Z","value":84.15},{"name":"2017-11-14T16:00:00.000Z","value":83.3},{"name":"2017-11-15T16:00:00.000Z","value":83.6},{"name":"2017-11-16T16:00:00.000Z","value":84.35},{"name":"2017-11-19T16:00:00.000Z","value":84},{"name":"2017-11-20T16:00:00.000Z","value":84.75},{"name":"2017-11-21T16:00:00.000Z","value":85.15},{"name":"2017-11-22T16:00:00.000Z","value":85.2},{"name":"2017-11-23T16:00:00.000Z","value":85.15},{"name":"2017-11-26T16:00:00.000Z","value":84.15},{"name":"2017-11-27T16:00:00.000Z","value":83.6},{"name":"2017-11-28T16:00:00.000Z","value":83.7},{"name":"2017-11-29T16:00:00.000Z","value":82.25},{"name":"2017-11-30T16:00:00.000Z","value":82.6},{"name":"2017-12-03T16:00:00.000Z","value":82.9},{"name":"2017-12-04T16:00:00.000Z","value":82.25},{"name":"2017-12-05T16:00:00.000Z","value":80.85},{"name":"2017-12-06T16:00:00.000Z","value":80.9},{"name":"2017-12-07T16:00:00.000Z","value":80.9},{"name":"2017-12-10T16:00:00.000Z","value":81.5},{"name":"2017-12-11T16:00:00.000Z","value":80.95},{"name":"2017-12-12T16:00:00.000Z","value":81},{"name":"2017-12-13T16:00:00.000Z","value":81.75},{"name":"2017-12-14T16:00:00.000Z","value":81.1},{"name":"2017-12-17T16:00:00.000Z","value":81.2},{"name":"2017-12-18T16:00:00.000Z","value":80.8},{"name":"2017-12-19T16:00:00.000Z","value":81.05},{"name":"2017-12-20T16:00:00.000Z","value":81},{"name":"2017-12-21T16:00:00.000Z","value":81.3},{"name":"2017-12-24T16:00:00.000Z","value":81.45},{"name":"2017-12-25T16:00:00.000Z","value":80.65},{"name":"2017-12-26T16:00:00.000Z","value":80.9},{"name":"2017-12-27T16:00:00.000Z","value":81.7},{"name":"2017-12-28T16:00:00.000Z","value":82.15},{"name":"2018-01-01T16:00:00.000Z","value":82.6},{"name":"2018-01-02T16:00:00.000Z","value":83.35},{"name":"2018-01-03T16:00:00.000Z","value":83.5},{"name":"2018-01-04T16:00:00.000Z","value":83.75},{"name":"2018-01-07T16:00:00.000Z","value":84.1},{"name":"2018-01-08T16:00:00.000Z","value":84.15},{"name":"2018-01-09T16:00:00.000Z","value":83.75},{"name":"2018-01-10T16:00:00.000Z","value":83.4},{"name":"2018-01-11T16:00:00.000Z","value":84.1},{"name":"2018-01-14T16:00:00.000Z","value":84.65},{"name":"2018-01-15T16:00:00.000Z","value":85},{"name":"2018-01-16T16:00:00.000Z","value":85.15},{"name":"2018-01-17T16:00:00.000Z","value":86.3},{"name":"2018-01-18T16:00:00.000Z","value":87.15},{"name":"2018-01-21T16:00:00.000Z","value":87.95},{"name":"2018-01-22T16:00:00.000Z","value":88.3},{"name":"2018-01-23T16:00:00.000Z","value":87.2},{"name":"2018-01-24T16:00:00.000Z","value":87.45},{"name":"2018-01-25T16:00:00.000Z","value":87.5},{"name":"2018-01-28T16:00:00.000Z","value":85.55},{"name":"2018-01-29T16:00:00.000Z","value":84.55},{"name":"2018-01-30T16:00:00.000Z","value":84.65},{"name":"2018-01-31T16:00:00.000Z","value":85.25},{"name":"2018-02-01T16:00:00.000Z","value":84.9},{"name":"2018-02-04T16:00:00.000Z","value":83.6},{"name":"2018-02-05T16:00:00.000Z","value":79.65},{"name":"2018-02-06T16:00:00.000Z","value":80.65},{"name":"2018-02-07T16:00:00.000Z","value":80.6},{"name":"2018-02-08T16:00:00.000Z","value":79.05},{"name":"2018-02-11T16:00:00.000Z","value":79.7},{"name":"2018-02-20T16:00:00.000Z","value":81.5},{"name":"2018-02-21T16:00:00.000Z","value":81},{"name":"2018-02-22T16:00:00.000Z","value":82},{"name":"2018-02-25T16:00:00.000Z","value":82.4},{"name":"2018-02-26T16:00:00.000Z","value":82.35},{"name":"2018-02-28T16:00:00.000Z","value":81.75},{"name":"2018-03-01T16:00:00.000Z","value":81.15},{"name":"2018-03-04T16:00:00.000Z","value":80.75},{"name":"2018-03-05T16:00:00.000Z","value":82.15},{"name":"2018-03-06T16:00:00.000Z","value":81.8},{"name":"2018-03-07T16:00:00.000Z","value":82.75},{"name":"2018-03-08T16:00:00.000Z","value":82.85},{"name":"2018-03-11T16:00:00.000Z","value":84.15},{"name":"2018-03-12T16:00:00.000Z","value":84.95},{"name":"2018-03-13T16:00:00.000Z","value":84.3},{"name":"2018-03-14T16:00:00.000Z","value":84.25},{"name":"2018-03-15T16:00:00.000Z","value":83.9},{"name":"2018-03-18T16:00:00.000Z","value":83.85},{"name":"2018-03-19T16:00:00.000Z","value":83.8},{"name":"2018-03-20T16:00:00.000Z","value":83.85},{"name":"2018-03-21T16:00:00.000Z","value":83.55},{"name":"2018-03-22T16:00:00.000Z","value":82.1},{"name":"2018-03-25T16:00:00.000Z","value":82.2},{"name":"2018-03-26T16:00:00.000Z","value":83.4},{"name":"2018-03-27T16:00:00.000Z","value":82.25},{"name":"2018-03-28T16:00:00.000Z","value":82.1},{"name":"2018-03-29T16:00:00.000Z","value":82.85},{"name":"2018-03-30T16:00:00.000Z","value":82.95},{"name":"2018-04-01T16:00:00.000Z","value":82.25},{"name":"2018-04-02T16:00:00.000Z","value":81.5},{"name":"2018-04-08T16:00:00.000Z","value":82.2},{"name":"2018-04-09T16:00:00.000Z","value":82.5},{"name":"2018-04-10T16:00:00.000Z","value":82.85},{"name":"2018-04-11T16:00:00.000Z","value":82.5},{"name":"2018-04-12T16:00:00.000Z","value":82.5},{"name":"2018-04-15T16:00:00.000Z","value":82.3},{"name":"2018-04-16T16:00:00.000Z","value":81.4},{"name":"2018-04-17T16:00:00.000Z","value":81.6},{"name":"2018-04-18T16:00:00.000Z","value":82.65},{"name":"2018-04-19T16:00:00.000Z","value":80.75},{"name":"2018-04-22T16:00:00.000Z","value":79.95},{"name":"2018-04-23T16:00:00.000Z","value":79.55},{"name":"2018-04-24T16:00:00.000Z","value":79.3},{"name":"2018-04-25T16:00:00.000Z","value":79.05},{"name":"2018-04-26T16:00:00.000Z","value":79.2},{"name":"2018-04-29T16:00:00.000Z","value":80},{"name":"2018-05-01T16:00:00.000Z","value":79.4},{"name":"2018-05-02T16:00:00.000Z","value":78.55},{"name":"2018-05-03T16:00:00.000Z","value":78.95},{"name":"2018-05-06T16:00:00.000Z","value":79.5},{"name":"2018-05-07T16:00:00.000Z","value":80},{"name":"2018-05-08T16:00:00.000Z","value":80.45},{"name":"2018-05-09T16:00:00.000Z","value":80.65},{"name":"2018-05-10T16:00:00.000Z","value":81.6},{"name":"2018-05-13T16:00:00.000Z","value":82.5},{"name":"2018-05-14T16:00:00.000Z","value":81.65},{"name":"2018-05-15T16:00:00.000Z","value":81.75},{"name":"2018-05-16T16:00:00.000Z","value":81.2},{"name":"2018-05-17T16:00:00.000Z","value":80.95},{"name":"2018-05-20T16:00:00.000Z","value":82.05},{"name":"2018-05-21T16:00:00.000Z","value":81.75},{"name":"2018-05-22T16:00:00.000Z","value":81.35},{"name":"2018-05-23T16:00:00.000Z","value":81.55},{"name":"2018-05-24T16:00:00.000Z","value":81.85},{"name":"2018-05-27T16:00:00.000Z","value":82.2},{"name":"2018-05-28T16:00:00.000Z","value":81.85},{"name":"2018-05-29T16:00:00.000Z","value":80.4},{"name":"2018-05-30T16:00:00.000Z","value":80.75},{"name":"2018-05-31T16:00:00.000Z","value":81.35},{"name":"2018-06-03T16:00:00.000Z","value":82.6},{"name":"2018-06-04T16:00:00.000Z","value":82.5},{"name":"2018-06-05T16:00:00.000Z","value":83.3},{"name":"2018-06-06T16:00:00.000Z","value":83.45},{"name":"2018-06-07T16:00:00.000Z","value":82.55},{"name":"2018-06-10T16:00:00.000Z","value":82.65},{"name":"2018-06-11T16:00:00.000Z","value":82.5},{"name":"2018-06-12T16:00:00.000Z","value":83},{"name":"2018-06-13T16:00:00.000Z","value":81.75},{"name":"2018-06-14T16:00:00.000Z","value":81.95},{"name":"2018-06-18T16:00:00.000Z","value":80.6},{"name":"2018-06-19T16:00:00.000Z","value":81.5},{"name":"2018-06-20T16:00:00.000Z","value":81.25},{"name":"2018-06-21T16:00:00.000Z","value":81.15},{"name":"2018-06-24T16:00:00.000Z","value":80.9},{"name":"2018-06-25T16:00:00.000Z","value":80.7},{"name":"2018-06-26T16:00:00.000Z","value":80.4},{"name":"2018-06-27T16:00:00.000Z","value":80.05},{"name":"2018-06-28T16:00:00.000Z","value":81.45},{"name":"2018-07-01T16:00:00.000Z","value":81.05},{"name":"2018-07-02T16:00:00.000Z","value":81.15},{"name":"2018-07-03T16:00:00.000Z","value":81.4},{"name":"2018-07-04T16:00:00.000Z","value":80.75},{"name":"2018-07-05T16:00:00.000Z","value":80.95},{"name":"2018-07-08T16:00:00.000Z","value":82.25},{"name":"2018-07-09T16:00:00.000Z","value":82.45},{"name":"2018-07-10T16:00:00.000Z","value":81.7},{"name":"2018-07-11T16:00:00.000Z","value":82.65},{"name":"2018-07-12T16:00:00.000Z","value":83.35},{"name":"2018-07-15T16:00:00.000Z","value":83},{"name":"2018-07-16T16:00:00.000Z","value":82.55},{"name":"2018-07-17T16:00:00.000Z","value":83.05},{"name":"2018-07-18T16:00:00.000Z","value":83.3},{"name":"2018-07-19T16:00:00.000Z","value":84.65},{"name":"2018-07-22T16:00:00.000Z","value":84.55},{"name":"2018-07-23T16:00:00.000Z","value":84.7},{"name":"2018-07-24T16:00:00.000Z","value":84.75},{"name":"2018-07-25T16:00:00.000Z","value":85},{"name":"2018-07-26T16:00:00.000Z","value":85.7},{"name":"2018-07-29T16:00:00.000Z","value":85.55},{"name":"2018-07-30T16:00:00.000Z","value":85.55},{"name":"2018-07-31T16:00:00.000Z","value":86.15},{"name":"2018-08-01T16:00:00.000Z","value":84.85},{"name":"2018-08-02T16:00:00.000Z","value":85.55},{"name":"2018-08-05T16:00:00.000Z","value":85.7},{"name":"2018-08-06T16:00:00.000Z","value":85.5},{"name":"2018-08-07T16:00:00.000Z","value":86.15},{"name":"2018-08-08T16:00:00.000Z","value":86.15},{"name":"2018-08-09T16:00:00.000Z","value":85.7},{"name":"2018-08-12T16:00:00.000Z","value":83.95},{"name":"2018-08-13T16:00:00.000Z","value":84.55},{"name":"2018-08-14T16:00:00.000Z","value":83.75},{"name":"2018-08-15T16:00:00.000Z","value":83.8},{"name":"2018-08-16T16:00:00.000Z","value":83.65},{"name":"2018-08-19T16:00:00.000Z","value":83.95},{"name":"2018-08-20T16:00:00.000Z","value":84.55},{"name":"2018-08-21T16:00:00.000Z","value":84.65},{"name":"2018-08-22T16:00:00.000Z","value":85.05},{"name":"2018-08-23T16:00:00.000Z","value":84.8},{"name":"2018-08-26T16:00:00.000Z","value":85.55},{"name":"2018-08-27T16:00:00.000Z","value":86.25},{"name":"2018-08-28T16:00:00.000Z","value":87.25},{"name":"2018-08-29T16:00:00.000Z","value":87.55},{"name":"2018-08-30T16:00:00.000Z","value":86.95},{"name":"2018-09-02T16:00:00.000Z","value":86.45},{"name":"2018-09-03T16:00:00.000Z","value":87},{"name":"2018-09-04T16:00:00.000Z","value":87},{"name":"2018-09-05T16:00:00.000Z","value":86.5},{"name":"2018-09-06T16:00:00.000Z","value":86.4},{"name":"2018-09-09T16:00:00.000Z","value":86},{"name":"2018-09-10T16:00:00.000Z","value":85.65},{"name":"2018-09-11T16:00:00.000Z","value":85.55},{"name":"2018-09-12T16:00:00.000Z","value":84.95},{"name":"2018-09-13T16:00:00.000Z","value":86.5},{"name":"2018-09-16T16:00:00.000Z","value":85.85},{"name":"2018-09-17T16:00:00.000Z","value":85.4},{"name":"2018-09-18T16:00:00.000Z","value":86.15},{"name":"2018-09-19T16:00:00.000Z","value":85.9},{"name":"2018-09-20T16:00:00.000Z","value":86.85},{"name":"2018-09-24T16:00:00.000Z","value":87.1},{"name":"2018-09-25T16:00:00.000Z","value":86.9},{"name":"2018-09-26T16:00:00.000Z","value":87.35},{"name":"2018-09-27T16:00:00.000Z","value":86.9},{"name":"2018-09-30T16:00:00.000Z","value":87.35},{"name":"2018-10-01T16:00:00.000Z","value":86.05},{"name":"2018-10-02T16:00:00.000Z","value":85.95},{"name":"2018-10-03T16:00:00.000Z","value":84.9},{"name":"2018-10-04T16:00:00.000Z","value":83.45},{"name":"2018-10-07T16:00:00.000Z","value":83},{"name":"2018-10-08T16:00:00.000Z","value":83.25},{"name":"2018-10-10T16:00:00.000Z","value":77.4},{"name":"2018-10-11T16:00:00.000Z","value":80.05},{"name":"2018-10-14T16:00:00.000Z","value":79.2},{"name":"2018-10-15T16:00:00.000Z","value":79.3},{"name":"2018-10-16T16:00:00.000Z","value":79.4},{"name":"2018-10-17T16:00:00.000Z","value":79.15},{"name":"2018-10-18T16:00:00.000Z","value":79.3},{"name":"2018-10-21T16:00:00.000Z","value":79.2},{"name":"2018-10-22T16:00:00.000Z","value":77.75},{"name":"2018-10-23T16:00:00.000Z","value":77.4},{"name":"2018-10-24T16:00:00.000Z","value":75.5},{"name":"2018-10-25T16:00:00.000Z","value":75.4},{"name":"2018-10-28T16:00:00.000Z","value":75.75},{"name":"2018-10-29T16:00:00.000Z","value":75.95},{"name":"2018-10-30T16:00:00.000Z","value":77.55},{"name":"2018-10-31T16:00:00.000Z","value":78.4},{"name":"2018-11-01T16:00:00.000Z","value":78.65},{"name":"2018-11-04T16:00:00.000Z","value":78.25},{"name":"2018-11-05T16:00:00.000Z","value":78},{"name":"2018-11-06T16:00:00.000Z","value":78.4},{"name":"2018-11-07T16:00:00.000Z","value":78.85},{"name":"2018-11-08T16:00:00.000Z","value":77.8},{"name":"2018-11-11T16:00:00.000Z","value":78},{"name":"2018-11-12T16:00:00.000Z","value":77.1},{"name":"2018-11-13T16:00:00.000Z","value":77.35},{"name":"2018-11-14T16:00:00.000Z","value":77.6},{"name":"2018-11-15T16:00:00.000Z","value":76.95},{"name":"2018-11-18T16:00:00.000Z","value":76.7},{"name":"2018-11-19T16:00:00.000Z","value":76},{"name":"2018-11-20T16:00:00.000Z","value":76},{"name":"2018-11-21T16:00:00.000Z","value":75.6},{"name":"2018-11-22T16:00:00.000Z","value":75.35},{"name":"2018-11-25T16:00:00.000Z","value":76.15},{"name":"2018-11-26T16:00:00.000Z","value":76.05},{"name":"2018-11-27T16:00:00.000Z","value":76.9},{"name":"2018-11-28T16:00:00.000Z","value":77.05},{"name":"2018-11-29T16:00:00.000Z","value":76.75},{"name":"2018-12-02T16:00:00.000Z","value":78.8},{"name":"2018-12-03T16:00:00.000Z","value":78.25},{"name":"2018-12-04T16:00:00.000Z","value":76.65},{"name":"2018-12-05T16:00:00.000Z","value":75.1},{"name":"2018-12-06T16:00:00.000Z","value":75.45},{"name":"2018-12-09T16:00:00.000Z","value":74.45},{"name":"2018-12-10T16:00:00.000Z","value":75.05},{"name":"2018-12-11T16:00:00.000Z","value":76.2},{"name":"2018-12-12T16:00:00.000Z","value":76.3},{"name":"2018-12-13T16:00:00.000Z","value":75.35},{"name":"2018-12-16T16:00:00.000Z","value":75.95},{"name":"2018-12-17T16:00:00.000Z","value":75.3},{"name":"2018-12-18T16:00:00.000Z","value":75.9},{"name":"2018-12-19T16:00:00.000Z","value":75.05},{"name":"2018-12-20T16:00:00.000Z","value":75.2},{"name":"2018-12-23T16:00:00.000Z","value":74.7},{"name":"2018-12-24T16:00:00.000Z","value":73.75},{"name":"2018-12-25T16:00:00.000Z","value":73.55},{"name":"2018-12-26T16:00:00.000Z","value":75.05},{"name":"2018-12-27T16:00:00.000Z","value":75.5},{"name":"2019-01-01T16:00:00.000Z","value":74.05},{"name":"2019-01-02T16:00:00.000Z","value":73.35},{"name":"2019-01-03T16:00:00.000Z","value":72.2},{"name":"2019-01-06T16:00:00.000Z","value":73.95},{"name":"2019-01-07T16:00:00.000Z","value":73.65},{"name":"2019-01-08T16:00:00.000Z","value":75},{"name":"2019-01-09T16:00:00.000Z","value":74.8},{"name":"2019-01-10T16:00:00.000Z","value":75.5},{"name":"2019-01-13T16:00:00.000Z","value":75},{"name":"2019-01-14T16:00:00.000Z","value":75.65},{"name":"2019-01-15T16:00:00.000Z","value":75.55},{"name":"2019-01-16T16:00:00.000Z","value":75.55},{"name":"2019-01-17T16:00:00.000Z","value":75.95},{"name":"2019-01-20T16:00:00.000Z","value":76.5},{"name":"2019-01-21T16:00:00.000Z","value":74.05},{"name":"2019-01-22T16:00:00.000Z","value":73.7},{"name":"2019-01-23T16:00:00.000Z","value":74.05},{"name":"2019-01-24T16:00:00.000Z","value":75},{"name":"2019-01-27T16:00:00.000Z","value":75.15},{"name":"2019-01-28T16:00:00.000Z","value":74.5},{"name":"2019-01-29T16:00:00.000Z","value":74.35},{"name":"2019-02-10T16:00:00.000Z","value":75.15},{"name":"2019-02-11T16:00:00.000Z","value":75.65},{"name":"2019-02-12T16:00:00.000Z","value":75.5},{"name":"2019-02-13T16:00:00.000Z","value":75.25},{"name":"2019-02-14T16:00:00.000Z","value":75.05},{"name":"2019-02-17T16:00:00.000Z","value":75.65},{"name":"2019-02-18T16:00:00.000Z","value":75.5},{"name":"2019-02-19T16:00:00.000Z","value":76.35},{"name":"2019-02-20T16:00:00.000Z","value":77.1},{"name":"2019-02-21T16:00:00.000Z","value":76.95},{"name":"2019-02-24T16:00:00.000Z","value":77.5},{"name":"2019-02-25T16:00:00.000Z","value":77.7},{"name":"2019-02-26T16:00:00.000Z","value":77.65},{"name":"2019-03-03T16:00:00.000Z","value":76.95},{"name":"2019-03-04T16:00:00.000Z","value":76.75},{"name":"2019-03-05T16:00:00.000Z","value":76.95},{"name":"2019-03-06T16:00:00.000Z","value":76.65},{"name":"2019-03-07T16:00:00.000Z","value":76},{"name":"2019-03-10T16:00:00.000Z","value":76.15},{"name":"2019-03-11T16:00:00.000Z","value":77.25},{"name":"2019-03-12T16:00:00.000Z","value":77.1},{"name":"2019-03-13T16:00:00.000Z","value":77.05},{"name":"2019-03-14T16:00:00.000Z","value":77.6},{"name":"2019-03-17T16:00:00.000Z","value":78.1},{"name":"2019-03-18T16:00:00.000Z","value":78.4},{"name":"2019-03-19T16:00:00.000Z","value":78.5},{"name":"2019-03-20T16:00:00.000Z","value":79.15},{"name":"2019-03-21T16:00:00.000Z","value":79.35},{"name":"2019-03-24T16:00:00.000Z","value":78.15},{"name":"2019-03-25T16:00:00.000Z","value":78.65},{"name":"2019-03-26T16:00:00.000Z","value":78.5},{"name":"2019-03-27T16:00:00.000Z","value":78.5},{"name":"2019-03-28T16:00:00.000Z","value":79.15},{"name":"2019-03-31T16:00:00.000Z","value":79.85},{"name":"2019-04-01T16:00:00.000Z","value":80.15},{"name":"2019-04-02T16:00:00.000Z","value":80.15},{"name":"2019-04-07T16:00:00.000Z","value":80.9},{"name":"2019-04-08T16:00:00.000Z","value":81.4},{"name":"2019-04-09T16:00:00.000Z","value":81.5},{"name":"2019-04-10T16:00:00.000Z","value":81.15},{"name":"2019-04-11T16:00:00.000Z","value":81.1},{"name":"2019-04-14T16:00:00.000Z","value":81.85},{"name":"2019-04-15T16:00:00.000Z","value":82.1},{"name":"2019-04-16T16:00:00.000Z","value":82.75},{"name":"2019-04-17T16:00:00.000Z","value":82.7},{"name":"2019-04-18T16:00:00.000Z","value":82.8},{"name":"2019-04-21T16:00:00.000Z","value":82.7},{"name":"2019-04-22T16:00:00.000Z","value":83.05},{"name":"2019-04-23T16:00:00.000Z","value":83.2},{"name":"2019-04-24T16:00:00.000Z","value":83.4},{"name":"2019-04-25T16:00:00.000Z","value":82.45},{"name":"2019-04-28T16:00:00.000Z","value":82.8},{"name":"2019-04-29T16:00:00.000Z","value":82.8},{"name":"2019-05-01T16:00:00.000Z","value":83},{"name":"2019-05-02T16:00:00.000Z","value":83.75},{"name":"2019-05-05T16:00:00.000Z","value":82.3},{"name":"2019-05-06T16:00:00.000Z","value":83.15},{"name":"2019-05-07T16:00:00.000Z","value":82.55},{"name":"2019-05-08T16:00:00.000Z","value":81.55},{"name":"2019-05-09T16:00:00.000Z","value":81.5},{"name":"2019-05-12T16:00:00.000Z","value":80.15},{"name":"2019-05-13T16:00:00.000Z","value":79.65},{"name":"2019-05-14T16:00:00.000Z","value":79.75},{"name":"2019-05-15T16:00:00.000Z","value":79.05},{"name":"2019-05-16T16:00:00.000Z","value":78.25},{"name":"2019-05-19T16:00:00.000Z","value":78.2},{"name":"2019-05-20T16:00:00.000Z","value":78.4},{"name":"2019-05-21T16:00:00.000Z","value":78.4},{"name":"2019-05-22T16:00:00.000Z","value":76.95},{"name":"2019-05-23T16:00:00.000Z","value":77.35},{"name":"2019-05-26T16:00:00.000Z","value":77.15},{"name":"2019-05-27T16:00:00.000Z","value":77.1},{"name":"2019-05-28T16:00:00.000Z","value":76.75},{"name":"2019-05-29T16:00:00.000Z","value":77.4},{"name":"2019-05-30T16:00:00.000Z","value":78.45},{"name":"2019-06-02T16:00:00.000Z","value":78.55},{"name":"2019-06-03T16:00:00.000Z","value":78.05},{"name":"2019-06-04T16:00:00.000Z","value":78.3},{"name":"2019-06-05T16:00:00.000Z","value":77.7},{"name":"2019-06-09T16:00:00.000Z","value":79.05},{"name":"2019-06-10T16:00:00.000Z","value":79.4},{"name":"2019-06-11T16:00:00.000Z","value":79.7},{"name":"2019-06-12T16:00:00.000Z","value":79.05},{"name":"2019-06-13T16:00:00.000Z","value":78.9},{"name":"2019-06-16T16:00:00.000Z","value":78.7},{"name":"2019-06-17T16:00:00.000Z","value":78.9},{"name":"2019-06-18T16:00:00.000Z","value":80.75},{"name":"2019-06-19T16:00:00.000Z","value":80.85},{"name":"2019-06-20T16:00:00.000Z","value":80.85},{"name":"2019-06-23T16:00:00.000Z","value":81.2},{"name":"2019-06-24T16:00:00.000Z","value":80.75},{"name":"2019-06-25T16:00:00.000Z","value":80.35},{"name":"2019-06-26T16:00:00.000Z","value":81.5},{"name":"2019-06-27T16:00:00.000Z","value":80.9},{"name":"2019-06-30T16:00:00.000Z","value":82.65},{"name":"2019-07-01T16:00:00.000Z","value":82.45},{"name":"2019-07-02T16:00:00.000Z","value":81.5},{"name":"2019-07-03T16:00:00.000Z","value":82},{"name":"2019-07-04T16:00:00.000Z","value":81.9},{"name":"2019-07-07T16:00:00.000Z","value":81.6},{"name":"2019-07-08T16:00:00.000Z","value":81.5},{"name":"2019-07-09T16:00:00.000Z","value":82.2},{"name":"2019-07-10T16:00:00.000Z","value":82.85},{"name":"2019-07-11T16:00:00.000Z","value":82.75},{"name":"2019-07-14T16:00:00.000Z","value":83.2},{"name":"2019-07-15T16:00:00.000Z","value":83.35},{"name":"2019-07-16T16:00:00.000Z","value":82.8},{"name":"2019-07-17T16:00:00.000Z","value":82.7},{"name":"2019-07-18T16:00:00.000Z","value":83},{"name":"2019-07-21T16:00:00.000Z","value":83.4},{"name":"2019-07-22T16:00:00.000Z","value":83.6},{"name":"2019-07-23T16:00:00.000Z","value":83.55},{"name":"2019-07-24T16:00:00.000Z","value":83.8},{"name":"2019-07-25T16:00:00.000Z","value":83.25},{"name":"2019-07-28T16:00:00.000Z","value":83.45},{"name":"2019-07-29T16:00:00.000Z","value":83.2},{"name":"2019-07-30T16:00:00.000Z","value":82.8},{"name":"2019-07-31T16:00:00.000Z","value":82.3},{"name":"2019-08-01T16:00:00.000Z","value":80.95},{"name":"2019-08-04T16:00:00.000Z","value":80.15},{"name":"2019-08-05T16:00:00.000Z","value":80.1},{"name":"2019-08-06T16:00:00.000Z","value":79.7},{"name":"2019-08-07T16:00:00.000Z","value":80.65},{"name":"2019-08-11T16:00:00.000Z","value":80.6},{"name":"2019-08-12T16:00:00.000Z","value":79.7},{"name":"2019-08-13T16:00:00.000Z","value":80.3},{"name":"2019-08-14T16:00:00.000Z","value":79.4},{"name":"2019-08-15T16:00:00.000Z","value":80.35},{"name":"2019-08-18T16:00:00.000Z","value":80.8},{"name":"2019-08-19T16:00:00.000Z","value":81},{"name":"2019-08-20T16:00:00.000Z","value":81.1},{"name":"2019-08-21T16:00:00.000Z","value":80.9},{"name":"2019-08-22T16:00:00.000Z","value":81},{"name":"2019-08-25T16:00:00.000Z","value":79.65},{"name":"2019-08-26T16:00:00.000Z","value":79.85},{"name":"2019-08-27T16:00:00.000Z","value":80.4},{"name":"2019-08-28T16:00:00.000Z","value":80.55},{"name":"2019-08-29T16:00:00.000Z","value":81.85},{"name":"2019-09-01T16:00:00.000Z","value":81.9},{"name":"2019-09-02T16:00:00.000Z","value":81.2},{"name":"2019-09-03T16:00:00.000Z","value":82.15},{"name":"2019-09-04T16:00:00.000Z","value":83},{"name":"2019-09-05T16:00:00.000Z","value":83.5},{"name":"2019-09-08T16:00:00.000Z","value":83.8},{"name":"2019-09-09T16:00:00.000Z","value":83.4},{"name":"2019-09-10T16:00:00.000Z","value":83.45},{"name":"2019-09-11T16:00:00.000Z","value":83.9},{"name":"2019-09-15T16:00:00.000Z","value":84.4},{"name":"2019-09-16T16:00:00.000Z","value":84.25},{"name":"2019-09-17T16:00:00.000Z","value":84.95},{"name":"2019-09-18T16:00:00.000Z","value":84.45},{"name":"2019-09-19T16:00:00.000Z","value":84.7},{"name":"2019-09-22T16:00:00.000Z","value":84.5},{"name":"2019-09-23T16:00:00.000Z","value":84.65},{"name":"2019-09-24T16:00:00.000Z","value":84.1},{"name":"2019-09-25T16:00:00.000Z","value":84.3},{"name":"2019-09-26T16:00:00.000Z","value":84.6},{"name":"2019-09-30T16:00:00.000Z","value":85.95},{"name":"2019-10-01T16:00:00.000Z","value":85.65},{"name":"2019-10-02T16:00:00.000Z","value":84.8},{"name":"2019-10-03T16:00:00.000Z","value":85.15},{"name":"2019-10-06T16:00:00.000Z","value":85.45},{"name":"2019-10-07T16:00:00.000Z","value":86.5},{"name":"2019-10-08T16:00:00.000Z","value":85.8},{"name":"2019-10-13T16:00:00.000Z","value":87.55},{"name":"2019-10-14T16:00:00.000Z","value":87.7},{"name":"2019-10-15T16:00:00.000Z","value":88.1},{"name":"2019-10-16T16:00:00.000Z","value":88.15},{"name":"2019-10-17T16:00:00.000Z","value":87.95},{"name":"2019-10-20T16:00:00.000Z","value":87.85},{"name":"2019-10-21T16:00:00.000Z","value":88.7},{"name":"2019-10-22T16:00:00.000Z","value":88.45},{"name":"2019-10-23T16:00:00.000Z","value":88.8},{"name":"2019-10-24T16:00:00.000Z","value":88.8},{"name":"2019-10-27T16:00:00.000Z","value":89.2},{"name":"2019-10-28T16:00:00.000Z","value":89.45},{"name":"2019-10-29T16:00:00.000Z","value":89.85},{"name":"2019-10-30T16:00:00.000Z","value":90.1},{"name":"2019-10-31T16:00:00.000Z","value":90.1},{"name":"2019-11-03T16:00:00.000Z","value":92.2},{"name":"2019-11-04T16:00:00.000Z","value":92.9},{"name":"2019-11-05T16:00:00.000Z","value":93.35},{"name":"2019-11-06T16:00:00.000Z","value":92.85},{"name":"2019-11-07T16:00:00.000Z","value":92.55},{"name":"2019-11-10T16:00:00.000Z","value":91.15},{"name":"2019-11-11T16:00:00.000Z","value":92},{"name":"2019-11-12T16:00:00.000Z","value":91.45},{"name":"2019-11-13T16:00:00.000Z","value":91.4},{"name":"2019-11-14T16:00:00.000Z","value":92.3},{"name":"2019-11-17T16:00:00.000Z","value":92.9},{"name":"2019-11-18T16:00:00.000Z","value":93.6},{"name":"2019-11-19T16:00:00.000Z","value":93.25},{"name":"2019-11-20T16:00:00.000Z","value":92.5},{"name":"2019-11-21T16:00:00.000Z","value":92.55},{"name":"2019-11-24T16:00:00.000Z","value":92.6},{"name":"2019-11-25T16:00:00.000Z","value":92.85},{"name":"2019-11-26T16:00:00.000Z","value":93.2},{"name":"2019-11-27T16:00:00.000Z","value":92.95},{"name":"2019-11-28T16:00:00.000Z","value":91.5},{"name":"2019-12-01T16:00:00.000Z","value":92.05},{"name":"2019-12-02T16:00:00.000Z","value":92.05},{"name":"2019-12-03T16:00:00.000Z","value":91.7},{"name":"2019-12-04T16:00:00.000Z","value":92.9},{"name":"2019-12-05T16:00:00.000Z","value":93.05},{"name":"2019-12-08T16:00:00.000Z","value":93.65},{"name":"2019-12-09T16:00:00.000Z","value":93},{"name":"2019-12-10T16:00:00.000Z","value":93.75},{"name":"2019-12-11T16:00:00.000Z","value":95.85},{"name":"2019-12-12T16:00:00.000Z","value":96.9},{"name":"2019-12-15T16:00:00.000Z","value":96.85},{"name":"2019-12-16T16:00:00.000Z","value":98.15},{"name":"2019-12-17T16:00:00.000Z","value":98.2},{"name":"2019-12-18T16:00:00.000Z","value":97.65},{"name":"2019-12-19T16:00:00.000Z","value":96.95},{"name":"2019-12-22T16:00:00.000Z","value":97.15},{"name":"2019-12-23T16:00:00.000Z","value":97.2},{"name":"2019-12-24T16:00:00.000Z","value":97.35},{"name":"2019-12-25T16:00:00.000Z","value":97.35},{"name":"2019-12-26T16:00:00.000Z","value":98},{"name":"2019-12-29T16:00:00.000Z","value":97.8},{"name":"2019-12-30T16:00:00.000Z","value":96.95},{"name":"2020-01-01T16:00:00.000Z","value":97.65},{"name":"2020-01-02T16:00:00.000Z","value":97.65},{"name":"2020-01-05T16:00:00.000Z","value":96.4},{"name":"2020-01-06T16:00:00.000Z","value":96.1},{"name":"2020-01-07T16:00:00.000Z","value":95.65},{"name":"2020-01-08T16:00:00.000Z","value":96.95},{"name":"2020-01-09T16:00:00.000Z","value":97.3},{"name":"2020-01-12T16:00:00.000Z","value":98},{"name":"2020-01-13T16:00:00.000Z","value":98.6},{"name":"2020-01-14T16:00:00.000Z","value":97.6},{"name":"2020-01-15T16:00:00.000Z","value":97.3},{"name":"2020-01-16T16:00:00.000Z","value":97.3},{"name":"2020-01-19T16:00:00.000Z","value":97.7},{"name":"2020-01-29T16:00:00.000Z","value":92.15},{"name":"2020-01-30T16:00:00.000Z","value":89.95},{"name":"2020-02-02T16:00:00.000Z","value":89.05},{"name":"2020-02-03T16:00:00.000Z","value":90.6},{"name":"2020-02-04T16:00:00.000Z","value":90.85},{"name":"2020-02-05T16:00:00.000Z","value":92.3},{"name":"2020-02-06T16:00:00.000Z","value":91.2},{"name":"2020-02-09T16:00:00.000Z","value":91},{"name":"2020-02-10T16:00:00.000Z","value":91.75},{"name":"2020-02-11T16:00:00.000Z","value":92.65},{"name":"2020-02-12T16:00:00.000Z","value":92.8},{"name":"2020-02-13T16:00:00.000Z","value":92.95},{"name":"2020-02-16T16:00:00.000Z","value":92.3},{"name":"2020-02-17T16:00:00.000Z","value":91.05},{"name":"2020-02-18T16:00:00.000Z","value":92.1},{"name":"2020-02-19T16:00:00.000Z","value":91.7},{"name":"2020-02-20T16:00:00.000Z","value":91.25},{"name":"2020-02-23T16:00:00.000Z","value":90.1},{"name":"2020-02-24T16:00:00.000Z","value":90.35},{"name":"2020-02-25T16:00:00.000Z","value":89.45},{"name":"2020-02-26T16:00:00.000Z","value":88.65},{"name":"2020-03-01T16:00:00.000Z","value":87.35},{"name":"2020-03-02T16:00:00.000Z","value":88.6},{"name":"2020-03-03T16:00:00.000Z","value":89.2},{"name":"2020-03-04T16:00:00.000Z","value":90.2},{"name":"2020-03-05T16:00:00.000Z","value":88.35},{"name":"2020-03-08T16:00:00.000Z","value":85.85},{"name":"2020-03-09T16:00:00.000Z","value":86.3},{"name":"2020-03-10T16:00:00.000Z","value":85.3},{"name":"2020-03-11T16:00:00.000Z","value":82.15},{"name":"2020-03-12T16:00:00.000Z","value":81},{"name":"2020-03-15T16:00:00.000Z","value":77.3},{"name":"2020-03-16T16:00:00.000Z","value":74.85},{"name":"2020-03-17T16:00:00.000Z","value":72.8},{"name":"2020-03-18T16:00:00.000Z","value":68.55},{"name":"2020-03-19T16:00:00.000Z","value":74},{"name":"2020-03-22T16:00:00.000Z","value":70.8},{"name":"2020-03-23T16:00:00.000Z","value":74.25},{"name":"2020-03-24T16:00:00.000Z","value":76.85},{"name":"2020-03-25T16:00:00.000Z","value":77.2},{"name":"2020-03-26T16:00:00.000Z","value":76.6},{"name":"2020-03-29T16:00:00.000Z","value":75.85},{"name":"2020-03-30T16:00:00.000Z","value":76.15},{"name":"2020-03-31T16:00:00.000Z","value":75.9},{"name":"2020-04-05T16:00:00.000Z","value":77.05},{"name":"2020-04-06T16:00:00.000Z","value":78.5},{"name":"2020-04-07T16:00:00.000Z","value":79.6},{"name":"2020-04-08T16:00:00.000Z","value":79.25},{"name":"2020-04-09T16:00:00.000Z","value":79.3},{"name":"2020-04-12T16:00:00.000Z","value":78.8},{"name":"2020-04-13T16:00:00.000Z","value":80.95},{"name":"2020-04-14T16:00:00.000Z","value":81.2},{"name":"2020-04-15T16:00:00.000Z","value":80.8},{"name":"2020-04-16T16:00:00.000Z","value":83.25},{"name":"2020-04-19T16:00:00.000Z","value":83},{"name":"2020-04-20T16:00:00.000Z","value":80.6},{"name":"2020-04-21T16:00:00.000Z","value":80.6},{"name":"2020-04-22T16:00:00.000Z","value":80.9},{"name":"2020-04-23T16:00:00.000Z","value":80.9},{"name":"2020-04-26T16:00:00.000Z","value":82.55},{"name":"2020-04-27T16:00:00.000Z","value":82.55},{"name":"2020-04-28T16:00:00.000Z","value":83.7},{"name":"2020-04-29T16:00:00.000Z","value":85.5},{"name":"2020-05-03T16:00:00.000Z","value":83},{"name":"2020-05-04T16:00:00.000Z","value":83.4},{"name":"2020-05-05T16:00:00.000Z","value":83.5},{"name":"2020-05-06T16:00:00.000Z","value":83.85},{"name":"2020-05-07T16:00:00.000Z","value":84.35},{"name":"2020-05-10T16:00:00.000Z","value":85.05},{"name":"2020-05-11T16:00:00.000Z","value":84.05},{"name":"2020-05-12T16:00:00.000Z","value":84.3},{"name":"2020-05-13T16:00:00.000Z","value":83.3},{"name":"2020-05-14T16:00:00.000Z","value":83.85},{"name":"2020-05-17T16:00:00.000Z","value":83.15},{"name":"2020-05-18T16:00:00.000Z","value":83.9},{"name":"2020-05-19T16:00:00.000Z","value":83.8},{"name":"2020-05-20T16:00:00.000Z","value":84.5},{"name":"2020-05-21T16:00:00.000Z","value":82.95},{"name":"2020-05-24T16:00:00.000Z","value":83.5},{"name":"2020-05-25T16:00:00.000Z","value":84.45},{"name":"2020-05-26T16:00:00.000Z","value":84.35},{"name":"2020-05-27T16:00:00.000Z","value":83.85},{"name":"2020-05-28T16:00:00.000Z","value":84.45},{"name":"2020-05-31T16:00:00.000Z","value":84.9},{"name":"2020-06-01T16:00:00.000Z","value":85.3},{"name":"2020-06-02T16:00:00.000Z","value":86.8},{"name":"2020-06-03T16:00:00.000Z","value":87.6},{"name":"2020-06-04T16:00:00.000Z","value":88.35},{"name":"2020-06-07T16:00:00.000Z","value":89.5},{"name":"2020-06-08T16:00:00.000Z","value":89.6},{"name":"2020-06-09T16:00:00.000Z","value":90.45},{"name":"2020-06-10T16:00:00.000Z","value":89.05},{"name":"2020-06-11T16:00:00.000Z","value":88.25},{"name":"2020-06-14T16:00:00.000Z","value":87},{"name":"2020-06-15T16:00:00.000Z","value":88.9},{"name":"2020-06-16T16:00:00.000Z","value":89},{"name":"2020-06-17T16:00:00.000Z","value":88.9},{"name":"2020-06-18T16:00:00.000Z","value":88.85},{"name":"2020-06-21T16:00:00.000Z","value":89.05},{"name":"2020-06-22T16:00:00.000Z","value":89.45},{"name":"2020-06-23T16:00:00.000Z","value":90},{"name":"2020-06-28T16:00:00.000Z","value":89.1},{"name":"2020-06-29T16:00:00.000Z","value":89.9},{"name":"2020-06-30T16:00:00.000Z","value":90.5},{"name":"2020-07-01T16:00:00.000Z","value":91.5},{"name":"2020-07-02T16:00:00.000Z","value":92.55},{"name":"2020-07-05T16:00:00.000Z","value":94.15},{"name":"2020-07-06T16:00:00.000Z","value":94.5},{"name":"2020-07-07T16:00:00.000Z","value":95.15},{"name":"2020-07-08T16:00:00.000Z","value":95.45},{"name":"2020-07-09T16:00:00.000Z","value":94.65},{"name":"2020-07-12T16:00:00.000Z","value":96.05},{"name":"2020-07-13T16:00:00.000Z","value":96.65},{"name":"2020-07-14T16:00:00.000Z","value":97.05},{"name":"2020-07-15T16:00:00.000Z","value":96.1},{"name":"2020-07-16T16:00:00.000Z","value":97.2},{"name":"2020-07-19T16:00:00.000Z","value":97.05},{"name":"2020-07-20T16:00:00.000Z","value":98.7},{"name":"2020-07-21T16:00:00.000Z","value":98.95},{"name":"2020-07-22T16:00:00.000Z","value":98.85},{"name":"2020-07-23T16:00:00.000Z","value":98.5},{"name":"2020-07-26T16:00:00.000Z","value":103.3},{"name":"2020-07-27T16:00:00.000Z","value":103.6},{"name":"2020-07-28T16:00:00.000Z","value":102.55},{"name":"2020-07-29T16:00:00.000Z","value":104.05},{"name":"2020-07-30T16:00:00.000Z","value":103.8},{"name":"2020-08-02T16:00:00.000Z","value":102},{"name":"2020-08-03T16:00:00.000Z","value":103.3},{"name":"2020-08-04T16:00:00.000Z","value":104.3},{"name":"2020-08-05T16:00:00.000Z","value":105.4},{"name":"2020-08-06T16:00:00.000Z","value":104.65},{"name":"2020-08-09T16:00:00.000Z","value":105.6},{"name":"2020-08-10T16:00:00.000Z","value":104.8},{"name":"2020-08-11T16:00:00.000Z","value":103.25},{"name":"2020-08-12T16:00:00.000Z","value":104.25},{"name":"2020-08-13T16:00:00.000Z","value":104.5},{"name":"2020-08-16T16:00:00.000Z","value":105.6},{"name":"2020-08-17T16:00:00.000Z","value":105},{"name":"2020-08-18T16:00:00.000Z","value":104.25},{"name":"2020-08-19T16:00:00.000Z","value":100.6},{"name":"2020-08-20T16:00:00.000Z","value":102.8},{"name":"2020-08-23T16:00:00.000Z","value":103.1},{"name":"2020-08-24T16:00:00.000Z","value":103.9},{"name":"2020-08-25T16:00:00.000Z","value":104.3},{"name":"2020-08-26T16:00:00.000Z","value":104.55},{"name":"2020-08-27T16:00:00.000Z","value":103.5},{"name":"2020-08-30T16:00:00.000Z","value":101.8},{"name":"2020-08-31T16:00:00.000Z","value":103.35},{"name":"2020-09-01T16:00:00.000Z","value":103},{"name":"2020-09-02T16:00:00.000Z","value":103.3},{"name":"2020-09-03T16:00:00.000Z","value":102.55},{"name":"2020-09-06T16:00:00.000Z","value":102.4},{"name":"2020-09-07T16:00:00.000Z","value":103},{"name":"2020-09-08T16:00:00.000Z","value":102.3},{"name":"2020-09-09T16:00:00.000Z","value":103.2},{"name":"2020-09-10T16:00:00.000Z","value":103.25},{"name":"2020-09-13T16:00:00.000Z","value":104.55},{"name":"2020-09-14T16:00:00.000Z","value":104.95},{"name":"2020-09-15T16:00:00.000Z","value":106.55},{"name":"2020-09-16T16:00:00.000Z","value":105.4},{"name":"2020-09-17T16:00:00.000Z","value":105.3},{"name":"2020-09-20T16:00:00.000Z","value":104.45},{"name":"2020-09-21T16:00:00.000Z","value":103.1},{"name":"2020-09-22T16:00:00.000Z","value":102.95},{"name":"2020-09-23T16:00:00.000Z","value":100.45},{"name":"2020-09-24T16:00:00.000Z","value":100.65},{"name":"2020-09-27T16:00:00.000Z","value":102.3},{"name":"2020-09-28T16:00:00.000Z","value":102.55},{"name":"2020-09-29T16:00:00.000Z","value":103},{"name":"2020-10-04T16:00:00.000Z","value":103.05},{"name":"2020-10-05T16:00:00.000Z","value":104.25},{"name":"2020-10-06T16:00:00.000Z","value":104.8},{"name":"2020-10-07T16:00:00.000Z","value":106.2},{"name":"2020-10-11T16:00:00.000Z","value":107.05},{"name":"2020-10-12T16:00:00.000Z","value":107.1},{"name":"2020-10-13T16:00:00.000Z","value":106.7},{"name":"2020-10-14T16:00:00.000Z","value":105.7},{"name":"2020-10-15T16:00:00.000Z","value":105.25},{"name":"2020-10-18T16:00:00.000Z","value":106.6},{"name":"2020-10-19T16:00:00.000Z","value":106},{"name":"2020-10-20T16:00:00.000Z","value":105.95},{"name":"2020-10-21T16:00:00.000Z","value":106.1},{"name":"2020-10-22T16:00:00.000Z","value":106.1},{"name":"2020-10-25T16:00:00.000Z","value":106.1},{"name":"2020-10-26T16:00:00.000Z","value":105.5},{"name":"2020-10-27T16:00:00.000Z","value":105},{"name":"2020-10-28T16:00:00.000Z","value":103.85},{"name":"2020-10-29T16:00:00.000Z","value":103},{"name":"2020-11-01T16:00:00.000Z","value":103.4},{"name":"2020-11-02T16:00:00.000Z","value":104.6},{"name":"2020-11-03T16:00:00.000Z","value":106.15},{"name":"2020-11-04T16:00:00.000Z","value":106.05},{"name":"2020-11-05T16:00:00.000Z","value":106.7},{"name":"2020-11-08T16:00:00.000Z","value":108.1},{"name":"2020-11-09T16:00:00.000Z","value":107.1},{"name":"2020-11-10T16:00:00.000Z","value":108.75},{"name":"2020-11-11T16:00:00.000Z","value":108.8},{"name":"2020-11-12T16:00:00.000Z","value":109.25},{"name":"2020-11-15T16:00:00.000Z","value":112.8},{"name":"2020-11-16T16:00:00.000Z","value":113.6},{"name":"2020-11-17T16:00:00.000Z","value":114.35},{"name":"2020-11-18T16:00:00.000Z","value":114.15},{"name":"2020-11-19T16:00:00.000Z","value":114},{"name":"2020-11-22T16:00:00.000Z","value":115.45},{"name":"2020-11-23T16:00:00.000Z","value":114.9},{"name":"2020-11-24T16:00:00.000Z","value":113.95},{"name":"2020-11-25T16:00:00.000Z","value":114.85},{"name":"2020-11-26T16:00:00.000Z","value":114.65},{"name":"2020-11-29T16:00:00.000Z","value":113.3},{"name":"2020-11-30T16:00:00.000Z","value":114.3},{"name":"2020-12-01T16:00:00.000Z","value":115.4},{"name":"2020-12-02T16:00:00.000Z","value":115.4},{"name":"2020-12-03T16:00:00.000Z","value":117.3},{"name":"2020-12-06T16:00:00.000Z","value":118.4},{"name":"2020-12-07T16:00:00.000Z","value":120.05},{"name":"2020-12-08T16:00:00.000Z","value":120.05},{"name":"2020-12-09T16:00:00.000Z","value":118.6},{"name":"2020-12-10T16:00:00.000Z","value":118.75},{"name":"2020-12-13T16:00:00.000Z","value":118.25},{"name":"2020-12-14T16:00:00.000Z","value":117.05},{"name":"2020-12-15T16:00:00.000Z","value":119.25},{"name":"2020-12-16T16:00:00.000Z","value":118.6},{"name":"2020-12-17T16:00:00.000Z","value":118.2},{"name":"2020-12-20T16:00:00.000Z","value":119.35},{"name":"2020-12-21T16:00:00.000Z","value":118},{"name":"2020-12-22T16:00:00.000Z","value":118.15},{"name":"2020-12-23T16:00:00.000Z","value":118.8},{"name":"2020-12-24T16:00:00.000Z","value":118.95},{"name":"2020-12-27T16:00:00.000Z","value":120},{"name":"2020-12-28T16:00:00.000Z","value":119.9},{"name":"2020-12-29T16:00:00.000Z","value":121.6},{"name":"2020-12-30T16:00:00.000Z","value":122.25},{"name":"2021-01-03T16:00:00.000Z","value":124.35},{"name":"2021-01-04T16:00:00.000Z","value":124.6},{"name":"2021-01-05T16:00:00.000Z","value":125.95},{"name":"2021-01-06T16:00:00.000Z","value":128.9},{"name":"2021-01-07T16:00:00.000Z","value":131.2},{"name":"2021-01-10T16:00:00.000Z","value":132.3},{"name":"2021-01-11T16:00:00.000Z","value":132.1},{"name":"2021-01-12T16:00:00.000Z","value":135.3},{"name":"2021-01-13T16:00:00.000Z","value":134.05},{"name":"2021-01-14T16:00:00.000Z","value":134.5},{"name":"2021-01-17T16:00:00.000Z","value":134.4},{"name":"2021-01-18T16:00:00.000Z","value":137.95},{"name":"2021-01-19T16:00:00.000Z","value":138.2},{"name":"2021-01-20T16:00:00.000Z","value":143},{"name":"2021-01-21T16:00:00.000Z","value":137.45},{"name":"2021-01-24T16:00:00.000Z","value":135.6},{"name":"2021-01-25T16:00:00.000Z","value":132.85},{"name":"2021-01-26T16:00:00.000Z","value":133.05},{"name":"2021-01-27T16:00:00.000Z","value":130.35},{"name":"2021-01-28T16:00:00.000Z","value":128.2},{"name":"2021-01-31T16:00:00.000Z","value":130.75},{"name":"2021-02-01T16:00:00.000Z","value":134.45},{"name":"2021-02-02T16:00:00.000Z","value":134.35},{"name":"2021-02-03T16:00:00.000Z","value":133.55},{"name":"2021-02-04T16:00:00.000Z","value":134.8},{"name":"2021-02-16T16:00:00.000Z","value":140.55},{"name":"2021-02-17T16:00:00.000Z","value":140.35},{"name":"2021-02-18T16:00:00.000Z","value":138.85},{"name":"2021-02-21T16:00:00.000Z","value":138.8},{"name":"2021-02-22T16:00:00.000Z","value":138.5},{"name":"2021-02-23T16:00:00.000Z","value":136.45},{"name":"2021-02-24T16:00:00.000Z","value":137.55},{"name":"2021-02-25T16:00:00.000Z","value":133.4},{"name":"2021-03-01T16:00:00.000Z","value":133.45},{"name":"2021-03-02T16:00:00.000Z","value":135.4},{"name":"2021-03-03T16:00:00.000Z","value":132.75},{"name":"2021-03-04T16:00:00.000Z","value":131.95},{"name":"2021-03-07T16:00:00.000Z","value":131.85},{"name":"2021-03-08T16:00:00.000Z","value":131.35},{"name":"2021-03-09T16:00:00.000Z","value":131.9},{"name":"2021-03-10T16:00:00.000Z","value":134.7},{"name":"2021-03-11T16:00:00.000Z","value":135.25},{"name":"2021-03-14T16:00:00.000Z","value":134.9},{"name":"2021-03-15T16:00:00.000Z","value":135.35},{"name":"2021-03-16T16:00:00.000Z","value":134.2},{"name":"2021-03-17T16:00:00.000Z","value":134.9},{"name":"2021-03-18T16:00:00.000Z","value":132.8},{"name":"2021-03-21T16:00:00.000Z","value":133.4},{"name":"2021-03-22T16:00:00.000Z","value":133.6},{"name":"2021-03-23T16:00:00.000Z","value":131.5},{"name":"2021-03-24T16:00:00.000Z","value":131.95},{"name":"2021-03-25T16:00:00.000Z","value":134.35},{"name":"2021-03-28T16:00:00.000Z","value":135.45},{"name":"2021-03-29T16:00:00.000Z","value":135.9},{"name":"2021-03-30T16:00:00.000Z","value":134.75},{"name":"2021-03-31T16:00:00.000Z","value":135.75},{"name":"2021-04-05T16:00:00.000Z","value":137.65},{"name":"2021-04-06T16:00:00.000Z","value":137.8},{"name":"2021-04-07T16:00:00.000Z","value":138.25},{"name":"2021-04-08T16:00:00.000Z","value":137.95},{"name":"2021-04-11T16:00:00.000Z","value":137.15},{"name":"2021-04-12T16:00:00.000Z","value":137.15},{"name":"2021-04-13T16:00:00.000Z","value":137.9},{"name":"2021-04-14T16:00:00.000Z","value":139.05},{"name":"2021-04-15T16:00:00.000Z","value":139.25},{"name":"2021-04-18T16:00:00.000Z","value":139.5},{"name":"2021-04-19T16:00:00.000Z","value":139.25},{"name":"2021-04-20T16:00:00.000Z","value":138},{"name":"2021-04-21T16:00:00.000Z","value":137.9},{"name":"2021-04-22T16:00:00.000Z","value":139.15},{"name":"2021-04-25T16:00:00.000Z","value":141.2},{"name":"2021-04-26T16:00:00.000Z","value":141.25},{"name":"2021-04-27T16:00:00.000Z","value":140.4},{"name":"2021-04-28T16:00:00.000Z","value":140.6},{"name":"2021-05-02T16:00:00.000Z","value":138.25},{"name":"2021-05-03T16:00:00.000Z","value":137.05},{"name":"2021-05-04T16:00:00.000Z","value":135.75},{"name":"2021-05-05T16:00:00.000Z","value":136.95},{"name":"2021-05-06T16:00:00.000Z","value":139.4},{"name":"2021-05-09T16:00:00.000Z","value":138.45},{"name":"2021-05-10T16:00:00.000Z","value":133.25},{"name":"2021-05-11T16:00:00.000Z","value":129.4},{"name":"2021-05-12T16:00:00.000Z","value":127.5},{"name":"2021-05-13T16:00:00.000Z","value":128.95},{"name":"2021-05-16T16:00:00.000Z","value":126.5},{"name":"2021-05-17T16:00:00.000Z","value":132.3},{"name":"2021-05-18T16:00:00.000Z","value":131.4},{"name":"2021-05-19T16:00:00.000Z","value":130.5},{"name":"2021-05-20T16:00:00.000Z","value":132.35},{"name":"2021-05-23T16:00:00.000Z","value":132.15},{"name":"2021-05-24T16:00:00.000Z","value":134.4},{"name":"2021-05-25T16:00:00.000Z","value":134.5},{"name":"2021-05-26T16:00:00.000Z","value":133.55},{"name":"2021-05-27T16:00:00.000Z","value":135.8},{"name":"2021-05-30T16:00:00.000Z","value":137.1},{"name":"2021-05-31T16:00:00.000Z","value":137.7},{"name":"2021-06-01T16:00:00.000Z","value":137.7},{"name":"2021-06-02T16:00:00.000Z","value":137.6},{"name":"2021-06-03T16:00:00.000Z","value":136.95},{"name":"2021-06-06T16:00:00.000Z","value":137.3},{"name":"2021-06-07T16:00:00.000Z","value":136.5},{"name":"2021-06-08T16:00:00.000Z","value":135.5},{"name":"2021-06-09T16:00:00.000Z","value":137.6},{"name":"2021-06-10T16:00:00.000Z","value":138.1},{"name":"2021-06-14T16:00:00.000Z","value":138.85},{"name":"2021-06-15T16:00:00.000Z","value":138.7},{"name":"2021-06-16T16:00:00.000Z","value":138.3},{"name":"2021-06-17T16:00:00.000Z","value":138},{"name":"2021-06-20T16:00:00.000Z","value":134.7},{"name":"2021-06-21T16:00:00.000Z","value":134.85},{"name":"2021-06-22T16:00:00.000Z","value":137.05},{"name":"2021-06-23T16:00:00.000Z","value":136.7},{"name":"2021-06-24T16:00:00.000Z","value":136.95},{"name":"2021-06-27T16:00:00.000Z","value":137.2},{"name":"2021-06-28T16:00:00.000Z","value":137.6},{"name":"2021-06-29T16:00:00.000Z","value":138.95},{"name":"2021-06-30T16:00:00.000Z","value":138.3},{"name":"2021-07-01T16:00:00.000Z","value":138.3},{"name":"2021-07-04T16:00:00.000Z","value":139.6},{"name":"2021-07-05T16:00:00.000Z","value":139.75},{"name":"2021-07-06T16:00:00.000Z","value":139},{"name":"2021-07-07T16:00:00.000Z","value":138.85},{"name":"2021-07-08T16:00:00.000Z","value":137.75},{"name":"2021-07-11T16:00:00.000Z","value":139},{"name":"2021-07-12T16:00:00.000Z","value":140.15},{"name":"2021-07-13T16:00:00.000Z","value":140.5},{"name":"2021-07-14T16:00:00.000Z","value":141.8},{"name":"2021-07-15T16:00:00.000Z","value":139.9},{"name":"2021-07-18T16:00:00.000Z","value":138.3},{"name":"2021-07-19T16:00:00.000Z","value":137.2},{"name":"2021-07-20T16:00:00.000Z","value":136.7},{"name":"2021-07-21T16:00:00.000Z","value":137.65},{"name":"2021-07-22T16:00:00.000Z","value":137.65},{"name":"2021-07-25T16:00:00.000Z","value":136.45},{"name":"2021-07-26T16:00:00.000Z","value":136.4},{"name":"2021-07-27T16:00:00.000Z","value":134.25},{"name":"2021-07-28T16:00:00.000Z","value":136.5},{"name":"2021-07-29T16:00:00.000Z","value":136.05},{"name":"2021-08-01T16:00:00.000Z","value":137.9},{"name":"2021-08-02T16:00:00.000Z","value":138.45},{"name":"2021-08-03T16:00:00.000Z","value":139.25},{"name":"2021-08-04T16:00:00.000Z","value":139},{"name":"2021-08-05T16:00:00.000Z","value":138.8},{"name":"2021-08-08T16:00:00.000Z","value":138.4},{"name":"2021-08-09T16:00:00.000Z","value":137.65},{"name":"2021-08-10T16:00:00.000Z","value":137.2},{"name":"2021-08-11T16:00:00.000Z","value":136.95},{"name":"2021-08-12T16:00:00.000Z","value":135.65}]},{"name":"Sample 1","series":[{"name":"2001-01-06T00:00:00.000Z","value":50},{"name":"2001-01-16T00:00:00.000Z","value":50.166666666666664},{"name":"2001-01-26T00:00:00.000Z","value":50.333333333333336},{"name":"2001-02-06T00:00:00.000Z","value":50.5},{"name":"2001-02-16T00:00:00.000Z","value":50.666666666666664},{"name":"2001-02-26T00:00:00.000Z","value":50.833333333333336},{"name":"2001-03-06T00:00:00.000Z","value":51},{"name":"2001-03-16T00:00:00.000Z","value":51.166666666666664},{"name":"2001-03-26T00:00:00.000Z","value":51.333333333333336},{"name":"2001-04-06T00:00:00.000Z","value":51.5},{"name":"2001-04-16T00:00:00.000Z","value":51.666666666666664},{"name":"2001-04-26T00:00:00.000Z","value":51.833333333333336},{"name":"2001-05-06T00:00:00.000Z","value":52},{"name":"2001-05-16T00:00:00.000Z","value":52.166666666666664},{"name":"2001-05-26T00:00:00.000Z","value":52.333333333333336},{"name":"2001-06-06T00:00:00.000Z","value":52.5},{"name":"2001-06-16T00:00:00.000Z","value":52.666666666666664},{"name":"2001-06-26T00:00:00.000Z","value":52.833333333333336},{"name":"2001-07-06T00:00:00.000Z","value":53},{"name":"2001-07-16T00:00:00.000Z","value":53.166666666666664},{"name":"2001-07-26T00:00:00.000Z","value":53.333333333333336},{"name":"2001-08-06T00:00:00.000Z","value":53.5},{"name":"2001-08-16T00:00:00.000Z","value":53.666666666666664},{"name":"2001-08-26T00:00:00.000Z","value":53.833333333333336},{"name":"2001-09-06T00:00:00.000Z","value":54},{"name":"2001-09-16T00:00:00.000Z","value":54.166666666666664},{"name":"2001-09-26T00:00:00.000Z","value":54.333333333333336},{"name":"2001-10-06T00:00:00.000Z","value":54.5},{"name":"2001-10-16T00:00:00.000Z","value":54.666666666666664},{"name":"2001-10-26T00:00:00.000Z","value":54.833333333333336},{"name":"2001-11-06T00:00:00.000Z","value":55},{"name":"2001-11-16T00:00:00.000Z","value":55.166666666666664},{"name":"2001-11-26T00:00:00.000Z","value":55.333333333333336},{"name":"2001-12-06T00:00:00.000Z","value":55.5},{"name":"2001-12-16T00:00:00.000Z","value":55.666666666666664},{"name":"2001-12-26T00:00:00.000Z","value":55.833333333333336},{"name":"2002-01-06T00:00:00.000Z","value":56},{"name":"2002-01-16T00:00:00.000Z","value":56.166666666666664},{"name":"2002-01-26T00:00:00.000Z","value":56.333333333333336},{"name":"2002-02-06T00:00:00.000Z","value":56.5},{"name":"2002-02-16T00:00:00.000Z","value":56.666666666666664},{"name":"2002-02-26T00:00:00.000Z","value":56.833333333333336},{"name":"2002-03-06T00:00:00.000Z","value":57},{"name":"2002-03-16T00:00:00.000Z","value":57.166666666666664},{"name":"2002-03-26T00:00:00.000Z","value":57.333333333333336},{"name":"2002-04-06T00:00:00.000Z","value":57.5},{"name":"2002-04-16T00:00:00.000Z","value":57.666666666666664},{"name":"2002-04-26T00:00:00.000Z","value":57.833333333333336},{"name":"2002-05-06T00:00:00.000Z","value":58},{"name":"2002-05-16T00:00:00.000Z","value":58.166666666666664},{"name":"2002-05-26T00:00:00.000Z","value":58.333333333333336},{"name":"2002-06-06T00:00:00.000Z","value":58.5},{"name":"2002-06-16T00:00:00.000Z","value":58.666666666666664},{"name":"2002-06-26T00:00:00.000Z","value":58.833333333333336},{"name":"2002-07-06T00:00:00.000Z","value":59},{"name":"2002-07-16T00:00:00.000Z","value":59.16666666666667},{"name":"2002-07-26T00:00:00.000Z","value":59.333333333333336},{"name":"2002-08-06T00:00:00.000Z","value":59.5},{"name":"2002-08-16T00:00:00.000Z","value":59.66666666666667},{"name":"2002-08-26T00:00:00.000Z","value":59.833333333333336},{"name":"2002-09-06T00:00:00.000Z","value":60},{"name":"2002-09-16T00:00:00.000Z","value":60.16666666666667},{"name":"2002-09-26T00:00:00.000Z","value":60.333333333333336},{"name":"2002-10-06T00:00:00.000Z","value":60.5},{"name":"2002-10-16T00:00:00.000Z","value":60.66666666666667},{"name":"2002-10-26T00:00:00.000Z","value":60.833333333333336},{"name":"2002-11-06T00:00:00.000Z","value":61},{"name":"2002-11-16T00:00:00.000Z","value":61.16666666666667},{"name":"2002-11-26T00:00:00.000Z","value":61.33333333333333},{"name":"2002-12-06T00:00:00.000Z","value":61.5},{"name":"2002-12-16T00:00:00.000Z","value":61.666666666666664},{"name":"2002-12-26T00:00:00.000Z","value":61.83333333333333},{"name":"2003-01-06T00:00:00.000Z","value":62},{"name":"2003-01-16T00:00:00.000Z","value":62.166666666666664},{"name":"2003-01-26T00:00:00.000Z","value":62.33333333333333},{"name":"2003-02-06T00:00:00.000Z","value":62.5},{"name":"2003-02-16T00:00:00.000Z","value":62.666666666666664},{"name":"2003-02-26T00:00:00.000Z","value":62.83333333333333},{"name":"2003-03-06T00:00:00.000Z","value":63},{"name":"2003-03-16T00:00:00.000Z","value":63.166666666666664},{"name":"2003-03-26T00:00:00.000Z","value":63.33333333333333},{"name":"2003-04-06T00:00:00.000Z","value":63.5},{"name":"2003-04-16T00:00:00.000Z","value":63.666666666666664},{"name":"2003-04-26T00:00:00.000Z","value":63.833333333333336},{"name":"2003-05-06T00:00:00.000Z","value":64},{"name":"2003-05-16T00:00:00.000Z","value":64.16666666666667},{"name":"2003-05-26T00:00:00.000Z","value":64.33333333333333},{"name":"2003-06-06T00:00:00.000Z","value":64.5},{"name":"2003-06-16T00:00:00.000Z","value":64.66666666666667},{"name":"2003-06-26T00:00:00.000Z","value":64.83333333333333},{"name":"2003-07-06T00:00:00.000Z","value":65},{"name":"2003-07-16T00:00:00.000Z","value":65.16666666666667},{"name":"2003-07-26T00:00:00.000Z","value":65.33333333333333},{"name":"2003-08-06T00:00:00.000Z","value":65.5},{"name":"2003-08-16T00:00:00.000Z","value":65.66666666666667},{"name":"2003-08-26T00:00:00.000Z","value":65.83333333333333},{"name":"2003-09-06T00:00:00.000Z","value":66},{"name":"2003-09-16T00:00:00.000Z","value":66.16666666666666},{"name":"2003-09-26T00:00:00.000Z","value":66.33333333333333},{"name":"2003-10-06T00:00:00.000Z","value":66.5},{"name":"2003-10-16T00:00:00.000Z","value":66.66666666666667},{"name":"2003-10-26T00:00:00.000Z","value":66.83333333333333},{"name":"2003-11-06T00:00:00.000Z","value":67},{"name":"2003-11-16T00:00:00.000Z","value":67.16666666666666},{"name":"2003-11-26T00:00:00.000Z","value":67.33333333333333},{"name":"2003-12-06T00:00:00.000Z","value":67.5},{"name":"2003-12-16T00:00:00.000Z","value":67.66666666666667},{"name":"2003-12-26T00:00:00.000Z","value":67.83333333333333},{"name":"2004-01-06T00:00:00.000Z","value":68},{"name":"2004-01-16T00:00:00.000Z","value":68.16666666666666},{"name":"2004-01-26T00:00:00.000Z","value":68.33333333333334},{"name":"2004-02-06T00:00:00.000Z","value":68.5},{"name":"2004-02-16T00:00:00.000Z","value":68.66666666666667},{"name":"2004-02-26T00:00:00.000Z","value":68.83333333333333},{"name":"2004-03-06T00:00:00.000Z","value":69},{"name":"2004-03-16T00:00:00.000Z","value":69.16666666666666},{"name":"2004-03-26T00:00:00.000Z","value":69.33333333333334},{"name":"2004-04-06T00:00:00.000Z","value":69.5},{"name":"2004-04-16T00:00:00.000Z","value":69.66666666666667},{"name":"2004-04-26T00:00:00.000Z","value":69.83333333333333},{"name":"2004-05-06T00:00:00.000Z","value":70},{"name":"2004-05-16T00:00:00.000Z","value":70.16666666666667},{"name":"2004-05-26T00:00:00.000Z","value":70.33333333333334},{"name":"2004-06-06T00:00:00.000Z","value":70.5},{"name":"2004-06-16T00:00:00.000Z","value":70.66666666666667},{"name":"2004-06-26T00:00:00.000Z","value":70.83333333333333},{"name":"2004-07-06T00:00:00.000Z","value":71},{"name":"2004-07-16T00:00:00.000Z","value":71.16666666666667},{"name":"2004-07-26T00:00:00.000Z","value":71.33333333333334},{"name":"2004-08-06T00:00:00.000Z","value":71.5},{"name":"2004-08-16T00:00:00.000Z","value":71.66666666666667},{"name":"2004-08-26T00:00:00.000Z","value":71.83333333333333},{"name":"2004-09-06T00:00:00.000Z","value":72},{"name":"2004-09-16T00:00:00.000Z","value":72.16666666666667},{"name":"2004-09-26T00:00:00.000Z","value":72.33333333333334},{"name":"2004-10-06T00:00:00.000Z","value":72.5},{"name":"2004-10-16T00:00:00.000Z","value":72.66666666666666},{"name":"2004-10-26T00:00:00.000Z","value":72.83333333333333},{"name":"2004-11-06T00:00:00.000Z","value":73},{"name":"2004-11-16T00:00:00.000Z","value":73.16666666666667},{"name":"2004-11-26T00:00:00.000Z","value":73.33333333333333},{"name":"2004-12-06T00:00:00.000Z","value":73.5},{"name":"2004-12-16T00:00:00.000Z","value":73.66666666666666},{"name":"2004-12-26T00:00:00.000Z","value":73.83333333333333},{"name":"2005-01-06T00:00:00.000Z","value":74},{"name":"2005-01-16T00:00:00.000Z","value":74.16666666666667},{"name":"2005-01-26T00:00:00.000Z","value":74.33333333333333},{"name":"2005-02-06T00:00:00.000Z","value":74.5},{"name":"2005-02-16T00:00:00.000Z","value":74.66666666666666},{"name":"2005-02-26T00:00:00.000Z","value":74.83333333333333},{"name":"2005-03-06T00:00:00.000Z","value":75},{"name":"2005-03-16T00:00:00.000Z","value":75.16666666666667},{"name":"2005-03-26T00:00:00.000Z","value":75.33333333333333},{"name":"2005-04-06T00:00:00.000Z","value":75.5},{"name":"2005-04-16T00:00:00.000Z","value":75.66666666666666},{"name":"2005-04-26T00:00:00.000Z","value":75.83333333333334},{"name":"2005-05-06T00:00:00.000Z","value":76},{"name":"2005-05-16T00:00:00.000Z","value":76.16666666666667},{"name":"2005-05-26T00:00:00.000Z","value":76.33333333333333},{"name":"2005-06-06T00:00:00.000Z","value":76.5},{"name":"2005-06-16T00:00:00.000Z","value":76.66666666666666},{"name":"2005-06-26T00:00:00.000Z","value":76.83333333333334},{"name":"2005-07-06T00:00:00.000Z","value":77},{"name":"2005-07-16T00:00:00.000Z","value":77.16666666666667},{"name":"2005-07-26T00:00:00.000Z","value":77.33333333333333},{"name":"2005-08-06T00:00:00.000Z","value":77.5},{"name":"2005-08-16T00:00:00.000Z","value":77.66666666666667},{"name":"2005-08-26T00:00:00.000Z","value":77.83333333333334},{"name":"2005-09-06T00:00:00.000Z","value":78},{"name":"2005-09-16T00:00:00.000Z","value":78.16666666666667},{"name":"2005-09-26T00:00:00.000Z","value":78.33333333333333},{"name":"2005-10-06T00:00:00.000Z","value":78.5},{"name":"2005-10-16T00:00:00.000Z","value":78.66666666666667},{"name":"2005-10-26T00:00:00.000Z","value":78.83333333333334},{"name":"2005-11-06T00:00:00.000Z","value":79},{"name":"2005-11-16T00:00:00.000Z","value":79.16666666666667},{"name":"2005-11-26T00:00:00.000Z","value":79.33333333333333},{"name":"2005-12-06T00:00:00.000Z","value":79.5},{"name":"2005-12-16T00:00:00.000Z","value":79.66666666666667},{"name":"2005-12-26T00:00:00.000Z","value":79.83333333333334}]},{"name":"Sample 2","series":[{"name":"2001-01-06T00:00:00.000Z","value":50},{"name":"2001-01-16T00:00:00.000Z","value":49.833333333333336},{"name":"2001-01-26T00:00:00.000Z","value":49.666666666666664},{"name":"2001-02-06T00:00:00.000Z","value":49.5},{"name":"2001-02-16T00:00:00.000Z","value":49.333333333333336},{"name":"2001-02-26T00:00:00.000Z","value":49.166666666666664},{"name":"2001-03-06T00:00:00.000Z","value":49},{"name":"2001-03-16T00:00:00.000Z","value":48.833333333333336},{"name":"2001-03-26T00:00:00.000Z","value":48.666666666666664},{"name":"2001-04-06T00:00:00.000Z","value":48.5},{"name":"2001-04-16T00:00:00.000Z","value":48.333333333333336},{"name":"2001-04-26T00:00:00.000Z","value":48.166666666666664},{"name":"2001-05-06T00:00:00.000Z","value":48},{"name":"2001-05-16T00:00:00.000Z","value":47.833333333333336},{"name":"2001-05-26T00:00:00.000Z","value":47.666666666666664},{"name":"2001-06-06T00:00:00.000Z","value":47.5},{"name":"2001-06-16T00:00:00.000Z","value":47.333333333333336},{"name":"2001-06-26T00:00:00.000Z","value":47.166666666666664},{"name":"2001-07-06T00:00:00.000Z","value":47},{"name":"2001-07-16T00:00:00.000Z","value":46.833333333333336},{"name":"2001-07-26T00:00:00.000Z","value":46.666666666666664},{"name":"2001-08-06T00:00:00.000Z","value":46.5},{"name":"2001-08-16T00:00:00.000Z","value":46.333333333333336},{"name":"2001-08-26T00:00:00.000Z","value":46.166666666666664},{"name":"2001-09-06T00:00:00.000Z","value":46},{"name":"2001-09-16T00:00:00.000Z","value":45.833333333333336},{"name":"2001-09-26T00:00:00.000Z","value":45.666666666666664},{"name":"2001-10-06T00:00:00.000Z","value":45.5},{"name":"2001-10-16T00:00:00.000Z","value":45.333333333333336},{"name":"2001-10-26T00:00:00.000Z","value":45.166666666666664},{"name":"2001-11-06T00:00:00.000Z","value":45},{"name":"2001-11-16T00:00:00.000Z","value":44.833333333333336},{"name":"2001-11-26T00:00:00.000Z","value":44.666666666666664},{"name":"2001-12-06T00:00:00.000Z","value":44.5},{"name":"2001-12-16T00:00:00.000Z","value":44.333333333333336},{"name":"2001-12-26T00:00:00.000Z","value":44.166666666666664},{"name":"2002-01-06T00:00:00.000Z","value":44},{"name":"2002-01-16T00:00:00.000Z","value":43.833333333333336},{"name":"2002-01-26T00:00:00.000Z","value":43.666666666666664},{"name":"2002-02-06T00:00:00.000Z","value":43.5},{"name":"2002-02-16T00:00:00.000Z","value":43.333333333333336},{"name":"2002-02-26T00:00:00.000Z","value":43.166666666666664},{"name":"2002-03-06T00:00:00.000Z","value":43},{"name":"2002-03-16T00:00:00.000Z","value":42.833333333333336},{"name":"2002-03-26T00:00:00.000Z","value":42.666666666666664},{"name":"2002-04-06T00:00:00.000Z","value":42.5},{"name":"2002-04-16T00:00:00.000Z","value":42.333333333333336},{"name":"2002-04-26T00:00:00.000Z","value":42.166666666666664},{"name":"2002-05-06T00:00:00.000Z","value":42},{"name":"2002-05-16T00:00:00.000Z","value":41.833333333333336},{"name":"2002-05-26T00:00:00.000Z","value":41.666666666666664},{"name":"2002-06-06T00:00:00.000Z","value":41.5},{"name":"2002-06-16T00:00:00.000Z","value":41.333333333333336},{"name":"2002-06-26T00:00:00.000Z","value":41.166666666666664},{"name":"2002-07-06T00:00:00.000Z","value":41},{"name":"2002-07-16T00:00:00.000Z","value":40.83333333333333},{"name":"2002-07-26T00:00:00.000Z","value":40.666666666666664},{"name":"2002-08-06T00:00:00.000Z","value":40.5},{"name":"2002-08-16T00:00:00.000Z","value":40.33333333333333},{"name":"2002-08-26T00:00:00.000Z","value":40.166666666666664},{"name":"2002-09-06T00:00:00.000Z","value":40},{"name":"2002-09-16T00:00:00.000Z","value":39.83333333333333},{"name":"2002-09-26T00:00:00.000Z","value":39.666666666666664},{"name":"2002-10-06T00:00:00.000Z","value":39.5},{"name":"2002-10-16T00:00:00.000Z","value":39.33333333333333},{"name":"2002-10-26T00:00:00.000Z","value":39.166666666666664},{"name":"2002-11-06T00:00:00.000Z","value":39},{"name":"2002-11-16T00:00:00.000Z","value":38.83333333333333},{"name":"2002-11-26T00:00:00.000Z","value":38.66666666666667},{"name":"2002-12-06T00:00:00.000Z","value":38.5},{"name":"2002-12-16T00:00:00.000Z","value":38.333333333333336},{"name":"2002-12-26T00:00:00.000Z","value":38.16666666666667},{"name":"2003-01-06T00:00:00.000Z","value":38},{"name":"2003-01-16T00:00:00.000Z","value":37.833333333333336},{"name":"2003-01-26T00:00:00.000Z","value":37.66666666666667},{"name":"2003-02-06T00:00:00.000Z","value":37.5},{"name":"2003-02-16T00:00:00.000Z","value":37.333333333333336},{"name":"2003-02-26T00:00:00.000Z","value":37.16666666666667},{"name":"2003-03-06T00:00:00.000Z","value":37},{"name":"2003-03-16T00:00:00.000Z","value":36.833333333333336},{"name":"2003-03-26T00:00:00.000Z","value":36.66666666666667},{"name":"2003-04-06T00:00:00.000Z","value":36.5},{"name":"2003-04-16T00:00:00.000Z","value":36.333333333333336},{"name":"2003-04-26T00:00:00.000Z","value":36.166666666666664},{"name":"2003-05-06T00:00:00.000Z","value":36},{"name":"2003-05-16T00:00:00.000Z","value":35.833333333333336},{"name":"2003-05-26T00:00:00.000Z","value":35.666666666666664},{"name":"2003-06-06T00:00:00.000Z","value":35.5},{"name":"2003-06-16T00:00:00.000Z","value":35.333333333333336},{"name":"2003-06-26T00:00:00.000Z","value":35.166666666666664},{"name":"2003-07-06T00:00:00.000Z","value":35},{"name":"2003-07-16T00:00:00.000Z","value":34.833333333333336},{"name":"2003-07-26T00:00:00.000Z","value":34.66666666666667},{"name":"2003-08-06T00:00:00.000Z","value":34.5},{"name":"2003-08-16T00:00:00.000Z","value":34.33333333333333},{"name":"2003-08-26T00:00:00.000Z","value":34.166666666666664},{"name":"2003-09-06T00:00:00.000Z","value":34},{"name":"2003-09-16T00:00:00.000Z","value":33.833333333333336},{"name":"2003-09-26T00:00:00.000Z","value":33.66666666666667},{"name":"2003-10-06T00:00:00.000Z","value":33.5},{"name":"2003-10-16T00:00:00.000Z","value":33.33333333333333},{"name":"2003-10-26T00:00:00.000Z","value":33.16666666666667},{"name":"2003-11-06T00:00:00.000Z","value":33},{"name":"2003-11-16T00:00:00.000Z","value":32.833333333333336},{"name":"2003-11-26T00:00:00.000Z","value":32.66666666666667},{"name":"2003-12-06T00:00:00.000Z","value":32.5},{"name":"2003-12-16T00:00:00.000Z","value":32.33333333333333},{"name":"2003-12-26T00:00:00.000Z","value":32.16666666666667},{"name":"2004-01-06T00:00:00.000Z","value":32},{"name":"2004-01-16T00:00:00.000Z","value":31.833333333333336},{"name":"2004-01-26T00:00:00.000Z","value":31.666666666666664},{"name":"2004-02-06T00:00:00.000Z","value":31.5},{"name":"2004-02-16T00:00:00.000Z","value":31.333333333333332},{"name":"2004-02-26T00:00:00.000Z","value":31.166666666666668},{"name":"2004-03-06T00:00:00.000Z","value":31},{"name":"2004-03-16T00:00:00.000Z","value":30.833333333333336},{"name":"2004-03-26T00:00:00.000Z","value":30.666666666666664},{"name":"2004-04-06T00:00:00.000Z","value":30.5},{"name":"2004-04-16T00:00:00.000Z","value":30.333333333333332},{"name":"2004-04-26T00:00:00.000Z","value":30.166666666666668},{"name":"2004-05-06T00:00:00.000Z","value":30},{"name":"2004-05-16T00:00:00.000Z","value":29.833333333333332},{"name":"2004-05-26T00:00:00.000Z","value":29.666666666666664},{"name":"2004-06-06T00:00:00.000Z","value":29.5},{"name":"2004-06-16T00:00:00.000Z","value":29.333333333333332},{"name":"2004-06-26T00:00:00.000Z","value":29.166666666666668},{"name":"2004-07-06T00:00:00.000Z","value":29},{"name":"2004-07-16T00:00:00.000Z","value":28.833333333333332},{"name":"2004-07-26T00:00:00.000Z","value":28.666666666666664},{"name":"2004-08-06T00:00:00.000Z","value":28.5},{"name":"2004-08-16T00:00:00.000Z","value":28.333333333333332},{"name":"2004-08-26T00:00:00.000Z","value":28.166666666666668},{"name":"2004-09-06T00:00:00.000Z","value":28},{"name":"2004-09-16T00:00:00.000Z","value":27.833333333333332},{"name":"2004-09-26T00:00:00.000Z","value":27.666666666666664},{"name":"2004-10-06T00:00:00.000Z","value":27.5},{"name":"2004-10-16T00:00:00.000Z","value":27.333333333333336},{"name":"2004-10-26T00:00:00.000Z","value":27.166666666666668},{"name":"2004-11-06T00:00:00.000Z","value":27},{"name":"2004-11-16T00:00:00.000Z","value":26.833333333333332},{"name":"2004-11-26T00:00:00.000Z","value":26.666666666666668},{"name":"2004-12-06T00:00:00.000Z","value":26.5},{"name":"2004-12-16T00:00:00.000Z","value":26.333333333333336},{"name":"2004-12-26T00:00:00.000Z","value":26.166666666666668},{"name":"2005-01-06T00:00:00.000Z","value":26},{"name":"2005-01-16T00:00:00.000Z","value":25.833333333333332},{"name":"2005-01-26T00:00:00.000Z","value":25.666666666666668},{"name":"2005-02-06T00:00:00.000Z","value":25.5},{"name":"2005-02-16T00:00:00.000Z","value":25.333333333333336},{"name":"2005-02-26T00:00:00.000Z","value":25.166666666666668},{"name":"2005-03-06T00:00:00.000Z","value":25},{"name":"2005-03-16T00:00:00.000Z","value":24.833333333333332},{"name":"2005-03-26T00:00:00.000Z","value":24.666666666666668},{"name":"2005-04-06T00:00:00.000Z","value":24.5},{"name":"2005-04-16T00:00:00.000Z","value":24.333333333333336},{"name":"2005-04-26T00:00:00.000Z","value":24.166666666666664},{"name":"2005-05-06T00:00:00.000Z","value":24},{"name":"2005-05-16T00:00:00.000Z","value":23.833333333333332},{"name":"2005-05-26T00:00:00.000Z","value":23.666666666666668},{"name":"2005-06-06T00:00:00.000Z","value":23.5},{"name":"2005-06-16T00:00:00.000Z","value":23.333333333333336},{"name":"2005-06-26T00:00:00.000Z","value":23.166666666666664},{"name":"2005-07-06T00:00:00.000Z","value":23},{"name":"2005-07-16T00:00:00.000Z","value":22.833333333333332},{"name":"2005-07-26T00:00:00.000Z","value":22.666666666666668},{"name":"2005-08-06T00:00:00.000Z","value":22.5},{"name":"2005-08-16T00:00:00.000Z","value":22.333333333333332},{"name":"2005-08-26T00:00:00.000Z","value":22.166666666666664},{"name":"2005-09-06T00:00:00.000Z","value":22},{"name":"2005-09-16T00:00:00.000Z","value":21.833333333333332},{"name":"2005-09-26T00:00:00.000Z","value":21.666666666666668},{"name":"2005-10-06T00:00:00.000Z","value":21.5},{"name":"2005-10-16T00:00:00.000Z","value":21.333333333333332},{"name":"2005-10-26T00:00:00.000Z","value":21.166666666666664},{"name":"2005-11-06T00:00:00.000Z","value":21},{"name":"2005-11-16T00:00:00.000Z","value":20.833333333333332},{"name":"2005-11-26T00:00:00.000Z","value":20.666666666666668},{"name":"2005-12-06T00:00:00.000Z","value":20.5},{"name":"2005-12-16T00:00:00.000Z","value":20.333333333333332},{"name":"2005-12-26T00:00:00.000Z","value":20.166666666666664}]},{"name":"Sample 3","series":[{"name":"2001-01-06T00:00:00.000Z","value":50},{"name":"2001-01-16T00:00:00.000Z","value":50.166666666666664},{"name":"2001-01-26T00:00:00.000Z","value":50.333333333333336},{"name":"2001-02-06T00:00:00.000Z","value":50.5},{"name":"2001-02-16T00:00:00.000Z","value":50.666666666666664},{"name":"2001-02-26T00:00:00.000Z","value":50.833333333333336},{"name":"2001-03-06T00:00:00.000Z","value":51},{"name":"2001-03-16T00:00:00.000Z","value":51.166666666666664},{"name":"2001-03-26T00:00:00.000Z","value":51.333333333333336},{"name":"2001-04-06T00:00:00.000Z","value":51.5},{"name":"2001-04-16T00:00:00.000Z","value":51.666666666666664},{"name":"2001-04-26T00:00:00.000Z","value":51.833333333333336},{"name":"2001-05-06T00:00:00.000Z","value":52},{"name":"2001-05-16T00:00:00.000Z","value":52.166666666666664},{"name":"2001-05-26T00:00:00.000Z","value":52.333333333333336},{"name":"2001-06-06T00:00:00.000Z","value":52.5},{"name":"2001-06-16T00:00:00.000Z","value":52.666666666666664},{"name":"2001-06-26T00:00:00.000Z","value":52.833333333333336},{"name":"2001-07-06T00:00:00.000Z","value":53},{"name":"2001-07-16T00:00:00.000Z","value":53.166666666666664},{"name":"2001-07-26T00:00:00.000Z","value":53.333333333333336},{"name":"2001-08-06T00:00:00.000Z","value":53.5},{"name":"2001-08-16T00:00:00.000Z","value":53.666666666666664},{"name":"2001-08-26T00:00:00.000Z","value":53.833333333333336},{"name":"2001-09-06T00:00:00.000Z","value":54},{"name":"2001-09-16T00:00:00.000Z","value":54.166666666666664},{"name":"2001-09-26T00:00:00.000Z","value":54.333333333333336},{"name":"2001-10-06T00:00:00.000Z","value":54.5},{"name":"2001-10-16T00:00:00.000Z","value":54.666666666666664},{"name":"2001-10-26T00:00:00.000Z","value":54.833333333333336},{"name":"2001-11-06T00:00:00.000Z","value":55},{"name":"2001-11-16T00:00:00.000Z","value":55.166666666666664},{"name":"2001-11-26T00:00:00.000Z","value":55.333333333333336},{"name":"2001-12-06T00:00:00.000Z","value":55.5},{"name":"2001-12-16T00:00:00.000Z","value":55.666666666666664},{"name":"2001-12-26T00:00:00.000Z","value":55.833333333333336},{"name":"2002-01-06T00:00:00.000Z","value":56},{"name":"2002-01-16T00:00:00.000Z","value":56.166666666666664},{"name":"2002-01-26T00:00:00.000Z","value":56.333333333333336},{"name":"2002-02-06T00:00:00.000Z","value":56.5},{"name":"2002-02-16T00:00:00.000Z","value":56.666666666666664},{"name":"2002-02-26T00:00:00.000Z","value":56.833333333333336},{"name":"2002-03-06T00:00:00.000Z","value":57},{"name":"2002-03-16T00:00:00.000Z","value":57.166666666666664},{"name":"2002-03-26T00:00:00.000Z","value":57.333333333333336},{"name":"2002-04-06T00:00:00.000Z","value":57.5},{"name":"2002-04-16T00:00:00.000Z","value":57.666666666666664},{"name":"2002-04-26T00:00:00.000Z","value":57.833333333333336},{"name":"2002-05-06T00:00:00.000Z","value":58},{"name":"2002-05-16T00:00:00.000Z","value":58.166666666666664},{"name":"2002-05-26T00:00:00.000Z","value":58.333333333333336},{"name":"2002-06-06T00:00:00.000Z","value":58.5},{"name":"2002-06-16T00:00:00.000Z","value":58.666666666666664},{"name":"2002-06-26T00:00:00.000Z","value":58.833333333333336},{"name":"2002-07-06T00:00:00.000Z","value":59},{"name":"2002-07-16T00:00:00.000Z","value":59.16666666666667},{"name":"2002-07-26T00:00:00.000Z","value":59.333333333333336},{"name":"2002-08-06T00:00:00.000Z","value":59.5},{"name":"2002-08-16T00:00:00.000Z","value":59.66666666666667},{"name":"2002-08-26T00:00:00.000Z","value":59.833333333333336},{"name":"2002-09-06T00:00:00.000Z","value":60},{"name":"2002-09-16T00:00:00.000Z","value":60.16666666666667},{"name":"2002-09-26T00:00:00.000Z","value":60.333333333333336},{"name":"2002-10-06T00:00:00.000Z","value":60.5},{"name":"2002-10-16T00:00:00.000Z","value":60.66666666666667},{"name":"2002-10-26T00:00:00.000Z","value":60.833333333333336},{"name":"2002-11-06T00:00:00.000Z","value":61},{"name":"2002-11-16T00:00:00.000Z","value":61.16666666666667},{"name":"2002-11-26T00:00:00.000Z","value":61.33333333333333},{"name":"2002-12-06T00:00:00.000Z","value":61.5},{"name":"2002-12-16T00:00:00.000Z","value":61.666666666666664},{"name":"2002-12-26T00:00:00.000Z","value":61.83333333333333},{"name":"2003-01-06T00:00:00.000Z","value":62},{"name":"2003-01-16T00:00:00.000Z","value":62.166666666666664},{"name":"2003-01-26T00:00:00.000Z","value":62.33333333333333},{"name":"2003-02-06T00:00:00.000Z","value":62.5},{"name":"2003-02-16T00:00:00.000Z","value":62.666666666666664},{"name":"2003-02-26T00:00:00.000Z","value":62.83333333333333},{"name":"2003-03-06T00:00:00.000Z","value":63},{"name":"2003-03-16T00:00:00.000Z","value":63.166666666666664},{"name":"2003-03-26T00:00:00.000Z","value":63.33333333333333},{"name":"2003-04-06T00:00:00.000Z","value":63.5},{"name":"2003-04-16T00:00:00.000Z","value":63.666666666666664},{"name":"2003-04-26T00:00:00.000Z","value":63.833333333333336},{"name":"2003-05-06T00:00:00.000Z","value":64},{"name":"2003-05-16T00:00:00.000Z","value":64.16666666666667},{"name":"2003-05-26T00:00:00.000Z","value":64.33333333333333},{"name":"2003-06-06T00:00:00.000Z","value":64.5},{"name":"2003-06-16T00:00:00.000Z","value":64.66666666666667},{"name":"2003-06-26T00:00:00.000Z","value":64.83333333333333},{"name":"2003-07-06T00:00:00.000Z","value":65},{"name":"2003-07-16T00:00:00.000Z","value":64.83333333333334},{"name":"2003-07-26T00:00:00.000Z","value":64.66666666666667},{"name":"2003-08-06T00:00:00.000Z","value":64.5},{"name":"2003-08-16T00:00:00.000Z","value":64.33333333333333},{"name":"2003-08-26T00:00:00.000Z","value":64.16666666666666},{"name":"2003-09-06T00:00:00.000Z","value":64},{"name":"2003-09-16T00:00:00.000Z","value":63.833333333333336},{"name":"2003-09-26T00:00:00.000Z","value":63.66666666666667},{"name":"2003-10-06T00:00:00.000Z","value":63.5},{"name":"2003-10-16T00:00:00.000Z","value":63.33333333333333},{"name":"2003-10-26T00:00:00.000Z","value":63.16666666666667},{"name":"2003-11-06T00:00:00.000Z","value":63},{"name":"2003-11-16T00:00:00.000Z","value":62.833333333333336},{"name":"2003-11-26T00:00:00.000Z","value":62.66666666666667},{"name":"2003-12-06T00:00:00.000Z","value":62.5},{"name":"2003-12-16T00:00:00.000Z","value":62.33333333333333},{"name":"2003-12-26T00:00:00.000Z","value":62.16666666666667},{"name":"2004-01-06T00:00:00.000Z","value":62},{"name":"2004-01-16T00:00:00.000Z","value":61.833333333333336},{"name":"2004-01-26T00:00:00.000Z","value":61.666666666666664},{"name":"2004-02-06T00:00:00.000Z","value":61.5},{"name":"2004-02-16T00:00:00.000Z","value":61.33333333333333},{"name":"2004-02-26T00:00:00.000Z","value":61.16666666666667},{"name":"2004-03-06T00:00:00.000Z","value":61},{"name":"2004-03-16T00:00:00.000Z","value":60.833333333333336},{"name":"2004-03-26T00:00:00.000Z","value":60.666666666666664},{"name":"2004-04-06T00:00:00.000Z","value":60.5},{"name":"2004-04-16T00:00:00.000Z","value":60.33333333333333},{"name":"2004-04-26T00:00:00.000Z","value":60.16666666666667},{"name":"2004-05-06T00:00:00.000Z","value":60},{"name":"2004-05-16T00:00:00.000Z","value":59.83333333333333},{"name":"2004-05-26T00:00:00.000Z","value":59.666666666666664},{"name":"2004-06-06T00:00:00.000Z","value":59.5},{"name":"2004-06-16T00:00:00.000Z","value":59.33333333333333},{"name":"2004-06-26T00:00:00.000Z","value":59.16666666666667},{"name":"2004-07-06T00:00:00.000Z","value":59},{"name":"2004-07-16T00:00:00.000Z","value":58.83333333333333},{"name":"2004-07-26T00:00:00.000Z","value":58.666666666666664},{"name":"2004-08-06T00:00:00.000Z","value":58.5},{"name":"2004-08-16T00:00:00.000Z","value":58.33333333333333},{"name":"2004-08-26T00:00:00.000Z","value":58.16666666666667},{"name":"2004-09-06T00:00:00.000Z","value":58},{"name":"2004-09-16T00:00:00.000Z","value":57.83333333333333},{"name":"2004-09-26T00:00:00.000Z","value":57.666666666666664},{"name":"2004-10-06T00:00:00.000Z","value":57.5},{"name":"2004-10-16T00:00:00.000Z","value":57.333333333333336},{"name":"2004-10-26T00:00:00.000Z","value":57.16666666666667},{"name":"2004-11-06T00:00:00.000Z","value":57},{"name":"2004-11-16T00:00:00.000Z","value":56.83333333333333},{"name":"2004-11-26T00:00:00.000Z","value":56.66666666666667},{"name":"2004-12-06T00:00:00.000Z","value":56.5},{"name":"2004-12-16T00:00:00.000Z","value":56.333333333333336},{"name":"2004-12-26T00:00:00.000Z","value":56.16666666666667},{"name":"2005-01-06T00:00:00.000Z","value":56},{"name":"2005-01-16T00:00:00.000Z","value":55.83333333333333},{"name":"2005-01-26T00:00:00.000Z","value":55.66666666666667},{"name":"2005-02-06T00:00:00.000Z","value":55.5},{"name":"2005-02-16T00:00:00.000Z","value":55.333333333333336},{"name":"2005-02-26T00:00:00.000Z","value":55.16666666666667},{"name":"2005-03-06T00:00:00.000Z","value":55},{"name":"2005-03-16T00:00:00.000Z","value":54.83333333333333},{"name":"2005-03-26T00:00:00.000Z","value":54.66666666666667},{"name":"2005-04-06T00:00:00.000Z","value":54.5},{"name":"2005-04-16T00:00:00.000Z","value":54.333333333333336},{"name":"2005-04-26T00:00:00.000Z","value":54.166666666666664},{"name":"2005-05-06T00:00:00.000Z","value":54},{"name":"2005-05-16T00:00:00.000Z","value":53.83333333333333},{"name":"2005-05-26T00:00:00.000Z","value":53.66666666666667},{"name":"2005-06-06T00:00:00.000Z","value":53.5},{"name":"2005-06-16T00:00:00.000Z","value":53.333333333333336},{"name":"2005-06-26T00:00:00.000Z","value":53.166666666666664},{"name":"2005-07-06T00:00:00.000Z","value":53},{"name":"2005-07-16T00:00:00.000Z","value":52.83333333333333},{"name":"2005-07-26T00:00:00.000Z","value":52.66666666666667},{"name":"2005-08-06T00:00:00.000Z","value":52.5},{"name":"2005-08-16T00:00:00.000Z","value":52.33333333333333},{"name":"2005-08-26T00:00:00.000Z","value":52.166666666666664},{"name":"2005-09-06T00:00:00.000Z","value":52},{"name":"2005-09-16T00:00:00.000Z","value":51.83333333333333},{"name":"2005-09-26T00:00:00.000Z","value":51.66666666666667},{"name":"2005-10-06T00:00:00.000Z","value":51.5},{"name":"2005-10-16T00:00:00.000Z","value":51.33333333333333},{"name":"2005-10-26T00:00:00.000Z","value":51.166666666666664},{"name":"2005-11-06T00:00:00.000Z","value":51},{"name":"2005-11-16T00:00:00.000Z","value":50.83333333333333},{"name":"2005-11-26T00:00:00.000Z","value":50.66666666666667},{"name":"2005-12-06T00:00:00.000Z","value":50.5},{"name":"2005-12-16T00:00:00.000Z","value":50.33333333333333},{"name":"2005-12-26T00:00:00.000Z","value":50.166666666666664}]},{"name":"Sample 4","series":[{"name":"2001-01-06T00:00:00.000Z","value":50},{"name":"2001-01-16T00:00:00.000Z","value":49.833333333333336},{"name":"2001-01-26T00:00:00.000Z","value":49.666666666666664},{"name":"2001-02-06T00:00:00.000Z","value":49.5},{"name":"2001-02-16T00:00:00.000Z","value":49.333333333333336},{"name":"2001-02-26T00:00:00.000Z","value":49.166666666666664},{"name":"2001-03-06T00:00:00.000Z","value":49},{"name":"2001-03-16T00:00:00.000Z","value":48.833333333333336},{"name":"2001-03-26T00:00:00.000Z","value":48.666666666666664},{"name":"2001-04-06T00:00:00.000Z","value":48.5},{"name":"2001-04-16T00:00:00.000Z","value":48.333333333333336},{"name":"2001-04-26T00:00:00.000Z","value":48.166666666666664},{"name":"2001-05-06T00:00:00.000Z","value":48},{"name":"2001-05-16T00:00:00.000Z","value":47.833333333333336},{"name":"2001-05-26T00:00:00.000Z","value":47.666666666666664},{"name":"2001-06-06T00:00:00.000Z","value":47.5},{"name":"2001-06-16T00:00:00.000Z","value":47.333333333333336},{"name":"2001-06-26T00:00:00.000Z","value":47.166666666666664},{"name":"2001-07-06T00:00:00.000Z","value":47},{"name":"2001-07-16T00:00:00.000Z","value":46.833333333333336},{"name":"2001-07-26T00:00:00.000Z","value":46.666666666666664},{"name":"2001-08-06T00:00:00.000Z","value":46.5},{"name":"2001-08-16T00:00:00.000Z","value":46.333333333333336},{"name":"2001-08-26T00:00:00.000Z","value":46.166666666666664},{"name":"2001-09-06T00:00:00.000Z","value":46},{"name":"2001-09-16T00:00:00.000Z","value":45.833333333333336},{"name":"2001-09-26T00:00:00.000Z","value":45.666666666666664},{"name":"2001-10-06T00:00:00.000Z","value":45.5},{"name":"2001-10-16T00:00:00.000Z","value":45.333333333333336},{"name":"2001-10-26T00:00:00.000Z","value":45.166666666666664},{"name":"2001-11-06T00:00:00.000Z","value":45},{"name":"2001-11-16T00:00:00.000Z","value":44.833333333333336},{"name":"2001-11-26T00:00:00.000Z","value":44.666666666666664},{"name":"2001-12-06T00:00:00.000Z","value":44.5},{"name":"2001-12-16T00:00:00.000Z","value":44.333333333333336},{"name":"2001-12-26T00:00:00.000Z","value":44.166666666666664},{"name":"2002-01-06T00:00:00.000Z","value":44},{"name":"2002-01-16T00:00:00.000Z","value":43.833333333333336},{"name":"2002-01-26T00:00:00.000Z","value":43.666666666666664},{"name":"2002-02-06T00:00:00.000Z","value":43.5},{"name":"2002-02-16T00:00:00.000Z","value":43.333333333333336},{"name":"2002-02-26T00:00:00.000Z","value":43.166666666666664},{"name":"2002-03-06T00:00:00.000Z","value":43},{"name":"2002-03-16T00:00:00.000Z","value":42.833333333333336},{"name":"2002-03-26T00:00:00.000Z","value":42.666666666666664},{"name":"2002-04-06T00:00:00.000Z","value":42.5},{"name":"2002-04-16T00:00:00.000Z","value":42.333333333333336},{"name":"2002-04-26T00:00:00.000Z","value":42.166666666666664},{"name":"2002-05-06T00:00:00.000Z","value":42},{"name":"2002-05-16T00:00:00.000Z","value":41.833333333333336},{"name":"2002-05-26T00:00:00.000Z","value":41.666666666666664},{"name":"2002-06-06T00:00:00.000Z","value":41.5},{"name":"2002-06-16T00:00:00.000Z","value":41.333333333333336},{"name":"2002-06-26T00:00:00.000Z","value":41.166666666666664},{"name":"2002-07-06T00:00:00.000Z","value":41},{"name":"2002-07-16T00:00:00.000Z","value":40.83333333333333},{"name":"2002-07-26T00:00:00.000Z","value":40.666666666666664},{"name":"2002-08-06T00:00:00.000Z","value":40.5},{"name":"2002-08-16T00:00:00.000Z","value":40.33333333333333},{"name":"2002-08-26T00:00:00.000Z","value":40.166666666666664},{"name":"2002-09-06T00:00:00.000Z","value":40},{"name":"2002-09-16T00:00:00.000Z","value":39.83333333333333},{"name":"2002-09-26T00:00:00.000Z","value":39.666666666666664},{"name":"2002-10-06T00:00:00.000Z","value":39.5},{"name":"2002-10-16T00:00:00.000Z","value":39.33333333333333},{"name":"2002-10-26T00:00:00.000Z","value":39.166666666666664},{"name":"2002-11-06T00:00:00.000Z","value":39},{"name":"2002-11-16T00:00:00.000Z","value":38.83333333333333},{"name":"2002-11-26T00:00:00.000Z","value":38.66666666666667},{"name":"2002-12-06T00:00:00.000Z","value":38.5},{"name":"2002-12-16T00:00:00.000Z","value":38.333333333333336},{"name":"2002-12-26T00:00:00.000Z","value":38.16666666666667},{"name":"2003-01-06T00:00:00.000Z","value":38},{"name":"2003-01-16T00:00:00.000Z","value":37.833333333333336},{"name":"2003-01-26T00:00:00.000Z","value":37.66666666666667},{"name":"2003-02-06T00:00:00.000Z","value":37.5},{"name":"2003-02-16T00:00:00.000Z","value":37.333333333333336},{"name":"2003-02-26T00:00:00.000Z","value":37.16666666666667},{"name":"2003-03-06T00:00:00.000Z","value":37},{"name":"2003-03-16T00:00:00.000Z","value":36.833333333333336},{"name":"2003-03-26T00:00:00.000Z","value":36.66666666666667},{"name":"2003-04-06T00:00:00.000Z","value":36.5},{"name":"2003-04-16T00:00:00.000Z","value":36.333333333333336},{"name":"2003-04-26T00:00:00.000Z","value":36.166666666666664},{"name":"2003-05-06T00:00:00.000Z","value":36},{"name":"2003-05-16T00:00:00.000Z","value":35.833333333333336},{"name":"2003-05-26T00:00:00.000Z","value":35.666666666666664},{"name":"2003-06-06T00:00:00.000Z","value":35.5},{"name":"2003-06-16T00:00:00.000Z","value":35.333333333333336},{"name":"2003-06-26T00:00:00.000Z","value":35.166666666666664},{"name":"2003-07-06T00:00:00.000Z","value":35},{"name":"2003-07-16T00:00:00.000Z","value":35.16666666666667},{"name":"2003-07-26T00:00:00.000Z","value":35.33333333333333},{"name":"2003-08-06T00:00:00.000Z","value":35.5},{"name":"2003-08-16T00:00:00.000Z","value":35.66666666666667},{"name":"2003-08-26T00:00:00.000Z","value":35.83333333333333},{"name":"2003-09-06T00:00:00.000Z","value":36},{"name":"2003-09-16T00:00:00.000Z","value":36.16666666666666},{"name":"2003-09-26T00:00:00.000Z","value":36.33333333333333},{"name":"2003-10-06T00:00:00.000Z","value":36.5},{"name":"2003-10-16T00:00:00.000Z","value":36.66666666666667},{"name":"2003-10-26T00:00:00.000Z","value":36.83333333333333},{"name":"2003-11-06T00:00:00.000Z","value":37},{"name":"2003-11-16T00:00:00.000Z","value":37.16666666666666},{"name":"2003-11-26T00:00:00.000Z","value":37.33333333333333},{"name":"2003-12-06T00:00:00.000Z","value":37.5},{"name":"2003-12-16T00:00:00.000Z","value":37.66666666666667},{"name":"2003-12-26T00:00:00.000Z","value":37.83333333333333},{"name":"2004-01-06T00:00:00.000Z","value":38},{"name":"2004-01-16T00:00:00.000Z","value":38.16666666666666},{"name":"2004-01-26T00:00:00.000Z","value":38.33333333333334},{"name":"2004-02-06T00:00:00.000Z","value":38.5},{"name":"2004-02-16T00:00:00.000Z","value":38.66666666666667},{"name":"2004-02-26T00:00:00.000Z","value":38.83333333333333},{"name":"2004-03-06T00:00:00.000Z","value":39},{"name":"2004-03-16T00:00:00.000Z","value":39.16666666666666},{"name":"2004-03-26T00:00:00.000Z","value":39.33333333333334},{"name":"2004-04-06T00:00:00.000Z","value":39.5},{"name":"2004-04-16T00:00:00.000Z","value":39.66666666666667},{"name":"2004-04-26T00:00:00.000Z","value":39.83333333333333},{"name":"2004-05-06T00:00:00.000Z","value":40},{"name":"2004-05-16T00:00:00.000Z","value":40.16666666666667},{"name":"2004-05-26T00:00:00.000Z","value":40.33333333333334},{"name":"2004-06-06T00:00:00.000Z","value":40.5},{"name":"2004-06-16T00:00:00.000Z","value":40.66666666666667},{"name":"2004-06-26T00:00:00.000Z","value":40.83333333333333},{"name":"2004-07-06T00:00:00.000Z","value":41},{"name":"2004-07-16T00:00:00.000Z","value":41.16666666666667},{"name":"2004-07-26T00:00:00.000Z","value":41.33333333333334},{"name":"2004-08-06T00:00:00.000Z","value":41.5},{"name":"2004-08-16T00:00:00.000Z","value":41.66666666666667},{"name":"2004-08-26T00:00:00.000Z","value":41.83333333333333},{"name":"2004-09-06T00:00:00.000Z","value":42},{"name":"2004-09-16T00:00:00.000Z","value":42.16666666666667},{"name":"2004-09-26T00:00:00.000Z","value":42.33333333333334},{"name":"2004-10-06T00:00:00.000Z","value":42.5},{"name":"2004-10-16T00:00:00.000Z","value":42.66666666666666},{"name":"2004-10-26T00:00:00.000Z","value":42.83333333333333},{"name":"2004-11-06T00:00:00.000Z","value":43},{"name":"2004-11-16T00:00:00.000Z","value":43.16666666666667},{"name":"2004-11-26T00:00:00.000Z","value":43.33333333333333},{"name":"2004-12-06T00:00:00.000Z","value":43.5},{"name":"2004-12-16T00:00:00.000Z","value":43.66666666666666},{"name":"2004-12-26T00:00:00.000Z","value":43.83333333333333},{"name":"2005-01-06T00:00:00.000Z","value":44},{"name":"2005-01-16T00:00:00.000Z","value":44.16666666666667},{"name":"2005-01-26T00:00:00.000Z","value":44.33333333333333},{"name":"2005-02-06T00:00:00.000Z","value":44.5},{"name":"2005-02-16T00:00:00.000Z","value":44.66666666666666},{"name":"2005-02-26T00:00:00.000Z","value":44.83333333333333},{"name":"2005-03-06T00:00:00.000Z","value":45},{"name":"2005-03-16T00:00:00.000Z","value":45.16666666666667},{"name":"2005-03-26T00:00:00.000Z","value":45.33333333333333},{"name":"2005-04-06T00:00:00.000Z","value":45.5},{"name":"2005-04-16T00:00:00.000Z","value":45.66666666666666},{"name":"2005-04-26T00:00:00.000Z","value":45.83333333333334},{"name":"2005-05-06T00:00:00.000Z","value":46},{"name":"2005-05-16T00:00:00.000Z","value":46.16666666666667},{"name":"2005-05-26T00:00:00.000Z","value":46.33333333333333},{"name":"2005-06-06T00:00:00.000Z","value":46.5},{"name":"2005-06-16T00:00:00.000Z","value":46.66666666666666},{"name":"2005-06-26T00:00:00.000Z","value":46.83333333333334},{"name":"2005-07-06T00:00:00.000Z","value":47},{"name":"2005-07-16T00:00:00.000Z","value":47.16666666666667},{"name":"2005-07-26T00:00:00.000Z","value":47.33333333333333},{"name":"2005-08-06T00:00:00.000Z","value":47.5},{"name":"2005-08-16T00:00:00.000Z","value":47.66666666666667},{"name":"2005-08-26T00:00:00.000Z","value":47.83333333333334},{"name":"2005-09-06T00:00:00.000Z","value":48},{"name":"2005-09-16T00:00:00.000Z","value":48.16666666666667},{"name":"2005-09-26T00:00:00.000Z","value":48.33333333333333},{"name":"2005-10-06T00:00:00.000Z","value":48.5},{"name":"2005-10-16T00:00:00.000Z","value":48.66666666666667},{"name":"2005-10-26T00:00:00.000Z","value":48.83333333333334},{"name":"2005-11-06T00:00:00.000Z","value":49},{"name":"2005-11-16T00:00:00.000Z","value":49.16666666666667},{"name":"2005-11-26T00:00:00.000Z","value":49.33333333333333},{"name":"2005-12-06T00:00:00.000Z","value":49.5},{"name":"2005-12-16T00:00:00.000Z","value":49.66666666666667},{"name":"2005-12-26T00:00:00.000Z","value":49.83333333333334}]},{"name":"Sample 5","series":[{"name":"2001-01-06T00:00:00.000Z","value":50},{"name":"2001-01-16T00:00:00.000Z","value":50.27777777777778},{"name":"2001-01-26T00:00:00.000Z","value":50.55555555555556},{"name":"2001-02-06T00:00:00.000Z","value":50.833333333333336},{"name":"2001-02-16T00:00:00.000Z","value":51.111111111111114},{"name":"2001-02-26T00:00:00.000Z","value":51.388888888888886},{"name":"2001-03-06T00:00:00.000Z","value":51.666666666666664},{"name":"2001-03-16T00:00:00.000Z","value":51.94444444444444},{"name":"2001-03-26T00:00:00.000Z","value":52.22222222222222},{"name":"2001-04-06T00:00:00.000Z","value":52.5},{"name":"2001-04-16T00:00:00.000Z","value":52.77777777777778},{"name":"2001-04-26T00:00:00.000Z","value":53.05555555555556},{"name":"2001-05-06T00:00:00.000Z","value":53.333333333333336},{"name":"2001-05-16T00:00:00.000Z","value":53.611111111111114},{"name":"2001-05-26T00:00:00.000Z","value":53.888888888888886},{"name":"2001-06-06T00:00:00.000Z","value":54.166666666666664},{"name":"2001-06-16T00:00:00.000Z","value":54.44444444444444},{"name":"2001-06-26T00:00:00.000Z","value":54.72222222222222},{"name":"2001-07-06T00:00:00.000Z","value":55},{"name":"2001-07-16T00:00:00.000Z","value":55.27777777777778},{"name":"2001-07-26T00:00:00.000Z","value":55.55555555555556},{"name":"2001-08-06T00:00:00.000Z","value":55.833333333333336},{"name":"2001-08-16T00:00:00.000Z","value":56.111111111111114},{"name":"2001-08-26T00:00:00.000Z","value":56.388888888888886},{"name":"2001-09-06T00:00:00.000Z","value":56.666666666666664},{"name":"2001-09-16T00:00:00.000Z","value":56.94444444444444},{"name":"2001-09-26T00:00:00.000Z","value":57.22222222222222},{"name":"2001-10-06T00:00:00.000Z","value":57.5},{"name":"2001-10-16T00:00:00.000Z","value":57.77777777777778},{"name":"2001-10-26T00:00:00.000Z","value":58.05555555555556},{"name":"2001-11-06T00:00:00.000Z","value":58.33333333333333},{"name":"2001-11-16T00:00:00.000Z","value":58.611111111111114},{"name":"2001-11-26T00:00:00.000Z","value":58.888888888888886},{"name":"2001-12-06T00:00:00.000Z","value":59.166666666666664},{"name":"2001-12-16T00:00:00.000Z","value":59.44444444444444},{"name":"2001-12-26T00:00:00.000Z","value":59.72222222222222},{"name":"2002-01-06T00:00:00.000Z","value":60},{"name":"2002-01-16T00:00:00.000Z","value":60.27777777777778},{"name":"2002-01-26T00:00:00.000Z","value":60.55555555555556},{"name":"2002-02-06T00:00:00.000Z","value":60.833333333333336},{"name":"2002-02-16T00:00:00.000Z","value":61.111111111111114},{"name":"2002-02-26T00:00:00.000Z","value":61.388888888888886},{"name":"2002-03-06T00:00:00.000Z","value":61.666666666666664},{"name":"2002-03-16T00:00:00.000Z","value":61.94444444444444},{"name":"2002-03-26T00:00:00.000Z","value":62.22222222222222},{"name":"2002-04-06T00:00:00.000Z","value":62.5},{"name":"2002-04-16T00:00:00.000Z","value":62.22222222222222},{"name":"2002-04-26T00:00:00.000Z","value":61.94444444444444},{"name":"2002-05-06T00:00:00.000Z","value":61.666666666666664},{"name":"2002-05-16T00:00:00.000Z","value":61.388888888888886},{"name":"2002-05-26T00:00:00.000Z","value":61.111111111111114},{"name":"2002-06-06T00:00:00.000Z","value":60.833333333333336},{"name":"2002-06-16T00:00:00.000Z","value":60.55555555555556},{"name":"2002-06-26T00:00:00.000Z","value":60.27777777777778},{"name":"2002-07-06T00:00:00.000Z","value":60},{"name":"2002-07-16T00:00:00.000Z","value":59.72222222222222},{"name":"2002-07-26T00:00:00.000Z","value":59.44444444444444},{"name":"2002-08-06T00:00:00.000Z","value":59.16666666666667},{"name":"2002-08-16T00:00:00.000Z","value":58.888888888888886},{"name":"2002-08-26T00:00:00.000Z","value":58.611111111111114},{"name":"2002-09-06T00:00:00.000Z","value":58.333333333333336},{"name":"2002-09-16T00:00:00.000Z","value":58.05555555555556},{"name":"2002-09-26T00:00:00.000Z","value":57.77777777777778},{"name":"2002-10-06T00:00:00.000Z","value":57.5},{"name":"2002-10-16T00:00:00.000Z","value":57.22222222222222},{"name":"2002-10-26T00:00:00.000Z","value":56.94444444444444},{"name":"2002-11-06T00:00:00.000Z","value":56.66666666666667},{"name":"2002-11-16T00:00:00.000Z","value":56.388888888888886},{"name":"2002-11-26T00:00:00.000Z","value":56.111111111111114},{"name":"2002-12-06T00:00:00.000Z","value":55.83333333333333},{"name":"2002-12-16T00:00:00.000Z","value":55.55555555555556},{"name":"2002-12-26T00:00:00.000Z","value":55.27777777777778},{"name":"2003-01-06T00:00:00.000Z","value":55},{"name":"2003-01-16T00:00:00.000Z","value":54.72222222222222},{"name":"2003-01-26T00:00:00.000Z","value":54.44444444444444},{"name":"2003-02-06T00:00:00.000Z","value":54.166666666666664},{"name":"2003-02-16T00:00:00.000Z","value":53.888888888888886},{"name":"2003-02-26T00:00:00.000Z","value":53.611111111111114},{"name":"2003-03-06T00:00:00.000Z","value":53.33333333333333},{"name":"2003-03-16T00:00:00.000Z","value":53.05555555555556},{"name":"2003-03-26T00:00:00.000Z","value":52.77777777777778},{"name":"2003-04-06T00:00:00.000Z","value":52.5},{"name":"2003-04-16T00:00:00.000Z","value":52.22222222222222},{"name":"2003-04-26T00:00:00.000Z","value":51.94444444444444},{"name":"2003-05-06T00:00:00.000Z","value":51.66666666666667},{"name":"2003-05-16T00:00:00.000Z","value":51.388888888888886},{"name":"2003-05-26T00:00:00.000Z","value":51.111111111111114},{"name":"2003-06-06T00:00:00.000Z","value":50.83333333333333},{"name":"2003-06-16T00:00:00.000Z","value":50.55555555555556},{"name":"2003-06-26T00:00:00.000Z","value":50.27777777777778},{"name":"2003-07-06T00:00:00.000Z","value":50},{"name":"2003-07-16T00:00:00.000Z","value":49.72222222222222},{"name":"2003-07-26T00:00:00.000Z","value":49.44444444444444},{"name":"2003-08-06T00:00:00.000Z","value":49.166666666666664},{"name":"2003-08-16T00:00:00.000Z","value":48.888888888888886},{"name":"2003-08-26T00:00:00.000Z","value":48.611111111111114},{"name":"2003-09-06T00:00:00.000Z","value":48.33333333333333},{"name":"2003-09-16T00:00:00.000Z","value":48.05555555555556},{"name":"2003-09-26T00:00:00.000Z","value":47.77777777777778},{"name":"2003-10-06T00:00:00.000Z","value":47.5},{"name":"2003-10-16T00:00:00.000Z","value":47.22222222222222},{"name":"2003-10-26T00:00:00.000Z","value":46.94444444444444},{"name":"2003-11-06T00:00:00.000Z","value":46.66666666666667},{"name":"2003-11-16T00:00:00.000Z","value":46.388888888888886},{"name":"2003-11-26T00:00:00.000Z","value":46.111111111111114},{"name":"2003-12-06T00:00:00.000Z","value":45.83333333333333},{"name":"2003-12-16T00:00:00.000Z","value":45.55555555555556},{"name":"2003-12-26T00:00:00.000Z","value":45.27777777777778},{"name":"2004-01-06T00:00:00.000Z","value":45},{"name":"2004-01-16T00:00:00.000Z","value":44.72222222222223},{"name":"2004-01-26T00:00:00.000Z","value":44.44444444444444},{"name":"2004-02-06T00:00:00.000Z","value":44.166666666666664},{"name":"2004-02-16T00:00:00.000Z","value":43.888888888888886},{"name":"2004-02-26T00:00:00.000Z","value":43.611111111111114},{"name":"2004-03-06T00:00:00.000Z","value":43.333333333333336},{"name":"2004-03-16T00:00:00.000Z","value":43.05555555555556},{"name":"2004-03-26T00:00:00.000Z","value":42.77777777777778},{"name":"2004-04-06T00:00:00.000Z","value":42.5},{"name":"2004-04-16T00:00:00.000Z","value":42.22222222222222},{"name":"2004-04-26T00:00:00.000Z","value":41.94444444444444},{"name":"2004-05-06T00:00:00.000Z","value":41.66666666666667},{"name":"2004-05-16T00:00:00.000Z","value":41.388888888888886},{"name":"2004-05-26T00:00:00.000Z","value":41.11111111111111},{"name":"2004-06-06T00:00:00.000Z","value":40.833333333333336},{"name":"2004-06-16T00:00:00.000Z","value":40.55555555555556},{"name":"2004-06-26T00:00:00.000Z","value":40.27777777777778},{"name":"2004-07-06T00:00:00.000Z","value":40},{"name":"2004-07-16T00:00:00.000Z","value":39.72222222222222},{"name":"2004-07-26T00:00:00.000Z","value":39.44444444444444},{"name":"2004-08-06T00:00:00.000Z","value":39.166666666666664},{"name":"2004-08-16T00:00:00.000Z","value":38.88888888888889},{"name":"2004-08-26T00:00:00.000Z","value":38.611111111111114},{"name":"2004-09-06T00:00:00.000Z","value":38.333333333333336},{"name":"2004-09-16T00:00:00.000Z","value":38.05555555555556},{"name":"2004-09-26T00:00:00.000Z","value":37.77777777777778},{"name":"2004-10-06T00:00:00.000Z","value":37.5},{"name":"2004-10-16T00:00:00.000Z","value":37.77777777777777},{"name":"2004-10-26T00:00:00.000Z","value":38.05555555555556},{"name":"2004-11-06T00:00:00.000Z","value":38.33333333333334},{"name":"2004-11-16T00:00:00.000Z","value":38.611111111111114},{"name":"2004-11-26T00:00:00.000Z","value":38.888888888888886},{"name":"2004-12-06T00:00:00.000Z","value":39.16666666666666},{"name":"2004-12-16T00:00:00.000Z","value":39.44444444444444},{"name":"2004-12-26T00:00:00.000Z","value":39.72222222222223},{"name":"2005-01-06T00:00:00.000Z","value":40},{"name":"2005-01-16T00:00:00.000Z","value":40.27777777777777},{"name":"2005-01-26T00:00:00.000Z","value":40.55555555555556},{"name":"2005-02-06T00:00:00.000Z","value":40.83333333333334},{"name":"2005-02-16T00:00:00.000Z","value":41.111111111111114},{"name":"2005-02-26T00:00:00.000Z","value":41.388888888888886},{"name":"2005-03-06T00:00:00.000Z","value":41.66666666666667},{"name":"2005-03-16T00:00:00.000Z","value":41.94444444444444},{"name":"2005-03-26T00:00:00.000Z","value":42.22222222222223},{"name":"2005-04-06T00:00:00.000Z","value":42.5},{"name":"2005-04-16T00:00:00.000Z","value":42.77777777777777},{"name":"2005-04-26T00:00:00.000Z","value":43.05555555555556},{"name":"2005-05-06T00:00:00.000Z","value":43.33333333333334},{"name":"2005-05-16T00:00:00.000Z","value":43.611111111111114},{"name":"2005-05-26T00:00:00.000Z","value":43.888888888888886},{"name":"2005-06-06T00:00:00.000Z","value":44.16666666666666},{"name":"2005-06-16T00:00:00.000Z","value":44.44444444444444},{"name":"2005-06-26T00:00:00.000Z","value":44.72222222222223},{"name":"2005-07-06T00:00:00.000Z","value":45},{"name":"2005-07-16T00:00:00.000Z","value":45.27777777777777},{"name":"2005-07-26T00:00:00.000Z","value":45.55555555555556},{"name":"2005-08-06T00:00:00.000Z","value":45.83333333333333},{"name":"2005-08-16T00:00:00.000Z","value":46.111111111111114},{"name":"2005-08-26T00:00:00.000Z","value":46.388888888888886},{"name":"2005-09-06T00:00:00.000Z","value":46.66666666666666},{"name":"2005-09-16T00:00:00.000Z","value":46.94444444444444},{"name":"2005-09-26T00:00:00.000Z","value":47.22222222222223},{"name":"2005-10-06T00:00:00.000Z","value":47.5},{"name":"2005-10-16T00:00:00.000Z","value":47.77777777777777},{"name":"2005-10-26T00:00:00.000Z","value":48.05555555555556},{"name":"2005-11-06T00:00:00.000Z","value":48.33333333333334},{"name":"2005-11-16T00:00:00.000Z","value":48.611111111111114},{"name":"2005-11-26T00:00:00.000Z","value":48.888888888888886},{"name":"2005-12-06T00:00:00.000Z","value":49.16666666666666},{"name":"2005-12-16T00:00:00.000Z","value":49.44444444444444},{"name":"2005-12-26T00:00:00.000Z","value":49.72222222222223}]},{"name":"Sample 6","series":[{"name":"2001-01-06T00:00:00.000Z","value":50},{"name":"2001-01-16T00:00:00.000Z","value":49.72222222222222},{"name":"2001-01-26T00:00:00.000Z","value":49.44444444444444},{"name":"2001-02-06T00:00:00.000Z","value":49.166666666666664},{"name":"2001-02-16T00:00:00.000Z","value":48.888888888888886},{"name":"2001-02-26T00:00:00.000Z","value":48.611111111111114},{"name":"2001-03-06T00:00:00.000Z","value":48.333333333333336},{"name":"2001-03-16T00:00:00.000Z","value":48.05555555555556},{"name":"2001-03-26T00:00:00.000Z","value":47.77777777777778},{"name":"2001-04-06T00:00:00.000Z","value":47.5},{"name":"2001-04-16T00:00:00.000Z","value":47.22222222222222},{"name":"2001-04-26T00:00:00.000Z","value":46.94444444444444},{"name":"2001-05-06T00:00:00.000Z","value":46.666666666666664},{"name":"2001-05-16T00:00:00.000Z","value":46.388888888888886},{"name":"2001-05-26T00:00:00.000Z","value":46.111111111111114},{"name":"2001-06-06T00:00:00.000Z","value":45.833333333333336},{"name":"2001-06-16T00:00:00.000Z","value":45.55555555555556},{"name":"2001-06-26T00:00:00.000Z","value":45.27777777777778},{"name":"2001-07-06T00:00:00.000Z","value":45},{"name":"2001-07-16T00:00:00.000Z","value":44.72222222222222},{"name":"2001-07-26T00:00:00.000Z","value":44.44444444444444},{"name":"2001-08-06T00:00:00.000Z","value":44.166666666666664},{"name":"2001-08-16T00:00:00.000Z","value":43.888888888888886},{"name":"2001-08-26T00:00:00.000Z","value":43.611111111111114},{"name":"2001-09-06T00:00:00.000Z","value":43.333333333333336},{"name":"2001-09-16T00:00:00.000Z","value":43.05555555555556},{"name":"2001-09-26T00:00:00.000Z","value":42.77777777777778},{"name":"2001-10-06T00:00:00.000Z","value":42.5},{"name":"2001-10-16T00:00:00.000Z","value":42.22222222222222},{"name":"2001-10-26T00:00:00.000Z","value":41.94444444444444},{"name":"2001-11-06T00:00:00.000Z","value":41.66666666666667},{"name":"2001-11-16T00:00:00.000Z","value":41.388888888888886},{"name":"2001-11-26T00:00:00.000Z","value":41.111111111111114},{"name":"2001-12-06T00:00:00.000Z","value":40.833333333333336},{"name":"2001-12-16T00:00:00.000Z","value":40.55555555555556},{"name":"2001-12-26T00:00:00.000Z","value":40.27777777777778},{"name":"2002-01-06T00:00:00.000Z","value":40},{"name":"2002-01-16T00:00:00.000Z","value":39.72222222222222},{"name":"2002-01-26T00:00:00.000Z","value":39.44444444444444},{"name":"2002-02-06T00:00:00.000Z","value":39.166666666666664},{"name":"2002-02-16T00:00:00.000Z","value":38.888888888888886},{"name":"2002-02-26T00:00:00.000Z","value":38.611111111111114},{"name":"2002-03-06T00:00:00.000Z","value":38.333333333333336},{"name":"2002-03-16T00:00:00.000Z","value":38.05555555555556},{"name":"2002-03-26T00:00:00.000Z","value":37.77777777777778},{"name":"2002-04-06T00:00:00.000Z","value":37.5},{"name":"2002-04-16T00:00:00.000Z","value":37.77777777777778},{"name":"2002-04-26T00:00:00.000Z","value":38.05555555555556},{"name":"2002-05-06T00:00:00.000Z","value":38.333333333333336},{"name":"2002-05-16T00:00:00.000Z","value":38.611111111111114},{"name":"2002-05-26T00:00:00.000Z","value":38.888888888888886},{"name":"2002-06-06T00:00:00.000Z","value":39.16666666666667},{"name":"2002-06-16T00:00:00.000Z","value":39.44444444444444},{"name":"2002-06-26T00:00:00.000Z","value":39.72222222222223},{"name":"2002-07-06T00:00:00.000Z","value":40},{"name":"2002-07-16T00:00:00.000Z","value":40.27777777777777},{"name":"2002-07-26T00:00:00.000Z","value":40.55555555555556},{"name":"2002-08-06T00:00:00.000Z","value":40.83333333333333},{"name":"2002-08-16T00:00:00.000Z","value":41.111111111111114},{"name":"2002-08-26T00:00:00.000Z","value":41.388888888888886},{"name":"2002-09-06T00:00:00.000Z","value":41.66666666666666},{"name":"2002-09-16T00:00:00.000Z","value":41.94444444444444},{"name":"2002-09-26T00:00:00.000Z","value":42.22222222222223},{"name":"2002-10-06T00:00:00.000Z","value":42.5},{"name":"2002-10-16T00:00:00.000Z","value":42.77777777777777},{"name":"2002-10-26T00:00:00.000Z","value":43.05555555555556},{"name":"2002-11-06T00:00:00.000Z","value":43.33333333333333},{"name":"2002-11-16T00:00:00.000Z","value":43.611111111111114},{"name":"2002-11-26T00:00:00.000Z","value":43.888888888888886},{"name":"2002-12-06T00:00:00.000Z","value":44.16666666666667},{"name":"2002-12-16T00:00:00.000Z","value":44.44444444444444},{"name":"2002-12-26T00:00:00.000Z","value":44.72222222222223},{"name":"2003-01-06T00:00:00.000Z","value":45},{"name":"2003-01-16T00:00:00.000Z","value":45.27777777777777},{"name":"2003-01-26T00:00:00.000Z","value":45.55555555555556},{"name":"2003-02-06T00:00:00.000Z","value":45.83333333333334},{"name":"2003-02-16T00:00:00.000Z","value":46.111111111111114},{"name":"2003-02-26T00:00:00.000Z","value":46.388888888888886},{"name":"2003-03-06T00:00:00.000Z","value":46.66666666666667},{"name":"2003-03-16T00:00:00.000Z","value":46.94444444444444},{"name":"2003-03-26T00:00:00.000Z","value":47.22222222222223},{"name":"2003-04-06T00:00:00.000Z","value":47.5},{"name":"2003-04-16T00:00:00.000Z","value":47.77777777777777},{"name":"2003-04-26T00:00:00.000Z","value":48.05555555555556},{"name":"2003-05-06T00:00:00.000Z","value":48.33333333333333},{"name":"2003-05-16T00:00:00.000Z","value":48.611111111111114},{"name":"2003-05-26T00:00:00.000Z","value":48.888888888888886},{"name":"2003-06-06T00:00:00.000Z","value":49.16666666666667},{"name":"2003-06-16T00:00:00.000Z","value":49.44444444444444},{"name":"2003-06-26T00:00:00.000Z","value":49.72222222222223},{"name":"2003-07-06T00:00:00.000Z","value":50},{"name":"2003-07-16T00:00:00.000Z","value":50.27777777777777},{"name":"2003-07-26T00:00:00.000Z","value":50.55555555555556},{"name":"2003-08-06T00:00:00.000Z","value":50.83333333333334},{"name":"2003-08-16T00:00:00.000Z","value":51.111111111111114},{"name":"2003-08-26T00:00:00.000Z","value":51.388888888888886},{"name":"2003-09-06T00:00:00.000Z","value":51.66666666666667},{"name":"2003-09-16T00:00:00.000Z","value":51.94444444444444},{"name":"2003-09-26T00:00:00.000Z","value":52.22222222222223},{"name":"2003-10-06T00:00:00.000Z","value":52.5},{"name":"2003-10-16T00:00:00.000Z","value":52.77777777777777},{"name":"2003-10-26T00:00:00.000Z","value":53.05555555555556},{"name":"2003-11-06T00:00:00.000Z","value":53.33333333333333},{"name":"2003-11-16T00:00:00.000Z","value":53.611111111111114},{"name":"2003-11-26T00:00:00.000Z","value":53.888888888888886},{"name":"2003-12-06T00:00:00.000Z","value":54.16666666666667},{"name":"2003-12-16T00:00:00.000Z","value":54.44444444444444},{"name":"2003-12-26T00:00:00.000Z","value":54.72222222222223},{"name":"2004-01-06T00:00:00.000Z","value":55},{"name":"2004-01-16T00:00:00.000Z","value":55.27777777777777},{"name":"2004-01-26T00:00:00.000Z","value":55.55555555555556},{"name":"2004-02-06T00:00:00.000Z","value":55.83333333333334},{"name":"2004-02-16T00:00:00.000Z","value":56.111111111111114},{"name":"2004-02-26T00:00:00.000Z","value":56.388888888888886},{"name":"2004-03-06T00:00:00.000Z","value":56.66666666666666},{"name":"2004-03-16T00:00:00.000Z","value":56.94444444444444},{"name":"2004-03-26T00:00:00.000Z","value":57.22222222222223},{"name":"2004-04-06T00:00:00.000Z","value":57.5},{"name":"2004-04-16T00:00:00.000Z","value":57.77777777777777},{"name":"2004-04-26T00:00:00.000Z","value":58.05555555555556},{"name":"2004-05-06T00:00:00.000Z","value":58.33333333333333},{"name":"2004-05-16T00:00:00.000Z","value":58.611111111111114},{"name":"2004-05-26T00:00:00.000Z","value":58.888888888888886},{"name":"2004-06-06T00:00:00.000Z","value":59.16666666666666},{"name":"2004-06-16T00:00:00.000Z","value":59.44444444444444},{"name":"2004-06-26T00:00:00.000Z","value":59.72222222222223},{"name":"2004-07-06T00:00:00.000Z","value":60},{"name":"2004-07-16T00:00:00.000Z","value":60.27777777777777},{"name":"2004-07-26T00:00:00.000Z","value":60.55555555555556},{"name":"2004-08-06T00:00:00.000Z","value":60.83333333333334},{"name":"2004-08-16T00:00:00.000Z","value":61.111111111111114},{"name":"2004-08-26T00:00:00.000Z","value":61.388888888888886},{"name":"2004-09-06T00:00:00.000Z","value":61.66666666666666},{"name":"2004-09-16T00:00:00.000Z","value":61.94444444444444},{"name":"2004-09-26T00:00:00.000Z","value":62.22222222222223},{"name":"2004-10-06T00:00:00.000Z","value":62.5},{"name":"2004-10-16T00:00:00.000Z","value":62.22222222222222},{"name":"2004-10-26T00:00:00.000Z","value":61.94444444444444},{"name":"2004-11-06T00:00:00.000Z","value":61.666666666666664},{"name":"2004-11-16T00:00:00.000Z","value":61.388888888888886},{"name":"2004-11-26T00:00:00.000Z","value":61.11111111111111},{"name":"2004-12-06T00:00:00.000Z","value":60.833333333333336},{"name":"2004-12-16T00:00:00.000Z","value":60.55555555555556},{"name":"2004-12-26T00:00:00.000Z","value":60.27777777777778},{"name":"2005-01-06T00:00:00.000Z","value":60},{"name":"2005-01-16T00:00:00.000Z","value":59.72222222222222},{"name":"2005-01-26T00:00:00.000Z","value":59.44444444444444},{"name":"2005-02-06T00:00:00.000Z","value":59.166666666666664},{"name":"2005-02-16T00:00:00.000Z","value":58.88888888888889},{"name":"2005-02-26T00:00:00.000Z","value":58.611111111111114},{"name":"2005-03-06T00:00:00.000Z","value":58.33333333333333},{"name":"2005-03-16T00:00:00.000Z","value":58.05555555555556},{"name":"2005-03-26T00:00:00.000Z","value":57.77777777777778},{"name":"2005-04-06T00:00:00.000Z","value":57.5},{"name":"2005-04-16T00:00:00.000Z","value":57.22222222222222},{"name":"2005-04-26T00:00:00.000Z","value":56.94444444444444},{"name":"2005-05-06T00:00:00.000Z","value":56.666666666666664},{"name":"2005-05-16T00:00:00.000Z","value":56.388888888888886},{"name":"2005-05-26T00:00:00.000Z","value":56.111111111111114},{"name":"2005-06-06T00:00:00.000Z","value":55.833333333333336},{"name":"2005-06-16T00:00:00.000Z","value":55.55555555555556},{"name":"2005-06-26T00:00:00.000Z","value":55.27777777777778},{"name":"2005-07-06T00:00:00.000Z","value":55},{"name":"2005-07-16T00:00:00.000Z","value":54.72222222222222},{"name":"2005-07-26T00:00:00.000Z","value":54.44444444444444},{"name":"2005-08-06T00:00:00.000Z","value":54.16666666666667},{"name":"2005-08-16T00:00:00.000Z","value":53.888888888888886},{"name":"2005-08-26T00:00:00.000Z","value":53.61111111111111},{"name":"2005-09-06T00:00:00.000Z","value":53.333333333333336},{"name":"2005-09-16T00:00:00.000Z","value":53.05555555555556},{"name":"2005-09-26T00:00:00.000Z","value":52.77777777777778},{"name":"2005-10-06T00:00:00.000Z","value":52.5},{"name":"2005-10-16T00:00:00.000Z","value":52.22222222222222},{"name":"2005-10-26T00:00:00.000Z","value":51.94444444444444},{"name":"2005-11-06T00:00:00.000Z","value":51.666666666666664},{"name":"2005-11-16T00:00:00.000Z","value":51.38888888888889},{"name":"2005-11-26T00:00:00.000Z","value":51.111111111111114},{"name":"2005-12-06T00:00:00.000Z","value":50.833333333333336},{"name":"2005-12-16T00:00:00.000Z","value":50.55555555555556},{"name":"2005-12-26T00:00:00.000Z","value":50.27777777777778}]}]';


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ }),

/***/ 7420:
/*!********************************************!*\
  !*** ./src/shared-class/InvestingDatum.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InvestingDatum": () => (/* binding */ InvestingDatum)
/* harmony export */ });
class InvestingDatum {
    constructor(tradeDate, price, shareCount, cumulativeShareCount, cumulativeDollarCost) {
        this.tradeDate = new Date(-8640000000000000);
        this.price = 0;
        this.shareCount = 0;
        this.cumulativeShareCount = 0;
        this.cumulativeDollarCost = 0;
        this.tradeDate = tradeDate;
        this.price = price;
        this.shareCount = shareCount;
        this.cumulativeShareCount = cumulativeShareCount;
        this.cumulativeDollarCost = cumulativeDollarCost;
    }
    get dollarCost() {
        return this.price * this.shareCount;
    }
    get currentValue() {
        return this.price * this.cumulativeShareCount;
    }
}


/***/ }),

/***/ 8417:
/*!*******************************************!*\
  !*** ./src/shared-class/NgxChartDatum.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NgxChartDatum": () => (/* binding */ NgxChartDatum)
/* harmony export */ });
class NgxChartDatum {
    constructor(name, series) {
        this.name = '';
        this.series = [];
        this.name = name;
        series.sort((a, b) => {
            if (a['name'] < b['name']) {
                return -1;
            }
            if (a['name'] > b['name']) {
                return 1;
            }
            return 0;
        });
        this.series = series;
    }
    static parseArr(strArr) {
        let rtn = JSON.parse(strArr);
        for (let item of rtn) {
            for (let i = 0; i < item.series.length; i++) {
                item.series[i].name = new Date(item.series[i].name);
            }
        }
        return rtn;
    }
}


/***/ }),

/***/ 5065:
/*!***********************************************!*\
  !*** ./src/shared-class/NgxChartSeriesRow.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NgxChartSeriesRow": () => (/* binding */ NgxChartSeriesRow)
/* harmony export */ });
class NgxChartSeriesRow {
    constructor(name, value) {
        this.name = name;
        this.value = value;
    }
    static getDateRange(arr) {
        let maxDate = new Date(-8640000000000000);
        let minDate = new Date(8640000000000000);
        arr.forEach(row => {
            let date = row.name;
            if (maxDate < date) {
                maxDate = date;
            }
            if (minDate > date) {
                minDate = date;
            }
        });
        return {
            maxDate: maxDate,
            minDate: minDate,
        };
    }
}


/***/ }),

/***/ 6134:
/*!***************************************!*\
  !*** ./src/shared-class/TradeInfo.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TradeInfo": () => (/* binding */ TradeInfo)
/* harmony export */ });
class TradeInfo {
    constructor(date, price) {
        this.date = date;
        this.price = price;
    }
}


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map