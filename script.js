
var movies = [];


class Movie {
    constructor(genre, titel, year) {
        this.genre = genre;
        this.titel = titel;
        this.year = year;

    }
}
function clear() {
    document.getElementById("myForm").reset();
}

function addMovie() {
    let movie = new Movie(
        document.getElementById("genre").value,
        document.getElementById("titel").value,
        document.getElementById("year").value
    );
    movies.push(movie);
    clear();

}
function printOut(data) {
    var table = document.getElementById("myTable")

    data.forEach(element => {
        var row = `<tr>
                            <td>${element.genre}</td>
                            <td>${element.titel}</td>
                            <td>${element.year}</td>
                    </tr>`
        return table.innerHTML += row
    });

}

console.log(movies);