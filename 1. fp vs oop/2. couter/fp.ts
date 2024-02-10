function newCounter() {
  let count = 0;

  const counter = () => count++;
  return counter
}

const expect  = (v1: number, v2: number) => {
  if(v1 != v2) throw new Error()
}
const counter = newCounter()
const counter2= newCounter()

expect(counter(), 0)
expect(counter(), 1)
expect(counter(), 2)
expect(counter(), 3)
expect(counter2(), 0)
expect(counter(), 4)
