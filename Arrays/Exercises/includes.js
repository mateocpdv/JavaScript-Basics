// Crear una funcion que haga el mismo trabajo que includes() y devuelva true si lo encuentra y false si no lo hace

const numbers = [1, 2, 3, 4];

console.log(includes(numbers, 3));

function includes(array, searchElement) {
  return array.some(function (value) {
    return value === searchElement;
  });
}

// Resolución de Mosh

function includ(array, searchElement) {
  for (let element of array) {
    if (element === searchElement) return true;
  }
  return false;
}
