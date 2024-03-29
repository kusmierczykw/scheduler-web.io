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
import { CreateEmployeeForm } from '@features/employee/components/create-employee-form/types/create-employee-form';
import { CreateEmployeeFormData } from '@features/employee/components/create-employee-form/models/create-employee-form-data';
import { ButtonModule } from 'primeng/button';
import { ButtonSmallDirective } from '@shared/button/directives/button-small.directive';
import { FormControlComponent } from '@shared/form/components/form-control/form-control.component';
import { InputTextModule } from 'primeng/inputtext';
import { FormActionsContainerDirective } from '@shared/form/directives/form-actions-container.directive';
import { emailValidator } from '@shared/form/validators/email-validator';
import { DropdownModule } from 'primeng/dropdown';
import { DefaultDropdownDirective } from '@shared/dropdown/directives/default-dropdown.directive';
import { EmployeeType } from '@features/employee/components/employee-type/enums/employee-type';
import { EmployeeTypeProviderService } from '@features/employee/components/employee-type/providers/employee-type-provider.service';
import { Observable } from 'rxjs';
import { SelectItem } from '@shared/select-item/select-item';

@Component({
  selector: 'app-create-employee-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ButtonModule,
    ButtonSmallDirective,
    FormControlComponent,
    InputTextModule,
    FormActionsContainerDirective,
    DropdownModule,
    DefaultDropdownDirective,
  ],
  templateUrl: './create-employee-form.component.html',
  styleUrls: ['./create-employee-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateEmployeeFormComponent {
  @Output() submitClickEvent = new EventEmitter<CreateEmployeeFormData>();
  @Output() cancelClickEvent = new EventEmitter<void>();

  readonly form = this.createForm();
  readonly therapistTypes$ = this.therapistTypesSource();

  constructor(
    private readonly builder: NonNullableFormBuilder,
    private readonly provider: EmployeeTypeProviderService
  ) {}

  handleSubmitClick(): void {
    this.submitClickEvent.emit(this.toModel());
  }

  handleCancelClick(): void {
    this.cancelClickEvent.emit();
  }

  private createForm(): FormGroup<CreateEmployeeForm> {
    return this.builder.group({
      firstName: this.builder.control('', [Validators.required]),
      lastName: this.builder.control('', [Validators.required]),
      email: this.builder.control('', [Validators.required, emailValidator]),
      type: this.builder.control(EmployeeType.Psychologist, [
        Validators.required,
      ]),
      phone: this.builder.control('', [Validators.required]),
    });
  }

  private toModel(): CreateEmployeeFormData {
    const { firstName, lastName, email, phone } = this.form.getRawValue();

    return new CreateEmployeeFormData(firstName, lastName, email, phone);
  }

  private therapistTypesSource(): Observable<SelectItem<EmployeeType>[]> {
    return this.provider.selectItems();
  }
}
