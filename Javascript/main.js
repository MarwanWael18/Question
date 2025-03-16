const gradeBtn = document.querySelector(".grade-button");
const popupInfo = document.querySelector(".popup-info");
const closeBtn = document.getElementById("hide");


gradeBtn.onclick = () => {
    popupInfo.classList.add("active")
}

closeBtn.onclick = () => {
    popupInfo.classList.remove("active")
}

function ToggleMenu() {
    const menu = document.querySelector (".menu")
    const navbarn = document.querySelector (".navbarn")
    menu.classList.toggle ("active")
    navbarn.classList.toggle("active")
}



