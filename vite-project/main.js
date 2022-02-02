import './style.css';

const url = "https://api.quotable.io/random?maxLength=50";

let quote = document.getElementById("quote");
let author = document.getElementById("author");
let btn = document.getElementById("btn");

let ShortQuote = () => {
  fetch(url)
    .then((data) => data.json())
    .then((item) => {
      quote.innerText = item.content;
      author.innerText = item.author;
    });
};
window.addEventListener("load", ShortQuote);
btn.addEventListener("click", ShortQuote);

const url = "https://api.quotable.io/random?minLength=100&maxLength=140";


const DOMSelectors = {
    buttontheme: document.getElementById("btn1"),
    box: document.querySelector(".Flexbox"),
};

DOMSelectors.buttontheme.addEventListener("click", function () {
    if (document.body.classList.contains("light")) {
      document.body.classList.add("dark");
      document.body.classList.remove("light");
    } else {
      document.body.classList.add("light");
      document.body.classList.remove("dark");
    }
  });

