import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FabWhatsappComponent } from './fab-whatsapp/fab-whatsapp.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    FabWhatsappComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}
