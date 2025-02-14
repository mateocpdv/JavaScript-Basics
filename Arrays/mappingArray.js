const numbers = [1, -1, 3, 5];

// const filtered = numbers.filter((n) => n >= 0);

// const items = filtered.map((n) => '<li>' + '</li>');

// const html = '<ul>' + items.join('') + '</ul>';

// const items = filtered.map((n) => ({ value: n }));

// en vez de hacer una variable para filtrar los numeros y hacer el map sobre esa variable se puede hacer de la siguiente manera ↓
// ademas se le puede hacer otro filter despues de mapear
const items = numbers
  .filter((n) => n >= 0)
  .map((n) => ({ value: n }))
  .filter((obj) => obj.value > 1)
  .map((obj) => obj.value);

console.log(items);
