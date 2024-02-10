import fetch, { Response } from 'node-fetch';

type PrimEffect<T> = () => T
export type Effect<T> = { _?: T }

const run = <T>(f: Effect<T>) => (f as PrimEffect<T>)()
const out = <T>(f: PrimEffect<T>) => f as Effect<T>

export const bind = <T, U>(f: Effect<T>, g: (x: T) => Effect<U>): Effect<U> => {
    return out(() => run(g(run(f))))
}


export const log = (x: string): Effect<void> => {
    return out(() => console.log(x))
}


export const then = <T, V>(x: Promise<T>, cb: (x: T) => Effect<Promise<V>>): Effect<Promise<V>> => {
    return out(() => x.then(x => run(cb(x))))
}

export const getUrl = (url: string): Effect<Promise<Response>> => {
    return out(() => fetch(url))
}

export const pure = <T>(x: T): Effect<T> => {
    return out(() => x)
}