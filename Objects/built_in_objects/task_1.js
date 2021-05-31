/* 1. Write a functional expression that duplicates each element of a given array.
Input: [2, 4, 7, 11, -2, 1]
Output: [2, 2, 4, 4, 7, 7, 11, 11, -2, -2, 1, 1]  */

var array = [2, 4, 7, 11, -2, 1];

function duplicatesEachEl(array) {
    var newArr = [];
    array.forEach(function(item) {
        newArr.push(item, item);
      })

    return newArr; 
}
console.log(duplicatesEachEl(array));