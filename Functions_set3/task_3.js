/* 
3. Write a program to filter out falsy values from the array.
[NaN, 0, 15, false, -22, '', undefined, 47, null] -> [15, -22, 47]
*/

function filterOutFalsy(arr) {
    var newArray = [];

    for (var i = 0; i < arr.length; i++) {
        if (!arr[i]) {

            continue;
        } else {

            newArray[newArray.length] = arr[i];
        }
    }
    return newArray;
}

someArray = [NaN, 0, 15, false, -22, '', undefined, 47, null];
console.log(filterOutFalsy(someArray));
