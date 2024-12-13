const contNumber = document.querySelector("#numbers");
const buttonCreate = document.getElementById("create");
let inputNumber = document.getElementById("number");
let inputSumofNumbers = document.getElementById("number1");

let randomNumbers = [];

function createNumbers(number) {
    randomNumbers = []; // Rensa arrayen innan vi genererar nya nummer
    for (let i = 0; i < number; i++) {
        randomNumbers.push(Math.floor(Math.random() * 101)); // Skapa slumpmässiga tal mellan 0 och 100
    }
    return randomNumbers;
}

function createDivs() {
    contNumber.innerHTML = ""; // Rensa innehållet innan nya divar läggs till

    for (let i = 0; i < randomNumbers.length; i++) {
        let divNumber = document.createElement("div");
        divNumber.classList.add("numberInDiv");
        divNumber.textContent = randomNumbers[i];
        contNumber.appendChild(divNumber);
    }
}

function sumOfNumbers (array) {
    resultOfNumbers = 0; 

    for(let number of array) {
        resultOfNumbers = resultOfNumbers + number; 
    }
    return resultOfNumbers;
}
sumOfNumbers(randomNumbers);


/*-----------funktioner slut -------------*/

buttonCreate.addEventListener("click", function () {
    let number = Number(inputNumber.value); // Hämta värdet från input och konvertera till ett nummer
    createNumbers(number); // Skapa de slumpmässiga numren
    createDivs(); // Skapa divar för varje tal

    inputSumofNumbers.textContent = sumOfNumbers(randomNumbers);
});


//när man klickar på divarna då ka man kunna lägga ihop summan i number3
