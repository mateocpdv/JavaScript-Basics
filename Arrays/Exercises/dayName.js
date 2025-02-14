// Un servicio de atención al ciente tiene establecido turnos semanales para sus empleados de manera que cada día de la
// semana se encarga del servicio  una persona: lunes - María, Martes - Luis, Miércoles - Antonia, Jueves - Pedro, Viernes - Marisa.

// Usa un array para almacenar los datos del servicio. En este array cada elemento será un par día - nombre.

// Crea una función que responda con el nombre de la persona encargada del servicio sabiendo el día. Si el día no existe deberá
//  decir que no hay servicio. Los nombres de los días deben ir en minúsculas

const week = [
  { day: 'lunes', name: 'María' },
  { day: 'martes', name: 'Luis' },
  { day: 'miercoles', name: 'Antonia' },
  { day: 'jueves', name: 'Pedro' },
  { day: 'viernes', name: 'Marisa' },
];

function dayWeek(dayOfWeek) {
  const lowerCaseDay = dayOfWeek.toLowerCase();
  const service = week.find((item) => item.day === lowerCaseDay);
  if (service) {
    return `Este día se encarga ${service.name}`;
  } else return 'Este día no hay servicio';
}

console.log(dayWeek('viern'));
