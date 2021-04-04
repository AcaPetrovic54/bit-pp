/*
4. Write a function to count the number of letter occurrences in a string.
"My random string", "n" -> 2
*/
"use strict";
var string = "My random string";

function countString(string, letterToCheck) {
    var count = 0;
 
    for (var i = 0; i < string.length; i++) {
        if (string[i] === letterToCheck) {
            count = count + 1;
        }    
    }
         return count;
}


// take input from the user

var letterToCheck = "n";

//passing parameters and calling the function
var result = countString(string, letterToCheck);

// displaying the result
console.log(result);