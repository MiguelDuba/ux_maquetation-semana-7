import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAlarmaComponent } from './edit-alarma.component';

describe('EditAlarmaComponent', () => {
  let component: EditAlarmaComponent;
  let fixture: ComponentFixture<EditAlarmaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditAlarmaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditAlarmaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
