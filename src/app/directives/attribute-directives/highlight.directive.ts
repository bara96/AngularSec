import {Directive, ElementRef, Input} from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @Input() set highlightColor(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  };

  constructor(private el: ElementRef) {
  }

}
