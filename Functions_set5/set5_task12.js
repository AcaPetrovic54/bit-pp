/* 12.	Write a program that calculates the greatest common divisor of two integers. Note: The greatest common divisor of two non-zero integers is the greatest positive number that divides both numbers with no remainder.
Input:  192 42 | 81 9
Output: 6      | 9  */


function greatestCommonDivisor(a, b) {
    var divisor = 1;

    for (var i = 1; i <= a && i <= b; i++) {
        if (a % i === 0 && b % i === 0) {
           divisor = i; 
        } 
    }  
    return divisor;    
}
var a = 81;
var b = 9;

console.log(greatestCommonDivisor(a, b));