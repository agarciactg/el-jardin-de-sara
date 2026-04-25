import { Component, AfterViewInit, OnDestroy, ElementRef, ViewChild, ViewChildren, QueryList } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimationService } from '../../animations/animation.service';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

@Component({
  selector: 'app-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './section.component.html',
  styleUrl: './section.component.css'
})
export class SectionComponent implements AfterViewInit, OnDestroy {
  @ViewChild('sectionContainer') sectionContainer!: ElementRef<HTMLElement>;
  @ViewChild('backgroundElement') backgroundElement!: ElementRef<HTMLElement>;
  @ViewChildren('textElement') textElements!: QueryList<ElementRef<HTMLElement>>;

  private tl: gsap.core.Timeline | null = null;
  private bgTween: gsap.core.Tween | null = null;

  constructor(private animationService: AnimationService) {}

  ngAfterViewInit(): void {
    // Retrasar marginalmente para asegurar que los elementos se renderizaron totalmente
    setTimeout(() => {
      this.initAnimations();
    }, 50);
  }

  /**
   * Inicializa las animaciones consumiendo el AnimationService.
   */
  private initAnimations(): void {
    if (!this.sectionContainer || !this.backgroundElement) return;

    // Animación de Parallax del background
    this.bgTween = this.animationService.parallaxBackground(
      this.sectionContainer.nativeElement,
      this.backgroundElement.nativeElement
    ) as gsap.core.Tween | null;

    // Timeline para aparición de los textos
    if (this.textElements && this.textElements.length > 0) {
      const textNodes = this.textElements.map(el => el.nativeElement);
      this.tl = this.animationService.fadeInTextTimeline(
        this.sectionContainer.nativeElement,
        textNodes
      );
    }
  }

  ngOnDestroy(): void {
    // Matar animaciones para liberar memoria
    if (this.tl) {
      if (this.tl.scrollTrigger) {
        this.tl.scrollTrigger.kill();
      }
      this.tl.kill();
    }

    if (this.bgTween) {
      if (this.bgTween.scrollTrigger) {
        this.bgTween.scrollTrigger.kill();
      }
      this.bgTween.kill();
    }
  }
}
