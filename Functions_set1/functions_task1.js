/* 1. Write a program that calculates the maximum of two given numbers. */

/* 
function max(a, b) {
    if(a > b){
    var c = a;
    return c;
    }
    else {
        var c = b;
        return c;
    }
}

var result = max(5, 6);
console.log(result); 
*/
function max(a, b) {
    var max;
    if (a > b) {
        return a;
    }
    if (b > a) {
        return b;
    }
    return "Numbers are equal";
}

console.log(max(6, 7));