// select html elements
const header = document.querySelector("#header");
const changeHeaderButton = document.querySelector("#change-header-button");
const changeThemeButton = document.querySelector("#change-theme-button");

const img1 = document.querySelector("#img1");
const img2 = document.querySelector("#img2");
const img3 = document.querySelector("#img3");

// header button function -------------
changeHeaderButton.addEventListener("click", () => {
    header.innerHTML = "POW!!!"
    }
)

// main var button function ------------

// create function to change button text
function changeButtonText(){
    if (document.body.classList.contains("dark")) {
        changeThemeButton.textContent = "Switch to Light"
    } else {
        changeThemeButton.textContent = "Switch to Dark"
    }
}

// click event on button
changeThemeButton.addEventListener("click", () => {
    // toggle dark class to body
    document.body.classList.toggle("dark");
    changeButtonText();
    }
)


// toggle image visibility

img1.addEventListener("click", () => {
    img2.classList.remove("hidden");
    img1.classList.add("hidden");
    }
)

img2.addEventListener("click", () => {
    img3.classList.remove("hidden");
    img2.classList.add("hidden");
    }
)

img3.addEventListener("click", () => {
    img1.classList.remove("hidden");
    img3.classList.add("hidden");
    }
)