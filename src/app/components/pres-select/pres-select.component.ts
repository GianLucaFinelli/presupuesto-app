import { ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, FormsModule } from '@angular/forms';

@Component({
  selector: 'pres-select',
  templateUrl: './pres-select.component.html',
  styleUrls: ['./pres-select.component.scss']
})
export class PresSelectComponent implements OnInit {

 /* --------------------
  * | TODO:            |
  * | STATUS: RESOLVED |
  * --------------------
  * 
  *   SOLUTION:
  *   * Se utiliza una propiedad de tipo FormGroup
  *     para que traiga el valor del propio grupo que se evaluando reactivamente
  */

  @Input() formulario!: FormGroup;
  @Input() formControlName: string = "";
  @Input() formularioControlState: boolean = false;
  @Input() hasMethodChange: boolean = false;
  @Input() options : any[] = [];
  @Input() labelName: string = "";
  @Input() labelStyle: string = "'color': interes != '0' ? 'red' : 'grey'";
  @Input() labelKey!: string;
  @Input() labelBefore:string = ""; 

  @Output() optionSelectedMethod : EventEmitter<boolean> = new EventEmitter<boolean>();
  
  constructor(private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.cdr.detectChanges();
  }

  optionSelected(){
    this.optionSelectedMethod.emit(true);
    this.formularioControlState = !this.formulario.get(`${[this.formControlName]}`)?.valid;
    console.log(this.formularioControlState)
  }

  selectValid(){
    if(this.formulario.get(`${[this.formControlName]}`)?.value == "Default"){
      this.formularioControlState = true;
      console.log("invalido")
    }
    else{
      this.formularioControlState = false;
    }
    console.log("valido")
  }

}
