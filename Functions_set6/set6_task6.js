/// 6.	Write a function to input temperature in Centigrade and convert to Fahrenheit.

function centigradeToFahrenheit(temperature) {
    var fahrTemp = 0;
    fahrTemp = temperature * 9/5 + 32;
    return fahrTemp;
  }
  console.log(centigradeToFahrenheit(-10));