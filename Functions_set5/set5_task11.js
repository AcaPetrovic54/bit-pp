/* 11.	Check if a given string is a palindrome (spaces are ignored).
Input:  eye  | Geek  | a nut for a jar of tuna
Output: true | false | true  */


function isAPalindrome(str) {
    var result = true;
    var newStr1 = "";
    var newStr2 = "";

   for (var i = 0, j = str.length -1; i <= j; i++, j--) {
        if(newStr1[i] !== " ") {
            newStr1 =  newStr1 + str[i];
            console.log(newStr1);         
        } else {
            continue;
        }
        if(newStr2[j] !== " ") {
            newStr2 = newStr2 + str[j];
            console.log(newStr2);
        } else {
            continue;
        }
        if (newStr1[i] !== newStr2[j] && newStr1[0] !== newStr2[0]) {
            result = true;
        }
    }
    return result;
} 


var str = "a nut for ae jaar of tuna";
console.log(isAPalindrome(str));
