var Car = /** @class */ (function () {
    function Car() {
        this.color = "red";
    }
    Car.prototype.draw = function () {
        console.log(this.color);
    };
    return Car;
}());
var car1 = new Car();
car1.draw();
var person = {
    name: "bob",
    age: 30
};
