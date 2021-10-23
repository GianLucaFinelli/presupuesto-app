import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CotizadorPrespuestoService } from 'src/app/services/cotizador-prespuesto.service';
import { cuotas, cuotasOptions, marcas, marcasOptions } from 'src/app/shared/enums';
import { Cotizacion } from 'src/app/shared/models/cotizacion';

import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { LocalstorageCotizacionesService } from 'src/app/services/localstorage-cotizaciones.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {

  formulario: FormGroup = this.fb.group({
    marca: ['Default', Validators.required, !Validators.pattern("Default")],
    paquete: ['Default', Validators.required],
    cuotas: ['Default', Validators.required],
  });

  titleCabecera:string = "Titulo de prueba de cabecera";
  interes: string = '0';
  precio: string = "0";
  marcasList: any[] = marcasOptions;

  cuotasList: any = cuotasOptions;

  alert: boolean = false;

  constructor(
    private cotizadorService: CotizadorPrespuestoService,
    private fb: FormBuilder,
    private cdr: ChangeDetectorRef)
  { }

  ngOnInit(): void {
  }

  MarcaSelected(){
    this.cotizadorService.setMarcaSelected(marcas[this.formulario.get("marca")?.value]["img"]);
  }

  SendResult(){

    let marcaValid = this.formulario.get("marca")?.value != "Default",
    paqueteValid = this.formulario.get("paquete")?.value != "Default",
    cuotasValid = this.formulario.get("cuotas")?.value != "Default"

    if(!marcaValid){
      this.formulario.get("marca")?.setErrors({ error: "No hay marca seleccionada"});
      this.cotizadorService.setResultCotizacion(false);
    }

    if(!paqueteValid){
      this.formulario.get("paquete")?.setErrors({ error: "No hay paquete seleccionada"});
      this.cotizadorService.setResultCotizacion(false);
    }

    if(!cuotasValid){
      this.formulario.get("cuotas")?.setErrors({ error: "No hay cuota seleccionada"});
      this.cotizadorService.setResultCotizacion(false);
    }

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
    }

  }


  validStateCuotas(): boolean{
    return !this.formulario.get('cuotas')?.valid;
  }

}
