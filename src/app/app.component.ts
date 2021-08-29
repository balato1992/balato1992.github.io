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
  title = 'angular-sample';

  @ViewChild('leftSidenav') leftSidenav!: MatSidenav;
  isSidenavVisible: boolean = false;

  constructor(private router: Router) {
    router.events.pipe(
      filter(e => e instanceof NavigationEnd)
    ).subscribe(event => this.updateSidenavVisibilty(event as NavigationEnd));
  }

  updateSidenavVisibilty(event: NavigationEnd) {
    // console.log(event);

    let isSidenavVisible = this.getSidenavVisibilty(event.urlAfterRedirects, '/testnav');

    this.isSidenavVisible = isSidenavVisible;
    this.leftSidenav.opened = isSidenavVisible;
  }

  getSidenavVisibilty(url: string, prefix: string) {
    return url === prefix || url.startsWith(prefix + '/');
  }
}
