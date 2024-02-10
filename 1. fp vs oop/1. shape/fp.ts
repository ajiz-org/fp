interface Shape<T> {
  area: (shape: T) => number;
  perimeter: (shape: T) => number;
}

type Square = { side: number }
type Circle = { radius: number }

const squareShape: Shape<Square> = {
  area: square => square.side ** 2,
  perimeter: square => square.side * 4
}
const circleShape: Shape<Circle> = {
  area: square => Math.PI * square.radius ** 2,
  perimeter: square => Math.PI * square.radius * 2
}

function show<T>(shape: T, {area, perimeter}: Shape<T>) {
  console.log(`
  Area: ${area(shape)}
  Perimeter: ${perimeter(shape)}
  `);
}
const circle: Circle = { radius: 5 };
const square: Square = { side: 5 };

show(circle, circleShape);
show(square, squareShape);

type Show<T> = {
  show: (x: T) => string
}

type Person = {
  name: string;
  age: number
}

const showPerson: Show<Person> = {
  show: person => `Une personne qui s'appelle ${person.name} et don't lage = ${person.age}`
}

const print = <T>(x:T, impl: Show<T>)=>console.log(impl.show(x))

const ali: Person = {name:'Ali', age: 4}
print(ali, showPerson)

const showShape = <T>(impl: Shape<T>): Show<T> => ({
  show: (x: T) => `
  Area: ${impl.area(x)}
  Perimeter: ${impl.perimeter(x)}
  `
})

const showSquare: Show<Square> = showShape(squareShape)

print(square, showSquare)

export { }