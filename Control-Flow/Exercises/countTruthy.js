//Falsy
// undefined
// null
// ''
// false
// 0
// NaN

//Hacer una funcion que devuelva todos los valores truthy de un array
const array = [2, 3, 0, null, undefined, '', 4, 45, 43, true];
console.log(countTruthy(array));
/*
function countTruthy(array) {
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    let pos = array[i];

    if (pos) {
      count++;
    }
  }
  console.log(count);
}
*/

function countTruthy(array) {
  let count = 0;
  for (let value of array) {
    if (value) count++;
  }
  return count;
}
