const classicAdd = (x: number, y: number) => x + y

const curryAdd = (x: number) => (y: number) => x + y

const applyToMyArray = (mapper: (x: number) => number) => {
    const myArray = [3, 6, 2, 6, 7]
    return myArray.map(mapper)
}

// classic

const res1 = applyToMyArray(x=> classicAdd(3, x))

// curry

const res2 = applyToMyArray(curryAdd(3))

// exercice create curry function

