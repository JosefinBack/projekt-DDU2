
const contNumber = document.querySelector("containerNumbers");
const buttonCreate = document.getElementById("create");
let inputNumber = document.getElementById("number"); 


let randomNumbers = [];

function createNumbers (number) {
    for (let i = 0; i < number; i++) {
        randomNumbers.push(Math.floor(Math.random() * 101));
    }
    return randomNumbers; 
}


buttonCreate.addEventListener("click", function () {
    let number = inputNumber.value; 
    createNumbers(number);
}); 


function createDivs () {

    for (let i = 0; i < randomNumbers.length; i++) {
        let divNumber = document.createElement("div");
        divNumber.classList.add("numberInDiv");
        divNumber.textContent = randomNumbers[i];
        contNumber.appendChild(divNumber);
    }
    
}

createDivs();



//när man klickar på knappen "create" så ska man kunda ändra hur många kolumner som grid ska ha.