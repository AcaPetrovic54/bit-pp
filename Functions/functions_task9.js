// 9. Write a program that calculates the sum of odd elements of a given array.
/*
function sumOfOddNums (arr = []) {
    var sum = 0;

    for(var i = 0; i < arr.length; i++) {
 
        if (arr[i] % 2 === 1) {
        sum += arr[i];
        }
    }
    return sum;
}
var sum = sumOfOddNums ([52, 1, 78, 103, 44, 5, 6]);
console.log(sum);
*/
function sumOfOdd(array) {
    var sum = 0;
    for(i = 0; i < array.length; i++) {
        var currentElement = array[i];
        if (currentElement % 2 !== 0) {
            sum = sum + currentElement;
            
        }
    }
    return sum;
}
var a = [52, 1, 78, 103, 44, 5, 6];
console.log(sumOfOdd(a));