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

function showShapeCharacteristics<T>(shape: T, instance: Shape<T>) {
  console.log(`
  Area: ${instance.area(shape)}
  Perimeter: ${instance.perimeter(shape)}
  `);
}
const circle: Circle = { radius: 5 };
const square: Square = { side: 5 };

showShapeCharacteristics(circle, circleShape);
showShapeCharacteristics(square, squareShape);


export { }