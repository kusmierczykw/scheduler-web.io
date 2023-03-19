import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Nillable } from '@core/utils/nil/nillable';
import { CreateEventFormData } from '@features/schedule/components/create-event-form/models/create-event-form-data';
import { Uuid } from '@core/common/types/uuid';
import { InputTextModule } from 'primeng/inputtext';
import { FormControlComponent } from '@shared/form/components/form-control/form-control.component';
import { CreateEventForm } from '@features/schedule/components/create-event-form/types/create-event-form';
import { ButtonSmallDirective } from '@shared/button/directives/button-small.directive';
import { FormActionsContainerDirective } from '@shared/form/directives/form-actions-container.directive';
import { MultiSelectModule } from 'primeng/multiselect';
import { DefaultMultiSelectDirective } from '@shared/multi-select/directives/default-multi-select.directive';

@Component({
  selector: 'app-add-event-form',
  standalone: true,
  imports: [
    CommonModule,
    ButtonModule,
    ReactiveFormsModule,
    InputTextModule,
    FormControlComponent,
    ButtonSmallDirective,
    FormActionsContainerDirective,
    MultiSelectModule,
    DefaultMultiSelectDirective,
  ],
  templateUrl: './create-event-form.component.html',
  styleUrls: ['./create-event-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateEventFormComponent implements OnChanges {
  @Input() data?: Nillable<CreateEventFormData>;

  @Output() submitClickEvent = new EventEmitter<CreateEventFormData>();
  @Output() cancelClickEvent = new EventEmitter<void>();

  readonly form: FormGroup<CreateEventForm>;

  constructor(private readonly builder: FormBuilder) {
    this.form = this.createForm();
  }

  handleSubmitClick(): void {
    const { therapists, shortTitle } = this.form.getRawValue();

    this.submitClickEvent.emit(new CreateEventFormData(therapists, shortTitle));
  }

  ngOnChanges(changes: SimpleChanges): void {
    const { data } = changes;

    if (data) {
      this.form.patchValue({
        therapists: this.data!.therapists,
        shortTitle: this.data!.shortTitle,
      });
    }
  }

  handleCancelClick(): void {
    this.cancelClickEvent.emit();
  }

  private createForm(): FormGroup<CreateEventForm> {
    return this.builder.group({
      therapists: this.builder.nonNullable.control<Uuid[]>([]),
      shortTitle: this.builder.nonNullable.control('', [
        Validators.required,
        Validators.maxLength(100),
      ]),
    });
  }
}
