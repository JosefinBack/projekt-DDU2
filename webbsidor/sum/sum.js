const buttonReset = document.getElementById("reset");
let inputSumOfNumbers = document.getElementById("sum");
let sumOfMarkedNumbers = document.getElementById("marked");

let sumNumber = 0; 

function sumOfNumbers (array) {
  resultOfNumbers = 0; 
  for(let number of array) {
      resultOfNumbers = resultOfNumbers + number; 
  }
  return resultOfNumbers;
}; 

sumOfMarkedNumbers.textContent = "-";
let totalSum = sumOfNumbers(randomNumbers); 
inputSumOfNumbers.textContent = totalSum; 

buttonCreate.addEventListener("click", function (){
  inputSumOfNumbers.textContent = sumOfNumbers(randomNumbers); 
});


buttonReset.addEventListener("click", function (){
  const allDivs = document.querySelectorAll(".numberInDiv");
  for (let i = 0; i < allDivs.length; i++) {
    allDivs[i].classList.remove("target"); 
    }

    sumOfMarkedNumbers.textContent = "-";
    sumNumber = 0; 
});

containerNumber.addEventListener("click", function (event) {
  if (event.target.classList.contains("numberInDiv")) {
      event.target.classList.add("target");

      sumNumber = Number(event.target.textContent) + sumNumber;
      sumOfMarkedNumbers.textContent = sumNumber;
  }
});
