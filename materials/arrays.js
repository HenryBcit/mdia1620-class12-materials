// Creating an array
let fruits = ['Apple', 'Banana', 'Cherry', 'Date'];

// Accessing elements by index
console.log('First fruit:', fruits[0]);  // 'Apple'
console.log('Second fruit:', fruits[1]); // 'Banana'

// Modifying elements by index
fruits[2] = 'Orange';
console.log('Modified fruits array:', fruits); // ['Apple', 'Banana', 'Orange', 'Date']

// Adding elements to the array
fruits.push('Grapes'); // Adds to the end
console.log('After pushing Grapes:', fruits); // ['Apple', 'Banana', 'Orange', 'Date', 'Grapes']

fruits.unshift('Strawberry'); // Adds to the beginning
console.log('After unshifting Strawberry:', fruits); // ['Strawberry', 'Apple', 'Banana', 'Orange', 'Date', 'Grapes']

// Removing elements from the array
let removedLast = fruits.pop(); // Removes the last element
console.log('Removed last fruit:', removedLast); // 'Grapes'
console.log('After popping the last fruit:', fruits); // ['Strawberry', 'Apple', 'Banana', 'Orange', 'Date']

let removedFirst = fruits.shift(); // Removes the first element
console.log('Removed first fruit:', removedFirst); // 'Strawberry'
console.log('After shifting the first fruit:', fruits); // ['Apple', 'Banana', 'Orange', 'Date']

// Iterating over an array using for loop
console.log('Using for loop to print fruits:');
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// Iterating over an array using forEach method
console.log('Using forEach method to print fruits:');
fruits.forEach(function(fruit) {
    console.log(fruit);
});

// Mapping over an array to create a new array
let upperFruits = fruits.map(function(fruit) {
    return fruit.toUpperCase(); // Converts each fruit to uppercase
});
console.log('Fruits in uppercase:', upperFruits); // ['APPLE', 'BANANA', 'ORANGE', 'DATE']

// Filtering the array based on a condition
let longFruits = fruits.filter(function(fruit) {
    return fruit.length > 5; // Filter fruits with more than 5 characters
});
console.log('Fruits with more than 5 characters:', longFruits); // ['Banana', 'Orange']

// Finding an element in the array
let foundFruit = fruits.find(function(fruit) {
    return fruit === 'Orange'; // Finds 'Orange' in the array
});
console.log('Found fruit:', foundFruit); // 'Orange'

// Checking if an element exists in the array
let hasBanana = fruits.includes('Banana');
console.log('Does the array include Banana?', hasBanana); // true

// Array length property
console.log('Length of fruits array:', fruits.length); // 4

// Sorting the array alphabetically
let sortedFruits = fruits.sort();
console.log('Sorted fruits:', sortedFruits); // ['Apple', 'Banana', 'Date', 'Orange']

// Reversing the array order
let reversedFruits = fruits.reverse();
console.log('Reversed fruits:', reversedFruits); // ['Orange', 'Date', 'Banana', 'Apple']

// Concatenating two arrays
let moreFruits = ['Kiwi', 'Mango'];
let allFruits = fruits.concat(moreFruits);
console.log('Concatenated fruits:', allFruits); // ['Orange', 'Date', 'Banana', 'Apple', 'Kiwi', 'Mango']
