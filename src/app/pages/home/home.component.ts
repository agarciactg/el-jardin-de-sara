import { Component } from '@angular/core';
import { HeroComponent } from '../../hero/hero.component';
import { FeaturedProductsComponent } from '../../featured-products/featured-products.component';
import { EmotionalSectionComponent } from '../../emotional-section/emotional-section.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeroComponent,
    FeaturedProductsComponent,
    EmotionalSectionComponent
  ],
  template: `
    <app-hero />
    <app-featured-products />
    <app-emotional-section />
  `,
  styles: [`:host { display: block; }`]
})
export class HomeComponent {}
