import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appFormActionsContainer]',
  standalone: true,
})
export class FormActionsContainerDirective {
  constructor(
    private readonly elementRef: ElementRef,
    private readonly renderer: Renderer2
  ) {
    this.configureContainerClasses();
  }

  private configureContainerClasses(): void {
    const { nativeElement } = this.elementRef;

    this.renderer.addClass(nativeElement, 'd-flex');
    this.renderer.addClass(nativeElement, 'justify-content-end');
    this.renderer.addClass(nativeElement, 'gap-3');
  }
}
