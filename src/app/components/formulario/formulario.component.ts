import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CotizadorPrespuestoService } from 'src/app/services/cotizador-prespuesto.service';
import { cuotas, marcas } from 'src/app/shared/enums';
import { Cotizacion } from 'src/app/shared/models/cotizacion';

import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';

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
  // marca: string = "Default";
  // paquete: string = "Default";
  // cuotas: string = "Default";
  interes: string = '0';
  precio: string = "0";

  options: any[] = [
    {
      selected: "selected",
      value:  marcas["Default"]["nombre"],
      label: "-- Seleccionar --",
      precio: "0"
    },
    {
      selected: '',
      value: marcas["Fiat"]["nombre"],
      label: marcas["Fiat"]["nombre"],
      precio: "14560"
    },
    {
      selected: '',
      value: marcas["Peugeot"]["nombre"],
      label: marcas["Peugeot"]["nombre"],
      precio: "45908"
    },
    {
      selected: '',
      value: marcas["Volkswagen"]["nombre"],
      label: marcas["Volkswagen"]["nombre"],
      precio: "36200"
    },
  ];

  cuotasList: any = [
    {
      selected: true,
      value: cuotas["default"]["value"],
      label: "-- Seleccionar --",
    },
    {
      selected: false,
      value: cuotas["3"]["value"],
      label: cuotas["3"]["value"],
    },
    {
      selected: false,
      value: cuotas["6"]["value"],
      label: cuotas["6"]["value"],
    },
    {
      selected: false,
      value: cuotas["9"]["value"],
      label: cuotas["9"]["value"],
    },
    {
      selected: false,
      value: cuotas["12"]["value"],
      label: cuotas["12"]["value"],
    }
  ]

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

  // coutasSelected(){
  //   const nombre = this.cuotas == "Default" ?
  //     cuotas[this.cuotas.toLowerCase()]["value"].toLowerCase() :
  //     cuotas[this.cuotas]["value"];
  //   this.interes = cuotas[nombre]["interes"];
  // }

  SendResult(){

    if(this.formulario.get("marca")?.value == "Default"){
      this.formulario.get("marca")?.setErrors({ error: "No hay marca seleccionada"});
    }

    if(this.formulario.get("paquete")?.value == "Default"){
      this.formulario.get("paquete")?.setErrors({ error: "No hay paquete seleccionada"});
    }

    if(this.formulario.get("cuotas")?.value == "Default"){
      this.formulario.get("cuotas")?.setErrors({ error: "No hay cuota seleccionada"});
    }

    // this.cdr.detectChanges();
      const descripcionCuotasInput = this.formulario.get("cuotas")?.value == "Default" ?
        cuotas[this.formulario.get("cuotas")?.value.toLowerCase()]["value"].toLowerCase() :
        cuotas[this.formulario.get("cuotas")?.value]["value"];
      this.interes = cuotas[descripcionCuotasInput]["interes"];

    let option = this.options.find(op => op.label == marcas[this.formulario.get("marca")?.value]["nombre"])
    let cotizacion = new Cotizacion({
      marca: this.precio = marcas[this.formulario.get("marca")?.value]["precio"],
      cuotas: this.formulario.get("cuotas")?.value,
      paquete: this.formulario.get("paquete")?.value,
      interes: this.interes,
      precio: option != undefined ? option.precio : "0"
    });
    this.cotizadorService.setCotizacion(cotizacion);

    // if(this.validateCotizacion(cotizacion)){
    //   this.cotizadorService.setResultCotizacion(true);
    //   this.alert = false;
    // }
    // else{
    //   this.cotizadorService.setResultCotizacion(false);
    //   const alert =  document.getElementById("alert-error");
    // if(alert) alert.style.display = "flex";
    //   this.alert = true;
    // }
  }

  validateCotizacion(cotizacion: Cotizacion): boolean{
    if(cotizacion.cuotas == "Default" ||
       cotizacion.interes == '0' ||
       cotizacion.paquete == "Default" ||
       cotizacion.marca == "Default")
    {
      return false;
    }
    return true;
  }

  deleteAlert(){
    const alert =  document.getElementById("alert-error");
    if(alert) alert.style.display = "none";
  }

}
