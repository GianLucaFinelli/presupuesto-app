import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadisticaChartComponent } from './estadistica-chart.component';

describe('EstadisticaChartComponent', () => {
  let component: EstadisticaChartComponent;
  let fixture: ComponentFixture<EstadisticaChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstadisticaChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstadisticaChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
