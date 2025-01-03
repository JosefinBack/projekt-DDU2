const buttonNewNumber = document.querySelector("#new");
const buttonRemove = document.querySelector("#remove");
let choosenNumber = document.getElementById("numberNew");
let removeChoosenNumber = document.getElementById("numberRemove");

choosenNumber.textContent = "-"; 
let selectedNumber = null;

buttonNewNumber.addEventListener("click", function () {
    // Generera ett slumpmässigt nummer mellan 0 och 100
    const randomIndex = Math.floor(Math.random() * 101);
    choosenNumber.textContent = randomIndex;

    // Återställ alla färger
    for (let i = 0; i < numberInDivs.length; i++) {
            if (numberInDivs[i].classList.contains("pinkColor")) {
            numberInDivs[i].classList.remove("pinkColor"); 
            }; 
        }

    // Kontrollera om numret finns i divarna
    for (let i = 0; i < numberInDivs.length; i++) {
        if (numberInDivs[i].textContent == randomIndex) {
            numberInDivs[i].classList.add("pinkColor"); 
        }
    }
    selectedNumber = randomIndex;
});

buttonRemove.addEventListener("click", function () {
    let counter = 0; 

    for (let i = 0; i < numberInDivs.length; i++) {
        if (numberInDivs[i].classList.contains("pinkColor")) { 
            // Ändra textinnehållet till "X"
            numberInDivs[i].textContent = "X";

            // Ändra bakgrundsfärgen till svart
            numberInDivs[i].classList.add("blackColor");

            counter++ ;
        } 
    }
    // Uppdatera removeChoosenNumber med rätt meddelande
    if (counter > 0) {
        removeChoosenNumber.textContent = `${selectedNumber} was removed ${counter} times.`;
    } else {
        removeChoosenNumber.textContent = `Nothing to remove`;
    }
});
