/* 7. Write a program that intertwines two arrays. You can assume the arrays are of the same
length.
Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
Output array: [4, 3, 5, 8, 6, 11, 2, 9] */

var a = [4, 5, 6, 2];
var b = [3, 8, 11, 9];

var newArray = [];

for (var i = 0; i < a.length; i++) {
    newArray[newArray.length] = a[i];
    newArray[newArray.length] = b[i];
}
console.log(newArray);