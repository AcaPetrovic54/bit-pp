/* 7. Write a program that computes average marks of the following students. Then use this
average to determine the corresponding grade.

David 80
Marko 77
Dany 88
John 95
Thomas 68
The grades are computed as follows :

<; 60% F
<; 70% D
<; 80% C

<; 90% B
<; 100% A */


/*
var students = [
    ["David", 80], 
    ["Marko", 77], 
    ["Dany", 88],
    ["Jonh", 95], 
    ["Tomas", 68],
];

var avgPoints;
var sumOfPoints = 0;
var numOfStudents = students.length;

for(var i = 0; i < students.length; i++) {
   var currentStudentsPoints = students[i][1];
   sumOfPoints += currentStudentsPoints;
}
avgPoints = sumOfPoints / numOfStudents
console.log(avgPoints);

// avearage grade of class
if(avgPoints < 60) {
    console.log("Average grade is F");
} else if (avgPoints < 70) {
    console.log("Average grade is D");
} else if (avgPoints < 80) {
    console.log("Average grade is C");
} else if (avgPoints < 90) {
    console.log("Average grade is B");
} else if (avgPoints < 100) {
    console.log("Average grade is A");
}

for(var i = 0; i < numOfStudents; i++) {
    var currentStudentName = students[i][0];
    var currentStudentsPoints = students[i][1];
    if(currentStudentsPoints < 60) {
        console.log(currentStudentName + "'s grade is F");
    } else if (currentStudentsPoints < 70) {
        console.log(currentStudentName + "'s grade is D");
    } else if (currentStudentsPoints < 80) {
        console.log(currentStudentName + "'s grade is C");
    } else if (currentStudentsPoints < 90) {
        console.log(currentStudentName + "'s grade is B");
    } else if (currentStudentsPoints < 100) {
        console.log(currentStudentName + "'s grade is A");
    }
 } */

 var students = [
    ["David", 80], 
    ["Marko", 77], 
    ["Dany", 88],
    ["Jonh", 95], 
    ["Tomas", 68],
];

var avgPoints;
var sumOfPoints = 0;
var numOfStudents = students.length;

for(var i = 0; i < students.length; i++) {
   var currentStudentName = students[i][0];
   var currentStudentsPoints = students[i][1];
   sumOfPoints += currentStudentsPoints;

   if(currentStudentsPoints < 60) {
       console.log(currentStudentName + "'s grade is F");
   } else if (currentStudentsPoints < 70) {
       console.log(currentStudentName + "'s grade is D");
   } else if (currentStudentsPoints < 80) {
       console.log(currentStudentName + "'s grade is C");
   } else if (currentStudentsPoints < 90) {
       console.log(currentStudentName + "'s grade is B");
   } else if (currentStudentsPoints < 100) {
       console.log(currentStudentName + "'s grade is A");
   }
}
avgPoints = sumOfPoints / numOfStudents
console.log("Average point is " + avgPoints);

// avearage grade of class
if(avgPoints < 60) {
    console.log("Average grade is F");
} else if (avgPoints < 70) {
    console.log("Average grade is D");
} else if (avgPoints < 80) {
    console.log("Average grade is C");
} else if (avgPoints < 90) {
    console.log("Average grade is B");
} else if (avgPoints < 100) {
    console.log("Average grade is A");
}



 
 
