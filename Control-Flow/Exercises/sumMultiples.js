// hacer una funcion que reciba un numero y que sume los numeros multiplos de 3 y de 5

console.log(sum(15));

/*
function sum(limit) {
  let numeros = [];
  for (let i = 0; i <= limit; i++) {
    if (i % 5 === 0 && i % 3 === 0) {
      numeros.push(i);
    } else if (i % 3 === 0 || i % 5 === 0) {
      numeros.push(i);
    }
  }
  let total = numeros.reduce((a, b) => a + b, 0);
  return total;
}
*/
function sum(limit) {
  let sum = 0;
  for (let i = 0; i <= limit; i++) {
    if (i % 5 === 0 && i % 3 === 0) {
      sum += i;
    } else if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
    }
  }
  return sum;
}
