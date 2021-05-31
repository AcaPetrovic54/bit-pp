/* 3.	Write a program that finds the minimum of a given array and prints out its value and index. 
Input array: [4, 2, 2, -1, 6]
Output: -1, 3 */

"use strict";

var minOfArr = function (array) {
    var min = array[0];
    var index = 0;
    var output = 0;

    for (var i = 0; i < array.length; i++) {
        if (min > array[i]) {
        min = array[i]; 
        index = i;
        }
    }
    output = min + ", " + index;
    return output;
}

var array = [4, 2, 2, -1, 6];
console.log(minOfArr(array));


