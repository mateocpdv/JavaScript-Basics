// Sin usar métodos del objeto array, diseña una función llamada sumaLista() capaz de sumar todos los números que forman el array que se le pase como argumento.

const array1 = [1, 2, 3, 4, 5];

const array2 = [6, 7, 8, 9];

function sumaLista(list) {
  let sum = 0;
  for (const element of list) {
    sum += element;
  }
  return sum;
}

console.log(sumaLista(array2));
