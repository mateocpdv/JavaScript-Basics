const numbers = [1, 2, 3];

// normalmente usamos el for of

for (const number of numbers) {
  console.log(number);
}
// 1
// 2
// 3

// numbers.forEach(function (number) {
//   console.log(number);
// });

// usando arrow function ↓

// al usar index como segundo parametro puedo usarlo para saber el index de cada posicion
numbers.forEach((number, index) => console.log('foreach', index, number));
// foreach 0 1
// foreach 1 2
// foreach 2 3