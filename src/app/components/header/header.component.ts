import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MenubarModule } from 'primeng/menubar';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  imports: [CommonModule, RouterModule, MenubarModule]
})
export class HeaderComponent {
  items: MenuItem[] = [
    { label: 'Inicio', icon: 'pi pi-fw pi-home', routerLink: ['/'] },
    { label: 'Formulario de Alumno', icon: 'pi pi-fw pi-user', routerLink: ['/alumno-form'] }
  ];

  constructor() { }
}
