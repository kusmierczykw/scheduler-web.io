import { Pipe, PipeTransform } from '@angular/core';
import { ControlErrorMessageProviderService } from '@shared/form/providers/control-error-message-provider.service';
import { ValidationErrors } from '@angular/forms';
import { ValidationError } from '@shared/form/enums/validation-error';

@Pipe({
  name: 'controlErrorMessages',
  standalone: true,
})
export class ControlErrorMessagesPipe implements PipeTransform {
  constructor(private readonly provider: ControlErrorMessageProviderService) {}

  transform(errors: ValidationErrors): string[] {
    const validationErrors = Object.keys(errors) as ValidationError[];

    return validationErrors.map(error =>
      this.provider.message(error, errors[error])
    );
  }
}
