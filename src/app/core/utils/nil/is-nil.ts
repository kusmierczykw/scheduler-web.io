import { Nil } from '@core/utils/nil/nil';
import { Nillable } from '@core/utils/nil/nillable';

export function isNil<Type>(predictable: Nillable<Type>): predictable is Nil {
  return predictable === undefined || predictable === null;
}
