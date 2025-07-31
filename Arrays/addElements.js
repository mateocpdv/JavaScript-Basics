const numbers = [3, 4];

// Se pueden agregar elementos

// Al final:

numbers.push(5, 6);

// Al inicio:

numbers.unshift(1, 2);

// En el medio del array:
numbers.splice(2, 0, 'a', 'b');

console.log(numbers);
//  1, 2, 'a', 'b', 3, 4, 5, 6
