// hacer una funcion que reciba 3 parámetros: el array, el indice del numero a mover, y el numero de lugares que quiero que se mueva (+) para la derecha → y (-) para la izquierda ←

const numbers = [1, 2, 3, 4];

const output = moves(numbers, 2, -2);

console.log(output);

// function move(array, index, offset) {
//   const newArr = [];

//   for (let i = 0; i < array.length; i++) {
//     if (i === index) {
//       let indexValue = array[i];

//       newArr[i] = array[i + 1];
//       i += 2;

//       while (offset > 0) {
//         newArr.push(array[i]);
//         offset--;
//         i++;
//       }
//       newArr.push(indexValue);
//       continue;
//     } else newArr.push(array[i]);
//     // let indexValue = array[i];
//     // for (let j = 0; j < offset; j++) {
//     //   newArr.push(array[i]);
//     // }
//     // newArr.push(indexValue);
//     // break;

//     // let newIndex = (i += offset);
//   }
//   return newArr;
// }

function moves(arr, index, offset) {
  const length = arr.length;
  const arrayCopy = [...arr];
  const bounds = index + offset;
  const elToMove = arr[index];
  console.log(elToMove);

  // -1
  // Revisar si el offset es valido

  if (bounds >= length) {
    console.log('Offset not valid');
  }

  if (bounds < 0) {
    console.log('Offset not valid');
  }

  // Encontrar y mover el elemento
  // Offset positivo
  for (let i = 0; i < length; i++) {
    if (i === index) {
      // tengo que eliminar el encontrado y pushearlo en el nuevo indice
      arrayCopy.splice(i, 1);
      // pusheo el objeto en el lugar
      arrayCopy.splice(bounds, 0, elToMove);
      console.log(arrayCopy);
    }
  }
  // Offset negativo
}

function move(array, index, offset) {
  const position = index + offset;

  if (position >= array.length || position < 0) {
    console.error('Invalid Offset.');
    return;
  }
  const output = [...array];
  const element = output.splice(index, 1)[0];
  output.splice(index + offset, 0, element);
  return output;
}
