const buttonNewNumber = document.querySelector("#new");
const buttonRemove = document.querySelector("#remove");
let newNumber = document.getElementById("numberNew"); 
let numberInDivs = document.getElementsByClassName("numberInDiv");
let boxNewNumber = document.getElementById("numberRemove"); 

newNumber.textContent = "-"; 
    buttonNewNumber.addEventListener("click", function (){
        newNumber.textContent = divNumber.textContent;

         
    });

  //när jag klickar på knappen så ska ett random nummer väljas från divarna och textContent ska då läggas i rutan
  //funderar på om jag behöver använda math.random på något sätt för att plocka ut en random div...?

