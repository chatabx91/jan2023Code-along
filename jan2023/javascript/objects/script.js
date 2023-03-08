// review of functions 

// named function
function doggy(/*parameters go here */){
    // functions should always return something
    console.log('Doggy');
    return true;
};
// invoking/calling function
doggy();

// fat-arrow function
const cat = ()=>{
    console.log('Cat');
    return true;
};
cat();

//------------------------------------------------//


//objects
let person = {
    name: 'Walter White', // key:value pairs separated by commas
    age: 50,
    city: 'Albuquerque',
    hobbies: 'Cooking'
}

// dot notation
console.log(person.name);
// bracket notation
console.log(person['name']);

// update object
person.name = 'Heisenberg';
person['hobbies'] = 'Cooking blue stuff';
person.family = ["Skylar", "Flynn", "Holly"];
person.associates = { 
    friend: "Jesse",
    enemy: "Gus"
}

console.log(person.name, person['hobbies']);


// create empty object
let newPerson = {}

// assign values to empty object
newPerson.name = "Walter White";
newPerson.age = 50;
newPerson.city = "Albuquerque";
newPerson.hobbies = "Cooking";

console.log(newPerson);

// objects can hold all kinds of data
// values can be [], strings, numbers, boolean, functions, objects

// How would you retrieve the age of person object?
console.log(person.age);
// How would you retrieve only 'Flynn' from person object?
console.log(person.family[1]);
// How would you retrieve the name of enemy from the person object?
console.log(person.associates.enemy)


let posts = [
    {
        title: "How to cook the perfect scrambled eggs",
        author: "Bob Odenkirk",
        comments: ["The secret is lots of butter", "Will this raise my cholesterol?"]
    },
    {
        title: "Eggs are cheap, quick, and easy",
        author: "Bryan Cranston",
        comments: ["What if I don't have a spatula?", "I love butter.", "Salt and pepper are the ONLY spices you need"]
    }
]

// Retrieve only 'Bob Odenkirk'
console.log(posts[0]['author'])
// Retrieve only 'I love butter.'
console.log(posts[1].comments[1]);

// destructuring
let person2 = {
    fname: "Scott",
    lname: "Lang",
    age: 40,
    isMarried: true,
    numOfChildren: 1
};

const {fname, lname, age, isMarried, numOfChildren} = person2;
console.log(fname,lname,age,isMarried,numOfChildren);

//iterating with objects
for(const keys in person2){
    console.log(keys);
}

// what if we don't know the the key:value?
let dog = {
    name: "Krypto",
    breed: "Labrador Retriever",
    gender: "male",
    age: 10,
    villain: false,
    owner: "Connor Kent"
}

for(const keys in dog){
    console.log("key: " + keys ,"value: " + dog[keys])
}

// mutating const variables, can change mutate values but cannot change there types, i.e change array to object
const animal = ['dog', 'cat']
const animal1 = ['cow', 'chicken']
let animal2 = animal.concat(animal1);
console.log(animal2)

// destructuring array
let [dogg, catt] = ['bark', 'woof'];
console.log(dogg, catt)

// spread operator
let fireMe = ['Aarin', 'Patrick', 'Shiva'];
let firedToo = ['Marlo',...fireMe];
console.log(firedToo)