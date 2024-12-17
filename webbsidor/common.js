const containerNumber = document.querySelector("#numbers");
const howManyInGrid = document.getElementById("number"); 
const buttonCreate = document.getElementById("create");

howManyInGrid.value = 95; // Sätter input-värdet till 95


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


 createDivs(95); 
