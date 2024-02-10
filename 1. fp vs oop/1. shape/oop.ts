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

function showShapeCharacteristics(shape: Shape) {
  console.log(`
  Area: ${shape.area()}
  Perimeter: ${shape.perimeter()}
  `);
}

const circle = new Circle(5);
const square = new Square(5);

showShapeCharacteristics(circle);
showShapeCharacteristics(square);

export {}