//JavaScript does not support abstract classes
//So we cannot have AbstractBuilder

let Builder = function () {
    this.construct = function (builder, name, door, wheels) {
        builder.info(name);
        builder.parts(door, wheels);

        let vehicle = builder.get();
        vehicle.say = function () {
            return `${this.type},${this.name},${this.parts.door},${this.parts.wheels}`;
        }

        return vehicle;
    }
}

let Car = function (name) {
    this.type = "car";
    this.parts = null;
    this.name = name;
}

let Bike = function (name) {
    this.type = "bike";
    this.parts = null;
    this.name = name;
}

let CarBuilder = function () {
    this.vehicle = null;

    this.info = function (name) {
        this.vehicle = new Car(name);
    };

    this.parts = function (door, wheels) {
        this.vehicle.parts = { "door": door, "wheels": wheels };
    };

    this.get = function () {
        return this.vehicle;
    };
}

let BikeBuilder = function () {
    this.vehicle = null;

    this.info = function (name) {
        this.vehicle = new Bike(name);
    };

    this.parts = function (door, wheels) {//ignore inputs
        this.vehicle.parts = { "door": 0, "wheels": 2 };
    };

    this.get = function () {
        return this.vehicle;
    };
}

//------------------------------------------------------------------

test('GOF - Builder Design Pattern', () => {
    let x = new Builder();
    let v = [];
    v.push(x.construct(new CarBuilder(), "A", 4, 6));
    v.push(x.construct(new BikeBuilder(), "B", 400, 400));

    //expect(v.length).toBe(2);
    expect(v.pop().say()).toEqual("bike,B,0,2");
    expect(v.pop().say()).toEqual("car,A,4,6");
});