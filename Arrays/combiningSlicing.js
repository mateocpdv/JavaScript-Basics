const first = [1, 2, 3];
const second = [4, 5, 6];

// va a juntar los dos arrays
const combined = first.concat(second);

console.log(combined);

// para separar los arrays
const slice = combined.slice(2, 5);
console.log(slice);

// Mismo ejemplo pero con objects

const obj = [{ id: 1 }];
const objcombined = obj.concat(second);
// cambio el id
obj[0].id = 10;
console.log(objcombined);
