

//Function runs when button is clicked
const findMovies = () => {

    // get baseURL of API
    const baseUrl = "https://api.themoviedb.org/3";
    const api_key = "" // REMOVE BEFORE PUSHING TO GITHUB*****
    
    if(api_key === ""){
        return $("#displayMovies").html('Your API key is missing from the endpoint. Please add it to continue');
    }

    // get movie title from input
    const title = $('#movie').val().trim();
    // use movie title to create endpoint of API
    const endpoint = `${baseUrl}/search/movie?api_key=${api_key}&query=${title}`;

    // Fetch endpoint 
    fetch(endpoint)
        .then((response) => {
            // if response ok parse it
            if (response.ok){
                return response.json();
            } 
            // throw error, if cant receive json data 
            throw Error(!response.json() ? "No data" : "Cannot connect to server!");
        })
        .then((data) => {
            // check if parsed data exists
            if (data.results.length < 1){
                throw Error("No movies match your request");
            }

            // create 
            let displayData = "";
            // data.results is an array of objects, assign first object to result
            let result = data.results[0];
            // iterate and display all keys and values of object 
            for (let key in result) {
                displayData += ` ${key} : ${result[key]}<br>`
            }
            // target p tag in results box and inject keys and values into p tag
            $("#displayMovies").html(displayData);
            // clear the input
            $("#movie").val("");
        })
        .catch((error) => {
            // if error is thrown then display message in result box
            $("#displayMovies").html(error.message);
            // clear input 
            $("#movie").val("");
        });

}

// target 'Find Movie' button and on click run findMovies function to retrieve information of movie that was inputted by user.
// $("input[type='button']").on("click", findMovies);

// using mouseenter to trigger button click when user brings mouse into button area.
$("input[type='button']").on("click mouseenter", findMovies);