/*
function a() {
    console.log("A!");
    return function () {
        console.log("B!");
    };
}

var bigA = a()();
console.log(bigA, typeof bigA);
*/

/*
function sum(x) {
    return function (y) {
        var sum = x + y;
        return function (z) {
            return sum + z;
        }
    }
}

var result = sum(1)(2)(3);
console.log(result);
*/

function sum(x) {
    return function (y) {
        var sum = x + y;
        return function (z) {
            return sum + z;
        }
    }
}

var step1 = sum(1);
console.log(step1, typeof step1);

var step2 = step1(2);
console.log(step2, typeof step2);

var step3 = step2(3);
console.log(step3, typeof step3);