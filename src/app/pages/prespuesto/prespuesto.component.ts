import { Component, OnInit } from '@angular/core';
import { CotizadorPrespuestoService } from 'src/app/services/cotizador-prespuesto.service';
import { imagesMarcas } from 'src/app/shared/enums';
import { Cotizacion } from 'src/app/shared/models/cotizacion';

@Component({
  selector: 'app-prespuesto',
  templateUrl: './prespuesto.component.html',
  styleUrls: ['./prespuesto.component.scss']
})
export class PrespuestoComponent implements OnInit {

  marca!:string;
  cuotas: number[] = [];
  interes!: number;
  nombreCompleto: string = "";
  enabled: boolean = false;

  constructor(private cotizadorService: CotizadorPrespuestoService) { }

  ngOnInit(): void {
    this.cotizadorService.setMarcaSelected(imagesMarcas.default);
    this.cotizadorService.resultCotizacion.subscribe( (next: boolean) => {
      console.log(next);
      this.enabled = next;
    });
  }



}
