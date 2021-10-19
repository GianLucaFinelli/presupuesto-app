import { Component, OnInit } from '@angular/core';
import { Cotizacion } from 'src/app/shared/models/cotizacion';

@Component({
  selector: 'app-registro-listado',
  templateUrl: './registro-listado.component.html',
  styleUrls: ['./registro-listado.component.scss']
})
export class RegistroListadoComponent implements OnInit {

  cotizaciones: Cotizacion[] = [
    {
      precio: "100000",
      marca:"Fiat",
      cuotas:"3",
      paquete:"Full",
      interes:"3"
    } as Cotizacion
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
