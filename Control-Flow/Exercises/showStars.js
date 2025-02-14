// showStars(5);
//showStartss(5);
showStars2(5);
function showStars(rows) {
  let starts = '';
  for (let i = 0; i < rows; i++) {
    starts += '*';
    console.log(starts);
  }
}

function showStars2(rows) {
  let starts = '';
  for (let i = 0; i <= rows; i++) {
    starts += '*';
    console.log(starts);
  }
}

//result

function showStartss(rows) {
  for (let row = 1; row <= rows; row++) {
    let pattern = '';
    for (let i = 0; i < row; i++) {
      pattern += '*';
    }
    console.log(pattern);
  }
}
