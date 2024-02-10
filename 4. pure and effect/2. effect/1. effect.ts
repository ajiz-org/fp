type Effect<T> = () => T


const log = (x: string): Effect<void> => () => console.log(x)

const getUrl = (url: string): Effect<Promise<Response>> => () => fetch(url)


const pipe = <T, V>(op1: Effect<T>, op2: (x: T) => Effect<V>): Effect<V> => () => op2(op1())()

const pure = <T>(x: T): Effect<T> => () => x

const after = <T, V>(op1: Effect<Promise<T>>, op2: (x: T) => Effect<Promise<V>>): Effect<Promise<V>> => () => op1().then(x => op2(x)())

const decoder = new TextDecoder();

const getUrlAndLogResponse = (url: string): Effect<Promise<void>> => {
    const readBuffer = after(
        getUrl(url),
        response => pure(response.arrayBuffer())
    )
    const logBuffer = (buffer: ArrayBuffer) => pipe(
        log(decoder.decode(buffer)),
        () => pure(Promise.resolve())
    )
    return after(
        readBuffer,
        logBuffer
    )
}


const exec = (effect: Effect<Promise<void>>) => effect()

const main = async () => {
    await exec(getUrlAndLogResponse('https://example.com'))
}

main()

export { }