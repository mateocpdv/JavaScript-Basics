const numbers = [1, -1, 2, 3];

// let sum = 0;
// for (let n of numbers) {
//   sum += n;
// }

// Se hace lo mismo con un método llamado reduce()

//

const sum = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}); // si este 0 no está, el accumulator toma el valor del primer numero del array
console.log(sum);
