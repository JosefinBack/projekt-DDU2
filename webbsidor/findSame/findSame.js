let text = document.getElementById("textFindCopies");
const originalText = text.textContent;
let resetButton = document.getElementById("reset"); 

containerNumber.addEventListener("click", function(event) {
    if(event.target.classList.contains("numberInDiv")) {
        let counter = 0;

        for (let i = 0; i < numberInDivs.length; i++) {
            numberInDivs[i].classList.remove("same");
        }
        for (let i = 0; i < numberInDivs.length; i++) {
            if (event.target.textContent == numberInDivs[i].textContent) {
                numberInDivs[i].classList.add("same"); // Lägg till klassen "same"
                counter++;

                if (counter > 0) {
                    text.textContent = `${counter} copies of the number ${numberInDivs[i].textContent}`;
                }
            }
        }
        return counter; 
    }
});  

resetButton.addEventListener("click", function (){
    for(let i = 0; i < numberInDivs.length; i++) {
        if (numberInDivs[i].classList.contains("same")) {
            numberInDivs[i].classList.remove("same"); 
        }
    }
    text.textContent = originalText;  
});

