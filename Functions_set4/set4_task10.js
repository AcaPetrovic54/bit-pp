/* 10.	Write a program that inserts a given element e on the given position p in the array a. If the value of the position is greater than the array length, print the error message. 
Input: e = 78, p = 3, a = [2, -2, 33, 12, 5, 8]
Output: [2, -2, 33, 78, 12, 5, 8] */

"use strict"

var insertsAnElement = function (e, p, a) {
    var newArray = [];

    for (var i = 0; i < a.length; i++) {
        if (i === p) {
            newArray[newArray.length] = e;
        }
        newArray[newArray.length] = a[i];
    }

    return newArray;
}

var a = [2, -2, 33, 12, 5, 8];
var p = 3;
var e = 78;

console.log(insertsAnElement(e, p, a));