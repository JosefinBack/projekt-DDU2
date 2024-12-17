const buttonNewNumber = document.querySelector("#new");
const buttonRemove = document.querySelector("#remove");
let choosenNumber = document.getElementById("numberNew");
let numberInDivs = document.getElementsByClassName("numberInDiv");
let removeChoosenNumber = document.getElementById("numberRemove");

choosenNumber.textContent = "-"; 
let selectedNumber = null;

buttonNewNumber.addEventListener("click", function () {
    // Generera ett slumpmässigt nummer mellan 0 och 100
    const randomIndex = Math.floor(Math.random() * 101);
    choosenNumber.textContent = randomIndex;

    // Återställ alla färger
    for (let i = 0; i < numberInDivs.length; i++) {
            if (numberInDivs[i].style.backgroundColor === "pink") {
            numberInDivs[i].style.backgroundColor = ""; 
            }; 
        }

    // Kontrollera om numret finns i divarna
    for (let i = 0; i < numberInDivs.length; i++) {
        if (numberInDivs[i].textContent == randomIndex) {
            numberInDivs[i].style.backgroundColor ="pink";
        }
    }
    selectedNumber = randomIndex;
});

buttonRemove.addEventListener("click", function () {
    let counter = 0; 

    for (let i = 0; i < numberInDivs.length; i++) {
        if (numberInDivs[i].style.backgroundColor === "pink") { 
            counter++ ;
            // Ändra textinnehållet till "X"
            numberInDivs[i].textContent = "X";

            // Ändra bakgrundsfärgen till röd
            numberInDivs[i].style.backgroundColor = "red"; 
        }
    }
    // Uppdatera removeChoosenNumber med rätt meddelande
    if (counter > 0) {
        removeChoosenNumber.textContent = `${selectedNumber} was removed ${counter} times.`;
    } else {
        removeChoosenNumber.textContent = `Nothing to remove`;
    }
});
