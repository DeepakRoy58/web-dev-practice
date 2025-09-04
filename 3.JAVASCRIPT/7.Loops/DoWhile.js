// The 'do-while' loop in JavaScript is similar to the 'while' loop but, 
// with one key difference : the condition is checked after the loop body 
// executes. Due to this property if we use 'do-while' loop

// SYNTAX:

// do {
//     // logic code to be executed
// } while (condition);

//  The code block inside the "do" section is executed first.

//  Then, the condition in the "while" section is evaluated.

//  If the condition is true, the loop repeats; otherwise, it terminates.


let sum = 0;
let count = 1;
do{
    sum = sum + count;
    count = count + 1;
}while(count <= 10);

console.log(sum);

// Output : 55