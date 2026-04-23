import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { HeroComponent } from './hero/hero.component';
import { FeaturedProductsComponent } from './featured-products/featured-products.component';
import { EmotionalSectionComponent } from './emotional-section/emotional-section.component';
import { FooterComponent } from './footer/footer.component';
import { FabWhatsappComponent } from './fab-whatsapp/fab-whatsapp.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    HeroComponent,
    FeaturedProductsComponent,
    EmotionalSectionComponent,
    FooterComponent,
    FabWhatsappComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}
