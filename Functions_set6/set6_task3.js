/* 3.	Write a function that rotates a list by k elements.

For example [1,2,3,4,5,6] rotated by two becomes [3,4,5,6,1,2] */

function changePlaces(array, k) {
    var newArr = [];

    for (var i = k; i < array.length; i++) {
        newArr[newArr.length] = array[i];
        //console.log(newArr);
    }
    for (var j = 0; j < k; j++) {
        newArr[newArr.length] = array[j];   
        //console.log(newArr);
    }
    return newArr;
}

var k = 2;
var array = [1,2,3,4,5,6];
console.log(changePlaces(array, k));
