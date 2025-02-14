const movies = [
  { title: 'Mohana 2', year: 2024, rating: 4.4 },
  { title: 'Mohana 3', year: 2024, rating: 4.5 },
  { title: 'Mohana 4', year: 2024, rating: 3 },
  { title: 'Mohana 5', year: 2023, rating: 484 },
];

console.log(filterMovies(movies));

// All the moveis in 2018 with rating > 4
// Sort them by their rating
// Desending order
// Pick their title

function filterMovies(movies) {
  return movies
    .filter((movie) => movie.year === 2024 && movie.rating > 4)
    .sort((a, b) => b.rating - a.rating)
    .map((movie) => movie.title);
}
