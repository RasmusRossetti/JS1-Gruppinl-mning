
//initierar klass Movie
class Movie {
  constructor(title, year, genre) {
    this.title = title;
    this.year = year;
    this.genre = genre;
  }
  //skapar metod
  movieDetails() {
    return this.title + " " + this.year + " " + this.genre;
  }

}

//array
var movies = [];
//skapar function för inputs och push array
function addMovie() {
  var title = document.getElementById("movieTitle").value;
  var year = document.getElementById("movieYear").value;
  var genre = document.getElementById("movieGenre").value;

  movies.push(new Movie(title, year, genre));


}
//skapar function för utskrivning av inputs
function printMovies() {
  var movieList = document.getElementById("movieList");

  for (var i = 0; i < movies.length; i++) {
    var li = document.createElement("li");
    li.innerHTML = movies[i].movieDetails();
    // li.appendChild(document.createTextNode("Titel:" + " " + movies[i].title))
    movieList.appendChild(li);
  }

}
//skapar function för cleara inputs
function clearInputs() {
  document.getElementById("movieTitle").value = "";
  document.getElementById("movieYear").value = "";
  document.getElementById("movieGenre").value = "";
}


