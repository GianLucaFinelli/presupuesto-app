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

  private saveAll(cotizaciones: Cotizacion[]) {
    let cotizacionesString: string = JSON.stringify(cotizaciones);
    window.localStorage.setItem(this.cotizaciones, cotizacionesString);
  }

  getLastCotizacion() : Cotizacion | null {
    let local = window.localStorage.getItem(this.cotizaciones);
    let cotizaciones: Cotizacion[] = JSON.parse(JSON.parse(JSON.stringify(local) || "[]"));
    return  cotizaciones != null && cotizaciones.length > 0 ? JSON.parse(JSON.stringify(cotizaciones[cotizaciones.length - 1])) : null;
  }

  deleteCotizacion(cotizacion: Cotizacion) : Cotizacion[] {
    let cotizaciones : Cotizacion[] = this.getAll();
    cotizaciones = cotizaciones.filter(item => item.id != cotizacion.id);
    this.saveAll(cotizaciones);

    return this.getAll();
  }
}