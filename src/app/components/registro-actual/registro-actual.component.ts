import { Component, OnInit } from '@angular/core';
import { CotizadorPrespuestoService } from 'src/app/services/cotizador-prespuesto.service';
import { LocalstorageCotizacionesService } from 'src/app/services/localstorage-cotizaciones.service';
import { Cotizacion } from 'src/app/shared/models/cotizacion';

@Component({
  selector: 'app-registro-actual',
  templateUrl: './registro-actual.component.html',
  styleUrls: ['./registro-actual.component.scss']
})
export class RegistroActualComponent implements OnInit {

  cotizacion: Cotizacion | null = new Cotizacion({});
  cuotas: number[] = [];

  constructor(
    private cotizadorService: CotizadorPrespuestoService,
    private localStorage: LocalstorageCotizacionesService) { }

  ngOnInit(): void {
    // this.cotizadorService.resultCotizacion.subscribe( (next: boolean) => {
    //   this.result = next;
    // })

    this.cotizadorService.cotizacion.subscribe( (next: Cotizacion) => {
      this.cotizacion = next;
      this.cotizacion = this.localStorage.getLastCotizacion();
    })

  }
}
