import { ChangeDetectionStrategy, Component, OnInit, ViewChild } from '@angular/core';
import { PaginationControlsComponent, PaginationInstance } from 'ngx-pagination';
import { CotizadorPrespuestoService } from 'src/app/services/cotizador-prespuesto.service';
import { LocalstorageCotizacionesService } from 'src/app/services/localstorage-cotizaciones.service';
import { Cotizacion } from 'src/app/shared/models/cotizacion';

@Component({
  selector: 'app-registro-listado',
  templateUrl: './registro-listado.component.html',
  styleUrls: ['./registro-listado.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class RegistroListadoComponent implements OnInit {

  @ViewChild('pagination') pagination! : PaginationControlsComponent;


  filter: string = '';
  currentPage: number = 1;
  cotizaciones: Cotizacion[] = [];
  paquetes = {
    full: "Full",
    base: "Base"
  };
  isWeb : boolean = window.screen.width < 1024 ? false : true;

  constructor(
    private cotizadorService: CotizadorPrespuestoService,
    private localStorage: LocalstorageCotizacionesService
  ) { }

  ngOnInit(): void {
    this.cotizaciones = this.localStorage.getAll();

    // si cambia el ultimo resultado se actualiza el listado
    this.cotizadorService.cotizacion.subscribe( (changeLastRegister) => {
      this.cotizaciones = this.localStorage.getAll();
    });
  }

  deleteCotizacion(cotizacion: Cotizacion) {
    // borra la cotizacion y devuelve el listado actualizado
    this.cotizaciones = this.localStorage.deleteCotizacion(cotizacion);
  }

  onResize($event : any) {
    this.isWeb = window.screen.width < 1024 ? false : true;
  }

  onPageBoundsCorrection(number: number){
    this.currentPage = number;
  }

}
