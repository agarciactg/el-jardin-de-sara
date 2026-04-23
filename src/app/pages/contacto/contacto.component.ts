import { Component } from '@angular/core';
import { ContactoHeroComponent } from './contacto-hero/contacto-hero.component';
import { ContactoMainComponent } from './contacto-main/contacto-main.component';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [
    ContactoHeroComponent,
    ContactoMainComponent
  ],
  template: `
    <app-contacto-hero />
    <app-contacto-main />
  `,
  styles: [`:host { display: block; }`]
})
export class ContactoComponent {}
