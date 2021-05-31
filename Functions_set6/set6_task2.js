/* 2.	Write a function that combines two arrays by alternatingly taking elements.

[‘a’,’b’,’c’], [1,2,3] -> [‘a’,1,’b’,2,’c’,3] */

function combinesTwoArr(array1, array2) {
    var newArr = [];
    var longerArr = [];

    if(array1.length > array2.length) {
        longerArr.length = array1.length;
    } else {
        longerArr.length = array2.length;
    }

    for (var i = 0; i < longerArr.length; i++) {
        newArr[newArr.length] = array1[i];
        newArr[newArr.length] = array2[i];
    }
    return newArr;
}

var array1 = ["a","b","c"];
var array2 = [1,2,3];

console.log(combinesTwoArr(array1, array2));