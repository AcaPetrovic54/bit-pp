var a = ["a", "b", "c", "x", "y", "z"];
var result = "\n";

for (var i in a) {
    result = result + "index: " + i + ", value " + a[i] + "\n";
}

console.log(result);