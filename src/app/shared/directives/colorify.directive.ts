import { Directive, ElementRef, Input, Renderer } from '@angular/core';

/**
 * This is a directive
 */
@Directive({
  selector: '[sgColorify]'
})
export class ColorifyDirective {
  @Input() color: string;

  constructor(private _element: ElementRef, private renderer: Renderer) {
    renderer.setElementStyle(_element, 'color', 'red');
  }
}
