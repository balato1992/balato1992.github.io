import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KellyCriterionPageComponent } from './kelly-criterion-page.component';

describe('KellyCriterionPageComponent', () => {
  let component: KellyCriterionPageComponent;
  let fixture: ComponentFixture<KellyCriterionPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KellyCriterionPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KellyCriterionPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
