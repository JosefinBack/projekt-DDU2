const containerNumber = document.querySelector("#numbers");
const buttonCreate = document.getElementById("create");
const buttonReset = document.getElementById("reset");
let inputNumber = document.getElementById("number");


let randomNumbers = [];

function createNumbers(number) {
    randomNumbers = []; // Rensa arrayen innan vi genererar nya nummer
    for (let i = 0; i < number; i++) {
        randomNumbers.push(Math.floor(Math.random() * 101)); // Skapa slumpmässiga tal mellan 0 och 100
    }
    return randomNumbers;
} 

function createDivs() {
    containerNumber.innerHTML = ""; // Rensa innehållet innan nya divar läggs till
    let divNumber; 

    for (let i = 0; i < randomNumbers.length; i++) {
        let divNumber = document.createElement("div");
        divNumber.classList.add("numberInDiv");
        divNumber.textContent = randomNumbers[i];
        containerNumber.appendChild(divNumber);
    }
    return divNumber;
}

function sumOfNumbers (array) {
    resultOfNumbers = 0; 

    for(let number of array) {
        resultOfNumbers = resultOfNumbers + number; 
    }
    return resultOfNumbers;
}
sumOfNumbers(randomNumbers);
