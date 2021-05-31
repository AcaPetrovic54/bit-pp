/* 5.	Write a function to get the last element of an array. Passing a parameter 'n' will return the last 'n' elements of the array.

[7, 9, 0, -2] -> -2
[7, 9, 0, -2], 2 -> [0, -2] 
*/ 
"use strict";

function lastElOfArr(a, n) {
    var result = [];
    if(n === undefined) {
        result = a[a.length-1];
    } else {
        for(var i = 0; i < a.length; i++) {
            if (i >= n) {
                result[result.length] = a[i]; 
            }
        }

    }
    return result;
}
console.log(lastElOfArr([7, 9, 0, -2], 2));
