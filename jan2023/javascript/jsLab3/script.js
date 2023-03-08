// 1. Upon loading and using javascript only, add the completed class to the second list item only.
// Requirements:
// You must use querySelector
// You may not add any other code to html to accomplish this (no classes, ids, etc.)

// if using querySelector, remember it returns only the FIRST item, so in order to return
// the SECOND list item we need to use 'nth-child()'. This lets us target the 2nd list item and
// return that list item instead of the 1st item. Next we use setAttribute to set an attribute 
// on the 2nd list item. We pass it the attribute class and its value is completed. 

document.querySelector("li:nth-child(2)").setAttribute('class', 'completed');


// 2. Add a click event listener to the ul that logs the statement: 
// "I have been clicked"

// target the ul tag using querySelector
// use addEventlistener and state what we are listening for, in this case its a click
// next we pass a call back function that will console log a message everytime we click on a 
// the contents or the ul

// document.querySelector('ul').addEventListener('click',()=>{
//     console.log('I have been clicked!')
// })


// 3. Instead of selecting the ul, how do you rewrite the code so it selects "ul li" and only 
// logs "I have been clicked" when you click on the second "li"?
// NOTE: Make sure to comment out your code from exercise 2.


// target all the list items, using querySelectorAll will return an array of list items
// so to target the 2nd li in that array we use [1]. Then add on the eventListner to it 

// document.querySelectorAll('ul li')[1].addEventListener('click', ()=>{
//     console.log('I have been clicked');
// })


// 4. Refactor your code from exercise 3 and instead of 'I have been clicked' log the content.
// If you have done correctly, you should see 'Holiday 2' in your console.

// like before target ul li using querySelectorAll
// Now instead of logging a mesage we target the innerHTML of the targeted item.

// document.querySelectorAll('ul li')[1].addEventListener('click', ()=>{
//     console.log(document.querySelectorAll('ul li')[1].innerHTML);
// })


// 5. But we have many li's. Do we have to reference every li if clicked?
// How do we refactor code from #4 so no matter what 'li' we click on, we get that specific content?
// HINT: You will probably have to iterate through your selector in some way.

// // target ul li using querySelectorAll and assign to listItems
// let listItems = document.querySelectorAll('ul li');

// // listItems holds an array of list items, iterate through array using forEach
// listItems.forEach(item=>{
//     // use addEventListener to each list item
//     item.addEventListener('click', ()=>{
//         // console log html of list item
//         console.log(item.innerHTML);
//     })
// })


// 6. Instead of displaying the innerText, how do you refactor exercise 5 so it toggles the 
// class to 'completed' for every 'li' we click on?
// Remember the CSS 'completed' class?
// When you click on the 'li' you should turn it red if not already, or remove the red color if it is red.


// target ul li using querySelectorAll and assign to listItems
let listItems = document.querySelectorAll('ul li');

// listItems holds an array of list items, iterate through array using forEach
listItems.forEach(item=>{
    // use addEventListener to each list item
    item.addEventListener('click', ()=>{
        // console log html of list item
        console.log(item.innerHTML);

        // toggle classList 
        item.classList.toggle('completed');
    })
})


// 7. Add this code to HTML:
// <input type="text" id="newItem" placeholder="Enter new Holiday">

// Then write a function that accesses the value from the input using 
// the id as the selector and displays in the console.
// HINT: you will need the 'keydown' event to trigger this to happen.

// let inputVal = document.getElementById('newItem');
// inputVal.addEventListener('keydown', ()=>{
//     console.log(inputVal.value)
// })


// 8. How do we refactor exercise 7 so we ONLY get the result form input when the 'ENTER' key is selected?
// You will need to research ASCII codes
// You will need to use the 'event' object
// You will need the keyCode method


let inputVal = document.getElementById('newItem');
inputVal.addEventListener('keydown', (event)=>{
    if(event.keyCode === 13){
        console.log(inputVal.value)
        inputVal.value = '';
    }
    
})
