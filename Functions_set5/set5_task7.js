/* 7.	Define a 10 element array. Take the first two letters from every string (that has at least 2 letters) in the array and create a new string from them. Print it out in the console.
Input: [ "M", "Anne", 12, "Steve", "Joe", "John", "David", "Mark", true, "A" ]

Output: AnStJoJoDaMa */

"use strict";

function convertArrToString(array) {

    var newStr = "";
    for (var i = 0; i < array.length; i++) {
        for (var j = 0; j < array[i].length; j++) {
            if (array[i].length >= 2 && j < 2) {
               newStr = newStr + array[i][j];
            }
        }
    }
    return newStr;
}

var array = [ "M", "Anne", 12, "Steve", "Joe", "John", "David", "Mark", true, "A" ];
console.log(convertArrToString(array));