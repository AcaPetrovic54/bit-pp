/* 9. Write a program that deletes a given element e from the array a.
Input: e = 2, a = [4, 6, 2, 8, 2, 2] 
Output array: [4, 6, 8] */

var e = 2; 
var array = [4, 6, 2, 8, 2, 2];
var b = [];
var filtered = array.filter(Boolean);

for (var i = 0; i < array.length; i++) {
    if (e === array[i]) {
       delete array[i];
    }
}
array = array.filter(Boolean);
console.log(array);