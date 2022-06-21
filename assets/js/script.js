var getMoviesList = function () {
    // var superhero = "Captain America"
    var apiURL = "https://comicvine.gamespot.com/api/characters/?api_key="
    fetch(apiURL).then(function(response) {
        response.json().then(function(data) {
            console.log(data);
        })
    }) 
};
