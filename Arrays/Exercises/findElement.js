// Escribe una función que determina si la letra que se le pasa como argumento se encuentra contenida
// dentro de un array de letras que se le pasa como segundo argumento.
// Se trata de resolverlo sin usar métodos del objeto array, solo el dato tipo array.

let array = ['w', 'f', 'g', 'p'];

function existIn(find, arr) {
  let isFind = false;
  for (const e of arr) {
    if (e === find) {
      isFind = true;
    }
  }
  return isFind;
}

console.log(existIn('p', array));
