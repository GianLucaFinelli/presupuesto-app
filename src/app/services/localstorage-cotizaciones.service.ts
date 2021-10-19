import { Injectable } from '@angular/core';
import { Cotizacion } from '../shared/models/cotizacion';

@Injectable({
  providedIn: 'root'
})
export class LocalstorageCotizacionesService {

  cotizaciones = "cotizaciones";

  constructor() { }

  addNewCotizacion(cotizacion: Cotizacion){
    let local = window.localStorage.getItem(this.cotizaciones);
    let cotizaciones: Cotizacion[] = JSON.parse(JSON.parse(JSON.stringify(local))) || [];
    cotizaciones.push(cotizacion);

    window.localStorage.setItem(this.cotizaciones, JSON.stringify(cotizaciones))
  }

  getAll() : Cotizacion[] {
    let local = window.localStorage.getItem(this.cotizaciones);
    let cotizaciones: Cotizacion[] = JSON.parse(JSON.parse(JSON.stringify(local))) || [];
    return cotizaciones;
  }

  getLastCotizacion() : Cotizacion | null {
    let local = window.localStorage.getItem(this.cotizaciones);
    let cotizaciones: Cotizacion[] = JSON.parse(JSON.parse(JSON.stringify(local) || "[]"));
    return  cotizaciones != null && cotizaciones.length > 0 ? JSON.parse(JSON.stringify(cotizaciones[cotizaciones.length - 1])) : null;
  }

  deleteCotizacion(cotizacion: Cotizacion) {
    // TODO: Cotizacion
    // crear logica para eliminar cotizacion
  }
}
