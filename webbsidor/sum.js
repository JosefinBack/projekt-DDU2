
let inputSumofNumbers = document.getElementById("number1");
let sumOfMarkedNumbers = document.getElementById("number3");

let randomNumbers = [];



let sumNumber = 0; 


divNumber.addEventListener("click", function () {
    divNumber.style.backgroundColor = "blue";
    sumNumber = Number(divNumber.textContent) + sumNumber;
    sumOfMarkedNumbers.textContent = sumNumber;
});

buttonReset.addEventListener("click", function () {
    sumOfMarkedNumbers.textContent = "-";
    sumNumber = 0;  
    divNumber.style.backgroundColor = ""; 
})


buttonCreate.addEventListener("click", function () {
    let number = Number(inputNumber.value); // Hämta värdet från input och konvertera till ett nummer
    createNumbers(number); // Skapa de slumpmässiga numren
    createDivs(); // Skapa divar för varje tal

    inputSumofNumbers.textContent = sumOfNumbers(randomNumbers);
});

sumOfMarkedNumbers.textContent = "-";