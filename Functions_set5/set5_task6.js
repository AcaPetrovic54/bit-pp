/* 6.	Write a program that uses a loop to add all the even numbers from 1 to 1000 and subtracts all the odd numbers 1 to 500 from the calculated sum. The result should then be multiplied by 12.5 and displayed in console.
Output: 2350000 */

"use strict";

function result(num1, num2) {
    var even = 0;
    var odd = 0;
  
    for (var i = 1; i <= num1; i++) {
        if(i % 2 === 0) {
            even = even + i; 
        } else if (i % 2 !== 0 && i <= num2) {
            odd = odd + i;    
        }
    }
    var sum = even - odd;
    result = sum * 12.5;

    return result;
}

var num1 = 1000;
var num2 = 500;
console.log(result(num1, num2));