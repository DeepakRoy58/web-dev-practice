//arithmetic operators

let a = 10;
let b = 20;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
console.log(a ** b);

//Increment & decrement
let x = 9;
let y = 9;

x++;
console.log(x);

y--;
console.log(y);


//Pre & Post Increment & Decrement

let p = 10;
let q = 20;

console.log(++p);
console.log(p++);
console.log(p);

console.log(--q);
console.log(q--);
console.log(q);


// Assignment Operators

let  name  = "Deepak Roy";
let s = 7;

console.log(name);
console.log(s);

//Comparison Operators

let m = 10;
let n = 20;

console.log(m == n);
console.log(m != n);
console.log(m > n);
console.log(m < n);
console.log(m >= n);

// Logical Operators

let d = 10;
let e = 20;
let k = 30;

console.log(d < e && d < k);
console.log(d < e || e < k);
console.log(!(d < e));

//Bitwise Operators     

let i = 10;
let j = 20;
let l = 30;

console.log(i & j);
console.log(i | j);
console.log(i ^ j);
console.log(~i);
console.log(i << j);

//Ternary Operator

let age = 18;
let result = age >= 18 ? "You are an adult" : "You are a minor";
console.log(result);

//String Operators

let str1 = "Hello";
let str2 = "World";                             

console.log(str1 + str2);
console.log(str1.concat(str2));

//Type Operators

let num = 10;
let str = "10";

console.log(typeof num);
console.log(typeof str);                                                               