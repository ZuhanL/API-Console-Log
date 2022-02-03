import './style.css';

const url = "https://api.quotable.io/random?minLength=100&maxLength=140";

let quote = document.getElementById("quote");
let author = document.getElementById("author");
let btn = document.getElementById("btn2");

let ShortQuote = () => {
    fetch(url)
      .then((data) => data.json())
      .then((item) => {
        quote.innerText = item.content;
        author.innerText = item.author;
      });
  };
btn.addEventListener("click", ShortQuote);

