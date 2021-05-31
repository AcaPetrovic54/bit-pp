/* 5.	Write a program that calculates the sum of positive elements in the array.
Input array: [3, 11, -5, -3, 2]
Output: 16 */

"use strict";

var sumPositive = function(someArray) {
    var sum = 0;
    for (var i = 0; i < someArray.length; i++) {
        if(array[i] > 0) {
            sum = sum + someArray[i];
        }  
    }
    return sum;
}
var array = [3, 11, -5, -3, 2];
console.log(sumPositive(array));