// The Liskov Substitution Principle (LSP) is one of five SOLID 
// object-oriented design principles. It states that a superclass object should be 
// replaceable with a subclass object without breaking the functionality of the software.

// This principle ensures that inheritance (one of the OOP principles) is used correctly. 
// If an override method does nothing or just throws an exception, then you're probably violating the LSP. 
// The classic example of the inheritance technique causing problems is the circle-elipse problem (a.k.a the rectangle-square problem) which is a is a violation of the Liskov substitution principle.

class Rectangle
{
  constructor(width, height)
  {
    this._width = width;
    this._height = height;
  }

  get width() { return this._width; }
  get height() { return this._height; }

  set width(value) { this._width = value; }
  set height(value) { this._height = value; }

  get area()
  {
    return this._width * this._height;
  }

  toString()
  {
    return `${this._width}×${this._height}`;
  }
}

class Square extends Rectangle
{
  constructor(size)
  {
    super(size, size);
  }

  set width(value)
  {
    this._width = this._height = value;
  }

  set height(value)
  {
    this._width = this._height = value;
  }
}

let useIt = function(rc)
{
  let width = rc._width;
  rc.height = 10;
  console.log(
    `Expected area of ${10*width}, ` +
    `got ${rc.area}`
  );
};

let rc = new Rectangle(2,3);
useIt(rc);

let sq = new Square(5);
useIt(sq);