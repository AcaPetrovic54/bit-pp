"use strict";

(function(){
    var CONTINENT = {
        ASIA: "AS",
        EUROPE: "EU",
        NORTH_AMERICA: "NA",
        SOUTH_AMERICA: "SA",
        AUSTRALIA: "AU",
        AFRICA: "AF",
    };

    function getFormattedCountryName () {
            var formated = this.name[0];

            for (var i = 1; i < this.name.length; i++) {
                var current = this.name[i];
                
                switch (current) {
                    case "a":
                    case "e":
                    case "i":
                    case "o":   
                    case "u": 
                    case "A":   
                    case "E":      
                    case "I": 
                    case "O": 
                    case "U": 
                      continue;
                }
                formated += current;
                break;
            }
            return formated;
        };
    function Country(name, odds, continent) {
        this.name = name;
        this.odds = odds;
        this.continent = continent;
        this.getFormattedCountryName = getFormattedCountryName;
    }

    function Date(day, month, year) {
        this.day = day;
        this.month = month;
        this.year = year;
        this.getFormatedDate = function () {
           return this.day + "." + this.month + "." + this.year + "."
        }
    }
    function Person(name, surname, dateOfBirth) {
        this.name = name;
        this.surname = surname;
        this.dateOfBirth.getFormatedDate() = dateOfBirth;
        this.getInfo = function () {
            return (this.name + 
            " " + 
            this.surname + 
            ", " 
            + this.dateOfBirth.getFormatedDate()
            );
        };
        this.getAge = function () {
          return 2021 - this.dateOfBirth.year + " years";
        }
    }
    function Player(person, betAmount, country) {
        this.person = person;
        this.betAmount = betAmount;
        this.country = country;
        this.getBetInfo = function () {
            return (
                this.country.getFormatedName() +
                ", " + 
                this.betAmount * this.country.odds + 
                "eur " + 
                this.person.getAge()
                );
        };
    }
    function Address(country, city, postalCode, street, number) {
        this.country = country;
        this.city = city;
        this.postalCode = postalCode;
        this.street = street;
        this.number = number;
        this.getFormatedAddress = function () {
            return (
                this.street + 
                " " + 
                this.number + 
                ", " + 
                this.postalCode + 
                " " + this.city + 
                ", " + 
                this.getFormatedCountry()
                );
        };
        this.getFormattedCountry = getFormattedCountryName;
    }
    function BettingPlace(address) {
        this.players = [];
        this.address = address;
        this.addPlayer = function (player) {
          this.players[this.players.length] = this.player; 
        };

        this.getsumOfBets = function () {
            var sum = 0;
            for (var i = 0; i < this.player.length; i++) {
                var player = this.players[i];
                sum += player.betAmount;
            }
            return sum;
        };

        this.getListOfPlayers = function () {
            var playersList = "";

            for (let i = 0; i < this.players.length; i++) {
                var player = this.players[i];
                playersList += "\n\t" + player.getBetInfo();
            }
            return playersList;
        };

        this.getBettingPlace = function () {
            return (this.street + ", " + this.postal_code + " " + this.city + ", " + this.sum + "eur");
        };
    }

    function BettingHouse() {
        
    }
    var serbia = new Country("Serbia", 5, CONTINENT.EUROPE);
    var ivan = new Person ("Ivan", "Balic", { day: 8, month: 2, year: 1991 });
    var player = new Player (ivan, 100, serbia);
    var address = new Address ("Nemanjina", 4, 11000, "Belgrade", serbia);
    //var bettingPlace = new BettingPlace("Nemanjina", 11000, "Belgrade", 5000);
    //var bettingHouse = new BettingHouse();

    console.log(address.getAddressInfo());
    console.log(player.getBetInfo());
})()