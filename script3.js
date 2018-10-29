let arrray = [2, 5, 10];

let object = {
    age: 10,
    sex: "male"
}

for (let number in object) {
    console.log(number);
}


let number = 1;
let color = "red";
let obj = {
    age: 10
}

function somef(a,b,c) {
    a = 2;
    b = "green";
    c.age = 20;
}

somef(number, color, obj);   // number and color are primitives so when they are passed to function their values are copied
                            // but obj is an object and it's memory address is copied and as a result a reference to original object is passed.

console.log(number);
console.log(color);
console.log(obj);