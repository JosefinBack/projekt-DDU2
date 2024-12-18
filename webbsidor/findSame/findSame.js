let text = document.getElementById("textFindCopies");
let counter = 0;
let choosenNumber = null; 

containerNumber.addEventListener("click", function(event) {
    if(event.target.classList.contains("numberInDiv")) {
        for(let i = 0; i < numberInDivs.length; i++){
            if(event.target.textContent == numberInDivs[i].textContent) 
                {
                numberInDivs[i].classList.add("same");
                numberInDivs[i] = choosenNumber;
                counter++;
            }
        }
    }
    return choosenNumber; 
}); 


if(counter > 0) {
    text.textContent = `${choosenNumber.textContent} have ${counter} copies.`
    }


    //counter uppdateras inte, för den måste också returneras egentligen....