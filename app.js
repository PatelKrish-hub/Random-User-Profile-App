const imgEl = document.getElementById("img");
const nameEl = document.getElementById("name");
const emailEl = document.getElementById("email");
const countryEl = document.getElementById("country");
const btnEl = document.getElementById("btn");
const errorEl = document.getElementById("error");

const API_URL = "https://randomuser.me/api/";

async function getUser() {
    // loading

    nameEl.textContent = "Loading...";
    emailEl.textContent = "";
    countryEl.textContent = "";
    imgEl.src = "";
    errorEl.textContent = "";

    // api call

    try {

        // data extract

        const response = await fetch(API_URL);
        const data = await response.json();

        // ui update

        const user = data.results[0];
        nameEl.textContent = user.name.first + " " + user.name.last;
        emailEl.textContent = user.email;
        countryEl.textContent = user.location.country;
        imgEl.src = user.picture.large


        // error handle

    } catch (error) {
        errorEl.textContent = "Failed To Load User. Try again!";
        nameEl.textContent = "Sorry!";
    }

};

btnEl.addEventListener('click', getUser);