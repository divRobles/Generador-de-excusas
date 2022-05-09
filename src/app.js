let fraseFinal = document.querySelector("#excuse");
let random3;
let random4;
let random5;

const excusita = () => {
  let frase;
  frase = `${who[random3]} ${action[random3]} ${what[random2]} ${when[random4]}`;
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
  random2 = Math.floor(Math.random() * 3);
  random3 = Math.floor(Math.random() * 4);
  random4 = Math.floor(Math.random() * 6);

  console.log(random2, random3, random4);
  excusita();
  return random3, random4, random5;
});
