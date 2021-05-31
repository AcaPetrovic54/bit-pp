/* 9.	Write a function to hide email address.

"myemailaddress@bgit.rs" -> "mye...@bgit.rs" */
"use strict";

function hideMail (email) {
    var hiddenMail = "";
    var firstThree = "";
    var lastcharacters = "";
    for(var i = 0; i<3; i++) {
        firstThree += email[i];
    }

    for(var i = 0; i<email.length; i++) {
        if (email[i] === "@") {
            var pos = i;
            for (var i = pos; i < email.length; i++) {
                lastcharacters = email[i];   
            }
            
        }
    }
    hiddenMail = firstThree + "..." + lastcharacters;
    return hiddenMail;
} 
console.log(hideMail("myemailaddress@bgit.rs"));
