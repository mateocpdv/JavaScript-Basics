// let address = {
//   street: 'a',
//   city: 'b',
//   zipCode: 'c',
// };

// Factory Function

let address = createAddress('a', 'b', 'c');
console.log(address);

function createAddress(street, city, zipCode) {
  return {
    street,
    city,
    zipCode,
  };
}

// Constructor Function
function CreateAdress(streett, cityy, zipcodee) {
  (this.street = streett), (this.city = cityy), (this.zipCode = zipcodee);
}

let direction = new CreateAdress('c', 'b', 'a');
console.log(direction);
