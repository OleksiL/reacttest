function extend(Child, Parent) {
    Child.prototype = Object.create(Parent.prototype);
    Child.prototype.constructor = Child;
}

function Shape() {}

function Circle() {}

function Squere() {}

Shape.prototype.draw = function () {
    console.log("shape");
}

extend(Circle, Shape);
extend(Squere, Shape);


Squere.prototype.draw = function() {
    console.log("circle");
}

Circle.prototype.draw = function() {
    console.log("squere");
}


let arr = [new Circle(), new Squere()];

for (let arrElement of arr) {
    arrElement.draw();
}