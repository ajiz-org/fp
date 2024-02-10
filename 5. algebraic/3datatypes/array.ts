import { HKT, I, Type } from "../1hkt/index";
import { Functor } from "../2typeclasses/functor";


export interface ArrayHKT extends HKT {
  readonly out: Array<I<Type, this>>;
}

export const functorArray: Functor<ArrayHKT> = {
  map: <T, V>(x: Array<T>, f: (x: T) => V) => x.map(f)
}

