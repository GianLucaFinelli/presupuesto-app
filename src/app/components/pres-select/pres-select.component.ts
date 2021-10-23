import { ChangeDetectorRef, Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { ControlValueAccessor, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'pres-select',
  templateUrl: './pres-select.component.html',
  styleUrls: ['./pres-select.component.scss']
})
export class PresSelectComponent implements ControlValueAccessor, OnInit{

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
  @Input() formularioControlState: boolean = true;
  @Input() hasMethodChange: boolean = false;
  @Input() options : any[] = [];
  @Input() labelName: string = "";
  @Input() labelStyle: string = "'color': interes != '0' ? 'red' : 'grey'";
  @Input() labelKey!: string;
  @Input() labelBefore:string = "";

  @Output() optionSelectedMethod : EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(
    private cdr: ChangeDetectorRef,
    private fb: FormBuilder) { }


  ngOnInit(): void {
    this.cdr.detectChanges();
    this.formularioControlState = !this.formulario.get(`${[this.formControlName]}`)?.valid;
  }

  optionSelected(){
    this.optionSelectedMethod.emit(true);
    this.formularioControlState = !this.formulario.get(`${[this.formControlName]}`)?.valid;
  }

  selectValid(){
    if(this.formulario.get(`${[this.formControlName]}`)?.value == "Default"){
      this.formularioControlState = true;
    }
    else{
      this.formularioControlState = false;
    }
  }

  onChange: any = () => {}
  onTouch: any = () => {}
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  // d) copy paste this code
  writeValue(input: string) {
    // TODO
  }

}
