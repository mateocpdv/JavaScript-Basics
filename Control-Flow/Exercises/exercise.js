function maxNumbers(a, b) {
  //  if (num1 > num2) return num1;
  //return num2;
  //forma mas corta y sencilla
  return a > b ? a : b;
}

number = maxNumbers(2, 4);
console.log(number);

//aplicar esta funcion
// devolver true si el parámetro width es mayor que height, de lo contrario devolver false

function isLandscape(width, height) {
  return width > height;
}
// no hace falta que se ponga (? true : false) ya la expresión devuelve un true o false
console.log(isLandscape(100, 900));
