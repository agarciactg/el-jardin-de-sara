import { Component } from '@angular/core';
import { CuidadosHeroComponent } from './cuidados-hero/cuidados-hero.component';
import { CuidadosEspeciesComponent } from './cuidados-especies/cuidados-especies.component';
import { SecretosLongevidadComponent } from './secretos-longevidad/secretos-longevidad.component';

@Component({
  selector: 'app-cuidados',
  standalone: true,
  imports: [
    CuidadosHeroComponent,
    CuidadosEspeciesComponent,
    SecretosLongevidadComponent
  ],
  template: `
    <app-cuidados-hero />
    <app-cuidados-especies />
    <app-secretos-longevidad />
  `,
  styles: [`:host { display: block; }`]
})
export class CuidadosComponent {}
