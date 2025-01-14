const containerNumber = document.querySelector("#numbers");
let numberInDivs = document.getElementsByClassName("numberInDiv");
const header = document.querySelector("header");
const box1 = document.querySelector("#box1")


const homeButton = document.createElement("div");
homeButton.textContent = "Home";
homeButton.classList.add("linkTop");
header.appendChild(homeButton); 

homeButton.addEventListener("click", function () {
    window.location.href = "../home.html"; 
});


const text = document.createElement("p");
text.textContent = "How many numbers do you want in the grid?"; 
box1.appendChild(text);

const input = document.createElement("input");
input.type = "text"; 
input.id = "number"; 
input.classList.add("boxWithNumbers");
box1.appendChild(input);  

const buttonCreate = document.createElement("button");
buttonCreate.textContent = "Create"; 
box1.appendChild(buttonCreate); 


let randomNumbers = [];

function createNumbers(numberFromUser) {
    randomNumbers = []; 
    for (let i = 0; i < numberFromUser; i++) {
        randomNumbers.push(Math.floor(Math.random() * 101));
    }
    return randomNumbers;
} 

function createDivs(numberFromUser) { 
    containerNumber.textContent = ""; 
    createNumbers(numberFromUser);
  
    for (let i = 0; i < randomNumbers.length; i++) {
        let divNumber = document.createElement("div");
        divNumber.classList.add("numberInDiv");
        divNumber.textContent = randomNumbers[i];
        containerNumber.appendChild(divNumber);
    }
}; 

buttonCreate.addEventListener("click", function () {
    let numberFromUser = input.value; 
    createDivs(numberFromUser);
  });



