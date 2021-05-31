/* 5.	(skip :))Sort a previously defined array in a descending order and display it in the console.
Input:  [ 13, 11, 15, 5, 6, 1, 8, 12 ]
Output: [ 15, 13, 12, 11, 8, 6, 5, 1 ] */

"use strict";
function sortArr(array) {
    var max = array[0];
    
    for (var i = 0; i < array.length; i++) {
        for (var j = 0; j < array.length; j++) {
            if (array[j+1] > array[j]) {
                max = array[j+1];
                array[j+1] = array[j];
                array[j] = max;
            }
        }    
    }
    return array;
}

var array = [ 13, 11, 15, 5, 6, 1, 8, 12 ];
console.log(sortArr(array));
