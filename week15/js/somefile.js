var welcomeMessage = 'Hello World!';

console.log(welcomeMessage);


function printHello() {
    console.log ("hello");
 }
 printHello();
 
 function printBrowserInfo() {
     console.log(navigator.platform);
     console.log(navigator.appVersion);
     console.log(navigator.vendor);
 }
 printBrowserInfo();
 
 function isOnline() {
     if (navigator.onLine) {
         console.log("Online");
     } else {
         console.log("Offline");
         }
 }
 
 isOnline();

 function getScreenDimension() {
    console.log("Available screen dimesions: " + screen.availWidth + "x" + screen.availHeight);
    console.log("Screen dimensions: " + screen.width + "x" + screen.height);
}
getScreenDimension();

 // Check browser support
if (typeof(Storage) !== "undefined") {
    // Store
    localStorage.setItem("lastname", "Smith");
    // Retrieve
    document.getElementById("result").innerHTML = localStorage.getItem("lastname");
  } else {
    document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
  }
 