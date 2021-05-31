/* 1.	Write a program to insert a string within a string at a particular position (default is 1, beginning of a string).

"My random string", "JS " -> "JS My random string"
"My random string", "JS ", 10 -> "My random JS string" */

function insertString(word, sent, num = 0) {
    var newString = "";
    word = " " + word + " ";

    for (var i = 0; i < sent.length; i++) {
        if (num === i) {
            newString += word;
            sent[i + 1] = sent[i];
        }
        if (i > num) {
            sent[i + 1] = sent[i];
            newString += sent[i];
        } else {
            newString += sent[i];
        }
    }
    return newString;
}

var newWord = "JS";
var newSent = "My random string";
var number = 10;

console.log(insertString(newWord, newSent, number));
