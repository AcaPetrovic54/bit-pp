/* 2. Write a program that checks if a given number is odd. */
/*
function num(a) {
    if(a % 2 === 1) {
    var c = a + " is odd";  
    return c;
    }
    else {
        var c = a + " is even"; 
        return c;
    }
}
var result = num(3);
console.log(result);
*/
function isOdd(num) {
    if(num % 2 !== 0) {
        return true;
    }
    return false;
}

var someValue = 15;
if(isOdd(someValue)) {
    console.log("Odd");
} else {
   console.log("Even");
}