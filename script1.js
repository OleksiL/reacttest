console.log('hello');

let person = {
    name: 'John',
    age: 30
}

let arrEx = ['red', 'blue'];
console.log(arrEx[0]);

console.log(person['name']);

function funEx (name) {
    console.log('Hello ' + name);
}

funEx('Oleksii');

true == 1 ? console.log("truee") : console.log('false');

for(let prop in person) {
    console.log(person[prop]);
}

let myarr = ['red', 'blue', 'green'];

for (let myarrKey in myarr) {
    console.log(myarrKey, myarr[myarrKey]);
}

function bigger (var1, var2) {
    console.log(var1 > var2 ? var1 : var2);
}

bigger(3, 5);

function star (number) {
    for (var i = 0; i < number; i++) {
        let star = '*';
        for (var j = 0; j < i; j++) {
            star = star + '*';
        }

        console.log(star);
    }
}

star(5);

function showPrimes(limit) {
    for (var number = 2; number < limit; number++) {
        let prime = true;
        for (var factor = 2; factor < number; factor++) {
            if (number % factor == 0)
            {
                prime = false;
                break;
            }
        }
        if(prime)
            console.log(number);
    }
}


showPrimes(10);

console.log(9 % 3);


function createCircle(radius) {
    return {
        radius,
        draw() {
            console.log("circle");
        }
    }
}

let circle1 = createCircle(2);
console.log(circle1.draw());

let a1 = {
    radius: 1
}

let a2 = {
    color: 'red'
}

let a3 = {...a1, ...a2};

console.log(a3);