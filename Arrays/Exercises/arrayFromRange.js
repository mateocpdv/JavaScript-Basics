// Hacer una función que reciba 2 parametros (min,max) que esos van a ser los rangos en los que me va a devolver la funcion

const numbers = arrayFromRange(-10, -4);

console.log(numbers);

function arrayFromRange(min, max) {
  const arr = [];
  for (let i = min; i <= max; i++) {
    arr.push(i);
  }
  return arr;
}
