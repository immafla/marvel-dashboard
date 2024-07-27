import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CardLoginComponent } from '../../shared/molecules/card-login/card-login.component'
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CardLoginComponent,
    RouterLinkActive,
    CommonModule, 
    RouterOutlet, 
    RouterLink, 
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  getLogin(data:string){
    console.log({data})
  }
}
