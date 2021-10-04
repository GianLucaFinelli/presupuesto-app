import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrespuestoComponent } from './prespuesto.component';

describe('PrespuestoComponent', () => {
  let component: PrespuestoComponent;
  let fixture: ComponentFixture<PrespuestoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrespuestoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrespuestoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
