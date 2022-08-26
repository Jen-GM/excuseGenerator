import "bootstrap";
import "./style.css";

import "./assets/img/4geeks.ico";

window.onload = () => {
  document.querySelector("#refresher").addEventListener("click", () => {
    document.querySelector("#excuse").innerHTML = createExcuse();
  });
};

let createExcuse = () => {
  let who = ["The dog", "My granma", "His turtle", "My bird"];
  let what = ["ate", "pissed", "used", "broked"];
  let when = [
    "before the class",
    "as toilet paper",
    "when I was gone",
    "during the lunch",
    "while I was praying"
  ];
  let randomNumber1 = Math.floor(Math.random() * who.length);
  let randomNumber2 = Math.floor(Math.random() * what.length);
  let randomNumber3 = Math.floor(Math.random() * when.length);

  return (
    who[randomNumber1] +
    " " +
    what[randomNumber2] +
    " my homework " +
    when[randomNumber3]
  );
};
