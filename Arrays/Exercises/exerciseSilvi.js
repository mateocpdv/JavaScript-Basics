const array = [{ name: 'Maria' }, { name: 'Juan' }, { name: 'Pedro' }];

// encontrar y borrar el objeto de name: Juan pero no conozco el indice ni objetos del array
// array.forEach((element, index) => {
//   if (element.name === 'Juan') {
//     // console.log('entro');

//     array.splice(index, 1);
//   }
// });

// console.log(array);

// Borrar el elemento sin usar Foreach usando indexOf

let founded = array.find((e) => {
  return e.name === 'Juan';
});

let indexFound = array.indexOf(founded);

array.splice(indexFound, 1);

console.log(array);
