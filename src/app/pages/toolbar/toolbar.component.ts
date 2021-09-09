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
    return this.isMobile || this.gvs.checkLinkActiveAndSub(this.linkInfos, this.router);
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
