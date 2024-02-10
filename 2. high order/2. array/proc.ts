export const getEvenEquareSum = (array: number[]) => {
  let sum = 0
  for (const item of array) {
    if (item % 2 == 0) {
      sum += item ** 2
    }
  }
  return sum
}


