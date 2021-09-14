import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestmentResultAndSourceComponent } from './investment-result-and-source.component';

describe('InvestmentResultAndSourceComponent', () => {
  let component: InvestmentResultAndSourceComponent;
  let fixture: ComponentFixture<InvestmentResultAndSourceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvestmentResultAndSourceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvestmentResultAndSourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
