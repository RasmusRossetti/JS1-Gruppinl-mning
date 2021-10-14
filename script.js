
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

  if (!title || !year || !genre) {
    alert("Var snäll fyll i alla fälten!");
    return;
  }
  else
  {
    movies.push(new Movie(title, year, genre));
    document.getElementById("movieTitle").value = "";
    document.getElementById("movieYear").value = "";
    document.getElementById("movieGenre").value = "";
  }



  //anropar drawtabel function för utskrift
  movieTabel();

}

  
  function movieTabel() {
    //Initera en output string variabel
    //Border är en CSS stilregel
    let strOutput = '<table style="border: "><tr>';

    //Loop för at hämta attribut namn med en ForIn loop
    for (var x in movies[0]) {
      strOutput += `<th style="border: ">${x}</th>`;
    }

    strOutput += "</tr>";

    //En loop för varje obejkt i Arrayen
    movies.forEach((item, i) => {
      //Lägga till <TR> tagg
      strOutput += "<tr>";

      //Hämta värden för objektets attribut
      for (var x in item) {
        strOutput += `<td style="border: solid 1px">${item[x]}</td>`;
      }

      //Lägga till </TR> tagg
      strOutput += "</tr>";
    });

    //Skriv ut strOutput till en Div tag
    strOutput += "</table>";
    document.getElementById("output").innerHTML = strOutput;
  }





