/* 8. Write a program that calculates a number of appearances of a given number in a given
array.
Inputs: a = [2, 4, 7, 8, 7, 7, 1], e = 7
Result: 3 */


function countNum(a = [], e) 
{
    var num = 0;
    
    for (var i = 0; i < a.length; i++) {
    if (e === a[i])
    num++
     }
     return num;
}

var number = countNum([2, 4, 7, 8, 7, 7, 1], 7);
console.log(number);

/*
var array = [2, 4, 7, 8, 7, 7, 1]; 
var element = 7;

function numOfAppears(array, element) {
    var appearCount = 0;
    for(var i; i < array.length; i++) {
        var currentElement = a[i];
        if (currentElement === element) {
            appearCount++;
        }
    }
    return appearCount;
}
console.log(numOfAppears(array, element));
*/


