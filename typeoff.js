let array = [
  'Silvi',
  23,
  null,
  true,
  undefined,
  { name: 'Mateo', age: 23 },
  [3, 2, 1],
];

function getTypes(array) {
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    console.log('El elemento ' + element + ' es de tipo: ' + typeof element);
  }
}

getTypes(array);
