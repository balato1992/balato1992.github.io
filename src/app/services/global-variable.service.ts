import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalVariableService {

  isMobile: boolean = false;

  constructor() { }

  customFormatNumber(num: number, exponent: number = 0) {
    let base = Math.pow(10, exponent);

    return Math.round(num * base) / base;
  }
}
