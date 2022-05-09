/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let fraseFinal = document.querySelector("#excuse");
let random3;
let random4;
let random5;

const excusita = () => {
  let frase;
  frase = `${who[random4]} ${action[random4]} ${what[random3]} ${when[random5]}`;
  console.log(frase);
  fraseFinal.innerHTML = frase;
};

let who = ["The dog", "My grandma", "His turtle", "My bird"];
let action = ["ate", "peed", "crushed", "broke"];
let what = ["my homework", "the keys", "the car"];
let when = [
  "before the class",
  "right on time",
  "when I finished",
  "during my lunch",
  "while I was praying"
];

window.addEventListener("load", e => {
  random3 = Math.floor(Math.random() * 2 + 1);
  random4 = Math.floor(Math.random() * 3 + 1);
  random5 = Math.floor(Math.random() * 4 + 1);
  if (random3 <= 1.5) {
    random3 = 0;
  }
  if (random4 <= 1.5) {
    random4 = 0;
  }
  if (random5 <= 1.5) {
    random5 = 0;
  }
  console.log(random3, random4, random5);
  excusita();
  return random3, random4, random5;
});
