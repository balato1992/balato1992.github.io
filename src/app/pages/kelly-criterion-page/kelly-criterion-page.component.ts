import { Component, OnInit } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-kelly-criterion-page',
  templateUrl: './kelly-criterion-page.component.html',
  styleUrls: ['./kelly-criterion-page.component.scss']
})
export class KellyCriterionPageComponent implements OnInit {

  kcForm: FormGroup = this.fb.group({
    probability: [50, [Validators.required, Validators.max(100), Validators.min(0)]],
    proportion: [2, [Validators.required, Validators.max(1000000), Validators.min(0)]],
  });
  get probability(): AbstractControl { return this.kcForm.get('probability')!; }
  get proportion(): AbstractControl { return this.kcForm.get('proportion')!; }
  currentBankroll: FormControl = new FormControl(300, Validators.required);

  result: { fraction: number, fractionJax: string } | undefined = undefined;

  constructor(private fb: FormBuilder, private decimalPipe: DecimalPipe) { }

  ngOnInit(): void { }

  calcFraction(p: number, b: number) {

    return p + (p - 1) / b;
  }

  pipe(n: number): string {
    return this.decimalPipe.transform(n) ?? "";
  }

  onSubmit() {
    let p = this.kcForm.value['probability'] / 100;
    let b = this.kcForm.value['proportion'];

    let fraction = this.calcFraction(p, b);

    let strP = this.pipe(p);
    let strB = this.pipe(b);
    let strF = this.pipe(fraction);

    this.result = {
      fraction: fraction,
      fractionJax: `$\\LARGE{ f^* = ${strP} + {${strP}-1 \\over ${strB}} = ${strF} }$`,
    };
  }
}
