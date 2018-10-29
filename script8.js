function Circle() {
    this.draw = function() {
        console.log("circle");
    }
}

let anothermethod = {
    antoherMethod: function() {
        console.log("somethind");
    }
}

Object.assign(Circle.prototype, anothermethod);