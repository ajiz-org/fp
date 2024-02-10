import { App, HKT, Type } from "../1hkt/index";
import { Functor } from "../2typeclasses/functor";
import { ArrayHKT, functorArray } from "../3datatypes/array";
import { OptionalHKT, functorOptional } from "../3datatypes/optional";

const normalizeStrings = <M extends HKT<Type, Type>>(strings: App<M, string>, functor: Functor<M>) => functor.map(
    strings, s => s.trim().toLowerCase());

console.log(normalizeStrings<OptionalHKT>(['Some', ' Some Data '], functorOptional))
console.log(normalizeStrings<ArrayHKT>([' Data 1', 'Data 2 '], functorArray))
