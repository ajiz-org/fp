const add = (x: number, y: number) => x + y


const testPure = () => {
  const call1 = add(1, 2)
  const call2 = add(1, 2)
  if (call1 != call2) {
    throw new Error('Unexpected')
  }
}

const makeCounter = (n = 0) => () => n++

const testImpure1 = () => {
  const counter = makeCounter()
  const call1 = counter()
  const call2 = counter()
  if (call1 == call2) {
    throw new Error('Unexpected')
  }

}

const random = () => Math.random()

const testImpure2 = () => {

  const call1 = random()
  // can't predict call1
  if (call1 == 0.5) {
    throw new Error('Unexpected')
  }
}


testPure()
testImpure1()
testImpure2()

export { }