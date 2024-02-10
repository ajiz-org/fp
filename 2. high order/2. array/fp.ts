const even = (n: number) => n % 2 == 0
const square = (x: number) => x ** 2
const sum = (a: number, b: number) => a + b

export const getEvenEquareSum = (array: number[]) => array
  .filter(even)
  .map(square)
  .reduce(sum, 0)


