let address = {
    city: "Kyiv",
    street: "Shepeleva"
}

function showAddress(address) {
    for (let key in address) {
        console.log(key + " " + address[key]);
    }
}

function createAddress(city, street) {
    return {
        city,
        street
    }
}

function Address(city, street) {
    this.city = city;
    this.street = street;
}

showAddress(createAddress("Kyiv","Shepeleva"));
showAddress(new Address("Lviv", "Franka"));