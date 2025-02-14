const numbers = [1, 2, 1, 1, 1, 3, 4, 1];

const count = countOccurences(numbers, 4);

console.log(count);

function countOccurences(array, searchElement) {
  //   let count = 0;
  //   for (let element of array) {
  //     if (element === searchElement) count++;
  //   }
  //   return count;
  //ahora usando reduce() ↓
  return array.reduce((acc, current) => {
    const occurence = current === searchElement ? 1 : 0;
    // console.log(acc, current, searchElement);

    return acc + occurence;
  }, 0);
}
