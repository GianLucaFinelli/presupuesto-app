import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'pres-select',
  templateUrl: './pres-select.component.html',
  styleUrls: ['./pres-select.component.scss']
})
export class PresSelectComponent implements OnInit {

  @Input() formControlName: string = "";
  @Input() formularioControlState: boolean = false;
  @Input() options : any[] = [];
  @Input() labelName: string = "";
  @Input() labelStyle: string = "'color': interes != '0' ? 'red' : 'grey'";
  @Input() labelKey: string = "";
  @Input() labelBefore:string = ""; 

  @Output() optionSelectedMethod : EventEmitter<boolean> = new EventEmitter<boolean>();
  
  constructor() { }

  ngOnInit(): void {
  }


  optionSelected(){
    this.optionSelectedMethod.emit(true);
  }

}
