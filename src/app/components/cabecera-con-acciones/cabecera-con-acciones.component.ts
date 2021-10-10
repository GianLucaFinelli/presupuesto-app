import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cabecera-con-acciones',
  templateUrl: './cabecera-con-acciones.component.html',
  styleUrls: ['./cabecera-con-acciones.component.scss']
})
export class CabeceraConAccionesComponent implements OnInit {

  titular: string = "";
  constructor() { }

  ngOnInit(): void {
    this.titular = "Presupuestos de vehiculos";
  }

}
