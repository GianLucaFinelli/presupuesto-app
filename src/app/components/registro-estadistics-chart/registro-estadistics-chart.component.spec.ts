import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroEstadisticsChartComponent } from './registro-estadistics-chart.component';

describe('RegistroEstadisticsChartComponent', () => {
  let component: RegistroEstadisticsChartComponent;
  let fixture: ComponentFixture<RegistroEstadisticsChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistroEstadisticsChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroEstadisticsChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
