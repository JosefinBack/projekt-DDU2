let findNumbersButton = document.getElementById("findNumbers");
let resultNumber = document.querySelector("#choosenNumber"); 


findNumbersButton.addEventListener("click", function () {
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

            if(numberI + numberII === choosenNumber && i !== j) { 
                numberInDivs[i].classList.add("rightNumber");
                numberInDivs[j].classList.add("rightNumber"); 
                return;  
            }
        }
    }
}); 
