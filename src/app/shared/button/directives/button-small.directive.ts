import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appButtonSmall]',
  standalone: true,
})
export class ButtonSmallDirective {
  constructor(
    private readonly elementRef: ElementRef,
    private readonly renderer: Renderer2
  ) {
    this.configureButtonSmallClasses();
  }

  private configureButtonSmallClasses(): void {
    const { nativeElement } = this.elementRef;

    this.renderer.addClass(nativeElement, 'p-button-sm');
  }
}
