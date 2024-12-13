
let inputSumofNumbers = document.getElementById("number1");
let sumOfMarkedNumbers = document.getElementById("number3");

let sumNumber = 0; 


 buttonCreate.addEventListener("click", function () {
    let number = Number(inputNumber.value); // Hämta  värdet från input och konvertera till ett nummer
    createNumbers(number); // Skapa de slumpmässiga numren
    createDivs(); // Skapa divar för varje tal

  inputSumofNumbers.textContent = sumOfNumbers(randomNumbers);
});

// sumOfMarkedNumbers.textContent = "-";