
import { animate, animateChild, group, query, state, style, transition, trigger } from '@angular/animations';
import { LinkInfo } from "./classes/LinkInfo";

import { InvestmentPageComponent } from './pages/investment-page/investment-page.component';
import { InvestmentVersusPageComponent } from './pages/investment-versus-page/investment-versus-page.component';
import { PageProjectsAndExamplesComponent } from './pages/page-projects-and-examples/page-projects-and-examples.component';
import { KellyCriterionPageComponent } from './pages/kelly-criterion-page/kelly-criterion-page.component';

export const LINK_INFOS: LinkInfo[] = [
  new LinkInfo("Investment", 'investment', InvestmentVersusPageComponent, [
    new LinkInfo("DCA versus VA", 'investment/versus', InvestmentVersusPageComponent), //Dollar Cost Averaging, Value Averaging
    new LinkInfo("Custom DCA versus VA", 'investment/custom', InvestmentPageComponent),
    new LinkInfo("Kelly Criterion", 'investment/kelly-criterion', KellyCriterionPageComponent),
  ]),
  new LinkInfo("Projects&Examples", 'projects-and-examples', PageProjectsAndExamplesComponent),
];


export const FADE_ANIMATION =
  trigger('routeAnimations', [
    transition('* <=> *', [
      style({ position: 'relative' }),
      group([
        query(':enter, :leave', [
          style({
            'grid-column-start': 1,
            'grid-row-start': 1,
            'transition': '1s',
          })
        ], { optional: true }),
      ]),
      query(':enter', [
        style({ opacity: 0, height: '30vh', overflow: 'hidden', })
      ], { optional: true }),
      query(':leave', [
        animate('300ms ease-out', style({ opacity: 0, height: '0px', }))
      ], { optional: true }),
      query(':enter', [
        animate('500ms ease-out', style({ opacity: 1, height: '*', }))
      ], { optional: true }),
    ]),
  ]);

export const MENU_BTN_ANIMATION =
  trigger(
    'menuBtnAnimation', [
    state('show', style({
      width: '40px',
      opacity: 1,
    })),
    state('hidden', style({
      width: '0px',
      opacity: 0,
    })),
    transition('show => hidden', [
      animate('0.2s')
    ]),
    transition('hidden => show', [
      animate('0.2s')
    ]),
  ]);