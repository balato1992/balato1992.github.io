import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenavLinkItemComponent } from './sidenav-link-item.component';

describe('SidenavLinkItemComponent', () => {
  let component: SidenavLinkItemComponent;
  let fixture: ComponentFixture<SidenavLinkItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidenavLinkItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidenavLinkItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
