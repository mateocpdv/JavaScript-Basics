const movie = {
  title: 'Mi probre Angelito 2',
  releaseYear: 1943,
  rating: 9.3,
  director: 'Michael Bay',
};

showProperties(movie);

function showProperties(obj) {
  for (let key in obj) {
    if (typeof obj[key] === 'string') {
      console.log(key, obj[key]);
    }
  }
}
