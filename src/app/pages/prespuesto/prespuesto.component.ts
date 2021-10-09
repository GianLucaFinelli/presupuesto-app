import { Component, OnInit } from '@angular/core';
import { CotizadorPrespuestoService } from 'src/app/services/cotizador-prespuesto.service';
import { imagesMarcas } from 'src/app/shared/enums';
import { Cotizacion } from 'src/app/shared/models/cotizacion';

@Component({
  selector: 'app-prespuesto',
  templateUrl: './prespuesto.component.html',
  styleUrls: ['./prespuesto.component.scss']
})
export class PrespuestoComponent implements OnInit {

  toggleCreateFlag: boolean = true;
  marca!:string;
  cuotas: number[] = [];
  interes!: number;
  nombreCompleto: string = "";
  enabled: boolean = false;

  constructor(private cotizadorService: CotizadorPrespuestoService) { }

  ngOnInit(): void {
    this.cotizadorService.setMarcaSelected(imagesMarcas.default);
    this.cotizadorService.resultCotizacion.subscribe( (next: boolean) => {
      console.log(next);
      this.enabled = next;
    });
  }

  toggleCreate(){
    var menu = document.getElementById("toggle-create");
    var contenedor = document.getElementById("create-contenedor");
    if(this.toggleCreateFlag){
      this.toggleCreateFlag = !this.toggleCreateFlag;
      menu?.classList.add("create-active-responsive");
      menu?.classList.add("bottom-reset");
      // menu?.classList.add("top-0");
      // contenedor?.classList.add("d-none");
    }
    else{
      this.toggleCreateFlag = !this.toggleCreateFlag;
      menu?.classList.remove("create-active-responsive")
      // menu?.classList.add("top-97");
      menu?.classList.remove("bottom-reset");
      // contenedor?.classList.remove("d-none");
    }
  }

}
