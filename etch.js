let body = document.querySelector("body");
let BUT = document.querySelector("#But");
let But = document.querySelector("#button");
let button = But.addEventListener("click",  Etch);
let Red = document.querySelector(".red");
let Blue = document.querySelector(".blue");
let Black = document.querySelector(".black");
let Eraser = document.querySelector(".eraser");
let Random = document.querySelector(".random");
let Reset = document.querySelector(".reset");



function Etch() {
   
  let boxRow = Number(prompt("How many boxes per row", ""));
let boxColumn = Number(prompt("How many boxes per column", ""));
 if(!(boxRow == "" || boxColumn == "")) {
if(boxRow < 101 && boxColumn < 101) {

for(let p=1; p<boxRow + 1; p++) {
for(let i=1; i < boxColumn + 1; i++) {
  let Contain = document.querySelector("#Container");
  let square = document.createElement("div");
  square.classList.add('square'); 

    square.style.width= `${100 / boxColumn}%`;
  square.style.height=`${100 / boxRow}%`;
   
  Red.textContent="Red";
  Blue.textContent="Blue";
  Black.textContent="Black";
  Eraser.textContent="Eraser";
  Random.textContent="Random";
  Reset.textContent="Reset";

  Red.style.backgroundColor="red";
  Blue.style.backgroundColor="blue";
  Black.style.backgroundColor="black";
  Eraser.style.backgroundColor="white";
  Random.style.backgroundColor="pink";
  Reset.style.backgroundColor="grey";

let red = Red.addEventListener("click", colorR);
let blue = Blue.addEventListener("click", colorB);
let black = Black.addEventListener("click", colorBla);
let eraser = Eraser.addEventListener("click", Erase);
let random = Random.addEventListener("click", Randomize);
let reset = Reset.addEventListener("click", ResetC);
   
  function colorR() {
    red=square.addEventListener("mouseover", RED);
    function RED() {
square.style.backgroundColor="red";
    }
  }

  function colorB() {
    blue=square.addEventListener("mouseover", BLUE);
    function BLUE() {
      square.style.backgroundColor="blue";
    }
  }

  function colorBla() {
 black=square.addEventListener("mouseover", BLACK);
 function BLACK() {
  square.style.backgroundColor="black";
 }
  }

  function Erase() {
    eraser=square.addEventListener("mouseover", ERASER);
    function ERASER() {
     square.style.backgroundColor="white";
  }
  }

  function Randomize() {
    random=square.addEventListener("mouseover", RANDOM);
    function RANDOM() {
      let rando = ["red", "blue", "white", "pink", "silver", "black", "gold"];
      let gotten = rando[Math.floor(Math.random() * rando.length)];
      square.style.backgroundColor=`${gotten}`;
    }
  }

  function ResetC() {
   
   square.style.backgroundColor="white";

  }

  But.textContent="Refresh to change canvas";
  But.disabled=true;
  But.style.backgroundColor="grey";

  Contain.appendChild(square);
}

}
}  else {
  alert("It must be a number less than 101");
  alert("DO! you want to kill your computer?");
}
 } else {
  alert("Type in a number");
 }
}

