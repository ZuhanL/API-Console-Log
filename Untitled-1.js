const URL = "https://foodish-api.herokuapp.com/images/biryani/biryani32.jpg";

async function getData(URL) {
    const response = await fetch(URL);
    console.log(response);
}
getData(URL);