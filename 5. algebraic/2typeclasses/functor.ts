import type { App, HKT, Type } from "../1hkt/index";

export interface Functor<M extends HKT<Type, Type>> {
    map<T, V>(x: App<M, T>, f: (x: T)=>V): App<M, V>
}

