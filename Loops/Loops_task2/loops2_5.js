/* Write a program that calculates the sum of positive elements in the array.
Input array: [3, 11, -5, -3, 2]
Output: 16 */



var array = [3, 11, -5, -3, 2];
var s = 0;
var i;
for (i = 0; i < array.length; i += 1) 
   { 
    if (array[i] > 0) {
    s += array[i];
    }
    }

console.log(s);