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
    // const randomIndex = Math.floor(Math.random() * randomNumbers.length);
    
    // // Hämta den slumpmässigt valda divan
    // selectedDiv = numberInDivs[randomIndex];
    
    // // Hämta numret från den slumpmässigt valda divan
    // selectedNumber = selectedDiv.textContent;

    // Återställ färgen på alla divar
    for (let i = 0; i < numberInDivs.length; i++) {
        if (numberInDivs[i].style.backgroundColor === "yellow") {
            numberInDivs[i].style.backgroundColor = ""; 
        }; // Återställ färgen
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


//inte riktigt rätt. NewNumber ska även kunna välja en siffra som inte finns i listan och då ska remove-dicen uppdateras med stt säga "Nothing to remove"
    
buttonRemove.addEventListener("click", function () {
    let counter = 0; 

    for (let i = 0; i < numberInDivs.length; i++) {
        if (numberInDivs[i].style.backgroundColor === "yellow") { counter++ 
            // Ändra textinnehållet till "X"
            numberInDivs[i].textContent = "X";

            // Ändra bakgrundsfärgen till röd
            numberInDivs[i].style.backgroundColor = "red"; 
        }
    }
    removeChoosenNumber.textContent = `${choosenNumber.textContent} was removed ${counter} times `;
});


