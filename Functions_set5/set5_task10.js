/* 10.	Write a program that checks if the entered number is a prime number (i.e. divisible only by 1 and by itself).
Input:  17    | 15
Output: true  | false */

"use strict";

function isAPrimeNum(num) {
    if (num <= 0) {
        return false;
    }
    for (var i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }

    return true;
}

var num = 17;
console.log(isAPrimeNum(num))
