/* 1.	Find the min and max element in the following array and switch their places. Print out the modified array in the console.
Input:  [ 3, 500, 12, 149, 53, 414, 1, 19 ]
Output: [ 3, 1, 12, 149, 53, 414, 500, 19 ]  */

"use strict";

function findAndSwitchMinMax(array) {
    var min = array[0];
    var max = array[0];
    var indexMin = 0;
    var indexMax = 0;

    for (var i = 0; i < array.length; i++) {
        if (array[i] < min) {
            min = array[i];
            indexMin = i;
        }
    
        if (array[i] > max) {
            max = array[i];
            indexMax = i;
        }    
    }
    array[indexMin] = max;
    array[indexMax] = min;
    
    return array;
}

var array = [ 3, 500, 12, 149, 53, 414, 1, 19 ];
console.log(findAndSwitchMinMax(array));