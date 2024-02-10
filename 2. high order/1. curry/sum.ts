const sum = (x: number, y: number) => x + y


const applyToMyArray = (mapper: (x: number) => number) => {
    const myArray = [3, 6, 2, 6, 7]
    return myArray.map(mapper)
}



// classic

const res1 = applyToMyArray(x => sum(3, x))

// curry
const add = (x: number) => (y: number) => x + y

const res2 = applyToMyArray(add(3))


const log_many = (x: string)=> {
    console.log(x)
    return log_many
}

log_many('hello')('world')

// exercice create curry function

const curry = <T, U, V>(
    f: (x: T, y: U) => V
) => (x: T) => (y: U): V => {
    return f(x, y)
}

sum(3, 4)
const add3 = add(3)




const difficultConstruct = ()=> {
    // a lot of code
    return curry(sum)
}

const add_ = difficultConstruct()

console.log(add_(4)(9))

const add3_4 = add3(4)