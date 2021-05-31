/* 9.	Write a function to hide email address.

"myemailaddress@bgit.rs" -> "mye...@bgit.rs" */

console.log("\nZadatak 9")
function hideemail(mail){
    var mail;
    var k;
    var newE="";
    for(var i=0; i<mail.length; i++){
        if(i<3 || i>k){
            newE=newE+ mail[i];
        }else if(i===3){
            newE= newE + '...';
        }else if(mail[i]==="@"){
            k=i;
            newE=newE + mail[i];
        }
    }
    return newE;
}
console.log(hideemail('exampleofmail@gmail.com'))