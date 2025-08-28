Syntax : 
for (variable in object) {
  // Code block to be executed on each iteration
}


const fruits = ['apple', 'banana', 'orange'];

for (let index in fruits) {
  console.log(`Index ${index}: ${fruits[index]}`);
}


/* Output :
Index 0: apple
Index 1: banana
Index 2: orange
*/