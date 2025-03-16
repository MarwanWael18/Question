const books = document.querySelector(".books");
const subjects = document.querySelector(".subjects");
const home = document.getElementById("main");
const game = document.getElementById("game");
const homeTitle = document.querySelector(".home");
const cardgames = document.querySelector(".cardsgame")


home.onclick = ()=>{
    homeTitle.classList.add("active");
    subjects.classList.remove("active");
    cardgames.classList.remove("active")
    
}

books.onclick = () =>{
    subjects.classList.add("active");
    homeTitle.classList.remove("active");
    cardgames.classList.remove("active")

    
    
}
game.onclick = () =>{
    subjects.classList.remove("active");
    homeTitle.classList.remove("active");
    cardgames.classList.add("active")

    
    
}


