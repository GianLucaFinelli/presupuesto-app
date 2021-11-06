import { ChangeDetectionStrategy, Component, OnInit, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { ButtonLayoutDisplay, ButtonMaker, DialogInitializer, DialogLayoutDisplay } from '@costlydeveloper/ngx-awesome-popup';
import { PaginationControlsComponent, PaginationInstance } from 'ngx-pagination';
import { ConfirmationComponent } from 'src/app/components/modals/confirmation/confirmation.component';
import { EditCotizacionComponent } from 'src/app/components/modals/edit-cotizacion/edit-cotizacion.component';
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

  @ViewChild('pagination') pagination!: PaginationControlsComponent;
  @ViewChild("modalEdit", { static: false }) modalEdit!: TemplateRef<any>;
  @ViewChild("modalDelete", { static: false }) modalDelete!: TemplateRef<any>;

  filter: string = '';
  currentPage: number = 1;
  cotizaciones: Cotizacion[] = [];
  paquetes = {
    full: "Full",
    base: "Base"
  };
  isWeb: boolean = window.screen.width < 1024 ? false : true;

  constructor(
    private cotizadorService: CotizadorPrespuestoService,
    private localStorage: LocalstorageCotizacionesService
  ) {
  }

  ngOnInit(): void {
    this.cotizaciones = this.localStorage.getAll();

    // si cambia el ultimo resultado se actualiza el listado
    this.cotizadorService.cotizacion.subscribe((changeLastRegister) => {
      this.cotizaciones = this.localStorage.getAll();
    });

    // si se elimina un resultado
    this.localStorage.resultCotizacion.subscribe( (changeLastRegister) => {
      this.cotizaciones = this.localStorage.getAll();
    })
  }

  deleteCotizacion(cotizacion: Cotizacion) {
    // borra la cotizacion y devuelve el listado actualizado

    const dialogPopup = new DialogInitializer(ConfirmationComponent);

    // Any data can be sent to AnyAngularComponent.
    dialogPopup.setCustomData({title: `¿Estas seguro que quiere eliminar la cotizacion: ${cotizacion.id} ?`, entity: cotizacion }); // optional

    // Set some configuration.
    dialogPopup.setConfig({
        Width     : '500px',
        LayoutType: DialogLayoutDisplay.WARNING, // SUCCESS | INFO | NONE | DANGER | WARNING
        // MaxHeight: '600px',  // optional
        // MinHeight: '200px',  // optional
        // MaxWidth: '600px', // optional
        // MinWidth: '200px', // optional
        // HideScrollbar: true, // optional, default is false
        // FullScreen: true, // optional, default is false
        EscapeKeyClose: true, // optional, default is false
        ButtonPosition: "right", // optional, default is "right"
    });

    // Set some custom buttons as list.
    // SUCCESS | INFO | NONE | DANGER | WARNING | PRIMARY | SECONDARY | LINK | DARK | LIGHT
    dialogPopup.setButtons([
      new ButtonMaker('Si, Borrar', 'submit', ButtonLayoutDisplay.WARNING),
      new ButtonMaker('No', 'cancel', ButtonLayoutDisplay.SECONDARY)
    ]);

    // Simply open the popup and observe which button is clicked and,
    // receive optional payload from AnyAngularComponent.
    dialogPopup.openDialog$().subscribe(resp => {
        console.log('dialog response: ', resp);
    });

  }

  onResize($event: any) {
    this.isWeb = window.screen.width < 1024 ? false : true;
  }

  onPageBoundsCorrection(number: number) {
    this.currentPage = number;
  }


  // Create the method.
  dialog(cotizacion: Cotizacion) {
    // Instance of DialogInitializer includes any valid angular component as argument.
    const dialogPopup = new DialogInitializer(EditCotizacionComponent);

    // Any data can be sent to AnyAngularComponent.
    dialogPopup.setCustomData({ title: `Editando la cotizacion: ${cotizacion.id}`, entity: cotizacion }); // optional

    // Set some configuration.
    dialogPopup.setConfig({
      Width: '500px',
      LayoutType: DialogLayoutDisplay.SUCCESS, // SUCCESS | INFO | NONE | DANGER | WARNING
      // MaxHeight: '600px',  // optional
      // MinHeight: '200px',  // optional
      // MaxWidth: '600px', // optional
      // MinWidth: '200px', // optional
      // HideScrollbar: true, // optional, default is false
      // FullScreen: true, // optional, default is false
      EscapeKeyClose: true, // optional, default is false
      ButtonPosition: "right", // optional, default is "right"
    });

    // Set some custom buttons as list.
    // SUCCESS | INFO | NONE | DANGER | WARNING | PRIMARY | SECONDARY | LINK | DARK | LIGHT
    dialogPopup.setButtons([
      // new ButtonMaker('Edit', 'edit', ButtonLayoutDisplay.WARNING),
      new ButtonMaker('Cancel', 'cancel', ButtonLayoutDisplay.SECONDARY)
    ]);

    // Simply open the popup and observe which button is clicked and,
    // receive optional payload from AnyAngularComponent.
    dialogPopup.openDialog$().subscribe(resp => {
      console.log('dialog response: ', resp);
    });
  }
}
