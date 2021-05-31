
/*
function sumOfEven() {
    var sum = 0;

    function isEven(num) {
        //var isNumEven = true;

        //if (num % 2 !== 0) {
        //    isNumEven = false;
        //}

        return num % 2 === 0;
    }

    function sumOfTwo(num1, num2) {
        return num1 + num2;
    }

    for (var i = 0; i <= 100; i++) {
        if (isEven(i)) {
            sum= sumOfTwo(sum, i);
        }    
    }
    return sum;
}
// var result = sumOfEven();
// console.log(result);
////////////////////////////////////////

function sumOfOdd() {
    // ...... 
    return 2500;
}

function final(sum1, sum2) {
    return (sum1 - sum2) * 12.5;
}

var sumOfEvenNums = sumOfEven();
var sumOfOddNums = sumOfOdd();
// console.log((sumOfEvenNums - sumOfOddNums) * 12.5);
var finalResult = final(sumOfEvenNums, sumOfOddNums);
console.log(finalResult);

// var isEven = true;
// console.log(isEven, typeof isEven);

*/
/*
function final() {
    function sumOfEven() {
        var sum = 0;
    
        function isEven(num) {
            return num % 2 === 0;
        }
    
        function sumOfTwo(num1, num2) {
            return num1 + num2;
        }
    
        for (var i = 0; i <= 100; i++) {
            if (isEven(i)) {
                sum= sumOfTwo(sum, i);
            }    
        }
        return sum;
    }
    
    function sumOfOdd() {
        // ...... 
        return 2500;
    }
    var sumOfEvenNums = sumOfEven();
    var sumOfOddNums = sumOfOdd();
    
    return (sumOfEvenNums  - sumOfOddNums) * 12.5;
}


var finalResult = final();
console.log(finalResult);
*/


function calculatorGenerator() {
    function sumOfEven() {
        var sum = 0;
    
        function isEven(num) {
            return num % 2 === 0;
        }
    
        function sumOfTwo(num1, num2) {
            return num1 + num2;
        }
    
        for (var i = 0; i <= 100; i++) {
            if (isEven(i)) {
                sum= sumOfTwo(sum, i);
            }    
        }
        return sum;
    }
    
    function sumOfOdd() {
        // ...... 
        return 2500;
    }
    var sumOfEvenNums = sumOfEven();
    var sumOfOddNums = sumOfOdd();
    
    return function () {
        return (sumOfEvenNums  - sumOfOddNums) * 12.5;
    }
}

var calculator = calculatorGenerator();


console.log(calculator());


