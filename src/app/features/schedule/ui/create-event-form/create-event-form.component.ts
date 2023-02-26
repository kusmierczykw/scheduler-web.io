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
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Nillable } from '@core/utils/nil/nillable';
import { CreateEventFormData } from '@features/schedule/ui/create-event-form/models/create-event-form-data';
import { Uuid } from '@core/common/types/uuid';
import { InputTextModule } from 'primeng/inputtext';
import { FormControlComponent } from '@shared/form/ui/form-control/form-control.component';
import { DropdownModule } from 'primeng/dropdown';
import { DefaultDropdownDirective } from '@shared/form/directives/default-dropdown.directive';

@Component({
  selector: 'app-add-event-form',
  standalone: true,
  imports: [
    CommonModule,
    ButtonModule,
    ReactiveFormsModule,
    InputTextModule,
    FormControlComponent,
    DropdownModule,
    DefaultDropdownDirective,
  ],
  templateUrl: './create-event-form.component.html',
  styleUrls: ['./create-event-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateEventFormComponent implements OnChanges {
  @Input() data?: Nillable<CreateEventFormData>;

  @Output() submitClickEvent = new EventEmitter<CreateEventFormData>();
  @Output() cancelClickEvent = new EventEmitter<void>();

  /* prettier-ignore */
  readonly form = this.builder.group({
    therapists: this.builder.nonNullable.control<Uuid[]>([]),
    shortTitle: this.builder.nonNullable.control('', [Validators.required, Validators.maxLength(100)]),
  });

  constructor(private readonly builder: FormBuilder) {}

  handleSubmit(): void {
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
}
