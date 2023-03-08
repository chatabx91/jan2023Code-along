// 5 main methods to know in order to select elements using DOM

// document.getElementById();
// document.getElementsByClassName();
// document.getElementsByTagName();
// document.querySelector();
// document.querySelectorAll();

// select the list item by its id and assign to food
let food = document.getElementById('fruit');

// select the list item by its class name and assign to food
let food2 = document.getElementsByClassName('breakfast');

// select the all list items by its tag name
let food3 = document.getElementsByTagName('li');

// select the FIRST list item by its id, class, or tag
let food4 = document.querySelector('#fruit');

// select all h1 tags and return a NodeList of them all
let food5 = document.querySelectorAll("h1");


// manipulating styles
document.getElementById('fruit').style.color = 'green';
document.getElementById('fruit').style.border = '10px solid orange'
document.getElementById('fruit').style.fontSize = '36px'
document.getElementById('fruit').style.background = 'blue';
document.getElementById('fruit').style.marginTop = '150px';



// set default color to blue
let color = document.querySelector('body').style.backgroundColor = 'blue';

// function checks what background color is set for the body
let colorChange = () =>{

    if(color === 'blue'){
        // if color is blue then change to orange
        color = document.querySelector('body').style.backgroundColor = 'orange';

    }else{ 
        // else if color is orange change it to blue
        color = document.querySelector('body').style.backgroundColor = 'blue';

    }
}

// call the function every 3 seconds 
setInterval(colorChange, 3000);


// textContent

// Grab text of first list item
let theText = document.querySelector('li').textContent

// Change the text of the first list item
document.querySelector('li').textContent = 'Sold out! Check again tomorrow.';


// innerHTML

// Grab text of first li item and update the HTML, can use other tags on text
document.querySelector('li').innerHTML = 'Chocolate <b>Hazelnut</b> Croissant';


// getAttribute and setAttribute

// getAttribute gets the href of the anchor tag
let getAttr = document.querySelector('a').getAttribute('href');

// setAttribute sets the href of the anchor tag
let setAttr = document.querySelector('a').setAttribute('href', 'http://www.amazon.com');


// event listners

// target the button with querySelector, listen for a click and show alert when button clicked
document.querySelector("button").addEventListener("click", function() {
	alert("How's it going?");
})

// when mouse hovers over H1 tag change text of p tag to 'cheesecake bites'
document.querySelector("h1").addEventListener("mouseover", function() {
	document.querySelector("p").textContent = "Cheesecake bites";
})