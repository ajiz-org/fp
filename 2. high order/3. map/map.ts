function map<T, U>(array: T[], transform: (item: T) => U): U[] {
  const result: U[] = [];
  for (const item of array) {
    result.push(transform(item));
  }
  return result;
}

const numbers = [1, 2, 3, 4];
const squaredNumbers = map(numbers, num => num * num);
console.log(squaredNumbers);

