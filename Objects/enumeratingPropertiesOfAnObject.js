const circle = {
  radius: 1,
  draw() {
    console.log('draw');
  },
};

//Obtener el valor de la property
for (let key in circle) {
  console.log(key, circle[key]);
}

//Object.keys() va a devolver las propiedades (radius, draw)
for (let key of Object.keys(circle)) {
  console.log(key);
}

// Object.entries va a devolver un array con [propiedad, valor]
for (let entry of Object.entries(circle)) {
  console.log(entry);
}

// Verificar si la propiedad existe en un objeto
if ('draw' in circle) {
  console.log('yes');
}

console.log('Object Keys:', Object.keys(circle));
console.log('Object Entries:', Object.entries(circle));
