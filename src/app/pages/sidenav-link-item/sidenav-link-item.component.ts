import { Component, Input, OnInit } from '@angular/core';
import { LinkInfo } from 'src/app/classes/LinkInfo';

@Component({
  selector: 'app-sidenav-link-item',
  templateUrl: './sidenav-link-item.component.html',
  styleUrls: ['./sidenav-link-item.component.scss']
})
export class SidenavLinkItemComponent implements OnInit {

  @Input() linkInfos!: LinkInfo[];
  @Input() hiddenLevels!: number[];
  @Input() currentLevel!: number;

  constructor() { }

  ngOnInit(): void {
  }

  isHiddenLevel() {
    return this.hiddenLevels.includes(this.currentLevel);
  }
}
