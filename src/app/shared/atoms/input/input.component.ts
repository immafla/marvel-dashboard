import { Component, forwardRef, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [],
  templateUrl: './input.component.html',
  styleUrl: './input.component.css',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true
    }
  ]
})
export class InputComponent {
  @Input() type: string = 'text';
  @Input() placeholder: string = '';
  @Input() label: string = '';
  value: string = '';
  onChange: (value: string) => void = () => {};
  onTouch: any = () => {}
  onTouched: () => void = () => {};

  onInputChange(event: any) {
    console.log({event})
    // this.value = event.data as string
    // this.onChange(event.data as string);
  }

  writeValue(value: string): void {
    this.value = value;
  }

  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }


  // val= "" // this is the updated value that the class accesses
  // set value(val){  // this value is updated by programmatic changes if( val !== undefined && this.val !== val){
  //   this.val = val
  //   this.onChange(val)
  //   this.onTouch(val)
  // }
}
