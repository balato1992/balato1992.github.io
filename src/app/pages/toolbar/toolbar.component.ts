import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router, UrlTree } from '@angular/router';
import { trigger, style, animate, transition, state } from '@angular/animations';
import { GlobalVariableService, LinkInfo } from 'src/app/services/global-variable.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
  animations: [
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
    ])
  ],
})
export class ToolbarComponent implements OnInit {

  @Output() menuClickEvent = new EventEmitter();

  get isMobile(): boolean {
    return this.gvs.isMobile;
  }
  get linkInfos(): LinkInfo[] {
    return this.gvs.LinkInfos;
  }

  get isShownMenu(): boolean {
    // todo: 20210909: figure out IsActiveMatchOptions params

    let isShownMenu: boolean = false;
    for (let linkInfo of this.linkInfos) {

      let url: string | UrlTree = this.router.createUrlTree(linkInfo.url);
      let isActive = this.router.isActive(url, {
        matrixParams: 'subset',
        queryParams: 'subset',
        paths: 'subset',
        fragment: 'exact'
      })

      if (isActive && linkInfo.subLink !== undefined) {
        isShownMenu = true;
      }
    }
    return this.isMobile || isShownMenu;
  }
  get displayedLinkInfos(): LinkInfo[] {
    return this.isMobile ? [] : this.linkInfos;
  }

  constructor(private router: Router, private gvs: GlobalVariableService) { }

  ngOnInit(): void {
  }

  menuClick() {
    this.menuClickEvent.emit();
  }
}
