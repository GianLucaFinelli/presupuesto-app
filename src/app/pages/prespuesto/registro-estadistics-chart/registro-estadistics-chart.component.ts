import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { MultiDataSet, Label } from 'ng2-charts';
import { CotizadorPrespuestoService } from 'src/app/services/cotizador-prespuesto.service';
import { LocalstorageCotizacionesService } from 'src/app/services/localstorage-cotizaciones.service';
import { marcas } from 'src/app/shared/enums';
import { Cotizacion } from 'src/app/shared/models/cotizacion';

@Component({
  selector: 'app-registro-estadistics-chart',
  templateUrl: './registro-estadistics-chart.component.html',
  styleUrls: ['./registro-estadistics-chart.component.scss']
})
export class RegistroEstadisticsChartComponent implements OnInit {

  cotizaciones: Cotizacion[] = [];
  peugeot: number = 0;
  fiat: number = 0;
  volkswagen: number = 0;

  // public barChartOptions: ChartOptions = {
  //   responsive: true,
  //   // We use these empty structures as placeholders for dynamic theming.
  //   scales: { xAxes: [{}], yAxes: [{}] },
  //   plugins: {
  //     datalabels: {
  //       anchor: 'end',
  //       align: 'end',
  //     }
  //   }
  // };
  public barChartLabels: Label[] = ['Peugeot', 'Fiat', 'Volkswagen'];

  public doughnutChartLabels: Label[] = ['Peugeot', 'Fiat', 'Volkswagen'];
  public doughnutChartData: MultiDataSet = [
    [0,0,0]
  ];
  public doughnutChartType: ChartType = 'doughnut';


  constructor(
    private cotizadorService: CotizadorPrespuestoService,
    private localStorage: LocalstorageCotizacionesService
  ) { }

  ngOnInit() {
    // si cambia el ultimo resultado se actualiza el listado
    this.cotizadorService.cotizacion.subscribe( (changeLastRegister) => {
      this.cotizaciones = this.localStorage.getAll();
      this.ActualizarEstadisticas();
    })
  }

  ResetEstadisticas(){
    this.fiat = 0;
    this.peugeot = 0;
    this.volkswagen = 0;
  }

  ActualizarEstadisticas(){
    this.ResetEstadisticas();
    this.cotizaciones.forEach( (cotizacion: Cotizacion) => {
      if(cotizacion.marca == marcas.Peugeot.nombre){
        this.peugeot++;
      }
      else if(cotizacion.marca == marcas.Fiat.nombre) {
        this.fiat++;
      } else if(cotizacion.marca == marcas.Volkswagen.nombre) {
        this.volkswagen++;
      }
    });
    // los datos se actualizan..
    this.doughnutChartData = [
      [this.peugeot, this.fiat, this.volkswagen]
    ];
  }

  isCero(value: number){
    return value == 0 ? true : false;
  }

  SinRegistros(){
    return (
      this.isCero(this.peugeot) &&
      this.isCero(this.fiat) &&
      this.isCero(this.volkswagen)
      ) ? false : true;
  }

}
