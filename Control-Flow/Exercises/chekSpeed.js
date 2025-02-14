// Speed Limit = 70
// Menos de 70km -> Ok
// Cada 5km -> 1 point
// Math.floor(1.3)
// Si tiene mas de 12 puntos -> suspended

//checkSpeed(75);
checkSpeedSilvi(130);
function checkSpeed(speed) {
  let roundSpeed = Math.floor(speed);
  let points;
  if (roundSpeed >= 70 + 5) {
    roundSpeed -= 70;
    speedRounded = Math.floor(roundSpeed / 5);
    points = speedRounded;
    if (points > 12) console.log('License suspended');
    else console.log('Points: ', points);
  } else console.log('Ok');
}

function checkSpeedSilvi(speed) {
  if (speed > 70) {
    //Dentro de este if habría que sumar un punto cada 5 km
    let resDivision = (speed - 70) / 5;
    let rounded = Math.floor(resDivision);
    if (rounded >= 1) {
      console.log('points', rounded);

      if (rounded >= 12) {
        console.log('License Suspended');
      }
    }
  } else {
    console.log('Ok');
  }
}
