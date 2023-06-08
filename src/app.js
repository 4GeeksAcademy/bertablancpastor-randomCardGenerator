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
let figura = palos[randomNum(palos)];

const num = document.querySelector("#number");
const fig1 = document.querySelectorAll("#palo")[0];
const fig2 = document.querySelectorAll("#palo")[1];

const button = document.querySelector("#newCard");

function randomNum(array) {
  return Math.floor(Math.random() * array.length);
}

window.onload = function() {
  //write your code here
  if (!fig1.classList.contains("red") || !fig1.classList.contains("black")) {
    if (figura === "♦" || figura === "♥") {
      fig1.classList.add("red");
      fig2.classList.add("red");
      num.classList.add("red");
    } else {
      fig1.classList.add("black");
      fig2.classList.add("black");
      num.classList.add("black");
    }
  }

  num.innerHTML = numbers[randomNum(numbers)];
  fig1.innerHTML = figura;
  fig2.innerHTML = figura;
};

function onClick() {
  num.innerHTML = numbers[randomNum(numbers)];
  fig1.innerHTML = palos[randomNum(palos)];
  fig2.innerHTML = fig1.innerHTML;

  if (fig1.innerHTML === "♦" || fig1.innerHTML === "♥") {
    if (fig1.classList.contains("red")) {
      return;
    }
    fig1.classList.replace("black", "red");
    fig2.classList.replace("black", "red");
    num.classList.replace("black", "red");
  } else {
    fig1.classList.replace("red", "black");
    fig2.classList.replace("red", "black");
    num.classList.replace("red", "black");
  }
}

button.addEventListener("click", onClick);
