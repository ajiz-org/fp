type PrimEffect<T> = () => T
export type Effect<T> = { _?: T }

export const bind = <T, U>(f: Effect<T>, g: (x: T) => Effect<U>): Effect<U> => {
    const f2 = f as PrimEffect<T>
    const g2 = g as (x: T) => PrimEffect<U>
    const h: PrimEffect<U> = () => g2(f2())()
    return h as Effect<U>
}


export const log = (x: string): Effect<void> => {
    const effect = () => console.log(x)
    return effect as Effect<void>
}


export const then = <T, V>(x: Promise<T>, cb: (x: T) => Effect<Promise<V>>): Effect<Promise<V>> => {
    const cb2 = cb as (x: T) => PrimEffect<Promise<V>>
    const effect: PrimEffect<Promise<V>> = () => x.then(x => cb2(x)())
    return effect as Effect<Promise<V>>
}

export const getUrl = (url: string): Effect<Promise<Response>> => {
    const effect: PrimEffect<Promise<Response>> = () => fetch(url)
    return effect as Effect<Promise<Response>>
}

export const pure = <T>(x: T): Effect<T> => {
    const effect = () => x
    return effect as Effect<T>
}