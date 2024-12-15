const buttonNewNumber = document.querySelector("#new");
const buttonRemove = document.querySelector("#remove");
let choosenNumber = document.getElementById("numberNew"); 
let numberInDivs = document.getElementsByClassName("numberInDiv");
let removeChoosenNumber = document.getElementById("numberRemove"); 

choosenNumber.textContent = "-"; 
let lastSelectedDiv = null;
let selectedDiv; 
let selectedNumber;


buttonNewNumber.addEventListener("click", function () {
    // Välj en slumpmässig index för en div
    const randomIndex = Math.floor(Math.random() * numberInDivs.length);
    
    // Hämta den slumpmässigt valda divan
    selectedDiv = numberInDivs[randomIndex];
    
    // Hämta numret från den slumpmässigt valda divan
    selectedNumber = selectedDiv.textContent;

    // Återställ färgen på alla divar
    for (let i = 0; i < numberInDivs.length; i++) {
        numberInDivs[i].style.backgroundColor = ""; // Återställ färgen
    }

    // Markera alla divar som matchar det valda numret
    for (let i = 0; i < numberInDivs.length; i++) {
        if (numberInDivs[i].textContent === selectedNumber) {
            numberInDivs[i].style.backgroundColor = "yellow"; // Ändra färg
        }
    }

    // Uppdatera valt nummer i choosenNumber
    choosenNumber.textContent = selectedNumber;

    return selectedDiv; 
});

    
buttonRemove.addEventListener("click", function () {
    selectedDiv.textContent = "X"
    selectedDiv.style.backgroundColor = "red"; 
});

  //när jag klickar på knappen remove så ska alla divar med det innehållet tas bort.

