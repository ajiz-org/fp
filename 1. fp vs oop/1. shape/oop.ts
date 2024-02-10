interface Shape {
  area(): number;
  perimeter(): number;
}

class Square implements Shape {
  constructor(readonly side: number) { }
  area(): number {
    return this.side ** 2;
  }
  perimeter(): number {
    return this.side * 4;
  }
}

class Circle implements Shape {
  constructor(readonly radius: number) { }
  area(): number {
    return Math.PI * this.radius ** 2;
  }
  perimeter(): number {
    return Math.PI * this.radius * 2;
  }
}

function show(shape: Shape) {
  console.log(`
  Area: ${shape.area()}
  Perimeter: ${shape.perimeter()}
  `);
}

const circle = new Circle(5);
const square = new Square(5);

show(circle);
show(square);

export {}


type Animal<T> = {
  makeNoise: (animal: T) => string
}

type Dog = {type: 'dog'}
type Cat = {type: 'Cat'}

const catIsAnimal: Animal<Cat> = {
  makeNoise: (cat) => 'Miaw'
}

const dogIsAnimal: Animal<Dog> = {
  makeNoise: (dog) => 'Dog'
}


const printNoise = <T>(animal: T, impl: Animal<T>) => {
  console.log('the noise:', impl.makeNoise(animal))
}

const cat: Cat = {type: 'Cat'}
printNoise(cat, catIsAnimal)



