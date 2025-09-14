let api = "https://omdbapi.com/?apikey=891a6183&t=";

let title = document.querySelector("#title");
let desc = document.querySelector("#desc");
let genre = document.querySelector("#genre");
let actors = document.querySelector("#actors");
let directors = document.querySelector("#directors");
let awards = document.querySelector("#awards");
let collections = document.querySelector("#collection");
let ln = document.querySelector("#ln");
let poster = document.querySelector("#poster");
let rating = document.querySelector("#rating");
let year = document.querySelector("#year");
let error = document.querySelector("#error");
let container = document.querySelector("#container");
let suggestion = document.querySelector("#suggestion");
container.classList.add("hidden");

function search() {
  let movieInput = document.querySelector("#movieName");
  let query = api + movieInput.value;

  fetch(query)
    .then((data) => {
      return data.json();
    })
    .then((data) => {
      error.innerText = "";
      if (data.Error === "Movie not found!") {
        error.innerText = "Movie not found!";
        container.classList.add("hidden");
      } else {
        container.classList.remove("hidden");
        title.innerText = data.Title;
        desc.innerText = data.Plot;
        genre.innerText = data.Genre;
        actors.innerText = data.Actors;
        directors.innerText = data.Director;
        awards.innerText = data.Awards;
        collections.innerText = data.BoxOffice;
        ln.innerText = data.Language;
        year.innerText = data.Year;
        rating.innerText = data.imdbRating;
        poster.src = data.Poster;

        if (data.imdbRating >= 7) {
          suggestion.innerText = "👍 Worth watching";
          suggestion.style.backgroundColor = "#109847";
        } else if (data.imdbRating >= 5 && data.imdbRating < 7) {
          suggestion.innerText = "😊 Decent watch";
          suggestion.style.backgroundColor = "#D79017";
        } else {
          suggestion.innerText = "👎 Consider other options";
          suggestion.style.backgroundColor = "#D71744";
        }
      }
    });
}
