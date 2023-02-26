import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ValidationErrors } from '@angular/forms';
import { ErrorComponent } from '@shared/error/ui/error.component';
import { ControlErrorMessagesPipe } from '@shared/form/pipes/control-error-messages.pipe';

@Component({
  selector: 'app-form-control-errors',
  standalone: true,
  imports: [CommonModule, ErrorComponent, ControlErrorMessagesPipe],
  templateUrl: './form-control-errors.component.html',
  styleUrls: ['./form-control-errors.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormControlErrorsComponent {
  @Input() errors!: ValidationErrors;
}
