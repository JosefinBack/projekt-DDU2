const buttonNewNumber = document.querySelector("#new");
const buttonRemove = document.querySelector("#remove");
let choosenNumber = document.getElementById("numberNew");
let removeChoosenNumber = document.getElementById("numberRemove");


choosenNumber.textContent = "-"; 
removeChoosenNumber.textContent = "-";

buttonNewNumber.addEventListener("click", function () {
    removeChoosenNumber.textContent = " - "; 

    const randomIndex = Math.floor(Math.random() * 101);
    choosenNumber.textContent = randomIndex;

    for (let i = 0; i < numberInDivs.length; i++) {
            if (numberInDivs[i].classList.contains("pinkColor")) {
            numberInDivs[i].classList.remove("pinkColor"); 
            }; 
        }

    for (let i = 0; i < numberInDivs.length; i++) {
        if (numberInDivs[i].textContent == randomIndex) {
            numberInDivs[i].classList.add("pinkColor"); 
        }
    }
});

buttonRemove.addEventListener("click", function () {
    let counter = 0; 

    for (let i = 0; i < numberInDivs.length; i++) {
        if (numberInDivs[i].classList.contains("pinkColor")) { 
            numberInDivs[i].textContent = "X";
            numberInDivs[i].classList.add("blackColor");
            counter++ ;
        } 
    }
    if (counter > 0) {
        removeChoosenNumber.textContent = `${choosenNumber.textContent} was removed ${counter} times.`;
    } else {
        removeChoosenNumber.textContent = `Nothing to remove`;
    }
});

buttonCreate.addEventListener("click", function () {
    choosenNumber.textContent = "-"; 
    removeChoosenNumber.textContent = " - ";
  });
