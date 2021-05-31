// 4. Write a program that calculates an arithmetic mean of four numbers.
/*
function arMean (a, b, c, d) {
    var mean = (a + b + c + d) / 4; 
    return mean;
}

var result = arMean(1, 2, 3, 4);
console.log(result);
*/
//JavaScript function that returns the average / mean
//value for all numbers in an array.
/*
function arrayAverage(arr){
    //Find the sum
    var sum = 0;
    for(var i in arr) {
        sum += arr[i];
    }
    //Get the length of the array
    var numbersLength = arr.length;
    //Return the average / mean.
    return (sum / numbersLength);
}
// An example of this function in action:
var avg = arrayAverage([1, 2, 5, 20, 25]);
console.log(avg);
*/
/* 
function avgOfFour(a, b, c, d) {
    var sum = (a + b + c +d);
    var avg = sum / 4;
    return avg;
}
console.log(avgOfFour(1, 2, 3, 4));
*/
function avgOfAll() {
    var avg;
    var sum = 0;
    var numOfArgs = arguments.length;

    for (var i = 0; i < numOfArgs; i++) {
        var currentNum = arguments[i];
        sum = sum + currentNum;
    }
    avg = sum / numOfArgs;
    return avg;
}
console.log(avgOfAll(1, 2, 3, 4, 5));