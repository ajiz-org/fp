import { Effect, bind, getUrl, log, pure, then, } from './effect.ts'

const bindThen = <T, U>(f: Effect<Promise<T>>, g: (x: T) => Effect<Promise<U>>): Effect<Promise<U>> => bind(
    f, promise => then(promise, g)
)

const bindThenPure = <T, U>(f: Effect<Promise<T>>, g: (x: T) => Promise<U>): Effect<Promise<U>> => bindThen(
    f, x => pure(g(x))
)

const defer = Promise.resolve.bind(Promise)
const async = <T>(effect: Effect<T>): Effect<Promise<T>> => bind(effect, (x) => pure(defer(x)))

const decoder = new TextDecoder()

const getUrlAndLogResponse = (url: string): Effect<Promise<void>> => {
    const arrayBuffer = bindThenPure(
        getUrl(url),
        response => response.arrayBuffer()
    )

    const getBody = bindThenPure(
        arrayBuffer,
        buff => defer(decoder.decode(buff))
    )

    return bindThen(
        getBody,
        body => async(log(body))
    )
}

export const main: Effect<Promise<void>> = getUrlAndLogResponse('http://worldtimeapi.org/api/timezone/Africa/Tunis')

