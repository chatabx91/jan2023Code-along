// Create a function called 'greetings' that takes 1 arg called name
// function returns statement that says 'hey name, how's it going?

const greetings = (name) => {
    return `Hey ${name}, how's it going?`
}
console.log(greetings('Jaspreet'));

// Create a function called 'volume' that calculates the volume 
// of a rectangle (length x width x height).

// Make sure it works by calling the function by giving it 10 for 
// the length, 2 for the width, and 3 for height.

const volume = (l,w,h) =>{
    return l * w * h;
}
console.log(`The volume is ${volume(10,2,3)}`)

// Rethinking our volume function, how might we rewrite if ALL rectangles have a height of 6?
// Any way to simplify our volume function to account for this?

const volume2 = (l, w, h = 6) =>{
    return l * w * h;
}
console.log(`The volume is ${volume2(10,2)}`)


// Create a function called 'upper' that takes a string as 
// an argument and turns all of the letters uppercase.
// For example: hello ---> HELLO

const upper = (str) =>{
    return str.toUpperCase();
}
console.log(upper('small'))

// Create a function that takes a string as an argument. 
// If the string has an even # of characters, it returns true.
// If the string has an odd # of characters, it returns false.

const even = (str) => str.length % 2 === 0 ? true : false; 
console.log(even('I like dogs')); // -> false
console.log(even('I like horses!')); // -> true


// Write a function that compares the last 3 characters of a string 
// and returns true or false if they match.

const compares = (str1, str2) =>{
    return str1.substring(str1.length - 3) === str2.substring(str2.length - 3) ? true : false;
}

console.log(compares("dogs", "horses")); // -> false
console.log(compares("Dogs", "lincoln logs")) // -> true

// Write a function that builds the following design:
// *
// * *
// * * *
// * * * *
// * * * * *

const stars = ()=>{
    let star = ' *';
    for(let i = 0; i < 5; i++){
        console.log(star);
        star = star + " *"
    }
}
stars();

// Can you rewrite the previous function so it takes 2 arguments 
// which determines how many stars to start with and how many to end with?
// steps(7, 11); // for example

// * * * * * * *           => 7 stars
// * * * * * * * *         => 8 stars
// * * * * * * * * *       => 9 stars
// * * * * * * * * * *     => 10 stars
// * * * * * * * * * * *   => 11 stars

var steps = (num1, num2) => {
    var star = " *".repeat(num1);
    for (var i = num1 - 1; i < num2; i++) {
        console.log(star);
        star = star + " *";
    }
};
steps(7, 11);

// Write a function called 'isHighest' that finds the largest 
// of three integers, passed in as arguments to the function.

// For example, if you pass in 2, 6, and 4, the function 
// will return 6 because that is the highest number.

// Make sure to test with three different numbers.

const isHighest = (a,b,c) =>{
    let maxVal = 0;
    (a > b) ? maxVal = a : maxVal = b;
    return c > maxVal ? c : maxVal;
}
console.log(isHighest(20,12,100));


// Write a function that takes a number as an argument and return the factorial of that number.

// FOR EXAMPLE:

// Factorial of 4 is 4 x 3 x 2 x 1 = 24
// Factorial of 6 is 6 x 5 x 4 x 3 x 2 x 1 = 720
// Factorial of 0 is 1
const factorial = (num) =>{
    let factor = 1;
    for (let i = num; i > 1; i--) {
        factor = factor * i;  
    }
    return factor;
}
let num = 6;
console.log(`Factorial of ${num} is ${factorial(num)}`)

// Create a function that takes no arguments. 
// It logs "Will you be my friend? Please? I'll give you money!'"
// Then call the function in such a way that it runs every 3 seconds.
const message = () =>{
    console.log(`Will you be my friend? Please? I'll give you money!`); 
}
// setInterval(message, 3000)
