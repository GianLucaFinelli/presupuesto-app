import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroActualComponent } from './registro-actual.component';

describe('RegistroActualComponent', () => {
  let component: RegistroActualComponent;
  let fixture: ComponentFixture<RegistroActualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistroActualComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroActualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
