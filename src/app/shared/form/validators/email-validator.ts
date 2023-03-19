import { ValidatorFn } from '@angular/forms';
import { ValidationError } from '@shared/form/enums/validation-error';
import { isEmptyString } from '@core/utils/string/is-empty-string';

//RFC 5322 Official Standard
export const emailValidator = (): ValidatorFn => {
  const regExp = new RegExp(
    `^(?:[a-z0-9!#$%&'*+/=?^_\`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_\`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)])$`
  );

  return control => {
    const { value } = control;

    if (isEmptyString(value)) {
      return null;
    }

    const isValid = regExp.test(value);

    if (isValid) {
      return null;
    }

    return {
      [ValidationError.Email]: true,
    };
  };
};
