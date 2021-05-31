/* 9.	Write a program that deletes a given element e from the array a. 
Input: e = 2, a = [4, 6, 2, 8, 2, 2]
Output array: [4, 6, 8]  */

"use strict";

var deletesgivenElement = function (e, a) {
    var newArr = [];
    for (var i = 0; i < a.length; i++) {  
        if (a[i] !== e) {
        newArr[newArr.length] = a[i];
        }
    }
    return newArr;
}

var e = 2;
var a = [4, 6, 2, 8, 2, 2];
console.log(deletesgivenElement(e, a));
