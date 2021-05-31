// 5.	Write a program that prints a multiplication table for numbers up to 12.

function multiplicationTable(num) {
    var table = "";
    for (var i = 0; i <= num; i++) {
        table = table + num + " x " + i + " = " + num * i + "\n";
        }
        
    return table;
}

var num = 12;
console.log(multiplicationTable(num));