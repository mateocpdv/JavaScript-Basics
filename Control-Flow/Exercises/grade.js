// Average = 70

// 1-59: F
// 60-69: D
// 70-79: C
// 80-89: B
// 90-100: A

const marks = [60, 60, 90];

console.log(calculateGrade(marks));

// function calculateGrade(notes) {
//   let cantNotes = 0;
//   let points = 0;
//   for (let i = 0; i < notes.length; i++) {
//     cantNotes++;
//     points += notes[i];
//   }
//   console.log(points);

//   let grade = points / cantNotes;
//   let letterGrade;
//   console.log(grade);

//   if (grade > 0 && grade <= 59) {
//     letterGrade = 'F';
//   } else if (grade >= 60 && grade < 69) {
//     letterGrade = 'D';
//   } else if (grade >= 70 && grade < 79) {
//     letterGrade = 'C';
//   } else if (grade >= 80 && grade < 89) {
//     letterGrade = 'B';
//   } else if (grade >= 90 && grade <= 100) {
//     letterGrade = 'A';
//   }
//   return letterGrade;
// }

function calculateGrade(marks) {
  let sum = 0;
  for (let mark of marks) sum += mark;
  let average = sum / marks.length;
  if (average < 60) return 'F';
  if (average < 70) return 'D';
  if (average < 80) return 'C';
  if (average < 90) return 'B';
  return 'A';
}
