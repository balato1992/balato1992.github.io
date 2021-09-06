import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-content',
  templateUrl: './test-content.component.html',
  styleUrls: ['./test-content.component.scss']
})
export class TestContentComponent implements OnInit {

  numbers: number[] = [];

  constructor() {
    this.numbers = Array(5).fill(0).map((x, i) => i);
  }

  ngOnInit(): void {
  }

  add(): void {
    this.numbers.push(1);
  }
  remove(): void {
    this.numbers.shift();
  }
}
