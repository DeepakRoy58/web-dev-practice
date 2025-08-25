// The "while" loop in JavaScript provides another method to execute a 
// block of code repeatedly based on a specific condition.
//  The primary difference between the 'for' loop and the 'while'
//   loop lies in their syntax, 

// Syntax:
// while (condition) {
//     // code to be executed
// }

// Condition: This part specifies the condition for 
// continuing the loop. If the condition evaluates to true,
// the loop continues; if it evaluates to false, the loop terminates.

let sum = 0;
let i=1;
while(i <= 10){
    sum = sum + i;
    i++;
}

console.log(sum);

// Output: 55