/* Task 3. Write a conditional statement to print three numbers as sorted number list.
Sample numbers : 0, -1, 4
Output : 4, 0, -1 */
var a = 4;
var b = 0;
var c = -1
if (a > b && a > c) {
    if (b > c) {
        console.log(a, b, c);
    } else {
        console.log(a, c, b);
    }
} else if(b > a && b > c) {
    if(a > c) {
        console.log(b, a, c)
    } else {
        console.log(b, c, a);
    }
} else if(a > b) {
    console.log(c, a, b);
} else {
    console.log(c, b, a);
}