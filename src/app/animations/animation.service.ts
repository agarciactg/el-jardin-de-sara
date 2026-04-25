import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

@Injectable({
  providedIn: 'root'
})
export class AnimationService {
  private isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);
    
    if (this.isBrowser) {
      gsap.registerPlugin(ScrollTrigger);
    }
  }

  /**
   * Crea una animación de parallax de fondo vinculada al scroll.
   * @param triggerElement El elemento contenedor que sirve como referencia para el scroll.
   * @param bgElement El elemento del fondo que será desplazado gráficamente.
   * @returns La animación de GSAP o nulo si no es el navegador.
   */
  parallaxBackground(triggerElement: HTMLElement, bgElement: HTMLElement) {
    if (!this.isBrowser) return null;

    return gsap.to(bgElement, {
      yPercent: 30,
      ease: 'none',
      scrollTrigger: {
        trigger: triggerElement,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true
      }
    });
  }

  /**
   * Construye una línea de tiempo para la aparición secuencial de elementos de texto al hacer scroll.
   * @param triggerElement El contenedor usado para detectar la entrada a la vista.
   * @param textElements La colección de nodos que serán animados de manera escalonada.
   * @returns La línea de tiempo de GSAP o nulo si no es el navegador.
   */
  fadeInTextTimeline(triggerElement: HTMLElement, textElements: HTMLElement[]) {
    if (!this.isBrowser || textElements.length === 0) return null;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: triggerElement,
        start: 'top 85%',
        end: 'bottom 15%',
        toggleActions: 'play reverse play reverse'
      }
    });

    tl.from(textElements, {
      y: 50,
      opacity: 0,
      duration: 1.2,
      stagger: 0.2,
      ease: 'power3.out'
    });

    return tl;
  }
}
