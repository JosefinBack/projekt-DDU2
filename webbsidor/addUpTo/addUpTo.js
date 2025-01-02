let findNumbersButton = document.getElementById("findNumbers");

let resultNumber = document.querySelector("#choosenNumber"); 
resultNumber.value = "150"; 


findNumbersButton.addEventListener("click", function () {
        // Återställ alla färger
        for (let i = 0; i < numberInDivs.length; i++) {
            if (numberInDivs[i].classList.contains("rightNumber")) {
            numberInDivs[i].classList.remove("rightNumber"); 
            }; 
        }

    let choosenNumber = Number(resultNumber.value); 

    for(let i = 0; i < numberInDivs.length; i++) {
        for(let j = 0; j < numberInDivs.length; j++) {
            let numberI = Number(numberInDivs[i].textContent);
            let numberII = Number(numberInDivs[j].textContent);

            if(numberI + numberII === choosenNumber && i !== j) { //för att olika rutor ska markeras ifall om talet * 2 blir svaret
                numberInDivs[i].classList.add("rightNumber");
                numberInDivs[j].classList.add("rightNumber"); 
                return;   
            }
        }
    }
}); 
