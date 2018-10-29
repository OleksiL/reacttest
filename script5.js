function Shape() {
    this.color = "red";
}

function Circle(radius) {
    Shape.call(this);
    this.radius = radius;
}

Shape.prototype.draw = function() {console.log("draw")};

Circle.prototype = Object.create(Shape.prototype);

let circle = new Circle(1);