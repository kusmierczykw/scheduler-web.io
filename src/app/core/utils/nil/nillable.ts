type Nil = null | undefined;
export type Nillable<Type> = Type | Nil;

export function isNil<Type>(predictable: Nillable<Type>): predictable is Nil {
  return predictable === undefined || predictable === null;
}
