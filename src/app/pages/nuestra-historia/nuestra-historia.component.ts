import { Component } from '@angular/core';
import { HistoriaHeroComponent } from './historia-hero/historia-hero.component';
import { EditorialStoryComponent } from './editorial-story/editorial-story.component';
import { ImageGridComponent } from './image-grid/image-grid.component';
import { HistoriaQuoteComponent } from './historia-quote/historia-quote.component';
import { HistoriaCtaComponent } from './historia-cta/historia-cta.component';

@Component({
  selector: 'app-nuestra-historia',
  standalone: true,
  imports: [
    HistoriaHeroComponent,
    EditorialStoryComponent,
    ImageGridComponent,
    HistoriaQuoteComponent,
    HistoriaCtaComponent
  ],
  template: `
    <app-historia-hero />
    <app-editorial-story />
    <app-image-grid />
    <app-historia-quote />
    <app-historia-cta />
  `,
  styles: [`:host { display: block; }`]
})
export class NuestraHistoriaComponent {}
