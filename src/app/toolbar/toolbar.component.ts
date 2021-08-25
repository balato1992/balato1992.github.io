import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { trigger, style, animate, transition, state } from '@angular/animations';

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

  @Input() showMenu: boolean = false;
  @Output() menuClickEvent = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  menuClick() {
    this.menuClickEvent.emit();
  }
}
