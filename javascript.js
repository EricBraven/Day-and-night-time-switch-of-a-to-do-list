let moon = document.querySelector(".moon");
let sun = document.querySelector(".sun");

let container =document.querySelector(".container");
let header = document.querySelector(".header");
let input = document.querySelector(".taskInput");
let semiContainer = document.querySelector(".semi-container");
let mark = document.getElementsByClassName("blue");
let footer = document.querySelector(".footer")
let mobile = document.querySelector(".mobiledown")

function changeLighting(){
    if(container.style.backgroundColor === "lightgray"){
        container.style.backgroundColor = "black";
        header.style.backgroundImage = "url(images/bg-desktop-dark.jpg)";
        container.style.color = "lightGray";
        input.style.backgroundColor = "hsl(235, 19%, 35%)";
        input.style.color = "lightgray";
        semiContainer.style.boxShadow = "4px 4px 10px 0 hsl(240, 6%, 7%)";
        sun.style.display = "block";
        moon.style.display = "none";
        semiContainer.style.backgroundColor = "hsl(235, 19%, 35%)";
        footer.style.backgroundColor = "black";
        mobile.style.backgroundColor = "hsl(235, 19%, 35%)";

    }else{
        container.style.backgroundColor = "lightgray",
        header.style.backgroundImage = "url(images/bg-desktop-light.jpg",
        container.style.color = "#000",
        sun.style.display = "none",
        moon.style.display = "block",
        input.style.backgroundColor = "white",
        semiContainer.style.boxShadow = "0 8px 9px 0 lightgray",
        semiContainer.style.backgroundColor = "white",
        container.style.borderRadius = "10px",
        footer.style.backgroundColor = "lightgray"
        mobile.style.backgroundColor = "white";
    }
}

moon.addEventListener("click", changeLighting);
sun.addEventListener("click", changeLighting);
