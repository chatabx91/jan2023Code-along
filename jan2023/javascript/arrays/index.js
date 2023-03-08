// An array is used using []
let pets = ['Moxxxi', 'Pickle', 'Hootchie']; // create an array of names
console.log(pets[0]); // print the first element of the array.
pets[1] = 'Doggo' // replace the second element of the array.
console.log(pets) // reprint the array.

// QUESTION: How would you get the last element in an array 
// if you did not know how many elements there were?
console.log(pets[pets.length - 1])

// toString() - converts array into string, does NOT alter orignal array
console.log(pets.toString());

// join() - joins all array elements into a string
console.log(pets.join(' * '));

// indexOf() - returns back index of a certain element
console.log(pets.indexOf('Doggo'))

// push() - add new element to end of array, can push multiple items
pets.push('Terry')
console.log(pets);

// pop() - remove last element from the array
pets.pop()
console.log(pets);

// shift() - remove element from front of array
pets.shift();
console.log(pets);

// unshift() - add element to front of the array
pets.unshift('Bobby')
console.log(pets);

// slice(start, end) - returns selected elements in a new copied array, 
let stuff = ['Moxxi', 'Pickle', 'Hootchie', 'MonkeyButt'];
console.log(stuff.slice(1,3)); //short hand for displaying or assign to variable

// iterating over an array
let nums = [1,2,3,4,5];
for (let i = 0; i < nums.length; i++) {
    nums[i] = nums[i] * 2;
}
console.log(nums);

// forEach version 
nums.forEach(element => {console.log(element)});

// map() - create new array that peforms a function on every element of the array
let newNums = nums.map(el => {
    return el *3;
})
console.log(newNums);

// sort() - sort items of an array, by default sort values as strings in alphabetical ascending order
stuff.sort()
console.log(stuff);