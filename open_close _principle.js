let color = Object.freeze({
    red: 'red',
    green: "green",
    blue: "blue"
});

let size = Object.freeze({
    small: 'small',
    medium: 'medium',
    large: 'large'
})


class Product{
    constructor(name, color, size){
        this.name = name;
        this.color = color;
        this.size = size;
    }
}

//a class is open for extention but closed for modification
class ProductFilter{
    filterByColor(products, color){
        return products.filter(p => p.color === color);
    }


    // state space explosion

    // filterByColor(products, size){
    //     return products.filter(p => p.size === size);
    // }

    // filterByColor(products, size, color){
    //     return products.filter(p => p.size === size && p.color = color);
    // }
}


class ColorSpecification{


    isSatisfied(item){
        return item.color === this.color
    }
}

class SizeSpecification{
    constructor(size){
        this.size = size;
    }

    isSatisfied(item){
        return item.size === this.size
    }
}

class AndSpecification{
    constructor(...specs){
        this.specs = specs;
    }

    isSatisfied(item){
        return this.specs.every(x => x.isSatisfied(item))
    }
}

let apple = new Product('Apple', color.green, size.small);
let tree = new Product('Tree', color.green, size.large);
let house = new Product('House', color.blue, size.larage);

let products = [apple, tree, house]; 

let pf = new ProductFilter();
console.log(`Green products (old):`)
for (let p of pf.filterByColor(products, color.green)){
    console.log(` * ${p.name} is green`);
}


class BetterFilter{
    filter(items, spec){
        return items.filter(x => spec.isSatisfied(x));
    }
}

let bf = new BetterFilter();
console.log(`Green products (new):`);
for (let p of bf.filter(products, new ColorSpecification(color.green))){
    console.log(` * ${p.name} is green`)
}

console.log(`Large and green products:`);
let spec = new AndSpecification(
    new ColorSpecification(color.green), new SizeSpecification(size.large)
);

for (let p of bf.filter(products, spec)){
    console.log(` * ${p.name} is large and green`)
}
