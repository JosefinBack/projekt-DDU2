let clearDivs = document.getElementById("clearButton"); 

containerNumber.addEventListener("click", function (event) {
  if (event.target.classList.contains("numberInDiv")) {
      if (event.target.classList.contains("color")) {
          event.target.classList.remove("color");
          event.target.textContent = Math.floor(Math.random() * 101); 
      } else {
          event.target.classList.add("color");
      }
    }
});

clearDivs.addEventListener("click", function () {
  const allDivs = document.querySelectorAll(".numberInDiv");

    for (let i = 0; i < allDivs.length; i++) {
      if (allDivs[i].classList.contains("color")){
        allDivs[i].textContent = Math.floor(Math.random() * 101);  
        allDivs[i].classList.remove("color");
      }
    } 
}); 