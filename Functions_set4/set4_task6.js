/* 6.	Write a program that checks if a given array is symmetric. An array is symmetric if it can be read the same way both from the left and the right hand side.   
Input array: [2, 4, -2, 7, -2, 4, 2]
Output: The array is symmetric. */

"use strict";

var isSymmetricArray = function (a) {
    var result = true;
    var output = ""
    for (var i = 0, j = a.length -1; i <= j; i++, j--) {
        if (a[i] !== a[j]) {
            result = false;
            break;
        }
    }
    if (result) {
        output = "The array is symmetric." 
    } else {
        output = "The array is NOT symmetric."
    }
return output;
}
var a = [2, 4, -2, 7, -2, 4, 2];
console.log(isSymmetricArray(a));