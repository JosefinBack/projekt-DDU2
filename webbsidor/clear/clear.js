let clearDivs = document.getElementById("clearButton"); 

// Lägg till en event listener på containern för att fånga upp klick på dess barn (divarna)
containerNumber.addEventListener("click", function (event) {
    if (event.target.classList.contains("numberInDiv")) {
        event.target.classList.add("color");
    }
});

//vi sätter klick-eventet på föräldern och det kommer bubbla upp till barnen


clearDivs.addEventListener("click", function () {
    
    const allDivs = document.querySelectorAll(".numberInDiv");
    for (let i = 0; i < allDivs.length; i++) {
      if (allDivs[i].classList.contains("color")){
        allDivs[i].classList.remove("color");
      }
    }

})