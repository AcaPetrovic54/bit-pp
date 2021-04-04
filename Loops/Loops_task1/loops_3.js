/* 3. Write a program to compute the sum and product of an array of integers. */

var array = [1, 2, 3, 4, 5, 6],
    s = 0,
    p = 1;
for (var i = 0; i < array.length; i += 1) 
   {
    s += array[i];
    p *= array[i];
    }
console.log('Sum : '+s + ' Product :  ' +p);