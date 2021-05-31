/* 9.	Write a program that displays all the combinations of two numbers between 1 and 7. Don't display two of the same numbers at the same time. Display the number of possible combinations, as well. (E.g. (1.2),(2,1) is allowed, but not (1,1), (2,2)...).   */

"use strict";

function combinationsOfTwoNums (fromNum, toNum) {
    var combinations = [];
    var numberOfPairs = 0;

    for (var i = fromNum; i <= toNum; i++) {
        for (var j = 1; j <= toNum; j++) {

            if (i !== j) {
                combinations[numberOfPairs] = [i, j];
                numberOfPairs++;
            } 
        }
    }
    return combinations;
}
var fromNum = 1;
var toNum = 7;
console.log(combinationsOfTwoNums(fromNum, toNum))