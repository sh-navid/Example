let Touch = function (bridge) {
    this.bridge = bridge;
    this.swipeLeft = function () { this.bridge.goLeft(); }
    this.swipeRight = function () { this.bridge.goRight(); }
};

let Mouse = function (bridge) {
    this.bridge = bridge;
    this.moveLeft = function () { this.bridge.goLeft(); }
    this.moveRight = function () { this.bridge.goRight(); }
};

let GameCanvas = function () {
    this.x = 50;
    this.goLeft = function () { this.x-- }
    this.goRight = function () { this.x++ }
};

//------------------------------------------------------------------

test('GOF - Bridge Design Pattern', () => {
    var canvas = new GameCanvas();
    var touch = new Touch(canvas);
    var mouse = new Mouse(canvas);

    touch.swipeLeft();
    touch.swipeLeft();
    expect(canvas.x).toEqual(48);

    mouse.moveRight();
    mouse.moveRight();
    expect(canvas.x).toEqual(50);
});