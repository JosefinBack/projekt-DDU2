const containerNumber = document.querySelector("#numbers");
const howManyInGrid = document.getElementById("number"); 
const buttonCreate = document.getElementById("create");

howManyInGrid.value = 95; // Sätter input-värdet till 95


let randomNumbers = [];

function createNumbers(number) {//skapar slumpmässiga tal
    randomNumbers = []; // Rensa arrayen innan vi genererar nya nummer
    for (let i = 0; i < number; i++) {
        randomNumbers.push(Math.floor(Math.random() * 101));
    }
    return randomNumbers;
} 

// divsWithRandomNumbers = [];

function createDivs(number) { //skapar divarna
    containerNumber.innerHTML = ""; // Rensa innehållet innan nya divar läggs till 
    //divsWithRandomNumbers = [];//rensar tidigare divreferenser

    createNumbers(number);
  
    for (let i = 0; i < randomNumbers.length; i++) {
        let divNumber = document.createElement("div");
        divNumber.classList.add("numberInDiv");
        divNumber.textContent = randomNumbers[i];
        containerNumber.appendChild(divNumber);

        //divsWithRandomNumbers.push(divNumber);
    }
}; 

buttonCreate.addEventListener("click", function () {
    let number = Number(howManyInGrid.value); // Hämta  värdet från input och konvertera till ett nummer
    createDivs(number); // Skapa divar för varje tal
  });

 createDivs(95); 
