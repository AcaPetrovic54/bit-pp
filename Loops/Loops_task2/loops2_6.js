/* 6. Write a program that checks if a given array is symmetric. An array is symmetric if it can
be read the same way both from the left and the right hand side.
Input array: [2, 4, -2, 7, -2, 4, 2]
Output: The array is symmetric. 
Input array: [3, 4, 12, 8]
Output: The array isn’t symmetric. */



var array = [2, 4, -2, 7, -2, 4, 2];


/*
for (var i = 0; i < array.length; i++) 
{
    if (array[0] === array[6] && array[1] === array[5] && array[2] === array[4])
    {
        console.log("The array is symmetric");
        break;
    } else {
        console.log("The array isn’t symmetric.");
        break;
    }
} */

var result = true;
/*
for (var i = 0, j = array.length -1; i < array.length; i++, j--) 
    {
        if (array[i] !== array[j]) {
            result = false;
            break;  
    }
}
  
if (result) {
    console.log("The array is symmetric");
} else {
    console.log("The array is not symmetric");   
} */

for (var i = 0, j = array.length -1; i <= j; i++, j--) 
    {
        if (array[i] !== array[j]) {
            result = false;
            break;  
    }
}
  
if (result) {
    console.log("The array is symmetric");
} else {
    console.log("The array is not symmetric");   
}