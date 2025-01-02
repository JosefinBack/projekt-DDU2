const numbersMissing = document.getElementById("missingNumbers");
const repeatedNumbers = document.getElementById("repeatedNumbers");

function theMissingNumbers() { 
//de saknade numren 
let missingNumbers = []; 

    for (let i = 0; i <= 100; i++) {
        if(!randomNumbers.includes(i)) {//om randomNumber INTE innehåller i
            missingNumbers.push(i); 
        }
    }
    numbersMissing.textContent = missingNumbers.join (", ");
} 


buttonCreate.addEventListener("click", function () {
    theMissingNumbers();
  });




  
//functionsanrop
theMissingNumbers(); 


// jag behöver hitta vilka/ vilket nummer som repeteras flest gånger 
//alla nummer mellan 0 och 100 som INTE finns representerade i divarna ska stå i boxens
