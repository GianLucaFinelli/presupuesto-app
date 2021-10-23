import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { MultiDataSet, Label } from 'ng2-charts';

@Component({
  selector: 'app-registro-estadistics-chart',
  templateUrl: './registro-estadistics-chart.component.html',
  styleUrls: ['./registro-estadistics-chart.component.scss']
})
export class RegistroEstadisticsChartComponent implements OnInit {

  public doughnutChartLabels: Label[] = ['Peugeot', 'Fiat', 'Volkswagen'];
  public doughnutChartData: MultiDataSet = [
    [350, 450, 100]
  ];
  public doughnutChartType: ChartType = 'doughnut';

  constructor() { }

  ngOnInit() {

  }

}
