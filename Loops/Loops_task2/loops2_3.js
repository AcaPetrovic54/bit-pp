/* 3. Write a program that finds the minimum of a given array and prints out its value and
index.
Input array: [4, 2, 2, -1, 6]
Output: -1, 3 */

/* var array = [4, 2, 2, -1, 6];
var min = array[0];
var index = 0;

for (var i = 0; i < array.length; i++) {

       if (min > array[i]) {
       min = array[i]; 
        }
}
console.log(min); */

var a = [4, 2, 2, -1, 6];
var index = 0;
var min = a[index];


for(var i = 0; i < a.length; i++) {
    if(a[i] < min) {
            min = a[i];
            index = i;
    }
}
 
console.log(min + ", " + index);

