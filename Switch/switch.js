var weather = "Windy";

switch (weather) {
    case "Rainy":
        console.log("Remember to brig umbrella.");
        break;
    case "Sunny":
        console.log("Dress lightly.");
        break;
    case "Cloudy":
    case "Windy":
    case "Snowing":
        console.log("Go outside.");  
        break;
    default:
        console.log("Unknown weather condition."); 
        break;
}