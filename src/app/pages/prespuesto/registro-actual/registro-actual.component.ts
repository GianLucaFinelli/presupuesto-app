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

  classBadge: string = "badge-primary"
  cotizacion: Cotizacion | null = new Cotizacion({});
  cuotas: number[] = [];

  paquetes = {
    full: "Full",
    base: "Base"
  };

  constructor(
    private cotizadorService: CotizadorPrespuestoService,
    private localStorage: LocalstorageCotizacionesService) { }

  ngOnInit(): void {
    this.cotizadorService.cotizacion.subscribe( (next: Cotizacion) => {
      this.cotizacion = next;
      this.cotizacion = this.localStorage.getLastCotizacion();
    })

    this.classBadge = this.paquetes.full == this.cotizacion?.paquete ? "badge-primary" : "badge-secondary";
  }
}
