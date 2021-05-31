// 4.	Write a function that reverses a number. The result must be a number.

// 12345 -> 54321 // Output must be a number

"use strict";


var num = 12345;

function reverse(a) { 
    var reversed = 0;
    a += "";

    for(var i = a.length-1; i >= 0; i--) {
        var index = a[i];
        reversed += index;
    }
    return parseInt(reversed)

}
console.log(reverse(num)); 

/*
function reverseNum(a) {
    var a = a + "";
    var newArr;
    for(var i = a.length; i >= 0; i--) {
        if(a[i] !== undefined) {
  
            newNum = newNum + a[i];
            var result = parseInt (newNum);
        }
    } return newNum;
}
var result = reverseNum(12345);
console.log(result);
*/