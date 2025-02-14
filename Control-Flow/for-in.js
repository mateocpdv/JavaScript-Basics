const person = {
  name: 'Mosh',
  age: 30,
  lastName: 'BURICH',
};

for (let key in person) {
  //al usar bracker-notation se printea el VALOR del objeto
  console.log(key, person[key]);
}

const colors = ['red', 'green', 'blue'];

for (let index in colors) {
  console.log(index, colors[index]);
}
