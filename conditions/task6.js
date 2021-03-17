/* Task 6. Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit.
Formula : F = (9*C/5) + 32 [ where c = temperature in Celsius and f = temperature in Fahrenheit ]
Sample Input: 60°C
Output : 60°C is 140 */

/* var F;
var C = 60;
var result;

if (typeof F === "undefined") {
    result = /* var F;
var C = 60;
var result;

if (typeof F === "undefined") {
    result = (9*C/5) + 32;
} else {
    result = (F-32)/1.8;
}
console.log(result); */


var F = 140;
var C = 60;
var result;
var direction = "C to F";

if (direction !== "F to C") {
result = (9*C/5) + 32;
} else {
    result = (F-32)/1.8;
}
console.log(result);
