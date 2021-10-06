import { Component, OnInit } from '@angular/core';
import { CotizadorPrespuestoService } from 'src/app/services/cotizador-prespuesto.service';
import { Cotizacion } from 'src/app/shared/models/cotizacion';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.scss']
})
export class ResultadoComponent implements OnInit {

  result : boolean = false;
  cotizacion: Cotizacion = new Cotizacion({});
  cuotas: number[] = [];
  precio: number = 0;

  constructor(private cotizadorService: CotizadorPrespuestoService) { }

  ngOnInit(): void {
    this.cotizadorService.resultCotizacion.subscribe( (next: boolean) => {
      this.result = next;
    })

    this.cotizadorService.cotizacion.subscribe( (next: Cotizacion) => {
      this.cotizacion = next;
      console.log(this.cotizacion.Cuotas(this.cotizacion));
      this.cuotas = this.cotizacion.Cuotas(this.cotizacion);
      this.precio = 0;
      this.cuotas.map( cuota => {
        this.precio += cuota;
      })
    })
  }

}
