/*  1.	Write a function to count vowels in a provided string. Vowels are a, e, i, o, and u as well as A, E, I, O, and U.   */

function countVowels(str) {
    var count = 0;
     
    for (var i = 0; i < str.length; i++) {
        switch (str[i]) { 
            case "a":
              count++;
              break;
            case "e":
              count++;
              break;
            case "i":
              count++;
              break;
            case "o":
              count++;
              break;
            case "u":
              count++;
              break;
            case "A":
              count++;
              break;
            case "E":
              count++;
              break;
            case "I":
              count++;
              break;
            case "O":
              count++;
              break;
            case "U":
              count++;
              break;
        }
    }
    return count;
}

 var str = "Write a function tO coUnt vowels in A providEd string";
 console.log(countVowels(str));

//////////////////////////////////////////////////////////////////////////

 function countVowels(str) {
    var count = 0;
     
    for (var i = 0; i < str.length; i++) {
        switch (str[i]) { 
            case "a":
            case "e":
            case "i":
            case "o":
            case "u":
            case "A":
            case "E":
            case "I":
            case "O":
            case "U":
              count++;
              break;
        }
    }
    return count;
}

 var str = "Write a function tO coUnt vowels in A providEd string";
 console.log(countVowels(str));
