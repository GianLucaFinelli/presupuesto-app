import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroListadoComponent } from './registro-listado.component';

describe('RegistroListadoComponent', () => {
  let component: RegistroListadoComponent;
  let fixture: ComponentFixture<RegistroListadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistroListadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroListadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
