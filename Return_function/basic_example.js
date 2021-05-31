function a() {
    console.log("A!");
    return function () {
        console.log("B!");
    }
}

var bigA = a();

// var bigA = function () {
//     console.log("B!");
// }

bigA();
console.log(bigA, typeof bigA);