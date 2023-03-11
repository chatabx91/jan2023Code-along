// Target submit button and fetch api data to display
$('#btn').on('click',()=>{
    // set endpoint
    let endpoint = 'https://api.coindesk.com/v1/bpi/currentprice.json';
    
    // consume api using fetch with endpoint
    fetch(endpoint)
    .then(response =>{ //receive response from api
        // throw error if response is not ok
        if(!response.ok){
            throw Error(response.statusText)
        }
        return response.json(); // return parsed response from api to next function 
    })
    .then(data=>{ 

        // Target input by its name attribute, and assigning the value of it to country variable 
        // this will return either 'USD', 'GBP', or 'EUR'
        // select radio button by name attribute and use :checked selector in combo with .val() to get specific value
        // :checked jQuery selector retrieves only selected elements
        let country = $('input[name="country"]:checked').val();

        // using the country we can find the corresponding rate
        let rate = data.bpi[country].rate_float.toFixed(2);

        // using the country we can find the corresponding symbol
        let symbol = data.bpi[country].symbol;

        // target span tag and inject symbol and rate to display 
        $('#displayPrice').html(symbol + rate);

    })
    .catch(error=>{
        // handle all errors 
        console.log('Error from network: ', error.message);
    })
})