// declare variable

// API handler for Marvel

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