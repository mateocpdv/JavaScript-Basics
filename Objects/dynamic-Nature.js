const circle = {
  radius: 1,
};

// Al usar const no se hace constante el objeto sino las propiedades del objeto, por eso podemos añadir nuevas propiedades y eliminar

// Puedo añadirle propiedades

circle.color = 'yellow';

// Puedo añadir funciones

circle.draw = function () {};

// Puedo eliminar

delete circle.color;
delete circle.draw;

circle.radius = 2;

const circle2 = {
  radius: 3,
};
// circle = {};
console.log(circle);

// const saludo = 'Hi';
// saludo = 'chau';
console.log(saludo);
/*
Al const de un objeto se le puede modificar el valor del mismo porque es un tipo de dato complejo
Por lo contrario a un tipo de dato primitivo o simple no se le puede cambiar el valor una vez inicializado con const */
