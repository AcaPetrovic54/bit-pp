/* 8.	Write a function that accepts a number as a parameter and checks if the number is prime or not. 
Note: A prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself. */

"use strict";
/*
function isPrime(num) {
    for(var i = 2; i < num; i++)
      if(num % i === 0) return false;
    return num > 1;
  }
  console.log(isPrime(2));
  */

function isPrime(num) {

    if (num === 2) {
      return true;
    } else if (num > 1) {
      for (var i = 2; i < num; i++) {
  
        if (num % i !== 0) {
          return true;
        } else if (num === i * i) {
          return false
        } else {
          return false;
        }
      }
    } else {
      return false;
    }
  
}
  
console.log(isPrime(23));