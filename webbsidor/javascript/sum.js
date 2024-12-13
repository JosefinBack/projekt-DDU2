
const buttonReset = document.getElementById("reset");
let inputSumOfNumbers = document.getElementById("number1");
let sumOfMarkedNumbers = document.getElementById("number3");

let sumNumber = 0; 

buttonCreate.addEventListener("click", function (){
  inputSumOfNumbers.textContent = sumOfNumbers(randomNumbers);//summerar alla nummer och lägger till dem i diven i mitten
})

buttonReset.addEventListener("click", function () {//reset summan
    createDivs();//för att jag ska komma åt divNumber

    sumOfMarkedNumbers.textContent = "-";
    sumNumber = 0;  
    divNumber.style.backgroundColor = ""; 
});


// Lägg till en event listener på containerNumber för att hantera klick på alla divar
containerNumber.addEventListener("click", function (event) {
  if (event.target.classList.contains("numberInDiv")) {
      // Kontrollera att det är en div med klassen "numberInDiv" som klickats
      event.target.style.backgroundColor = "blue";
  }
});

// Anropa createDivs från common.js
createDivs();//lägg sist


function sumOfNumbers (array) { //summerar alla nummer (sum-sidan)
  resultOfNumbers = 0; 
  for(let number of array) {
      resultOfNumbers = resultOfNumbers + number; 
  }
  return resultOfNumbers;
}
sumOfNumbers(randomNumbers);

//lägga ihop textContent från markerade divar till sumOfMarkedNumbers
function summeryOfMarkedNumbers () {
  divNumber.textContent 
}