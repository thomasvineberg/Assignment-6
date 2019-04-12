/*eslint-env browser*/

//STEP 1

/*

function alphaString(myString) {
    "use strict";
    var b = (myString.split(""));
    b = b.sort();
    b = b.join();
    window.console.log(b.replace(/,/g, ""));
}

alphaString(window.prompt("Enter a word."));



//STEP 2

function capFirstLetter(mySentence) {
    "use strict";
    var d = mySentence.toLowerCase().split(" ");
    for (var i = 0; i < d.length; i++) {
        d[i] = d[i].charAt(0).toUpperCase() + d[i].substring(1);
    }
    d = d.join(" ");
    window.console.log(d);
}

capFirstLetter(window.prompt("Enter a sentence."));



//STEP 3

function numberOfVowels(yourSentence) {
    "use strict";
    var findVowels = yourSentence.match(/a|e|i|o|u/g);
    window.console.log(findVowels.length);
}

numberOfVowels(window.prompt("Enter a sentence."));


//STEP 4

function randomString(length) {
    "use strict";
    var theString = "";
    var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    
    for (var i = 0; i < length; i++) {
        theString += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    
    window.console.log(theString);
}

randomString(window.prompt("Enter a number representing the length of your random string."));


*/

//STEP 5

function longestCountry(country1, country2, country3) {
    "use strict";
    var listCountries = [country1, country2, country3];
    var theCountry = "";
    for (var i = 0; i < listCountries.length; i++) {
        if (listCountries[i].length > theCountry.length) {
            theCountry = listCountries[i];
        }
    }
    window.console.log(theCountry);
}

longestCountry((window.prompt("Enter country 1")), (window.prompt("Enter country 2")), (window.prompt("Enter country 3")));