let Prototype = function (proto) {
    this.proto = proto;

    this.clone = function () {
        var c = new Class();
        c.data = proto.data;
        return c;
    };
}

let Class = function (data) {
    this.data = data;
}

test('GOF - Prototype Design Pattern', () => {
    let object = new Class(200);
    let prototype = new Prototype(object);

    let clone1 = prototype.clone();
    let clone2 = prototype.clone();

    expect(clone1.data).toEqual(200);
    expect(clone2.data).toEqual(200);

    clone2.data = 1000;
    let clone3 = new Prototype(clone2).clone();
    expect(clone1.data).toEqual(200);
    expect(clone2.data).toEqual(1000);
    expect(clone3.data).toEqual(1000);
});