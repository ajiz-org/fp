export interface HKT<in Dom = unknown, out Im = unknown> {
    readonly in: (x: Dom) => void;
    readonly out: Im;
}

export type App<F extends HKT<X>, X> = (F & {
    readonly in: (x: X) => void;
})['out'];


type Func<Dom, X extends Dom> = (x: X) => void

export type I<Dom, F extends HKT<Dom>> = F['in'] extends Func<Dom, infer X>
    ? X
    : never;

export type Type = unknown