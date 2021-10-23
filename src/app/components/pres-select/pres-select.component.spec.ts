import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresSelectComponent } from './pres-select.component';

describe('PresSelectComponent', () => {
  let component: PresSelectComponent;
  let fixture: ComponentFixture<PresSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PresSelectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PresSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
