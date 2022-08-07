let menu = document.getElementById("menu")
let menuclose = document.getElementById("menu-close")
let nextbtn = document.getElementById("next")
let prevbtn = document.getElementById("prev")
let menulist = document.getElementById("menulist")
let main = document.querySelector("main")
let slide = document.querySelectorAll(".slide")
let container = document.querySelector(".container")
let currentslide = 0
menu.addEventListener("click", ()=>{
    menulist.classList.add("show")
})

menuclose.addEventListener("click", ()=>{
    menulist.classList.remove("show")
})

main.addEventListener("click", ()=>{
    menulist.classList.remove("show")
})

function getcurrentindex(current){
    slide.forEach(element => {
        element.classList.remove("active")
    });
    slide[current].classList.add("active")
}

function next(){
    if(currentslide >= slide.length - 1){
        currentslide = 0
    }else{
        currentslide++
    }
    getcurrentindex(currentslide)
}

function prev(){
    if(currentslide <= 0){
        currentslide = slide.length - 1
    }else{
        currentslide--
    }
    getcurrentindex(currentslide)
}

nextbtn.addEventListener("click", next)

prevbtn.addEventListener("click", prev)