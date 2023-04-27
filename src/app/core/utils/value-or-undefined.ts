import { Nillable } from '@core/utils/nil/nillable';
import { isNil } from '@core/utils/nil/is-nil';

export function valueOrUndefined<Type>(
  value: Nillable<Type>
): Type | undefined {
  if (isNil(value)) {
    return undefined;
  }

  return value;
}
