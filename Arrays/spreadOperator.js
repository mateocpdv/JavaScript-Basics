const first = [1, 2, 3];
const second = [4, 5, 6];

// const combined = first.concat(second)

// se concatena todo lo que tiene "first" y "second" y se crea un nuevo array con estos 2
const combined = [...first, 'a', ...second, 'b'];

// const copy = combined.slice()
const copy = [...combined];
