// declare variable
var search_btn = document.getElementById("heroName-form");

var dateofbirth = document.getElementById("dob");
var hometown = document.getElementById("hometown");
var biography = document.getElementById("bio");
var heroimg = document.getElementById("hero-pic");
var movies = document.getElementById("movie-results");
var heroResults = document.getElementById("hero-results");

// API handler for Marvel

// API handler for comicvine

// element creation for MarvelAPI
var getSuperHero = function (heroName) {
    var apiUrl = `https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${heroName}&apikey=9878fa368575f3fd08db8e28234824f8`

    // make a request
    fetch(apiUrl)
        .then(function(response){
            if (response.ok) {
                response.json().then(function(result) {
                    console.log(result.data)
                    if (result.data.count >= 1) {
                        for (let i = 0; i < result.data.count; i++) {
                            var heroEl = document.createElement('li');
                            heroEl.id = result.data.results[i].id;
                            heroEl.textContent = result.data.results[i].name;
                            heroResults.appendChild(heroEl);
                        }
                    } else {
                        alert("That's not like any Marvel super hero")
                    }
                });
            } else {
                console.log('Error:Data not retrieved')
            }
        })
        .catch(function(error) {
            console.log(error);
        });
};

// get next movie from api

var getNextMovie = function () {
    var apiUrl = "https://www.whenisthenextmcufilm.com/api"

    // make a request
    fetch(apiUrl)
        .then(function(response){
            if (response.ok) {
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
                    movieOverview.style.marginBottom = "200px"

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

// event listeners
function nameSubmit(event) {
    event.preventDefault();
    var heroInputName = document.querySelector("input[name='heroInput']").value;
    if (heroInputName === "") {
        alert("Must Enter a Name");
        return;
    }
    getSuperHero(heroInputName);
}

search_btn.addEventListener('submit',nameSubmit);

getNextMovie();



