//Return Functions :

function getAvg (a,b,c) {
    avg = a+b+c/3;
    return avg;
}

let ans = getAvg(3,6,8) ;
console.log("Printing Average : " , ans);


function userName(firstName, lastName) {
    let fullName = lastName + " " + firstName;
    return fullName ;
}

let fullName = userName("Roy" , "Deepak") ;
console.log("user name was : " ,fullName);


/* Function Expression */

let getExpo = function (x,y) {
    let Expo = x**y ;
    return Expo ;    
}

console.log(getExpo(2,10));
