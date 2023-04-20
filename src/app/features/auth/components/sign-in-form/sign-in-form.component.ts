import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormGroup,
  NonNullableFormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { SignInForm } from '@features/auth/components/sign-in-form/types/sign-in-form';
import { FormControlComponent } from '@shared/form/components/form-control/form-control.component';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { ButtonSmallDirective } from '@shared/button/directives/button-small.directive';

@Component({
  selector: 'app-sign-in-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormControlComponent,
    InputTextModule,
    ButtonModule,
    ButtonSmallDirective,
  ],
  templateUrl: './sign-in-form.component.html',
  styleUrls: ['./sign-in-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignInFormComponent {
  @Output() readonly submitClickEvent = new EventEmitter();
  @Output() readonly cancelClickEvent = new EventEmitter();

  readonly form = this.createForm();

  constructor(private readonly builder: NonNullableFormBuilder) {}

  handleSubmitClick(): void {}

  handleCancelClick(): void {}

  private createForm(): FormGroup<SignInForm> {
    return this.builder.group({
      email: this.builder.control('', [Validators.required]),
      password: this.builder.control('', [Validators.required]),
    });
  }
}
