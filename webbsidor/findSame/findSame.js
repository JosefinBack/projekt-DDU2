const textFind = document.getElementById("textFindCopies");
const originalText = textFind.textContent;
const resetButton = document.getElementById("reset"); 

containerNumber.addEventListener("click", function(event) {
    if(event.target.classList.contains("numberInDiv")) {
        let counter = 0;

        for (let i = 0; i < numberInDivs.length; i++) {
            numberInDivs[i].classList.remove("same");
        }

        for (let i = 0; i < numberInDivs.length; i++) {
            if (event.target.textContent == numberInDivs[i].textContent) {
                numberInDivs[i].classList.add("same"); 
                counter++;

                if (counter > 0) {
                    textFind.textContent = `${counter} copies of the number ${numberInDivs[i].textContent}`;
                }
            }
        }
    }
});  

resetButton.addEventListener("click", function(){
    for(let i = 0; i < numberInDivs.length; i++) {
        if (numberInDivs[i].classList.contains("same")) {
            numberInDivs[i].classList.remove("same"); 
        }
    }
    textFind.textContent = originalText;  
});

