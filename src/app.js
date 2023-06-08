/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const numbers = [
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K",
  "A"
];

const palos = ["♦", "♥", "♠", "♣"];

const num = document.querySelector("#number");
const palo1 = document.querySelectorAll("#palo")[0];
const palo2 = document.querySelectorAll("#palo")[1];

const generateNewCardButton = document.querySelector("#generateNewCard");

function randomNum(array) {
  return Math.floor(Math.random() * array.length);
}

window.onload = function() {
  //write your code here
  num.innerHTML = numbers[randomNum(numbers)];
  let palo = palos[randomNum(palos)];
  palo1.innerHTML = palo;
  palo2.innerHTML = palo;

  // if (!palo1.classList.contains("red") || !palo1.classList.contains("black")) {
  if (palo === "♦" || palo === "♥") {
    palo1.classList.add("red");
    palo2.classList.add("red");
    num.classList.add("red");
  } else {
    palo1.classList.add("black");
    palo2.classList.add("black");
    num.classList.add("black");
  }
  // }
};

function onClick() {
  num.innerHTML = numbers[randomNum(numbers)];
  palo1.innerHTML = palos[randomNum(palos)];
  palo2.innerHTML = palo1.innerHTML;

  if (palo1.innerHTML === "♦" || palo1.innerHTML === "♥") {
    if (palo1.classList.contains("red")) {
      return;
    }
    palo1.classList.replace("black", "red");
    palo2.classList.replace("black", "red");
    num.classList.replace("black", "red");
  } else {
    palo1.classList.replace("red", "black");
    palo2.classList.replace("red", "black");
    num.classList.replace("red", "black");
  }
}

generateNewCardButton.addEventListener("click", onClick);
