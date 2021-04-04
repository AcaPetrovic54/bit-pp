/* 8. Write a program that concatenates two arrays.
Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
Output array: [4, 5, 6, 2, 3, 8, 11, 9] */

var a =[4, 5, 6, 2]; 
var b = [3, 8, 11, 9];

var newArray = a;

for (var i = 0; i < b.length; i++) 
    { 
      newArray[newArray.length] = b[i];
    }
    console.log(newArray, a);
    // newArray je isti kao i a sto se vidi kada uradimo console.log(newArray, a); i za jedan i za drugi