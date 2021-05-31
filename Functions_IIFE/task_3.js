/* 3.	Write IIFE that replaces all appearances of the letters m or M with * and returns the number of replacements. 
	Input: prograMming
	Output: progra**ing, 2 */

(function(str){
    var result = "";
    var count = 0;

    for (var i = 0; i < str.length; i++) {

        if (str[i] !== "m" && str[i] !== "M") {
            result = result + str[i];
        } else {
            result = result + "*";
            count++;
        }
    }
    console.log(result + ", " + count);
})("prograMming");

