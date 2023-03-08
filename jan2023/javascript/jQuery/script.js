// Test that jQuery CDN is working

// $(document).ready(()=>
//     alert('I am working')
// );


// .ready() runs as soon as HTML has been loaded BUT does not wait for the resources.
// .onload() runs after HTML has been loaded AND ALL resources have also been loaded.

// select all images tags
// $('img')

// select elements with class of dog
// $('.dog')

// select the element with id of menu
// $('#menu')

// select all the a tage inside of list item
// $('li a')

// remember Vanilla JavaScript:
// let myHeader = document.getElementById("header");

// jQuery
// let myHeader = $("#header");

// change h1 text to say 'I am the header'
$('h1').text('I am the Header');

// select 3rd h1 and say "i am the last header"
$('h1').eq(2).text('I am the last Header');
// or if you dont know index uses this 
// $('h1').last().text('I am the last Header');


// Add code to your script.js that uses setTimeout() to change the 
// content of the second <h1> to the following after 3 seconds: I am a dog!

setTimeout(() => {
    $('h1').eq(2).text('I am a dog')
}, 3000);

// Suppose we wanted to change multiple properties and content of our second header only:
// Background color needs to be orange
// Font size should be 48px
// Border should be solid green at 4px.
// Content should now read 'I have changed.'

// css styles in object
let styles = {
    backgroundColor: 'orange',
    fontSize: '48px',
    border: 'solid green 4px',
}

// variable holds new text
let content = 'I have changed';

$('h1').eq(1).css(styles).text(content)


// Create a new html file called fun.html. Link your script.js 
// file to this html. Add the following to your html:

//         <div class="fun">Halloween</div>
//         <div id="food">Thanksgiving</div>
//         <div class="fun">Christmas</div>
//         <div>New Year's day</div>

// In your script.js file: 
// Select all divs and give them a blue background.
// Select the div with id of 'food' and give it a green border, solid 8px.
// Select only the first div and give it a font color of yellow.
// Select all divs with class 'fun' and give them letter spacing of 25px and font size
$('div').css('background-color', 'blue');
$('#food').css('border', 'green solid 8px');
$('div').eq(0).css('color','yellow');

let theStyles = {
    letterSpacing: "25px",
    fontSize: "30px"
}

$("div.fun").css(theStyles);
