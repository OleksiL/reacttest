class Car {
    color:string;
    constructor() {
        this.color = "red";
    }
    draw():void {
        console.log(this.color);
    }
}

const car1 = new Car();
car1.draw();

interface MyVar {
    name:string;
    age:number;
}

const person:MyVar = {
    name: "bob",
    age: 30
}

