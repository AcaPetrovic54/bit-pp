/*  8.	Write a function to find the maximum and minimum elements. Function returns an array.  */

function findMaxMin(array) {
    var max = array[0];
    var min = array[0];
   

    for (var i = 0, j = 0; i < array.length, j < array.length; i++, j++) {
        var maxElement = array[i];
        var minElement = array[j];
        
        if (maxElement > max && typeof maxElement === "number") {
            max = maxElement;
        }
        if (minElement < min && typeof minElement === "number") {
            min = minElement;
        }
    }
    return [max, min];
}
var array = [ false, "9", 3, "a", 4, NaN, 7, true, 8, undefined ];
console.log(findMaxMin(array));