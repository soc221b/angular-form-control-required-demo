import { Directive, DoCheck, ElementRef, inject, Input } from '@angular/core';

@Directive({
  selector: 'label',
  standalone: true,
})
export class LabelAsteriskDirective implements DoCheck {
  @Input({ required: true })
  for!: string;

  elementRef = inject(ElementRef);

  ngDoCheck(): void {
    const nativeElement = this.elementRef.nativeElement as HTMLElement;
    const targetElement = document.getElementById(this.for) as HTMLElement;
    if (targetElement.hasAttribute('required')) {
      nativeElement.classList.add('required');
    } else {
      nativeElement.classList.remove('required');
    }
  }
}
