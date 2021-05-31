// 10. Write a program that calculates the number of appearances of a letter a in a given string.
// Modify the program so it calculates the number of both letters a and A.

/*
function countString(str, letter) {
    var count = 0;

    // looping through the items
    for (var i = 0; i < str.length; i++) {

        // check if the character is at that position
        if (str.charAt(i) === letter) {
            count += 1;
        }
    }
    return count;
}

// take input from the user
var string = "abcabasacvfra";
var letterToCheck = "a";

//passing parameters and calling the function
var result = countString(string, letterToCheck);

// displaying the result
console.log(result);
*/
function numOfAInString(string, lowLetter, capLetter) {
    var charCounter = 0;


    for(var i = 0; i <string.length; i++) {
            var currentCharcter = string[i];
        if(currentCharcter === lowLetter || currentCharcter === capLetter) {
            charCounter = charCounter + 1;
        }

    }
    return charCounter;
}
console.log(numOfAInString("blablA", "b", "A"));