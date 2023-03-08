// So now that we have a general idea on what APIs are, 
// can you think of any ideas for websites/applications that you might wish to build?

// 1. Weather app, Recipe app, Music discovery platform, stock market tracker,
// flight tracker, sports stats tracker

// what is the strategy for CONSUMING APIs?
// 1. define endpoint: https://api.themoviedb.org/3/movie/{movie_id}
// 2. determine HOW data is sent: XML or JSON
// 3. determine how MUCH data is sent back : get entire database or just first 5 tweets
// 4. determine what parts of data is sent back: send first name only or ALL personal info


// Fetch analogy
// Fetch with APIs can be compared to a librarian searching for a book in the library catalog. You can make a request to an API and specify details such as the type of data you want to retrieve and any filters you want to apply to your request. The API processes your request and returns the data, similar to how the library catalog generates search results. Once you receive the data from the API, you can use it for your application, much like a patron who checks out and uses the book they found in the library catalog.

// General steps for fetch()
// 1. fetch(endpoint)
// 2. THEN do something with response
// 3. THEN do something with data
// 4. CATCH any errors

// CRUD Functionaity 
// Create, Read, Update, Delete




// API Website:  https://dog.ceo/dog-api/


// intially set the img tag with a picture of a dog
$('img').attr('src', "https://images.dog.ceo/breeds/chow/n02112137_6857.jpg");

// assign baseURL of endpoint
let baseURL = 'https://dog.ceo/api';

// target button on click to trigger fetch to API
$('button').on('click', () => {
    // assign route
    let route = 'breeds/image/random'
    // assign endpoint
    let endpoint = `${baseURL}/${route}`

    // fetch endpoint
    fetch(endpoint)
        .then((response) => {
            // return response that is parsed with json()
            // return sends parsed data to next function
            return response.json()
        })
        .then((data) => {
            // data is an object that holds the keys we need to get the image
            // we want to extract the img and place it in the img src in the html
            $('img').attr('src', data.message)
        })
        .catch((error) => {
            // what if there is an error?
            console.log("Error: " + error.message)
        });
})

