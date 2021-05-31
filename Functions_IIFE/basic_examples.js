(
    function () {
        console.log('boo');
    }
 )();
 
 (
    function (mood) {
        console.log('Felling ' + mood + '!');
    }
 )('crazy');
 
 /* pseudo kod
 var result = (function() {
     return loggedIn ? "User is authorized" : "User is authorized";
 })();

 console.log(result);    */
 