import './style.css'

const URL = "https://api.quotable.io";

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

DOMSelector = {
    Text: document.getElementById("Gen"),
};


