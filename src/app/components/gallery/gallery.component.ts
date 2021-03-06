import { Component, OnInit } from '@angular/core';
import { CotizadorPrespuestoService } from 'src/app/services/cotizador-prespuesto.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  titleQuestion: string = "";
  titleInformation: string = "Generar Cotización";
  marcaSelected!: string;

  constructor(private cotizadorService: CotizadorPrespuestoService) { }

  ngOnInit(): void {
    this.cotizadorService.marcaSelected.subscribe( (next: string) => {
      this.marcaSelected = next;
    })
  }

}
