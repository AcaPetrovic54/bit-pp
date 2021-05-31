/* 3.	Initialize two arrays. The first one should contain student names, the second one the number of points for each student. Display students' names with their corresponding grade. Use the following ranges:
51-60 -> 6,
61-70 -> 7,
71-80 -> 8,
81-90 -> 9,
91-100 -> 10.
Input: 
[ "Micahel", "Anne", "Frank", "Joe", "John", "David", "Mark", "Bill" ], [ 50, 39, 63, 72, 99, 51, 83, 59 ]
Output: 
Bill acquired 59 points and earned 6. Micahel acquired 50 points and failed to complete the exam. */

"use strict";

function studentsGrade(names, points) {
    var output = "";

    for (var i = 0; i < names.length; i++) {
        var grade = 0;
        if (points[i] <= 50) {
            grade = 5;
        } else if (points[i] > 50 && points[i] <= 60) {
           grade = 6; 
        } else if (points[i] > 60 && points[i] <= 70) {
            grade = 7; 
         } else if (points[i] > 70 && points[i] <= 80) {
            grade = 8; 
         } else if (points[i] > 80 && points[i] <= 90) {
            grade = 9; 
         } else {
            grade = 10; 
         }
         if (grade === 5) {
             output = output + names[i] + " acquired " + points[i] + " points" + " and failed" + " to complete the exam! " + "\n";
         } else {
            output += names[i] + " acquired " + points[i] + " points" + " and earned " + grade + "! " + "\n";
        }

    }
    return output;
}


var names = [ "Micahel", "Anne", "Frank", "Joe", "John", "David", "Mark", "Bill" ];
var points = [ 50, 39, 63, 72, 99, 51, 83, 59 ];
console.log(studentsGrade(names, points));
