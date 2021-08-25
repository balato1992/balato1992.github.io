import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { NavigationEnd, Router, RouterEvent } from '@angular/router';
import { filter } from 'rxjs/operators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  show: boolean = false;
  title = 'angular-sample';

  @ViewChild('leftSidenav') leftSidenav!: MatSidenav;
  isSidenavAvalible: boolean = false;

  constructor(private router: Router) {
    router.events.pipe(
      filter(e => e instanceof NavigationEnd)
    ).subscribe(event => this.checkUrl(event as any));
  }

  checkUrl(event: RouterEvent) {
    console.log(event.url);

    if (event.url === '/main') {
      this.isSidenavAvalible = false;
      this.leftSidenav.opened = false;
    } else {
      this.isSidenavAvalible = true;
      this.leftSidenav.opened = true;
    }
  }
}
