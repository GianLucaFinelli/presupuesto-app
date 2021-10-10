import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CabeceraConAccionesComponent } from './cabecera-con-acciones.component';

describe('CabeceraConAccionesComponent', () => {
  let component: CabeceraConAccionesComponent;
  let fixture: ComponentFixture<CabeceraConAccionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CabeceraConAccionesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CabeceraConAccionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
