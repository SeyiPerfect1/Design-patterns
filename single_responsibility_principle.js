const fs = require("fs")
const path = require('path')

const filename = path(__dirname, "journal.txt")
class Journal{
    constructor() {
        this.entries = {};
    }

    addEntry(text){
        let c = ++Journal.count;
        let entry = `${c}: ${text}`;
        this.entries[c] = entry;
        return c;
    }

    removeEntry(index){
        delete this.entries[index];
    }

    toString(){
        return Object.values(this.entries).join("\n")
    }
}
Journal.count = 0;

class PersistenceManager{
    saveToFile(journal, filename){
        fs.writeFileSync(filename, journal.toString())
    }
}

let j = new Journal();
j.addEntry("I cried today");
j.addEntry("I ate a bug");
j.addEntry("I love my girl")

console.log(j.toString())
console.log(Journal.myname)

let p = new PersistenceManager()
p.saveToFile(j, filename)
