
import { animate, animateChild, group, query, style, transition, trigger } from '@angular/animations';
import { LinkInfo } from "./classes/LinkInfo";
import { InvestmentPageComponent } from './pages/investment-page/investment-page.component';
import { InvestmentVersusPageComponent } from './pages/investment-versus-page/investment-versus-page.component';
import { PageProjectsAndExamplesComponent } from './pages/page-projects-and-examples/page-projects-and-examples.component';

export const LINK_INFOS: LinkInfo[] = [
  new LinkInfo("Investment", 'investment/versus', InvestmentVersusPageComponent, [
    new LinkInfo("DCA versus VA", 'investment/versus', InvestmentVersusPageComponent), //Dollar Cost Averaging, Value Averaging
    new LinkInfo("Custom", 'investment/custom', InvestmentPageComponent),
  ]),
  new LinkInfo("Projects&Examples", 'projects-and-examples', PageProjectsAndExamplesComponent),
];

export const FADE_ANIMATION =
  trigger('routeAnimations', [
    transition('* <=> *', [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%'
        })
      ], { optional: true }),
      query(':enter', [
        style({ opacity: 0 })
      ], { optional: true }),
      query(':leave', animateChild(), { optional: true }),
      group([
        query(':leave', [
          animate('500ms ease-out', style({ opacity: 0 }))
        ], { optional: true }),
        query(':enter', [
          animate('500ms ease-out', style({ opacity: 1 }))
        ], { optional: true })
      ]),
      query(':enter', animateChild(), { optional: true }),
    ]),
  ]);