//console.log("javascript file");

let name = 'Botin';
console.log(name);

// Cannot be a reserved keyword
// Should be meaningful and descriptive
// Cannon start with a number
// Cannot contain a space or hyphen (-)
// Are case-SenSitIve

/* -------------Constants-------------*/

const interestRate = 0.3;
//interestRate = 1; /*No se puede asignar la variable porque const es constante*/
console.log(interestRate);

/*-------------Primitive Types -------------
 for example: String, Number, Boolean, undefined, null
 */

let named = 'Mosh'; //String Literal
let age = 40; //Number Literal
let isApproved = true; // Boolean Literal
let firstName = undefined; //undefined
let selectedColor = null; //Inicializo una variable en null para luego asignarle un valor

// -------------Dynamic Typing-------------
/* El tipo de variables puede cambiar con el asignamiento */

//-------------Objets-------------
// Objeto tiene propiedades

let person = {
  name: 'Mosh',
  age: 30,
};

// -------------Dot Notation-------------
person.name = 'John';

//-------------Bracket Notation-------------
person['name'] = 'Mary';
//or
let selection = 'Maria';
person[selection] = 'Marry';
console.log(person);

// -------------Arrays-------------: representa una lista de items
let selectedColors = ['red', 'blue'];
// el lenght del array puede cambiar, por ejemplo
selectedColors[2] = 'green';
// puede tener diferentes types de objetos dentro del array, por ejemplo
selectedColors[3] = 1;
console.log(selectedColors);

// -------------Functions-------------
/* Se le pueden agregar parametros*/
function greet(name, lastName) {
  console.log('Hello ' + name + ' ' + lastName);
}
greet('Juan', 'Cenna');
greet('Maria', 'Antoniete');

//-------------Types of functions-------------
//Calculates a value
function square(number) {
  return number * number;
}

console.log(square(2));

// -------------Operations-------------

//------------- Arithmetic Operators-------------

/* let x = 10;
let y = 3; */

/* console.log(x + y);
  console.log(x - y);
  console.log(x * y);
  console.log(x / y);
  console.log(x % y);
  console.log(x ** y); */

//-------------Increment (++)-------------
// Por delante de la x se incrementa antes de mostrarlo en consola
//console.log(++x);
// Por detras de la x se incrementa después de mostrarlo en consola
//console.log(x++);

//-------------Decrement (--) lo mismo que con el Increment-------------
//console.log(--x);

//------------- Assignment Operators-------------

//let x = 10;

//-------------Arithmetics-------------

// x = x + 5;
// is the same
// x += 5;

//or
//x = x * 3;
//x *= 3;

// Pasa Igual con todos los demas signos aritmeticos

// -------------Comparison Operators -------------
let x = 1;
// Relational
console.log(x > 0);
console.log(x >= 0);
console.log(x < 1);
console.log(x <= 1);

// Equality
console.log(x === 1);
console.log(x !== 1);

// ------------- Equality Operators -------------+

// Strict Equality (Type + Value)
// console.log(x === 1);
// console.log('1' === 1);

// Lose Equality (Van a dar true los dos porque la relacion no es por typo sino que automaticamente convierte el valor de la izquierda en string (Value))
console.log(x == 1);
console.log('1' == 1);

// ------------- Ternary Operators -------------
// If a customer has more than 100 points, they are a 'gold' customer, otherwise, they are a 'silver' customer.

let points = 90;
let type = points > 100 ? 'gold' : 'silver';

console.log(type);

// ------------- Logical Operators -------------
// Logical AND (&&)
// Returns TRUE if both oprands are TRUE

console.log(true && false);

// Example
// let highIncome = true;
// let goodCreditScore = true;
// let eligibleForLoan = highIncome && goodCreditScore;
// console.log(eligibleForLoan);

// Logical OR (||)
// Returns TRUE if one of the operands is TRUE

// Example
let highIncome = false;
let goodCreditScore = false;
let eligibleForLoan = highIncome || goodCreditScore;
console.log('Elegible ', eligibleForLoan);

// Not (!)

let applicationRefused = !eligibleForLoan;

console.log('Application Refuse ', applicationRefused);

//------------- Non-Booleans -------------
// Falsy (false)
// undefined
// null
// 0
// false
// ''
// NaN

// Anything that is not Falsy -> Truthy

//Short-circuiting (Agarra el primer valor verdadero o Truthy que encuentra)

let userColor = undefined;
let defaultColor = 'blue';
let currentColor = userColor || defaultColor;

console.log(currentColor);

// ------------- BitWise Operators -------------
// 1 = 00000001
// 2 = 00000010
// 3 = 00000011

console.log(1 | 2); //Bitwise OR
console.log(1 & 2); //Bitwise AND

// Read, Write, Execute
// 00000100 Read
// 00000110 Read and Write
// 00000111 Read, write, execute

const readPermission = 4;
const writePermission = 2;
const executePermission = 1;

let myPermission = 0;
myPermission = myPermission | writePermission;

console.log(myPermission);

let message = myPermission & readPermission ? 'yes' : 'no';

console.log(message);
