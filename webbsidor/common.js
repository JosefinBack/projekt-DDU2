//definierade variabler
const containerNumber = document.querySelector("#numbers");
let numberInDivs = document.getElementsByClassName("numberInDiv");


//HTML-element
const header = document.querySelector("header");
const box1 = document.querySelector("#box1")

//home-länken
const homeButton = document.createElement("div");
homeButton.textContent = "Home";
homeButton.classList.add("linkTop");
header.appendChild(homeButton); 

homeButton.addEventListener("click", function () {
    window.location.href = "../home.html"; 
});


//Input, create-knapp och text
const lable = document.createElement("label");
lable.textContent = "How many numbers do you want in the grid?"; 
box1.appendChild(lable);

//input
const input = document.createElement("input");
input.type = "text"; 
input.id = "number"; 
input.classList.add("boxWithNumbers");
box1.appendChild(input); 

//create-knapp
const buttonCreate = document.createElement("button");
buttonCreate.textContent = "Create"; 
box1.appendChild(buttonCreate); 


let howManyInGrid = document.querySelector("input"); 
howManyInGrid.value = "-"; 


let randomNumbers = [];

function createNumbers(numberFromUser) {//skapar slumpmässiga tal
    randomNumbers = []; // Rensa arrayen innan vi genererar nya nummer
    for (let i = 0; i < numberFromUser; i++) {
        randomNumbers.push(Math.floor(Math.random() * 101));
    }
    return randomNumbers;
} 

function createDivs(numberFromUser) { //skapar divarna
    containerNumber.innerHTML = ""; // Rensa innehållet innan nya divar läggs till
    createNumbers(numberFromUser);//för att jag ska få nya slumpmässiga nummer varje gång functionen anropas, vilket blir varje gång som jag klickar på knappen "create"
  
    for (let i = 0; i < randomNumbers.length; i++) {
        let divNumber = document.createElement("div");
        divNumber.classList.add("numberInDiv");
        divNumber.textContent = randomNumbers[i];
        containerNumber.appendChild(divNumber);
    }
}; 

buttonCreate.addEventListener("click", function () {
    let numberFromUser = Number(howManyInGrid.value); // Hämta  värdet från input och konvertera till ett nummer
    createDivs(numberFromUser); // Skapa divar för varje tal
  });

