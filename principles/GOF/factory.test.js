//Structures
let Car = function (name, wheels) {
    this.what = null;
    this.parts = null;
    this.name = name;
    this.wheels = wheels;

    this.say = function () {
        return `Car,${name},${wheels}`;
    }
}

let Bike = function (name) {
    this.what = null;
    this.parts = null;
    this.name = name;
    this.wheels = 2;
}

//Design Patterns
let FactoryMethod = function () {
    this.create = function (what, name, wheels) {
        var vehicle;

        if (what === "car") {
            vehicle = new Car(name, wheels);
        } else if (what === "bike") {
            vehicle = new Bike(name);
        }

        vehicle.what = what;

        vehicle.say = function () {
            return `${this.what},${this.name},${this.wheels}`;
        }

        return vehicle;
    };
}

//this is differ from FactoryMethod design pattern
let AbstractFactory = function () {
    this.create = function (name, wheels) {
        return new Car(name, wheels);
    };
}

//------------------------------------------------------------------

test('GOF - AbstractFactory Design Pattern', () => {
    let x = new AbstractFactory();
    let v = [];
    v.push(x.create("A", 4));
    v.push(x.create("B", 6));

    //.toEqual
    //Compares the values of two variables.
    //If it’s an object or array, 
    //it checks the equality of all the properties or elements

    //Principle: TwoOrMore_UseAFor
    expect(v.pop().say()).toEqual("Car,B,6");
    expect(v.pop().say()).toEqual("Car,A,4");
});

//------------------------------------------------------------------

test('GOF - Factory Method Design Pattern', () => {
    let x = new FactoryMethod();
    let v = [];
    v.push(x.create("bike", "A", 400));
    v.push(x.create("car", "B", 4));

    expect(v.pop().say()).toEqual("car,B,4");
    expect(v.pop().say()).toEqual("bike,A,2");
});