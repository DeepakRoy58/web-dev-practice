let numberofGuests = 4 

let pizzaSize ;

if (numberofGuests <=2 ) {
    pizzaSize = "small" ;
}

else if (numberofGuests <=5 ) {
    pizzaSize = "medium" ;
}

else {
    pizzaSize = "large";
}

console.log( "Recommended size of the pizza is : " +pizzaSize + " pizza.");
