
const buttonReset = document.getElementById("reset");
let inputSumOfNumbers = document.getElementById("number1");
let sumOfMarkedNumbers = document.getElementById("number3");

let sumNumber = 0; 

sumOfMarkedNumbers.textContent = "-";
let totalSum = sumOfNumbers(randomNumbers); // Summera alla nummer i arrayen
inputSumOfNumbers.textContent = totalSum; // Skriv ut summan i mitten-diven


buttonCreate.addEventListener("click", function (){
  inputSumOfNumbers.textContent = sumOfNumbers(randomNumbers); 
//summerar alla nummer och lägger till dem i diven i mitten
});


buttonReset.addEventListener("click", function () {//reset summan
  const allDivs = document.querySelectorAll(".numberInDiv");
  for (let i = 0; i < allDivs.length; i++) {
    allDivs[i].classList.remove("target"); 
    }

    sumOfMarkedNumbers.textContent = "-";
    sumNumber = 0; 
});


// Lägg till en event listener på containerNumber för att hantera klick på alla divar
containerNumber.addEventListener("click", function (event) {
  if (event.target.classList.contains("numberInDiv")) {
      // Kontrollera att det är en div med klassen "numberInDiv" som klickats
      event.target.classList.add("target");

   //summerar markerade nummer 
      sumNumber = Number(event.target.textContent) + sumNumber;
      sumOfMarkedNumbers.textContent = sumNumber;
  }
});


function sumOfNumbers (array) { //summerar alla nummer (sum-sidan)
  resultOfNumbers = 0; 
  for(let number of array) {
      resultOfNumbers = resultOfNumbers + number; 
  }
  return resultOfNumbers;
}

sumOfNumbers(randomNumbers);

