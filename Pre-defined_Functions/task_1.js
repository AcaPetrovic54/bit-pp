/* 1. Write a function that converts an array of strings into an array of numbers. Filter
out all non-numeric values.
Input: ["1", "21", undefined, "42", "1e+3", Infinity, "1.1"]
Output: [1, 21, 42, 1000] */

function convertStringsToNums(array) {
    var transformedArray = [];

    // go trought array of strings
    for(var i = 0; i < array.length; i++) {
        var currentValue = array[i]; 

    // check if value is valid number
        var isValid = isFinite(currentValue);

        if(isValid) {
    // if it is convert it to number
            var number = parseFloat(currentValue);
    // put it in the transformedArray
            transformedArray[transformedArray.length] = number;

        }

    }
 
    return transformedArray;

}
console.log(convertStringsToNums(["1", "21", undefined, "42", "1e+3", Infinity, "1.1"]));