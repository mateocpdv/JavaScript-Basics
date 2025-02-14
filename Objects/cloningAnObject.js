const circle = {
  radius: 1,
  box: { color: 'red' },
  draw() {
    console.log('draw');
  },
};

// ----------------------------------------------
// const another = {};
// for (let key in circle) {
//   another[key] = circle[key];
// }
// ----------------------------------------------

// ----------------------------------------------
// const another = Object.assign({}, circle);
// ----------------------------------------------

// ----------------Spread Operator---------------
const another = { ...circle };
// ----------------------------------------------
console.log(another);

/*
Shallow copy: Es una copia del objeto en forma "simple", de primer nivel
Deep copy: Es una copia del objeto en profundidad
*/
