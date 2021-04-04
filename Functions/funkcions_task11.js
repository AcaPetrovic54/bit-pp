// 11. Write a program that concatenates a given string given number of times. For example, if
// “abc” and 4 are given values, the program prints out abcabcabcabc.

/*
repeat = function repeat(str, count) {
    if(typeof(count) === "undefined") {
    count =1;
  }
  return count< 1 ? '' : new Array(count + 1).join(str);
    }

 var result = repeat('abc',4);   
console.log(result);
*/
/*
function concat(str, n) {
    var output = '';
    if (typeof(n) === 'undefined' || n === 0) {
    return str;
    } else {
    for (var i = 0; i < n; i++) {
    output += str;
    }
    }
    return output;
    }
    
    var result = concat('abc', 4);
    console.log(result);
    */
   function concanat(string, repeatNum) {
     var newString = "";
     // var newString = string;

    for(var i = 0; i < repeatNum; i++) {
//  for(var i = 1; i < repeatNum; i++)
        newString = newString + string;
    } 
    return newString;
   }
   console.log(concanat("abc ", 4));