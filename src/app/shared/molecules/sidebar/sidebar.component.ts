import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  MENU_ITEMS = [
    {
      id: 1,
      label: 'Comics',
      link: '/dashboard/home'
    },
    {
      id: 2,
      label: 'Favoritos',
      link: '/dashboard/favorites'
    },
    {
      id: 3,
      label: 'Editar perfil',
      link: '/dashboard/profile'
    },
  ]

  PROFILE_ITEMS = [
    
    {
      id: 4,
      label: 'Cerrar sesiòn',
      link: '/'
    },
  ]
}
