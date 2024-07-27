import { Component, EventEmitter, Output } from '@angular/core';
import { InputComponent } from '../../atoms/input/input.component'
import { FormBuilder, FormGroup } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

interface LoginData {
  email: string;
  password: string;
}
@Component({
  selector: 'app-card-login',
  standalone: true,
  imports: [
    InputComponent,
    ReactiveFormsModule
  ],
  templateUrl: './card-login.component.html',
  styleUrl: './card-login.component.css'
})
export class CardLoginComponent {
  @Output() getLogin = new EventEmitter<LoginData>();
  email: string = ''
  password: string = ''
  loginForm!: FormGroup;
  
  
  constructor(private formBuilder: FormBuilder) {
    
    this.loginForm = this.formBuilder.group({
      email: [''],
      password: ['']
    });

  }
  
  ngOnInit() {
    this.loginForm.get('email')?.valueChanges?.subscribe(value => {
      console.log('Valor del input:', value);
    });
  }

  loginEvent(){
    this.getLogin.emit({
      email: this.email,
      password: this.password
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      console.log(this.loginForm.value);
    }
  }
}
