//FACTORY FUNCTION

function createCirlce(radius) {
  return {
    radius,
    draw: function () {
      console.log('draw');
    },
  };
}

const circle1 = createCirlce(1);

// Constructor Function

function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log('draw');
  };
}

const another = new Circle(1);

// Todos los objetos tienen una propiedad llamada "constructor" que hace referencia a la funcion que se ulitizo para construir o crear el objeto se utiliza como another.constructor || circle.constructor en consola
