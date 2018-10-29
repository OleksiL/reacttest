
function Circle() {
    this.draw = function() {
        console.log("circle");
    }
}

function Squere() {
    this.draw = function() {
        console.log("squere");
    }
}


let arr = [new Circle(), new Squere()];

for (let arrElement of arr) {
    arrElement.draw();
}