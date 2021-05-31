/* 4.	(skip :))Sort a previously defined array. Place its sorted values into a new array whose values are equivalent to the first array's values multiplied by 2.
Input: [ 13, 11, 15, 5, 6, 1, 8, 12 ]
Output: [ 2, 10, 12, 16, 22, 24, 26, 30 ]
*/
"use strict";
function sortArr(array) {
    var min = array[0];
 
    for (var i = 0; i < array.length; i++) {

        for (var j = 0; j < array.length; j++) {
            if (array[j+1] < array[j]) {
                min = array[j+1];
                array[j+1] = array[j];
                array[j] = min;
            }
        }
    }
    
    for (var i = 0; i < array.length; i++) {
        var newArr = array;
        var newElement = array[i]*2;
        newArr[i] = newElement;
    }
    return newArr;
}
var array = [ 13, 11, 15, 5, 6, 1, 8, 12 ];
console.log(sortArr(array));
