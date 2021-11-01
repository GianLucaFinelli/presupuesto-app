import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { CotizadorPrespuestoService } from 'src/app/services/cotizador-prespuesto.service';
import { cuotas, cuotasOptions, marcas, marcasOptions, paqueteList } from 'src/app/shared/enums';
import { Cotizacion } from 'src/app/shared/models/cotizacion';

import { FormGroup, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { ToastContainerDirective, ToastrService } from 'ngx-toastr';
import { PresSelectComponent } from 'src/app/components/pres-select/pres-select.component';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {

  @ViewChild(ToastContainerDirective, { static: true })
  toastContainer!: ToastContainerDirective;

  @ViewChild('selectMarca') selectMarca!: PresSelectComponent;
  @ViewChild('selectPaquete') selectPaquete!: PresSelectComponent;
  @ViewChild('selectCuotas') selectCuotas!: PresSelectComponent;

  marcaLabel: string = "Seleccioná tu marca";
  marcaState: boolean = false;
  paqueteLabel: string = "Seleccioná tu paquete";
  paqueteState: boolean = false;
  cuotasLabel: string = "Cantidad de cuotas";
  cuotasState: boolean = false;

  formulario: FormGroup = this.fb.group({
    marca: ['Default', Validators.required, !Validators.pattern("Default")],
    paquete: ['Default', Validators.required],
    cuotas: ['Default', Validators.required],
  });

  titleCabecera:string = "Titulo de prueba de cabecera";
  interes: string = '0';
  precio: string = "0";
  marcasList: any[] = marcasOptions;
  paqueteList: any[] = paqueteList;
  cuotasList: any = cuotasOptions;

  alert: boolean = false;

  constructor(
    private cotizadorService: CotizadorPrespuestoService,
    private fb: FormBuilder,
    private cdr: ChangeDetectorRef,
    private toastrService: ToastrService)
  { this.toastrService.overlayContainer = this.toastContainer; }

  ngOnInit(): void {
  }

  MarcaSelected(result : any){
    this.validateControl(result);
    this.cotizadorService.setMarcaSelected(marcas[this.formulario.get("marca")?.value]["img"]);
  }

  SendResult(){
    let marcaValid = this.formulario.get("marca")?.value == "Default",
    paqueteValid = this.formulario.get("paquete")?.value == "Default",
    cuotasValid = this.formulario.get("cuotas")?.value == "Default";

    this.validState(marcaValid,'marca');
    this.validState(paqueteValid,'paquete');
    this.validState(cuotasValid,'cuotas');

    if(marcaValid && paqueteValid && cuotasValid){
      this.cdr.detectChanges();
      const descripcionCuotasInput = this.formulario.get("cuotas")?.value == "Default" ?
        cuotas[this.formulario.get("cuotas")?.value.toLowerCase()]["value"].toLowerCase() :
        cuotas[this.formulario.get("cuotas")?.value]["value"];
      this.interes = cuotas[descripcionCuotasInput]["interes"];

      let option = this.marcasList.find(op => op.label == marcas[this.formulario.get("marca")?.value]["nombre"])
      let cotizacion = new Cotizacion({
        marca: marcas[this.formulario.get("marca")?.value]["nombre"],
        cuotas: this.formulario.get("cuotas")?.value,
        paquete: this.formulario.get("paquete")?.value,
        interes: this.interes,
        precio: option != undefined ? parseInt(option.precio) : "0"
      });
      cotizacion.precioFinal = cotizacion.PrecioFinal();
      this.cotizadorService.setCotizacion(cotizacion);
      this.cotizadorService.setResultCotizacion(true);
      this.toastrService.success('Su registro se ah actualizado!', 'Éxito al acutalizar...');
    }
    else{
      this.toastrService.error('Error al crear una cotización', 'Complete los campos correctamente...');
    }

  }

  validateControl(formControlName: any = null){
    if(this.formulario.get(formControlName)?.value == "Default"){
      this.formulario.get(formControlName)?.setErrors({ error: "No hay cuota seleccionada"});
      this.formulario.controls[formControlName].setErrors(null);
      return true;
    }
    return false;
  }

  validState(stateDefault: boolean, control: string){
    if(stateDefault){
      this.formulario.get(control)?.setErrors({ error: "No hay marca seleccionada"});
      this.formulario.controls[control].setErrors(null);
      this.cotizadorService.setResultCotizacion(false);
      if(control == "marca"){
        this.controlStateMarca();
      }
      else if (control == "paquete"){
        this.controlStatePaquete();
      }
      else if (control == "cuotas") {
        this.controlStateCuotas();
      }
    }
    this.cdr.detectChanges();
  }

  controlStateMarca(){
    this.marcaState = true;
    this.selectMarca.formularioControlState = true;
  }

  controlStatePaquete(){
    this.paqueteState = true;
    this.selectPaquete.formularioControlState = true;
  }

  controlStateCuotas(){
    this.cuotasState = true;
    this.selectCuotas.formularioControlState = true;
  }

}
