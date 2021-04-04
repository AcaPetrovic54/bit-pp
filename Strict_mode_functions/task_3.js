/* 
3. Write a function that concatenates a given string n times (default is 1).
"Ha" -> "Ha"
"Ha", 3 -> "HaHaHa"
*/

"use strict";

function concanat(str, n) {
    var output = "";
    if (typeof(n) === "undefined" || n === 0) {
        return str;
    } else {
        for (var i = 0; i < n; i++) {
            output = output + str;
        }
    }
    return output;
}
var result = concanat("Ha", 3);
console.log(result);

