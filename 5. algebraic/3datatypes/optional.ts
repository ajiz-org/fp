import { match } from "../../3. pattern matching/1. unions/enum";
import { Enum } from "../../3. pattern matching/1. unions/type";
import { HKT, I, Type } from "../1hkt/index";
import { Functor } from "../2typeclasses/functor";

type Optional<T> = Enum<{ Empty: {}, Some: T }>

export interface OptionalHKT extends HKT {
  readonly out: Optional<I<Type, this>>;
}

export const functorOptional: Functor<OptionalHKT> = {
  map: <T, V>(x: Optional<T>, f: (x: T) => V) => match(x)<Optional<V>>({
    Empty: () => ['Empty', {}],
    Some: (v) => ['Some', f(v)]
  })
}

