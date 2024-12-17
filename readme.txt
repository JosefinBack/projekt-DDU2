Se videon video_general för att se hur de olika sidorna i projektet är kopplade till varandra.

Alla sidor (förutom home) har samma kod för att fylla griden med slumpmässiga siffror mellan 0 och 99, båda inklusive.

Se video_grid_fill för att se hur den ska fungera.

Ang filstrukturen:
  Se bilden filstruktur.png
  De gemensamma filerna common.css och common.js ska finnas i "rotmappen".
  HTML-filen för hemsidan (med länkar till alla sidor) är index.html som finns på rotmappen
  I varje mapp (för varje sida) ska det finnas:
    index.html
    index.js
    index.css
    Där all kod som berör just den sidan men inte andra ska finnas.
    Om det finns kod som berör fler än en sida, men inte alla sidor, så ska den repeteras i de relevanta mapparna. Den ska inte läggas i de gemensamma filerna (common).



Angående "kontroll"-elementen i sidorna:
- De gemensamma elementen ("How many numbers in the grid?", input, knappen "Create") bör skapas med js, alla från common.js, eftersom alla är likadana.
- De som är specifika för varje sida kan skapas direkt på HTML-koden, eller från JS, som du vill. I exemplet nedan har jag placerat de på HTML-koden men du kan appenda dem från JS om du vill.


Förslag på struktur för sidan "Sum" (andra sidor kan ha samma struktur):
  <div id="controls">
    <div class="control" id="creator">
	// Här ska de gemensamma creator-elementen appendas från common.js.
    </div>
    <div class="control">
      <div class="padded">Sum of all: </div>
      <div id="sumResultAll" class="result padded">-</div>
    </div>
    <div class="control">
      <div class="padded">Sum of marked: </div>
      <div id="sumResultMarked" class="result padded">-</div>
      <div>
        <button id="reset" class="padded">Reset</button>
      </div>
    </div>
  </div>
  <div id="numbers"></div>