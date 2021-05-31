/* 8.	Write a program that concatenates two arrays. 
Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
Output array: [4, 5, 6, 2, 3, 8, 11, 9] */


var concanatedArr = function(array1, array2) {
    newArray = [];
    for (var i = 0; i < array1.length; i++) {
        newArray[newArray.length] = array1[i]; 
    }
    for (var j = 0; j < array2.length; j++) {
        newArray[newArray.length] = array2[j]; 
    }

    return newArray;
}

var array1 = [4, 5, 6, 2]; 
var array2 = [3, 8, 11, 9];
console.log(concanatedArr(array1, array2));
