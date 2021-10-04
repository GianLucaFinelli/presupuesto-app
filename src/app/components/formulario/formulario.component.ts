import { Component, OnInit } from '@angular/core';
import { CotizadorPrespuestoService } from 'src/app/services/cotizador-prespuesto.service';
import { imagesMarcas } from 'src/app/shared/enums';
import { Cotizacion } from 'src/app/shared/models/cotizacion';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {

  marca: string = "./assets/images/defaultVector.png";
  marcaSelected : string = '';
  paquete: string = "default";
  cuotas: string = "default";
  interes: string = '0';
  precio: string = "0";

  constructor(private cotizadorService: CotizadorPrespuestoService) { }

  ngOnInit(): void {
  }

  MarcaSelected(){
    this.cotizadorService.setMarcaSelected(this.marca);
    this.verificateMarcaSelectedName(this.marca);

    if(this.marca == imagesMarcas.fiat){
      this.precio = "16700";
    }
    else if (this.marca == imagesMarcas.peugeot){
      this.precio = "45104";
    }
    else if (this.marca == imagesMarcas.volkswagen){
      this.precio = "38100";
    }
  }

  coutasSelected(){
    if(this.cuotas == "default"){
      this.interes = '0';
    }
    if(this.cuotas == "3"){
      this.interes = '3';
    }
    if(this.cuotas == "6"){
      this.interes = '7';
    }
    if(this.cuotas == "9"){
      this.interes = '12';
    }
    if(this.cuotas == "12"){
      this.interes = '16';
    }
  }

  SendResult(){
    var cotizacion = new Cotizacion();
    cotizacion.marca = this.marcaSelected;
    cotizacion.cuotas = this.cuotas;
    cotizacion.paquete = this.paquete;
    cotizacion.interes = this.interes;
    cotizacion.precio = this.precio;
    this.cotizadorService.setCotizacion(cotizacion);

    if(this.validateCotizacion(cotizacion)){
      this.cotizadorService.setResultCotizacion(true);
    }
    else{
      this.cotizadorService.setResultCotizacion(false);
    }
  }

  validateCotizacion(cotizacion: Cotizacion): boolean{
    if(cotizacion.cuotas != "default" &&
       cotizacion.interes != '0' &&
       cotizacion.paquete != "default" &&
       cotizacion.marca != "./assets/images/defaultVector.png")
    {
      return true;
    }
    return false;
  }

  verificateMarcaSelectedName(marca: string){
    if(marca == "./assets/images/defaultVector.png"){
      this.marcaSelected = "Default";
    }
    if(marca == "./assets/images/fiatVector.png"){
      this.marcaSelected = "Fiat";
    }
    if(marca == "./assets/images/volkswagenVector.png"){
      this.marcaSelected = "Volkswagen";
    }
    if(marca == "./assets/images/peugeotVector.png"){
      this.marcaSelected = "Peugeot";
    }
  }
}
