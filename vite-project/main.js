import './style.css';

const URL = "https://api.quotable.io/random?maxLength=50";

async function getData(URL) {
    try {
        const response = await fetch(URL);
        const data = await response.json();
        document.getElementById("api-response").textContent = data.content;
    } catch (error) {
        console.log(error);
    }
}
getData(URL);

const DOMSelectors = {
    buttontheme: document.getElementById("btn1"),
    box: document.querySelector(".Flexbox"),
    SHORT: document.getElementById("btn2"),
    LONG: document.getElementById("btn3"),
};
console.log(DOMSelectors)

DOMSelectors.buttontheme.addEventListener("click", function () {
    if (document.body.classList.contains("light")) {
      document.body.classList.add("dark");
      document.body.classList.remove("light");
    } else {
      document.body.classList.add("light");
      document.body.classList.remove("dark");
    }
  });

