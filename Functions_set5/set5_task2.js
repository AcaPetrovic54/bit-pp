/* 2.	Use the following array to make a new one by dividing its values by two and adding 5. If a given element's value is 0, change it to 20.
Input:  [ 3, 500, -10, 149, 53, 414, 1, 19 ]
Output: [ 6.5, 255, 20, 79.5, 31.5, 212, 5.5, 14.5 ]
*/
"use strict";

function changeValuesOfArr(array) {
    var newArr = [];
    for (var i = 0; i < array.length; i++) {
        var newElement = array[i]/2 +5;

        if (newElement !== 0) {
            newArr[i] = newElement;
        } else {
            newArr[i] = 20;
        }     
    }
    return newArr;
    
}

var array = [ 3, 500, -10, 149, 53, 414, 1, 19 ];
console.log(changeValuesOfArr(array));