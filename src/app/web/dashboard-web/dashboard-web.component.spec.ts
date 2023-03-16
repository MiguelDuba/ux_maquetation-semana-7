import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardWebComponent } from './dashboard-web.component';

describe('DashboardWebComponent', () => {
  let component: DashboardWebComponent;
  let fixture: ComponentFixture<DashboardWebComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardWebComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardWebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
