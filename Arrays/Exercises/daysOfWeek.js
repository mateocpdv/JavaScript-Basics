// Hacer un array de días de la semana empezando por 0 para el domingo, pedir un numero entre 0 y 6

const week = [
  'Domingo',
  'Lunes',
  'Martes',
  'Miercoles',
  'Jueves',
  'Viernes',
  'Sabado',
];

function daysOfWeek(number) {
  console.log('El día es:', week[number]);
}

daysOfWeek(1);

// let dias = new Array(7),
//   num;
// dias[0] = 'Domingo';

// dias[1] = 'Lunes';

// dias[2] = 'Martes';

// dias[3] = 'Miércoles';

// dias[4] = 'Jueves';

// dias[5] = 'Viernes';

// dias[6] = 'Sábado';

// num = parseInt(prompt('Numero del día'));
// alert('El día es ' + dias[num]);
