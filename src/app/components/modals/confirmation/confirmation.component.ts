import { ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { DialogBelonging } from '@costlydeveloper/ngx-awesome-popup';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { CotizadorPrespuestoService } from 'src/app/services/cotizador-prespuesto.service';
import { LocalstorageCotizacionesService } from 'src/app/services/localstorage-cotizaciones.service';
import { Cotizacion } from 'src/app/shared/models/cotizacion';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.scss']
})
export class ConfirmationComponent implements OnInit {

  title: string = "";
  entity!: Cotizacion;
  private subscriptions: Subscription = new Subscription();

// Dependency Injection of the dialogBelonging in constructor is crucial.
  constructor(
    @Inject('dialogBelonging') private dialogBelonging: DialogBelonging,
    private cotizadorService: CotizadorPrespuestoService,
    private cdr: ChangeDetectorRef,
    private toastrService: ToastrService,
    private localStorage: LocalstorageCotizacionesService)
  { }

  ngOnInit(): void {
    // Check received data and other available features.
    console.log(this.dialogBelonging);

    this.title = this.dialogBelonging.CustomData.title;
    this.entity = this.dialogBelonging.CustomData.entity;

    // Subscribe to button listeners.
    this.subscriptions.add(
      // IDialogEventsController
      this.dialogBelonging.EventsController.onButtonClick$.subscribe((_Button) => {
        if (_Button.ID === 'edit') {
          // Do some logic for example edit user.
        } else if (_Button.ID === 'submit') {
          this.toastrService.success('Su registro se ah eliminado!', 'Éxito al eliminar...');
          this.localStorage.deleteCotizacion(this.entity);
          // Do some logic and close popup.
          this.dialogBelonging.EventsController.close({result: true});
        }
        else if (_Button.ID === 'cancel') {
          // Do some logic and close popup.
          this.dialogBelonging.EventsController.close({result: true});
        }
      })
    );

    // Timeout emulates async data.
    setTimeout(() => {
      // Close the loader after some data is ready.
      // IDialogEventsController
      this.dialogBelonging.EventsController.closeLoader();
    }, 1000);
  }
}
