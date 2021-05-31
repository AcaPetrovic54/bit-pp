/*
2. Write a program to join all elements of the array into a string skipping elements that are
undefined, null, NaN or Infinity.
[NaN, 0, 15, false, -22, '', undefined, 47, null]
*/
function makeNewString(arr) {
    var newString = "";

    for (var i = 0; i < arr.length; i++) {
        if (typeof arr[i] === "string" || isFinite(arr[i]) && typeof arr[i] !== "object") {

            newString += arr[i];
        }
    }

    return newString;
}

var someArray = [NaN, 0, 15, false, -22, '', undefined, 47, 'vla', null];

console.log(makeNewString(someArray));