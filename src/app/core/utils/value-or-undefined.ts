import { isNil, Nillable } from '@core/utils/nil/nillable';

export function valueOrUndefined<Type>(
  value: Nillable<Type>
): Type | undefined {
  if (isNil(value)) {
    return undefined;
  }

  return value;
}
