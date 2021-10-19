import { Component, OnInit } from '@angular/core';
import { CotizadorPrespuestoService } from 'src/app/services/cotizador-prespuesto.service';
import { LocalstorageCotizacionesService } from 'src/app/services/localstorage-cotizaciones.service';
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
  constructor(
    private cotizadorService: CotizadorPrespuestoService,
    private localStorage: LocalstorageCotizacionesService
  ) { }

  ngOnInit(): void {
    this.cotizaciones = this.localStorage.getAll();

    // si cambia el ultimo resultado se actualiza el listado
    this.cotizadorService.cotizacion.subscribe( (changeLastRegister) => {
      this.cotizaciones = this.localStorage.getAll();
    })
  }

}
