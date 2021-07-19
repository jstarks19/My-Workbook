

function Person() {
    this.name = 'jason';
}

Person.prototype.sayName = function() {
    console.log(`My name is ${this.name}`);
};


let jason = new Person();

jason.sayName();


// DEMONSTRATES WHY STANDARD OBJECTS ARE NOT TO BE USED FOR MAPS
    // this inherits from Object.prototype
let x = {};
x.toString = function() {
    return 'hi';
}
console.log("toString" in x);
    // small caveat
        // if you use x.keys, you will only get a list of X's properties, so this is a small way to avoid it


    // this inherits nothing, you create the object a new
let y = Object.create(null);
console.log(y);

    // this also avoids the issue, bc JS thought of this lol
let z = new Map();
z[1] = 2;
z.set(2,3);
console.log(z);


class Dog {
    constructor() {
        this.name = "hi";
        this.age = 10;
        this.weight = 100;
    }


}

Dog.prototype.toString = function() {
    return `Name: ${this.name}, Age: ${this.age}`;
}

let dg = new Dog();
console.log(String(dg));