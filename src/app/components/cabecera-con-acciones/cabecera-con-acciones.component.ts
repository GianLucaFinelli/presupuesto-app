import { Component, OnInit } from '@angular/core';
import { LocalstorageCotizacionesService } from 'src/app/services/localstorage-cotizaciones.service';
import { WorksheetJSService } from 'src/app/services/worksheet-js.service';
import { Cotizacion } from 'src/app/shared/models/cotizacion';

@Component({
  selector: 'app-cabecera-con-acciones',
  templateUrl: './cabecera-con-acciones.component.html',
  styleUrls: ['./cabecera-con-acciones.component.scss']
})
export class CabeceraConAccionesComponent implements OnInit {

  titular: string = "";
  cotizaciones: Cotizacion[] = [];

  constructor(
    private workSheetService: WorksheetJSService,
    private localStorage: LocalstorageCotizacionesService
    ) { }

  ngOnInit(): void {
    this.titular = "Presupuestos de vehiculos";
  }

  ExportExcel(){
    this.cotizaciones = this.localStorage.getAll();
    this.workSheetService.ExportExcel(this.cotizaciones, "Cotizaciones", "cotizaciones");
  }

}
