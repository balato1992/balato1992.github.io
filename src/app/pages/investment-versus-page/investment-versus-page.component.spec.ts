import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestmentVersusPageComponent } from './investment-versus-page.component';

describe('InvestmentVersusPageComponent', () => {
  let component: InvestmentVersusPageComponent;
  let fixture: ComponentFixture<InvestmentVersusPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvestmentVersusPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvestmentVersusPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
