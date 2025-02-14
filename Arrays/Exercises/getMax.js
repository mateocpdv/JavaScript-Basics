const numbers = [1, 2, 3, 4, 5];

const max = getMax(numbers);

console.log(max);

//obtener el mayor numero del array usando reduce

function getMax(array) {
  // yo ↓
  return array.reduce((max, current) => {
    const maxNumber = current > max ? current : max;
    return maxNumber;
  }, 0);

  // Mosh ↓
  /*
  return array.reduce((a,b) => (a>b) ? a : b)
    */
}
