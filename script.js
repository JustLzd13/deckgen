var randomDeck = Math.floor(Math.random()*10)+1; //1-10

var randomDeckImage = "deck" + randomDeck + ".PNG"; //deck1.png

var randomDeckSource = "./image/" + randomDeckImage;

var deck = document.querySelectorAll("img")[0];
deck.setAttribute("src", randomDeckSource);

if (randomDeck === 1){
    document.querySelector("p").innerHTML = "Tenpai - Worlds Build";
} else if (randomDeck === 2){
    document.querySelector("p").innerHTML = "Vanquish Soul Outdated";
} else if (randomDeck === 3){
    document.querySelector("p").innerHTML = "Supreme King Melodious";
} else if (randomDeck === 4){
    document.querySelector("p").innerHTML = "Whitewoods Runick";
} else if (randomDeck === 5){
    document.querySelector("p").innerHTML = "Rescue-Ace with Diabel and Poplar";
} else if (randomDeck === 6){
    document.querySelector("p").innerHTML = "Voiceless Voice";
} else if (randomDeck === 7){
    document.querySelector("p").innerHTML = "Salamangreat";
} else if (randomDeck === 8){
    document.querySelector("p").innerHTML = "Purrely";
} else if (randomDeck === 9){
    document.querySelector("p").innerHTML = "Ritual Beast";
} else if (randomDeck === 10){
    document.querySelector("p").innerHTML = "Memento";
}

