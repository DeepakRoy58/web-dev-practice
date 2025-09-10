
/* If you pass the objects as a parameters in Functions , 
the inside change reflects outside the function.

If You pass the value as a parameters the change doesnt reflects
globally in the code. (Like A Copy)*/


function myFunc(theObject) {
    theObject.make = "Toyato" ;   
}

const myCar = {
    model : "Accord",
    year : 1978 , 
    make : "Honda",
};

console.log(myCar.make) ;
myFunc(myCar) ;
console.log(myCar.make);
