/* 3. Write a program that checks if a given number is a three digit long number. */

/*
function num(a) {
    if(a > 99 && a < 1000) {
    var c = a + " is three a digit long number";  
    return c;
    }
    else {
        var c = a + " is not a three digit long number"; 
        return c;
    }
}
var result = num(100);
console.log(result);
*/

function isThreeDigit(num) {
    var abs = num;
    if(abs < 0) {
        abs = abs * (-1);
    }
    if (abs > 99 && abs < 1000) {
        return true;
    }
    return false;
}
console.log(isThreeDigit(-124));
