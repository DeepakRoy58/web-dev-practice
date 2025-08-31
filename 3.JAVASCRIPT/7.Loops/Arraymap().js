/* Syntax :
const newArray = array.map((currentValue, index, array) => {
  // Return the transformed value for each element
}); */


/*The map() method in JavaScript provides a powerful mechanism for
 transforming array elements with ease, offering a concise and 
 readable solution for data manipulation tasks. By leveraging its 
 functional programming principles and non-destructive nature, we 
 can write cleaner and more maintainable code for transforming arrays in JavaScript. */


// The map() method does not mutate the original array but returns a new array with the 
// transformed elements, preserving the integrity of the original data.


let fruits = ['grapes', 'orange', 'apple', 'banana'];

let myFruits = fruits.map((fruit) => {
    return fruit.toUpperCase();
})

console.log(myFruits);

// Output : [ 'GRAPES', 'ORANGE', 'APPLE', 'BANANA' ]