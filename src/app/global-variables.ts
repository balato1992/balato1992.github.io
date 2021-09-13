
import { animate, animateChild, group, query, style, transition, trigger } from '@angular/animations';
import { LinkInfo } from "./classes/LinkInfo";
import { MainPageComponent } from './pages/page-main/page-main.component';
import { TestContentComponent } from './pages/test-content/test-content.component';

export const LINK_INFOS: LinkInfo[] = [
  new LinkInfo("Main", 'main', MainPageComponent),
  new LinkInfo("SideNav", 'sidenav', TestContentComponent, [
    new LinkInfo("Page 1", 'sidenav/page1', TestContentComponent),
    new LinkInfo("Page 2", 'sidenav/page2', TestContentComponent),
    new LinkInfo("Page 3", 'sidenav/page3', TestContentComponent)
  ]),
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