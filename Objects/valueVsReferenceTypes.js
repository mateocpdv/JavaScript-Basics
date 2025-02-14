// Primitives are copied by their VALUE
// Objects are copied by their reference

/* Value Types    Reference Types
  Number            Object
  String            Function
  Boolean           Array
  Symbol
  undefined
  null
*/

let x = { value: 10 };
let y = x;
console.log(y);

x.value = 20;

let obj = { value: 10 };
console.log(y);

function increase(obj) {
  obj.value++;
}
increase(obj);
console.log(obj);
