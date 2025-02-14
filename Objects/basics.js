// Object-oriented Programming (OOP)
// Style of programming where we see a program as a collection of objects that talk to each other to perform some functionallity
const circle = {
  radius: 1,
  location: {
    x: 1,
    y: 1,
  },
  isVisible: true,
  draw: function () {
    console.log('Draw');
  },
};

circle.draw(); // Method
// cuando una funcion es parte de un objeto lo llamamos metodo

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
console.log(circle1);

const circle2 = createCirlce(2);
console.log(circle2);

// Camel Notation : oneTwoThreeFour
// Pascal Notation : OneTwoThreeFour

// Constructor Function

function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log('draw');
  };
}

const circleConstructor = new Circle(1);
const x = {};
