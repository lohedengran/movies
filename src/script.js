$(document).ready(function () {
  let API = "24fe64c8";

  $("#movieForm").submit(function (event) {
    event.preventDefault();
    let movie = $("#movie").val();
    let result = "";
    let url = "http://www.omdbapi.com/?apikey=" + API;

    $.ajax({
      method: "GET",
      url: url + "&t=" + movie,
      success: function (data) {
        console.log(data);

        if (data.Response === "True") {
          result = `
        <img style =   width = "200" height = "300" src = '${data.Poster}'</img>
        <h2>${data.Title}</h2>
        <h3>Year of realese: <span>${data.Released}</span></h3>
        <h3>Lenght: <span>${data.Runtime}</span></h3>
        <h3>Genre: <span>${data.Genre}</span></h3>
        <h3>Director: <span>${data.Director}</span></h3>
        <h3>Actors: <span>${data.Actors}</span></h3>
        <h3>Description: <span>${data.Plot}</span></h3>
        `;

          $("#result").html(result);
        } else {
          result = `<h2>Sorry, no film was found with that title. Try again with a different title.</h2>`;
          $("#result").html(result);
        }
      },
    });
  });
});
