/*
1. Write a function to check whether the `input` is a string or not.
"My random string" -> true
12 -> false
*/

"use strict";
var input = "";

function isString (a) {
    var string = false;
    if (typeof a === "string") {
    string = true;
    } 
    return string;
}
var input = "My random string";
var result = isString(input);   
console.log(result);