const numbersMissing = document.getElementById("missingNumbers");
const repeatedNumbers = document.getElementById("repeatedNumbers");


function mostRepeatedNumbers() {

    let mostRepeatedNumbers = []; 
    let highestCount = 0; 
    for(let i = 0; i < randomNumbers.length; i++) {
        let counter = 0;
        for(let j = 0; j <randomNumbers.length; j++) {
            if (randomNumbers[i] == randomNumbers[j]) {
                counter++; 
            }
        }
        if (counter > highestCount) {
            highestCount = counter; 
            mostRepeatedNumbers = [randomNumbers[i]]; 
        }
        else if (counter == highestCount) {
            if (!mostRepeatedNumbers.includes(randomNumbers[i])) {
                mostRepeatedNumbers.push(randomNumbers[i]); 
            }
        }
    }
    repeatedNumbers.textContent = `${mostRepeatedNumbers.join(" , ")} (Repeated ${highestCount} times)`;

    for (let x = 0; x < numberInDivs.length; x++) {
        if(mostRepeatedNumbers.includes(Number(numberInDivs[x].textContent))) {
            numberInDivs[x].classList.add("repeat"); 
        }
    }
}

function theMissingNumbers() { 
    let missingNumbers = []; 

    for (let i = 0; i <= 100; i++) {
        if(!randomNumbers.includes(i)) {
            missingNumbers.push(i); 
        }
    }
    numbersMissing.textContent = missingNumbers.join (", ");
} 

buttonCreate.addEventListener("click", function () {
    mostRepeatedNumbers();
    theMissingNumbers();
});
