/* 4. Write a program that finds the first element larger than minimum and prints out its value.
Input array: [4, 2, 2, -1, 6]
Output: 2 */


var a = [4, 2, 2, -1, 6];
var min = a[0];
var secondMin = a[0];

for(var i = 0; i < a.length; i++) {
    if(a[i] < min) {
        min = a[i];    
    }
}

for(var i = 0; i < a.length; i++) {
    if(a[i] > min && a[i] < secondMin) {
        secondMin = a[i];
    }
}

console.log(secondMin);
