class Document {

}

class Machine{
    constructor(){
        if(this.constructor.name === "machine") {
            throw new Error('Machine is abstract');
        }
    }

    print(doc) {

    };

    fax(doc) {

    };

    scan(doc) {

    };


}

class MultiFunctionPrinter extends Machine {
    print(doc) {
        //
    }

    fax(doc) {
        //
    }

    scan(doc) {
        //
    }
}


class NotimplementedError extends Error{
    constructor(name){
        let msg = `${name} is not implemented!`;
        super(msg);
        if(Error.captureStackTrace)
            Error.captureStackTrace(this, NotimplementedError)
    }
}

class OldFashionPrinter {
    print(doc) {
        // ok
    }

    // fax(doc) {
    //     // fo nothig
    //     // principle of least suprise
    // }

    scan(doc) {
        throw new NotimplementedError("OldFashionPrinter.scan");
    }

}


//ISP method => segregation(split up)
class Printer {
    constructor(){
        if(this.constructor.name === "printer")
            throw new Error("Printer is abstact!")
    }

    print() {

    }
}

class Scanner {
    constructor(){
        if(this.constructor.name === "scanner")
            throw new Error("scanner is abstact!")
    }

    scan() {
        
    }
}

class Photocopier{
    print(){

    }

    scan(){
        
    }
}


let printer = new OldFashionPrinter();
printer.scan()
