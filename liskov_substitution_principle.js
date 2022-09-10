// The Liskov Substitution Principle (LSP) is one of five SOLID 
// object-oriented design principles. It states that a superclass object should be 
// replaceable with a subclass object without breaking the functionality of the software.

// This principle ensures that inheritance (one of the OOP principles) is used correctly. 
// If an override method does nothing or just throws an exception, then you're probably violating the LSP. 
// The classic example of the inheritance technique causing problems is the circle-elipse problem (a.k.a the rectangle-square problem) which is a is a violation of the Liskov substitution principle.

class Rectangle{
    constructor(width, height){
        this.width = width;
        this.height = height;
    }

    get area(){
        return this.width * this.height
    }

    toString(){
        return `${this.width}x${this.height}`
    }
}

class Square extends Rectangle{
    constructor(size){
        super(size, size)
    }
}


let rc = new Rectangle(2, 3);
console.log(rc.toString());

let sq = new Square(5);
console.log(sq.toString())
console.log(rc.area)