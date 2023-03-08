// 1. How would you find the value of the difference in number of elements between the arrays? 

let veggies = ["tomatoes", "peppers", "eggplant", 'pumpkin'];
let fruits = ["apples", "oranges"];

// using length method, we find the length of each array and then subtract to give us the difference. 
console.log(veggies.length - fruits.length)


// 2. Sort the veggies so they are in alphabetical order.
veggies = ["tomatoes", "peppers", "eggplant", 'pumpkin'];

// using sort method by default converts elements to strings and sorts according to characters Unicode point value
console.log(veggies.sort())


// 3. It has been determined by the national association of Fruits that 
// all food listed as veggies are actually fruits. These 'new' fruits are proud!!

// Using the forEach() method, uppercase all the veggies AND push to the fruits array.
veggies = ["tomatoes", "peppers", "eggplant", 'pumpkin'];

// use forEach loop
veggies.forEach(element => {
    // uppercase each veggie, and push on to end of fruits array
    fruits.push(element.toUpperCase())
});

console.log(fruits)

// 4. How could we rewrite our code using map() to uppercase all the 
// veggies AND add to the fruits array using the spread operator?
let veggie = ["tomatoes", "peppers", "eggplant", 'pumpkin'];
let fruit = ["apples", "oranges"];

// map function creates a new array, return uppercase values to new array
let result = veggie.map(el => {
    return el.toUpperCase(); // ['TOMATOES','PEPPERS'..and so on]
});

// use spread operators to build new array
fruit = [...fruit, ...result];

console.log(fruit);


// 5. Write a function that takes this object as an argument and returns the age which can be logged.

let animal = {
    breed: "dog",
    age: 20,
};

// create function and assign to variable, pass object as parameter
let age = (animalObj) => animalObj.age;
// pass animal object as argument
console.log(age(animal))


// 6. Write a function that takes this object as an argument and returns the object 
// with an updated age of 15 which can be logged.

animal = {
    breed: "dog",
    age: 2,
};

let updateAge = (animal) => {
    animal.age = 15
    return animal;
}

console.log(updateAge(animal))


// 7. Write a function that takes an object and logs through all the keys.
// Use this object to test:
animal = {
    breed: "dog",
    age: 6,
    name: "Fang",
    owner: "Hagrid"
};

let displayKeys = (obj) =>{
    // for in loop used to iterate through obj keys
    for(const keys in obj){
        console.log(keys);
    }
    return true;
}

displayKeys(animal);


// 8. Using our same object from previous, rewrite your function so it 
// builds an array of all the values from the object and returns the array.
animal = {
    breed: "dog",
    age: 6,
    name: "Fang",
    owner: "Hagrid"
};

let arrOfObj = (obj) =>{
    let objArray = []
    for(const keys in obj){
        objArray.push(obj[keys]);
    }
    return objArray
}
console.log(arrOfObj(animal))


// 9. Write a function that takes an object with an age key and ONLY updates 
// the age + 10 IF it is already 5 or less.
// Example: 
// obj.age === 5, then it should be updated to obj.age = 15
// obj.age === 6, then it should be not be updated

// create obj
let person = {
    age : 5
}

// function checks in object age key value is less than 5 or not and updates + 10
let update = (obj) =>{
    for(const keys in obj){
        if(keys === 'age'){ // keys = 'age'
            //let person.age = if(person.age < 6){
                // person.age = person.age + 10
            // }else{
              // person.age = person.age
            // }
            obj[keys] = obj[keys] < 6 ? obj[keys] + 10 : obj[keys] // obj[keys] means obj['age']
            return obj;
        }
    }
    return 'No, age key in object';
}

console.log(update(person));


// 10. Take this array and pass into a function that logs the name in each object.
let personArray = [
    { name: "Larry" },
    { name: "Moe" },
    { name: "Curly" }
];

let logging = (array) =>{
    array.forEach(element => {
        console.log(element.name)
    });
    return true;
}

logging(personArray);

// 11. We have a problem. Shep has joined the Stooges. 
// Using the same initial array before, you need to write a function that 
// removes Curly and adds Shep. In order to make him happy, you need to return 
// the updated array as proof he has officially joined.
personArray = [
    { name: "Larry" },
    { name: "Moe" },
    { name: "Curly" }
];

let addShep = (personArray) =>{
    personArray[2].name = 'Shep';
    return personArray;
}
console.log(addShep(personArray))


// 12. Rewrite your function so it accounts for ANY number of stooges BUT only replaces Curly.
// Test with:
personArray = [
    { name: "Larry" },
    { name: "Curly" },
    { name: "Moe" },
    { name: "JM" },
];


let displayName = (arr) => {
    // forEach loops through each array element
    arr.forEach((el) => {
        // check if the obj key is 'Curly'
        if (el.name === "Curly") {
            // if it is replace with 'Shep'
            el.name = "Shep";
        }
    });
    return arr;
};

console.log(displayName(personArray))