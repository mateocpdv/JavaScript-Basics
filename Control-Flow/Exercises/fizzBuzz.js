// Divisible by 3 => Fizz
// Divisible by 5 => Buzz
// Divisible by both 3 and 5 => FizzBuzz
// Not divisible by 3 or 5 => input
// Not a Number => 'Not a number'

const output = fizzBuzz(5);
console.log(output);

function fizzBuzz(input) {
  if (typeof input !== 'number') return 'Not a number';
  else if (input % 3 == 0 && input % 5 === 0) return 'FizzBuzz';
  else if (input % 3 === 0) return 'Fizz';
  else if (input % 5 === 0) return 'Buzz';
  else if (input % 3 !== 0 && input % 5 !== 0) return input;
}
