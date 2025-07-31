const numbers = [1, 2, 3, 4];

// la función every() se implementa a un array y hace una verificación para todos los numeros del array, en este caso para saber si todos los elementos del array son positivos
// al primer elemento que no cumpla con la condición va a saltar y dar false

const allPositive = numbers.every(function (value) {
  return value >= 0;
});

console.log(allPositive);
// true

// por otro lado la función some() va a hacer lo mismo que la función de every() pero en este caso al primer elemento que encuentre que cumpla con la condición, va a dar true

const atLeastOnePositive = numbers.some(function (value) {
  return value >= 0;
});

console.log(atLeastOnePositive);
// true
