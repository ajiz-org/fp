const mutSquareArray = (arr: number[]) => {
  for (let i = 0; i < arr.length; i++) {
    arr[i] **= 2
  }
  return arr
}

const immutSquareArray = (arr: number[]) => {
  return arr.map(x => x ** 2)
}


const testPure = () => {
  const arr = [1, 2, 3]
  const initialState = arr[1]
  immutSquareArray(arr)
  const newState = arr[1]
  if (initialState != newState) {
    throw new Error('Unexpected')
  }
}

const testImpure = () => {
  const arr = [1, 2, 3]
  const initialState = arr[1]
  mutSquareArray(arr)
  const newState = arr[1]
  if (initialState == newState) {
    throw new Error('Unexpected')
  }
}

testPure()

testImpure()

export { }







const map = <T, V>(input: T[], f: (x: T) => V, i: number, result: V[]): V[] => {
  if (input.length == 0) return []
  return map(input, f, i + 1, [...result, f(input[i])])
}



const fact = (x: number): number => {
  if (!x) return 1
  return x * fact(x - 1)
}