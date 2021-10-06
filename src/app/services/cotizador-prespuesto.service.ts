import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { imagesMarcas } from '../shared/enums';
import { Cotizacion } from '../shared/models/cotizacion';

@Injectable({
  providedIn: 'root'
})
export class CotizadorPrespuestoService {

  marcaSelected: BehaviorSubject<string> = new BehaviorSubject<string>(imagesMarcas.default);
  cotizacion : BehaviorSubject<Cotizacion> = new BehaviorSubject<Cotizacion>(new Cotizacion({}));
  resultCotizacion : BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  cuotas: BehaviorSubject<number[]> = new BehaviorSubject<number[]>([]);

  constructor() { }

  setMarcaSelected(marca: string) {
    this.marcaSelected.next(marca);
  }

  setCotizacion(cotizacion : any){
    this.cotizacion.next(cotizacion);
  }

  setResultCotizacion(result: boolean){
    this.resultCotizacion.next(result);
  }

}
