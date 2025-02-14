// ejecutar una funcion que reciba como parametro 2 arrays, uno el array a recorrer y el otro va a tener los elementos que deseo eliminar del primer array

const numbers = [1, 2, 3, 4, 1, 1];

const output = except(numbers, [1, 2]);

console.log(output);

function except(array, excluded) {
  return array.filter((item) => !excluded.includes(item));
}
