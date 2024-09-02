import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RequiredDirective } from './required.directive';
import { LabelAsteriskDirective } from './label-asterisk.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ReactiveFormsModule, RequiredDirective, LabelAsteriskDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  formGroup: FormGroup<{ name: FormControl<string> }> = new FormGroup({
    name: new FormControl('', {
      nonNullable: true,
      validators: Validators.required,
    }),
  });
}
