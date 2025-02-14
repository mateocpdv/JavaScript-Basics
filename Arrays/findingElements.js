const numbers = [1, 2, 3, 1, 4];

// si encuentra el numero que se le pasa por parámetro va a devolver el indice donde se encuentra
// por lo contrario  va a devolver un -1
console.log(numbers.indexOf(1));

// Devuelve el numero del ultimo index de donde se encuentra el número
console.log(numbers.lastIndexOf(1));

// Para demostrar si el numero existe en el array, si devuelve un true quiere decir que si lo encontro
console.log(numbers.indexOf(1) !== -1);

// Una mejor manera de hacer ↑ es
console.log(numbers.includes(1));

// si intento buscar un objeto dentro de un array de objetos me va a dar false porque el espacio en memoria no es el mismo

const courses = [
  { id: 1, name: 'a' },
  { id: 2, name: 'b' },
];

// Se puede buscar un objeto y devolver el objeto creando ↓
const course = courses.find(function (course) {
  return course.name === 'a';
});

console.log(course);

// console.log(course);
