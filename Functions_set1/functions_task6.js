/*
6. Write a program that draws a horizontal chart representing three given values. For
example, if values are 5, 3, and 7, the program should draw:
* * * * *
* * *
* * * * * * *

   function horisontalChart(x, y, z) {
    var chart = "";
    for(var i = 0; i < x; i++){
        chart += "*";   
    }
    chart += "\n";

    for(var i = 0; i < y; i++){
        chart += "*";   
    }
    chart += "\n";

    for(var i = 0; i < z; i++){
        chart += "*";   
    }
    chart += "\n";

    return chart;
}

var result = horisontalChart(5, 3, 7);
console.log(result);
*/

function horisontalChart(x, y, z) {
    var chart = "";
    var numOfArgs = arguments.length;

    for(var j = 0; j < numOfArgs; j++) {
        for(var i = 0; i < arguments[j]; i++) {
            chart += "*";  
            }
            chart += "\n";
        }
        return chart;
}      
        var result = horisontalChart(5, 3, 7, 7, 23, 14, 19);
        console.log(result);

