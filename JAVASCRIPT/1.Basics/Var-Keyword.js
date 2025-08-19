// VAR IS A  FUNCTION SCOPED AND GLOBAL SCOPED , ITS NOT AN BLOCK - SCOPED

//REASSIGNMENT 

var x =10 ;

console.log(x);

x = "Mayank" ;

console.log(x);

//Redefinition

var x =98 ;

console.log(x);

var x = "Deepak"

console.log(x);

//  Whats Block - scoped ???

// "Block scope" (or blocked scope as you wrote) means that
//  a variable declared inside a block of code (enclosed by { })
//   is only accessible within that block - and not outside it.


{
    let a = 10;
    const pi  = 3.14;
    var c = "Deepak Roy" ;
}

console.log(typeof a); //Reference error : as a is not defined
console.log(typeof pi);//Reference error : as pi is not defined
console.log(typeof c); // works because its an function-scope not an block-scope

