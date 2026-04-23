import { Component } from '@angular/core';

@Component({
  selector: 'app-cuidados',
  standalone: true,
  template: `
    <section class="w-full max-w-4xl mx-auto px-8 py-20 text-center">
      <span class="material-symbols-outlined mb-6"
        style="font-size: 64px; color: var(--color-tertiary-container);">
        spa
      </span>
      <h1 class="font-display-lg mb-6" style="color: var(--color-on-surface);">
        Cuidados
      </h1>
      <p class="font-body-lg max-w-2xl mx-auto" style="color: var(--color-on-surface-variant);">
        Pronto compartiremos nuestros mejores consejos para mantener tus flores
        frescas y radiantes por más tiempo.
      </p>
      <div class="w-16 h-px mx-auto mt-12" style="background-color: var(--color-outline-variant);"></div>
    </section>
  `,
  styles: [`:host { display: block; }`]
})
export class CuidadosComponent {}
