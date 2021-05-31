/* 1. Create an object that represents your favourite coffee. Please include coffee name,
strength, flavour, milk, sugar, … everything you like! */

var coffee = {
    name: "Nesscaffe",
    strenght: 2,
    flavour: "vanila",
    milk: true,
    shugar: 1,
    getCoffeeStrenght: function () {
        var strenght = "";
        switch(coffee.strenght) {
            case 1:
                strenght = "extra light";
                break;
            case 2:
                strenght = "light";
                break;
            case 3:
                strenght = "medium";
                break;
            case 4:
                strenght = "strong";
                break;
            case 5:
                strenght = "extra strong";
                break;
            default:
            strenght = "medium";
        }
        return strenght;
    },
    getMilkInfo: function () {
        return coffee.milk ? "with milk" : "without milk";
    } 
};
console.log("I like to drink " + coffee.getCoffeeStrenght() + ", " + coffee.name + " coffee " + coffee.getMilkInfo() + ".");