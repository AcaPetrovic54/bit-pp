/* 7. Write a program that calculates a number of digits of a given number. */

/*
function numOfDigits (num) {
  var counter = 0;
  num = num + "";

  return num.length;
}

var result = numOfDigits(150);
console.log(result) */


function numOfDigits (num) {
  var counter = 0;

if(num < 0) {
  num = num * -1;
}
for(var i = num; i >= 1; i = i / 10) {
  counter++;
}
  return counter;
}

var result = numOfDigits(-100.123);
console.log(result)


/*
function numOfDigits (num) {
  var counter = 0;

if(num < 0) {
  num = num * -1;
}

while (num >= 1) {
  counter++;
  num /= 10;
}
return counter;
}

var result = numOfDigits(-100.123);
console.log(result)
*/