import { Directive, DoCheck, ElementRef, inject, OnInit } from '@angular/core';
import { NgControl, Validators } from '@angular/forms';

@Directive({
  selector: '[formControlName]',
  standalone: true,
})
export class RequiredDirective implements DoCheck {
  elementRef = inject(ElementRef);
  ngControl = inject(NgControl);

  ngDoCheck(): void {
    const nativeElement = this.elementRef.nativeElement as HTMLElement;
    if (this.ngControl.control?.hasValidator(Validators.required)) {
      nativeElement.toggleAttribute('required', true);
    } else {
      nativeElement.removeAttribute('required');
    }
  }
}
