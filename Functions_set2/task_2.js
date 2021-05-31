/*
2. Write a function to check whether a string is blank or not.
"My random string" -> false
" " -> true
12 -> false
false -> false
*/
"use strict";
var input = "";

function isString (a) {
    var string = false;

    if (a === " ") {
        string = true;
    }
    return string;  
}
var input = " ";
var result = isString(input);   
console.log(result);