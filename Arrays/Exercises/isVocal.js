// En este ejempo debes crear una función que reciba como argumento una letra y devuelva
// verdadero o falso (tru o false) dependiendo de si es una vocal o no. Debe funcionar igual con mayúsculas y con minúsculas y por supuesto usando arrays.
// Solo se aceptan letras internacionales (sin acentos)

function isVocal(param) {
  let lower = param.toLowerCase();
  let flag = false;
  let vocals = ['a', 'e', 'i', 'o', 'u'];

  for (const e of vocals) {
    if (e === lower) flag = true;
  }
  return flag;
}

console.log(isVocal('O'));
