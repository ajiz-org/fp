const add = (a: number) => (b: number) => a + b;
const multiply = (a: number) => (b: number) => a * b;

type Pipe = <T, U, V>(f: (x: T) => U, g: (x: U) => V) => (x: T) => V

export const pipe: Pipe = (f, g) => x => g(f(x))

const addThenMultiply = pipe(add(10), multiply(2));
console.log(addThenMultiply(5));

export { }




// pipe(f, g)(x) == g(f(x))
// g_f = pipe(f, g)
// g_f(x) === g(f(x))

const pipe2 = <T, U, V>(
    f: (x: T) => U,
    g: (x: U) => V
)=> (x: T): V => g(f(x)) 