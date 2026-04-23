import { Component } from '@angular/core';

@Component({
  selector: 'app-contacto',
  standalone: true,
  template: `
    <section class="w-full max-w-4xl mx-auto px-8 py-20 text-center">
      <span class="material-symbols-outlined mb-6"
        style="font-size: 64px; color: var(--color-tertiary-container);">
        mail
      </span>
      <h1 class="font-display-lg mb-6" style="color: var(--color-on-surface);">
        Contacto
      </h1>
      <p class="font-body-lg max-w-2xl mx-auto" style="color: var(--color-on-surface-variant);">
        ¿Tienes alguna pregunta o quieres hacer un pedido especial?
        Estamos aquí para ayudarte.
      </p>
      <div class="w-16 h-px mx-auto mt-12" style="background-color: var(--color-outline-variant);"></div>
    </section>
  `,
  styles: [`:host { display: block; }`]
})
export class ContactoComponent {}
