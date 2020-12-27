let Singleton = (() => {
    let instance;

    let make = () => {
        return {
            name: "structure",
            value: 1,
            fn: () => {
                console.log("Value is: " + module.exports.Singleton.getInstance().value);
            }
        };
    }

    return {
        getInstance: function () {
            if (!instance) {
                instance = make();
            }
            return instance;
        }
    };
})();

//------------------------------------------------------------------

test('GOF - Singleton Design Pattern', () => {
    let a = Singleton.getInstance();
    let b = Singleton.getInstance();
    expect(a === b).toBe(true); //.toBe ~ ===

    a.value = 2;
    let c = Singleton.getInstance();

    expect(b.value).toBe(2);
    expect(c.value).toBe(2);
});