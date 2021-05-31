/* 6.	Write a function to find the position of the last occurrence of a character in a string. The result should be in human numeration form. If there are no occurrences of the character, function should return -1. */

"use strict";

var str = "blahhhyrf";


function lastOccur(str, a) {
    var position = -1;
    for (var i = 0; i < str.length; i++) {
        if (str[i] === a) {
            if(i + 1 === 1){
                var add = "st";
            } else if (i + 1 === 2) {
                var add = "nd";
            } else if (i + 1 === 3) {
                var add = "rd";
            } else {
                var add = "th";
            }
            position = i + 1 + add;    
        }

    }
    return position;
}

console.log(lastOccur(str, "h"));