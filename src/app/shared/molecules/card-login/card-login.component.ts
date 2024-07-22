import { Component } from '@angular/core';
import { InputComponent } from '../../atoms/input/input.component'

@Component({
  selector: 'app-card-login',
  standalone: true,
  imports: [
    InputComponent
  ],
  templateUrl: './card-login.component.html',
  styleUrl: './card-login.component.css'
})
export class CardLoginComponent {

}
