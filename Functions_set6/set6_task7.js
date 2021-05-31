/* 7.	Write a function to find the maximum element in array of numbers. Filter out all non-number elements. */

function findMax(array) {
    var max = array[0];

    for (var i = 0; i < array.length; i++) {
        var element = array[i];
        if (max < element && typeof element === "number") {
            max = element;   
        }  
    }
    return max;
}
var array = [ false, "9", 3, "a", -4, NaN, 7, true, 8, undefined ];
console.log(findMax(array));