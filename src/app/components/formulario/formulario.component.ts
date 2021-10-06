import { Component, OnInit } from '@angular/core';
import { CotizadorPrespuestoService } from 'src/app/services/cotizador-prespuesto.service';
import { cuotas, imagesMarcas, marcas } from 'src/app/shared/enums';
import { Cotizacion } from 'src/app/shared/models/cotizacion';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {


  titleCabecera:string = "Titulo de prueba de cabecera";
  marca: string = "Default";
  paquete: string = "Default";
  cuotas: string = "Default";
  interes: string = '0';
  precio: string = "0";

  options: any[] = [
    {
      value:  marcas["Default"]["nombre"],
      label: "-- Seleccionar --",
      precio: "0"
    },
    {
      value: marcas["Fiat"]["nombre"],
      label: marcas["Fiat"]["nombre"],
      precio: "14560"
    },
    {
      value: marcas["Peugeot"]["nombre"],
      label: marcas["Peugeot"]["nombre"],
      precio: "45908"
    },
    {
      value: marcas["Volkswagen"]["nombre"],
      label: marcas["Volkswagen"]["nombre"],
      precio: "36200"
    },
  ];

  cuotasList: any = [
    {
      value: cuotas["default"]["value"],
      label: "-- Seleccionar --",
    },
    {
      value: cuotas["3"]["value"],
      label: cuotas["3"]["value"],
    },
    {
      value: cuotas["6"]["value"],
      label: cuotas["6"]["value"],
    },
    {
      value: cuotas["9"]["value"],
      label: cuotas["9"]["value"],
    },
    {
      value: cuotas["12"]["value"],
      label: cuotas["12"]["value"],
    }
  ]

  alert: boolean = false;

  constructor(private cotizadorService: CotizadorPrespuestoService) { }

  ngOnInit(): void {
  }

  MarcaSelected(){
    this.cotizadorService.setMarcaSelected(marcas[this.marca]["img"]);
    this.precio = marcas[this.marca]["precio"];
  }

  coutasSelected(){
    const nombre = cuotas[this.cuotas]["value"];
    this.interes = cuotas[nombre]["interes"];
  }

  SendResult(){
    var cotizacion = new Cotizacion({
      marca: this.marca,
      cuotas: this.cuotas,
      paquete: this.paquete,
      interes: this.interes,
      precio: this.options.find(op => op.label == marcas[this.marca]["nombre"])
    });
    this.cotizadorService.setCotizacion(cotizacion);

    if(this.validateCotizacion(cotizacion)){
      this.cotizadorService.setResultCotizacion(true);
      this.alert = false;
    }
    else{
      this.cotizadorService.setResultCotizacion(false);
      const alert =  document.getElementById("alert-error");
    if(alert) alert.style.display = "flex";
      this.alert = true;
    }
  }

  validateCotizacion(cotizacion: Cotizacion): boolean{
    if(cotizacion.cuotas != "Default" &&
       cotizacion.interes != '0' &&
       cotizacion.paquete != "Default" &&
       cotizacion.marca != "Default")
    {
      return true;
    }
    return false;
  }

  deleteAlert(){
    const alert =  document.getElementById("alert-error");
    if(alert) alert.style.display = "none";
  }

}
