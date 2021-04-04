/* 1. Write a program that checks if a given element e is in the array a.
Input: e = 3, a = [5, -4.2, 3, 7]
Output: yes 
Input: e = 3, a = [5, -4.2, 18, 7]
Output: no */

/* var e = 3;

var array = [5, -4.2, 3, 7];

for (var i = 0; i < array.length; i++) {
    if (e === array[i]) {
       result = 'Yes';
       break;
    } else {
       result = 'No'
    }
}
console.log(result); */


var e = 3;
var a = [5, -4.2, 3, 7];
var result ="No";

for(var i = 0; i < a.length; i++) {
   if(a[i] === e) {
     result = "Yes";
     break;
   }
}

console.log(result);