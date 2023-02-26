import { ValidationErrorParam } from '@shared/form/enums/validation-error-param';

export type ValidationErrorParams = {
  [key in ValidationErrorParam]: string | number;
};
