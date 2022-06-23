// declare variable
var search_btn = document.querySelector("#submit-button");

var dateofbirth = document.getElementById("#dob");
var hometown = document.getElementById("#hometown");
var biography = document.getElementById("#bio");
var heroimg = document.getElementById("#hero-pic");
var movies = document.getElementById("#movie-results");
var heroName = document.getElementById("#heroInput");

// // API handler for Marvel

// API handler for comicvine

// element creation for MarvelAPI
function getSuperHero () {
    var apiUrl = "https://gateway.marvel.com:443/v1/public/characters/1017577?apikey=9878fa368575f3fd08db8e28234824f8"

    // make a request
    fetch(apiUrl)
        .then(function(response){
            if (response.ok) {
                console.log(response);
                response.json().then(function(data) {
                    console.log(data);
    
                });
            } else {
                console.log('Error:Data not retrieved')
            }
        })
        .catch(function(error) {
            console.log(error);
        });
    getNextMovie();
};

// get next movie from api

var getNextMovie = function () {
    var apiUrl = "https://www.whenisthenextmcufilm.com/api"

    // make a request
    fetch(apiUrl)
        .then(function(response){
            if (response.ok) {
                console.log(response);
                response.json().then(function(data) {
                    var movieEl = document.getElementById("next-movie");
                    var movieAnnounce = document.createElement('h4');
                    var movieImg = document.createElement('img');
                    var movieTitle = document.createElement('h2');
                    var releaseDate = document.createElement('p');
                    var movieOverview =document.createElement('p');
                    
                    movieTitle.textContent = `${data.title}`
                    releaseDate.textContent = `Release Date : ${data.release_date}`
                    movieAnnounce.textContent = `Days Until Release: ${data.days_until}`
                    movieOverview.textContent = `Overview: ${data.overview}`

                    movieEl.appendChild(movieTitle);
                    movieEl.appendChild(movieAnnounce);
                    movieEl.appendChild(releaseDate);

                    movieImg.src = data.poster_url
                    movieEl.appendChild(movieImg);
                    
                    movieEl.appendChild(movieOverview)
                });
            } else {
                console.log('Error:Data not retrieved')
            }
        })
        .catch(function(error) {
            console.log(error);
        });
};


//retrieve function 
var buildHeroElements = function(name) {
    //make sure it returns data
    //take name, build an element and append it to the proper div
    //get bio, build an element and append to proper div
    //get image link, build element and append to div 
    //get movie list (maybe) build element and append to div 
}


// event listeners
// document.getElementById("search").addEventListener("click", displayData);
search_btn.addEventListener('click', getSuperHero);
getNextMovie();



