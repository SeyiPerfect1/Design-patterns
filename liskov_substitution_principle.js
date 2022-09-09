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