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
      this.enabled = next;
    });

  }

  toggleCreate(){
    // Get the browser window size
    var windowWidth: number = window.innerWidth;
    var windowHeight: number = window.innerHeight;
    // console.log(`windowWidth: ${windowWidth}`);
    // console.log(`windowHeight: ${windowHeight}`);

    var aside = document.getElementById("toggle-create");
    var section = document.getElementById("toggle-section");
    var conteidoAside = document.getElementById("create-contenedor");
    if(windowWidth < 1024){
      if(this.toggleCreateFlag){
        this.toggleCreateFlag = !this.toggleCreateFlag;
        aside?.classList.add("create-active-responsive");
        aside?.classList.add("bottom-reset");
      }
      else{
        this.toggleCreateFlag = !this.toggleCreateFlag;
        aside?.classList.remove("create-active-responsive")
        aside?.classList.remove("bottom-reset");
      }
    }
    else{
      if(this.toggleCreateFlag){
        this.toggleCreateFlag = !this.toggleCreateFlag;
        section?.classList.add("w-98");
        conteidoAside?.classList.add("d-none");
        aside?.classList.remove("w-25");
        aside?.classList.add("w-2");
      }
      else{
        this.toggleCreateFlag = !this.toggleCreateFlag;
        section?.classList.remove("w-98");
        conteidoAside?.classList.remove("d-none");
        aside?.classList.remove("w-2");
        aside?.classList.add("w-25");
      }
    }
  }

}
