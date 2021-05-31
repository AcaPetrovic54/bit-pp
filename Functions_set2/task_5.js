/*
5. Write a function to find the position of the first occurrence of a character in a string. The
result should be the position of character. If there are no occurrences of the character, the
function should return -1.
*/

"use strict";


function firstOccur(str, character) {
    for (var i = 0; i < str.length; i++) {
        var position = 0;
        if (typeof str[i] !== "string") {
            return false;
        }
        if (str[i] === " ") {
            continue;
        }
        else if (str[i] === character) {
           position = i;
           return position;
           break;
        }
    }
    return -1;

}
var str = "My random string";
var character = "s";
console.log(firstOccur(str, character));
