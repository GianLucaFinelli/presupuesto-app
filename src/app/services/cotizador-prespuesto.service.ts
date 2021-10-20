import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { imagesMarcas } from '../shared/enums';
import { Cotizacion } from '../shared/models/cotizacion';
import { LocalstorageCotizacionesService } from './localstorage-cotizaciones.service';

@Injectable({
  providedIn: 'root'
})
export class CotizadorPrespuestoService {

  marcaSelected: BehaviorSubject<string> = new BehaviorSubject<string>(imagesMarcas.default);
  cotizacion : BehaviorSubject<Cotizacion> = new BehaviorSubject<Cotizacion>(new Cotizacion({}));
  cotizacionDeleted: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  resultCotizacion : BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  cuotas: BehaviorSubject<number[]> = new BehaviorSubject<number[]>([]);

  constructor(private localStorage: LocalstorageCotizacionesService) { }

  setMarcaSelected(marca: string) {
    this.marcaSelected.next(marca);
  }

  setCotizacion(cotizacion : Cotizacion){
    // almacenarlo en comportamiento
    cotizacion.id = this.getId();
    // almacenarlo en local
    this.localStorage.addNewCotizacion(cotizacion);
    this.cotizacion.next(cotizacion);
  }

  setResultCotizacion(result: boolean){
    this.resultCotizacion.next(result);
  }

  getId() : number{
    let hasId = window.localStorage.hasOwnProperty('id');
    let id = 0;
    if(hasId) {
      id = JSON.parse(JSON.stringify(window.localStorage.getItem('id')));
    }
    this.setId(id);
    return id;
  }

  setId(increment: number){
    increment++;
    window.localStorage.setItem("id", JSON.stringify(increment));
  }

}
