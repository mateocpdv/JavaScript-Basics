// Escribe una función que pueda devolver el valor más pequeño de un array numérico o el índice de ese valor. El segundo parámetro de la función dirá si debe devolver el valor ("v") o el índice ("i"). No uses métodos del objeto array.
// Se supone que el primer parámetro siempre será una matriz llena con al menos 1 número y sin duplicados.
// Se suponer el segundo parámetro será una letra con uno de dos valores: 'v' 'i'

let array = [10, 4, 6, 7, 3, -19, 104];

function min(array, seg) {
  let min = Math.min(...array);
  let index = array.indexOf(min);
  if (seg === 'v') {
    console.log('El valor es:', min);
  } else console.log('El indice del valor es:', index);
}

console.log(min(array, 'i'));
