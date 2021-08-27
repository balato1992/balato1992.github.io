import { Component, ViewChild } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { MatSidenav } from '@angular/material/sidenav';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  show: boolean = false;
  title = 'angular-sample';

  @ViewChild('leftSidenav') leftSidenav!: MatSidenav;
  isSidenavVisible: boolean = false;

  constructor(private router: Router) {
    router.events.pipe(
      filter(e => e instanceof NavigationEnd)
    ).subscribe(event => this.checkUrl(event as NavigationEnd));
  }

  checkUrl(event: NavigationEnd) {
    // console.log(event);

    let isSidenavVisible = event.url === '/testnav' || event.urlAfterRedirects === '/testnav';

    this.isSidenavVisible = isSidenavVisible;
    this.leftSidenav.opened = isSidenavVisible;
  }
}
