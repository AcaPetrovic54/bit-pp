// 4.	Write a function that takes a number and returns array of its digits.

"use strict";

function numberToArr(num) {
    var newArr = [];
    var str = num + "";

    // var str = 12345 + ""; => str = "12345"

    for (var i = 0; i < str.length; i++) {
        newArr[newArr.length] = str[i];
        //console.log(newArr);
    }
    return newArr;
}

var num = 12345;
console.log(numberToArr(num));