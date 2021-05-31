/* 4.	Write a program that finds the second smallest number and prints out its value. 
Input array: [4, 2, 2, -1, 6]
Output: 2 */

"use strict";

var secondSmallest = function (array) {
    var min = array[0];
    var secondMin = Infinity;
    for(var i = 0; i < array.length; i++) {
        if(array[i] < min) {
        min = array[i];    
        }
    }

    for(var i = 0; i < array.length; i++) {
        if(array[i] > min && array[i] < secondMin) {
        secondMin = array[i];
        }
    }
    return secondMin;
}

var array = [4, 2, 2, -1, 6];
console.log(secondSmallest(array));
