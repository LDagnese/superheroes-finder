// declare variable
const search_btn = document.querySelector("#search");

var dateofbirth = document.getElementById("dob");
var hometown = document.getElementById("hometown");
var biography = document.getElementById("bio");
var heroimg = document.getElementById("hero-pic");
var movies = document.getElementById("movie-results");

// API handler for Marvel
function getApi(){
    let req = newXMLHttpRequest();
    req.open("GET","https://gateway.marvel.com:443/v1/public/characters/1017577?apikey=9878fa368575f3fd08db8e28234824f8");
    req.send();
    req.onload=function(){
        let jsonObj = req.responseText;
        let profileJson = JSON.parse(jsonObj);
        console.log(profileJson.data)

            document.getElementById("dob").innerHTML=profileJson.data[0].date_of_birth;
            document.getElementById("hometown").innerHTML=profileJson.data[1].hometown;
            document.getElementById("bio").innerHTML=profileJson.data[2].bio;
            document.getElementById("hero-pic").src=profileJson.data[3].image;

    }
}
getApi();
// API handler for comicvine

// element creation for MarvelAPI
var getSuperHero = function () {
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
};

// element creation for comicvine API

// event listeners
document.getElementById("search").addEventListener("click", displayData);

var dateofbirth = document.getElementById("dob");
dateofbirth.innerHTML =



document.getElementById("dob")
let dob = document.createElement("div");
dob.append(dateofbirth);

document.getElementById("hometown")
let ht = document.createElement("div");
ht.append(hometown);

document.getElementById("bio")
let bio = document.createElement("div");
bio.append(biography);

document.getElementById("hero-pic")
let hero = document.createElement("div");
hero.append(heroimg);

document.getElementById("movie-results")
let movie = document.createElement("div");
movie.append(movies);



