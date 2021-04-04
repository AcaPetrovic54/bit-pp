
var sum = 0;

for (var i = 1; i <= 100; i++) {
     if (sum === 0) {
         console.log("Current sum is: " + sum);
     }

     sum = sum + i;

     if (sum > 30) {
         break;
     }
     console.log("Adding " + i + ".Current sum is: " + sum)
}

