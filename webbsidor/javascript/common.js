const containerNumber = document.querySelector("#numbers");
let inputNumber = document.querySelector(".boxWithNumbers");
let divNumber = document.createElement("div");
const buttonCreate = document.getElementById("create");

let randomNumbers = [];

function createNumbers(number) {//skapar slumpmässiga tal
    randomNumbers = []; // Rensa arrayen innan vi genererar nya nummer
    for (let i = 0; i < number; i++) {
        randomNumbers.push(Math.floor(Math.random() * 101));
    }
    return randomNumbers;
} 

function createDivs() { //skapar divarna
    containerNumber.innerHTML = ""; // Rensa innehållet innan nya divar läggs till 
  
    for (let i = 0; i < randomNumbers.length; i++) {
        let divNumber = document.createElement("div");
        divNumber.classList.add("numberInDiv");
        divNumber.textContent = randomNumbers[i];
        containerNumber.appendChild(divNumber);
    }
  }

buttonCreate.addEventListener("click", function () {
    let number = Number(inputNumber.value); // Hämta  värdet från input och konvertera till ett nummer
    createNumbers(number); // Skapa de slumpmässiga numren
    createDivs(); // Skapa divar för varje tal
  });
 
