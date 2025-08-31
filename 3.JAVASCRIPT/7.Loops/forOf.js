/* Syntax:
for (variable of iterable) {
  // Code block to be executed on each iteration
} */

let numbers = [1, 2, 3, 4, 5, 6, 7];

let sum = 0;
for(let value of numbers){
    sum += value;
}
console.log(sum);

// Output : 28