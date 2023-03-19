import { Injectable } from '@angular/core';
import { ValidationError } from '@shared/form/enums/validation-error';
import { isNil, Nillable } from '@core/utils/nil/nillable';
import { ControlErrorMessageEntryNotFoundException } from '@shared/form/exceptions/control-error-message-entry-not-found.exception';
import { ValidationErrorParams } from '@shared/form/types/validation-error-params';

@Injectable({
  providedIn: 'root',
})
export class ControlErrorMessageProviderService {
  /* prettier-ignore */
  private readonly entries = new Map<ValidationError, (params?: Nillable<ValidationErrorParams>) => string>([
    [ValidationError.Required, (): string => 'To pole jest wymagane.'],
    [ValidationError.MinLength, (params): string => `To pole powinno zawierać przynajmniej ${params?.requiredLength} znaków.`],
    [ValidationError.MaxLength, (params): string => `To pole powinno zawierać maksymalnie ${params?.requiredLength} znaków.`],
    [ValidationError.Email, (): string => `Adres email jest niepoprawny.`],
  ]);

  message(
    key: ValidationError,
    params?: Nillable<ValidationErrorParams>
  ): string {
    const message = this.entries.get(key);

    if (isNil(message)) {
      throw new ControlErrorMessageEntryNotFoundException(key);
    }

    return message(params);
  }
}
