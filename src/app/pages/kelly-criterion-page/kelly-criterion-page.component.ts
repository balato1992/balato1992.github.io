import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-kelly-criterion-page',
  templateUrl: './kelly-criterion-page.component.html',
})
export class KellyCriterionPageComponent implements OnInit {

  kcForm: FormGroup = this.fb.group({
    probability: [50, [Validators.required, Validators.max(100), Validators.min(0)]],
    proportion: [2, [Validators.required, Validators.max(1000000), Validators.min(0)]],
    fraction: [0],
  });

  get probability() { return this.kcForm.get('probability')!; }
  get proportion() { return this.kcForm.get('proportion')!; }

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    const p = this.kcForm.get('probability');
    const b = this.kcForm.get('proportion');

    if (p && b) {
      p.valueChanges.subscribe(value => {
        this.patchFraction(value, this.kcForm.value['proportion']);
      });
      b.valueChanges.subscribe(value => {
        this.patchFraction(this.kcForm.value['probability'], value);
      });
    }
  }

  patchFraction(p: number, b: number) {

    p = p / 100;

    this.kcForm.patchValue({
      fraction: p + (p - 1) / b,
    });
  }
}
