import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageProjectsAndExamplesComponent } from './page-projects-and-examples.component';

describe('PageProjectsAndExamplesComponent', () => {
  let component: PageProjectsAndExamplesComponent;
  let fixture: ComponentFixture<PageProjectsAndExamplesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageProjectsAndExamplesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageProjectsAndExamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
