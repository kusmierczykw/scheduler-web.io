import { MonoTypeOperatorFunction, take } from 'rxjs';

export const once = <Input>(): MonoTypeOperatorFunction<Input> => take(1);
