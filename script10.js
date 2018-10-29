function Shape() {
    this.color = "red";
    this.method = new function () {
        console.log("shape")
    }
}

function Circle(radius) {
    this.radius = radius;
    this.draw = function () {
        console.log("draw");
    }
}

Circle.prototype = new Shape();

let circle = new Circle();